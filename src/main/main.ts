import { app, BrowserWindow } from 'electron';
import { join } from 'path';

const isDev = process.env.NODE_ENV === 'development';
const PORT = process.env.PORT ? Number(process.env.PORT) : 5173;

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    });
    if(isDev) {
        win.loadURL(`http://localhost:${PORT}`);
        win.webContents.openDevTools();
    } else {
        win.loadFile(join(__dirname, '../renderer/index.html'));
    }
};

app.whenReady().then(() => {
    createWindow();
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
