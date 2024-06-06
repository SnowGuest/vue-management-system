import { createAlova } from 'alova';
import GlobalFetch from 'alova/GlobalFetch';

const alovaInstance = createAlova({
    requestAdapter: GlobalFetch(),
    baseURL: import.meta.env.VITE_REQUEST_BASE_URL
});


export default alovaInstance
// export default function request() {
// alovaInstance.Get
// }