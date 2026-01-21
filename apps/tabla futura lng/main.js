const { app, BrowserWindow, ipcMain, dialog, Menu } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    title: "TH TABLE APP / Liga Nacional",
    width: 1920,
    height: 1080,
    show: false, // No la mostramos hasta que esté lista
    
    // --- ICONO .ICO ---
    // Asegúrate de que logo.ico esté en la carpeta raíz o en assets
    icon: path.join(__dirname, 'logo.ico'), 

    // --- COLOR DE FONDO ---
    // Ponemos un color oscuro o el color predominante de tu portada 
    // para evitar el "flash" blanco antes de que cargue el PNG
    backgroundColor: '#000000', 

    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Ocultar la barra de menús completamente
  Menu.setApplicationMenu(null);

  mainWindow.maximize();

  // --- GESTIÓN DE LA PORTADA ---
  // Esta función espera a que la estructura visual esté lista para mostrar la ventana
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
    mainWindow.focus();
  });

  mainWindow.loadFile('index.html');
}

app.whenReady().then(createWindow);

// Lógica de guardado de imagen (sin cambios)
ipcMain.on('guardar-imagen', async (event, { dataUrl, defaultName }) => {
  const ventana = BrowserWindow.getFocusedWindow();
  const { filePath } = await dialog.showSaveDialog(ventana, {
    title: 'Guardar tabla como PNG',
    defaultPath: defaultName || 'tabla.png',
    filters: [{ name: 'PNG', extensions: ['png'] }]
  });

  if (filePath) {
    const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    fs.writeFile(filePath, buffer, (err) => {
      if (err) console.error(err);
    });
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});