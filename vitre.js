const ALERT_SELECTOR = '[role="alert"], [role="status"], [role="note"]';
const CONTENT_SELECTOR = '[data-v-content]';
const CLOSE_SELECTOR = '[data-v-close]';
const ENHANCED = 'vEnhanced';
const STYLE_ID = 'vitre-js-alert-styles';
const COMPONENTS = ['alerts'];

function ensureAlertStyles() {
  if (document.getElementById(STYLE_ID)) {
    return;
  }

  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = [
    ':where([role="alert"],[role="status"],[role="note"])[data-v-enhanced="true"]:has(>[data-v-close]){display:flex;align-items:center;gap:var(--vitre-space-3,0.75rem)}',
    ':where([role="alert"],[role="status"],[role="note"])[data-v-enhanced="true"]>[data-v-content]{flex:1 1 auto}',
    ':where([role="alert"],[role="status"],[role="note"])[data-v-enhanced="true"]>[data-v-close]{margin-inline-start:auto;flex:0 0 auto;inline-size:2rem;block-size:2rem;min-block-size:2rem;padding:0;color:currentColor}',
    ':where([role="alert"],[role="status"],[role="note"])[data-v-enhanced="true"]>[data-v-close] svg{inline-size:1.125rem;block-size:1.125rem;overflow:visible}'
  ].join('');
  document.head.append(style);
}

function parseSeconds(value) {
  if (value == null || value === '') {
    return null;
  }

  const seconds = Number(value);
  return Number.isFinite(seconds) && seconds > 0 ? seconds : null;
}

function getTimeout(element) {
  return parseSeconds(element.getAttribute('timeout'));
}

function isDismissible(element) {
  return element.hasAttribute('dismiss');
}

function dismiss(element) {
  element.dispatchEvent(new CustomEvent('vitre:dismiss', {
    bubbles: true,
    detail: { source: element }
  }));

  element.remove();
}

function ensureAlertContent(element) {
  const existing = element.querySelector(`:scope > ${CONTENT_SELECTOR}`);
  if (existing) {
    return existing;
  }

  const content = document.createElement('span');
  content.setAttribute('data-v-content', '');

  for (const child of [...element.childNodes]) {
    if (child.nodeType === Node.ELEMENT_NODE && child.matches(CLOSE_SELECTOR)) {
      continue;
    }

    content.append(child);
  }

  element.prepend(content);
  return content;
}

function ensureCloseButton(element) {
  ensureAlertContent(element);

  const existing = element.querySelector(`:scope > ${CLOSE_SELECTOR}`);
  if (existing) {
    return existing;
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('data-v-close', '');
  button.setAttribute('data-variant', 'ghost');
  button.setAttribute('aria-label', 'Dismiss');
  button.innerHTML = '<svg viewBox="0 0 384 512" fill="currentColor" color="currentColor" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" style="overflow: visible;"><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l137.3-137.4 137.4 137.3c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256l137.3-137.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"></path></svg>';
  element.append(button);
  return button;
}

function enhanceAlert(element) {
  if (element.dataset[ENHANCED] === 'true') {
    return element;
  }

  if (isDismissible(element)) {
    const close = ensureCloseButton(element);
    close.addEventListener('click', () => dismiss(element));
  }

  const seconds = getTimeout(element);
  if (seconds) {
    window.setTimeout(() => {
      if (element.isConnected) {
        dismiss(element);
      }
    }, seconds * 1000);
  }

  element.dataset[ENHANCED] = 'true';
  return element;
}

function applyAlerts(root = document) {
  const scope = root instanceof Element || root instanceof Document || root instanceof DocumentFragment
    ? root
    : document;

  const elements = [];

  if (scope instanceof Element && scope.matches(ALERT_SELECTOR)) {
    elements.push(scope);
  }

  elements.push(...scope.querySelectorAll(ALERT_SELECTOR));
  return elements.map(enhanceAlert);
}

export function apply(root = document, components = COMPONENTS) {
  const selected = Array.isArray(components) ? components : [components];
  const results = {};

  if (selected.includes('alerts')) {
    results.alerts = applyAlerts(root);
  }

  return results;
}

export const Vitre = {
  apply
};

if (typeof window !== 'undefined') {
  window.Vitre = Vitre;
  ensureAlertStyles();

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => apply());
  } else {
    apply();
  }
}
