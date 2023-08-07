var HTML = "<div class=\"jb-loading-web-component\">\r\n    <div class=\"spin\">\r\n        <svg viewbox=\"0 0 100 100\" class=\"spin-loading\">\r\n            <circle cx=\"50\" cy=\"50\" r=\"40\"></circle>\r\n        </svg>\r\n    </div>\r\n    \r\n</div>";

var css_248z = ":host {\n  width: var(--jb-loading-width, 100%);\n  height: var(--jb-loading-height, 100%); }\n\n.jb-loading-web-component .spin .spin-loading {\n  width: 100%;\n  height: 100%;\n  fill: transparent; }\n  .jb-loading-web-component .spin .spin-loading circle {\n    stroke: var(--jb-loading-color, #000);\n    stroke-width: 8px;\n    stroke-linecap: round;\n    stroke-dasharray: 1px 50px;\n    animation: loading 1s infinite ease-in-out;\n    transform-box: center;\n    transform-origin: center; }\n\n@keyframes loading {\n  0% {\n    stroke-dasharray: 1px 50px;\n    transform: rotate(0deg); }\n  50% {\n    stroke-dasharray: 50px 1px;\n    transform: rotate(180deg); }\n  100% {\n    stroke-dasharray: 1px 50px;\n    transform: rotate(359deg); } }\n";

class JBLoadingWebComponent extends HTMLElement {
    constructor() {
        super();
        this.initWebComponent();
    }
    connectedCallback() {
        // standard web component event that called when all of dom is binded
        this.callOnLoadEvent();
        this.initProp();
        this.callOnInitEvent();
        
    }
    callOnLoadEvent() {
        var event = new CustomEvent('load', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    callOnInitEvent() {
        var event = new CustomEvent('init', { bubbles: true, composed: true });
        this.dispatchEvent(event);
    }
    initWebComponent() {
        const shadowRoot = this.attachShadow({
            mode: 'open'
        });
        const html = `<style>${css_248z}</style>` + '\n' + HTML;
        const element = document.createElement('template');
        element.innerHTML = html;
        shadowRoot.appendChild(element.content.cloneNode(true));
        this.registerEventListener();
    }
    registerEventListener() {

    }
    initProp() {
    }
    static get observedAttributes() {
        return ['type'];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        // do something when an attribute has changed
        this.onAttributeChange(name, newValue);
    }
    onAttributeChange(name, value) {
        switch (name) {

            case 'type':
                this.inputElement.setAttribute('type', value);
                if (value == "password") {
                    this.initPassword();
                }
                break;
        }

    }
}
const myElementNotExists = !customElements.get('jb-loading');
if(myElementNotExists){
    window.customElements.define('jb-loading', JBLoadingWebComponent);
}
//# sourceMappingURL=JBLoading.js.map
