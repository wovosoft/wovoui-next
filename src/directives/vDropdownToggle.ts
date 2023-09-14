import {Directive, DirectiveBinding, FunctionDirective} from "vue";
import {Dropdown} from "bootstrap";

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding) {
        new Dropdown(el, {
            reference: el
        });
    },
    beforeUnmount(el: HTMLElement) {
        Dropdown.getInstance(el)?.dispose();
    },
} as Directive<HTMLElement, FunctionDirective>;