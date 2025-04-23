import HTML from './jb-loading.html';
import CSS from './jb-loading.scss';
import {defineColors} from 'jb-core/theme';

class JBLoadingWebComponent extends HTMLElement {
  constructor() {
    super();
    this.initWebComponent();
  }
  connectedCallback() {
    // standard web component event that called when all of dom is bounded
    this.callOnLoadEvent();
    this.callOnInitEvent();

  }
  callOnLoadEvent() {
    const event = new CustomEvent('load', { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }
  callOnInitEvent() {
    const event = new CustomEvent('init', { bubbles: true, composed: true });
    this.dispatchEvent(event);
  }
  initWebComponent() {
    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    defineColors();
    const html = `<style>${CSS}</style>` + '\n' + HTML;
    const element = document.createElement('template');
    element.innerHTML = html;
    shadowRoot.appendChild(element.content.cloneNode(true));
  }
  //   static get observedAttributes() {
  //     return [];
  //   }
  //   attributeChangedCallback(name:string, oldValue:string, newValue:string) {
  //     // do something when an attribute has changed
  //     this.onAttributeChange(name, newValue);
  //   }
  //   onAttributeChange(name:string, value:string) {
  //     // switch (name) {

  //     // }

  //   }
}

const myElementNotExists = !customElements.get('jb-loading');
if (myElementNotExists) {
  window.customElements.define('jb-loading', JBLoadingWebComponent);
}
