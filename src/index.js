const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');

let win;

const createWindow = () => {
    win = new BrowserWindow({
        width: 1200,
        height: 700,
        frame: false,
        icon: path.join(__dirname, 'icon.png'),
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: false
        },
        resizable: false
    });

    win.loadFile('src/index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

ipcMain.on('quit-app', () => {
    app.quit();
});

ipcMain.on('minimize-window', () => {
    const focusedWindow = BrowserWindow.getFocusedWindow();
    if (focusedWindow) {
        focusedWindow.minimize();
    }
});

ipcMain.on('load-new-page', (event, page) => {
    if (win) {
        win.loadFile(page);
    }
});

const { app, netLog } = require('electron')

app.whenReady().then(async () => {
  await netLog.startLogging('/path/to/net-log')
  
  const path = await netLog.stopLogging()
  console.log('Net-logs written to', path)
})