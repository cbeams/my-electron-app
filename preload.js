const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    node: () => process.versions.node,
    chrome: () => process.versions.chrome,
    electron: () => process.versions.electron,
    count: () => getCount(),
    ping: () => ipcRenderer.invoke('ping')
    // we can also expose variables, not just functions
})

count = 0;

function getCount() {
    return count++
}

console.log('preload.js loaded yo ' + count)