import {DirectiveBinding, VNode} from "vue";

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding<() => Record<string, unknown>>, vnode: VNode) {
        console.log(vnode)
    },
    beforeUnmount(el) {

    }
};