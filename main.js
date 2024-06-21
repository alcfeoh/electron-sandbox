const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 800
    })
    // index.html must have a proper <base href="./">
    win.loadFile('dist/index.html');
    // Open the DevTools.
    //win.webContents.openDevTools();
}

app.whenReady().then(() => {
    createWindow()
})
