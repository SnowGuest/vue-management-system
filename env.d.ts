/// <reference types="vite/client" />
import 'vue-router'


declare module 'vue-router' {
    interface RouteMeta {
        // 白名单
        white?: boolean;
        // 该页面所需要哪些api权限
        apis?: string[];
        // 当前页的名字
        title?: string;
    }
}
interface ImportMetaEnv {
    // 请求根路径
    readonly VITE_REQUEST_BASE_URL: string;
    // 更多环境变量...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

// 为了确保这个文件被当作一个模块，添加至少一个 `export` 声明
export { }