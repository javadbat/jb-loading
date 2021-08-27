import HTML from './JBLoading.html';
import CSS from './JBLoading.scss';
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
        const html = `<style>${CSS}</style>` + '\n' + HTML;
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
