import * as icons from "@element-plus/icons-vue"
export function name2IconComp(name: string) {
    let Comp = null;
    if (name in icons) {
        Comp = icons[name as keyof typeof icons]
    }
    return Comp
}