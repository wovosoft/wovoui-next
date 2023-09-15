<script lang="ts">
import {defineComponent, getCurrentInstance} from "vue";

export default defineComponent({
    setup(props, {slots}) {
        return () => slots?.default?.()
    }
});
</script>
