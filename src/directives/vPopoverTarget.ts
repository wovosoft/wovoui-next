import {DirectiveBinding, VNode} from "vue";

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding, vnode: VNode) {
        console.log(binding)
    }

};