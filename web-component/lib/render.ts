import { i18n } from "jb-core/i18n";
import { dictionary } from "./i18n";

export function renderHTML(): string {
  return /* html */ `
  <div class="jb-loading-web-component" role="status" aria-live="polite" aria-atomic="true" aria-label="${dictionary.get(i18n, "loading")}">
    <div class="spin" aria-hidden="true" part="loading-wrapper">
        <svg viewBox="0 0 100 100" class="spin-loading" aria-hidden="true" part="loading-svg">
            <circle cx="50" cy="50" r="40" part="loading-circle"></circle>
        </svg>
    </div>
  </div>
  `;
}
