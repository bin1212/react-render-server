import {createBrowserHistory, createMemoryHistory} from "history";

const isBrowser = typeof window !== 'undefined';
// 创建一个history
let history = isBrowser?createBrowserHistory({basename: ''}):createMemoryHistory({
  initialEntries: ['/'],
})

// 导出
export default history;
export function goto(name){
    history.push(name)
}