import {DirectiveBinding, VNode} from "vue";

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding<() => any>, vnode: VNode) {
        const clickOutsideHandler = (e) => {
            if (!el.contains(e.target) && !el.isSameNode(e.target)) {
                binding.value();
            }
        };

        el['_outside_click_handler'] = clickOutsideHandler;
        document.addEventListener('click', clickOutsideHandler);
    },
    beforeUnmount(el) {
        document.removeEventListener('click', el['_outside_click_handler']);
    }
};