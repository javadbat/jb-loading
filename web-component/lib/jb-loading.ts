import { defineWebComponent, JBBaseComponent } from "jb-core";
import CSS from './jb-loading.css';
import VariablesCSS from './variables.css';
import {registerDefaultVariables} from 'jb-core/theme';
import { renderHTML } from './render';

export class JBLoadingWebComponent extends JBBaseComponent {
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
    const event = new CustomEvent('load', { bubbles: true, composed: false });
    this.dispatchEvent(event);
  }
  callOnInitEvent() {
    const event = new CustomEvent('init', { bubbles: true, composed: false });
    this.dispatchEvent(event);
  }
  initWebComponent() {
    const shadowRoot = this.attachShadow({
      mode: 'open',
      clonable:true,
      serializable:true,
    });
    registerDefaultVariables();
    const html = `<style>${CSS} ${VariablesCSS}</style>\n${renderHTML()}`;
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

defineWebComponent('jb-loading', JBLoadingWebComponent);

declare global {
  interface HTMLElementTagNameMap {
    "jb-loading": JBLoadingWebComponent;
  }
}
