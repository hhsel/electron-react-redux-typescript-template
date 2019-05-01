import { app, BrowserWindow } from 'electron'
import loadDevtool from 'electron-load-devtool'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {nodeIntegration: true},
    })
    win.loadFile('build/index.html')

    loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS)
    loadDevtool(loadDevtool.REDUX_DEVTOOLS)
    win.webContents.openDevTools({mode: 'detach'})
}

app.on('ready', createWindow)
