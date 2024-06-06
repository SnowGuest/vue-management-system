import * as icons from "@element-plus/icons-vue"
import { ref } from "vue";
export function name2IconComp(name: string) {
    let Comp = null;
    if (name in icons) {
        Comp = icons[name as keyof typeof icons]
    }
    return Comp
}
export function preloadAppConf(redirectPath: string) {
    const showView = ref(false);
    
    showView.value = true
    return {
        showView
    }
}