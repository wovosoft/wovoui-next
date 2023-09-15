import {Directive, DirectiveBinding, FunctionDirective, VNode} from "vue";
import {createDropdown} from "@/composables/useDropdowns";

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode?: VNode, oldVnode?: VNode) {
        const trigger = document.querySelector('.dropdown-toggle');
        const menu = document.querySelector('.dropdown-menu') as HTMLElement;

        createDropdown(trigger, menu);

    },
    beforeUnmount(el: HTMLElement) {

    },
} as Directive<HTMLElement, FunctionDirective>;