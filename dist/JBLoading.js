var HTML = "<div class=\"jb-loading-web-component\">\r\n    <div class=\"spin\">\r\n        <svg viewbox=\"0 0 100 100\" class=\"spin-loading\">\r\n            <circle cx=\"50\" cy=\"50\" r=\"40\"></circle>\r\n        </svg>\r\n    </div>\r\n    \r\n</div>";

var css_248z = ":host {\n  width: 100%;\n  height: 100%; }\n\n.jb-loading-web-component .spin .spin-loading {\n  width: 100%;\n  height: 100%;\n  fill: transparent; }\n  .jb-loading-web-component .spin .spin-loading circle {\n    stroke: var(--jb-loading-color, #000);\n    stroke-width: 8px;\n    stroke-linecap: round;\n    stroke-dasharray: 1px 50px;\n    animation: loading 1s infinite ease-in-out;\n    transform-box: center;\n    transform-origin: center; }\n\n@keyframes loading {\n  0% {\n    stroke-dasharray: 1px 50px;\n    transform: rotate(0deg); }\n  50% {\n    stroke-dasharray: 50px 1px;\n    transform: rotate(180deg); }\n  100% {\n    stroke-dasharray: 1px 50px;\n    transform: rotate(359deg); } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkpCTG9hZGluZy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBRTs7QUFFaEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQixFQUFFO0VBQ25CO0lBQ0UscUNBQXFDO0lBQ3JDLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLDBDQUEwQztJQUMxQyxxQkFBcUI7SUFDckIsd0JBQXdCLEVBQUU7O0FBRTlCO0VBQ0U7SUFDRSwwQkFBMEI7SUFDMUIsdUJBQXVCLEVBQUU7RUFDM0I7SUFDRSwwQkFBMEI7SUFDMUIseUJBQXlCLEVBQUU7RUFDN0I7SUFDRSwwQkFBMEI7SUFDMUIseUJBQXlCLEVBQUUsRUFBRSIsImZpbGUiOiJKQkxvYWRpbmcuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4uamItbG9hZGluZy13ZWItY29tcG9uZW50IC5zcGluIC5zcGluLWxvYWRpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmaWxsOiB0cmFuc3BhcmVudDsgfVxuICAuamItbG9hZGluZy13ZWItY29tcG9uZW50IC5zcGluIC5zcGluLWxvYWRpbmcgY2lyY2xlIHtcbiAgICBzdHJva2U6IHZhcigtLWpiLWxvYWRpbmctY29sb3IsICMwMDApO1xuICAgIHN0cm9rZS13aWR0aDogOHB4O1xuICAgIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgICBzdHJva2UtZGFzaGFycmF5OiAxcHggNTBweDtcbiAgICBhbmltYXRpb246IGxvYWRpbmcgMXMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNmb3JtLWJveDogY2VudGVyO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjsgfVxuXG5Aa2V5ZnJhbWVzIGxvYWRpbmcge1xuICAwJSB7XG4gICAgc3Ryb2tlLWRhc2hhcnJheTogMXB4IDUwcHg7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgNTAlIHtcbiAgICBzdHJva2UtZGFzaGFycmF5OiA1MHB4IDFweDtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XG4gIDEwMCUge1xuICAgIHN0cm9rZS1kYXNoYXJyYXk6IDFweCA1MHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM1OWRlZyk7IH0gfVxuIl19 */";

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
