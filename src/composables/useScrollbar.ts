import {reactive} from "vue";

// https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
const getWidth = () => Math.abs(window.innerWidth - document.documentElement.clientWidth);

const disableOverflow = () => {
    const element = document.body;
    element.style.overflow = 'hidden';
}

export default function () {
    const initialState = reactive({
        width: getWidth(),
        overflow: document.body.style.getPropertyValue('overflow')
    });


    return {};
}