const ALERT_SELECTOR = '[role="alert"], [role="status"], [role="note"], vitre-alert';
const ENHANCED = 'vEnhanced';
const TONES = new Set(['alert', 'status', 'note']);

function parseSeconds(value) {
  if (value == null || value === '') {
    return null;
  }

  const seconds = Number(value);
  return Number.isFinite(seconds) && seconds > 0 ? seconds : null;
}

function getTone(element) {
  const tone = element.localName === 'vitre-alert'
    ? element.getAttribute('tone') || 'alert'
    : element.getAttribute('role') || 'alert';

  return TONES.has(tone) ? tone : 'alert';
}

function getTimeout(element) {
  return parseSeconds(element.getAttribute('data-v-timeout') || element.getAttribute('timeout'));
}

function isDismissible(element) {
  return (
    element.hasAttribute('data-v-dismiss') ||
    element.hasAttribute('dismiss') ||
    element.hasAttribute('dismissible')
  );
}

function dismiss(element) {
  element.dispatchEvent(new CustomEvent('vitre:dismiss', {
    bubbles: true,
    detail: { source: element }
  }));

  element.remove();
}

function ensureCloseButton(element) {
  const existing = element.querySelector('[data-v-close]');
  if (existing) {
    return existing;
  }

  const button = document.createElement('button');
  button.type = 'button';
  button.setAttribute('data-v-close', '');
  button.setAttribute('aria-label', 'Dismiss');
  button.textContent = '\u00d7';
  element.append(button);
  return button;
}

function enhanceAlert(element) {
  if (element.dataset[ENHANCED] === 'true') {
    return element;
  }

  element.setAttribute('role', getTone(element));

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

export function alerts(root = document) {
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

export function enhance(root = document) {
  return {
    alerts: alerts(root)
  };
}

export const Vitre = {
  enhance,
  alerts
};

if (typeof window !== 'undefined') {
  window.Vitre = Vitre;

  if ('customElements' in window && !customElements.get('vitre-alert')) {
    customElements.define('vitre-alert', class VitreAlert extends HTMLElement {
      connectedCallback() {
        enhanceAlert(this);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => enhance());
  } else {
    enhance();
  }
}
