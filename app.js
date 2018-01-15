const electron = require('electron');

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const url = require('url');

let appWindow;

function createWindow() {
	appWindow = new BrowserWindow({width: 700, height: 500, backgroundColor: '#ffffff', resizable: false, fullscreenable: false});

	appWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file:',
		slashes: true
	}));

	appWindow.on('closed', function () {
		appWindow = null;
	});
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
	app.quit();
});