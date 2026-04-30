const { app, BrowserWindow, Menu, nativeImage } = require("electron");
const path = require("path");
const iconPath = path.resolve(__dirname, "assets", "icon.png");

app.setName("Flux Calendar");
app.setAppUserModelId("com.vpire.calendar");
app.setDesktopName("flux-calendar.desktop");

function createWindow() {
  const win = new BrowserWindow({
    title: "Flux Calendar",
    width: 1500,
    height: 900,
    icon: iconPath
  });
  Menu.setApplicationMenu(null)
  win.loadURL("http://localhost:5173/dashboard"); // Vite dev server
}

app.whenReady().then(createWindow);