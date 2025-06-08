export function renderHTML(): string {
  return /* html */ `
  <div class="jb-loading-web-component">
    <div class="spin">
        <svg viewbox="0 0 100 100" class="spin-loading">
            <circle cx="50" cy="50" r="40"></circle>
        </svg>
    </div>
  </div>
  `;
}