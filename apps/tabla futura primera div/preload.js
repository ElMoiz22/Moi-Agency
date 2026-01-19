const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  guardarImagen: (dataUrl, defaultName) => ipcRenderer.send('guardar-imagen', { dataUrl, defaultName })
});
