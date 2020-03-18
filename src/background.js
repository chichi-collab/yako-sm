"use strict";

import { app, protocol, BrowserWindow, ipcMain, dialog } from "electron";
import {
  createProtocol
  // installVueDevtools
} from "vue-cli-plugin-electron-builder/lib";
const isDevelopment = process.env.NODE_ENV !== "production";

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

// modal screens
let teacherDetailsWin,
  editTeacherDetailsWin,
  editStudentDetailsWin,
  studentDetailsWin,
  expenseDetailsWin,
  editExpenseDetailsWin, feeDetailsWin,
  editFeeDetailsWin;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  {
    scheme: "app",
    privileges: {
      secure: true,
      standard: true
    }
  }
]);


function createScreen() {
  return new BrowserWindow({
    width: 700,
    height: 450,
    minWidth: 700,
    minHeight: 450,
    maxWidth: 700,
    maxHeight: 450,
    webPreferences: {
      nodeIntegration: true
    },
    parent: win,
    show: false,
    frame: false
  });
}

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1140,
    height: 680,
    minWidth: 1140,
    minHeight: 680,
    maxWidth: 1140,
    maxHeight: 680,
    fullscreen: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  teacherDetailsWin = createScreen();
  editTeacherDetailsWin = createScreen();

  editStudentDetailsWin = createScreen();
  studentDetailsWin = createScreen();

  editExpenseDetailsWin = createScreen();
  expenseDetailsWin = createScreen();

  feeDetailsWin = createScreen();
  editFeeDetailsWin = createScreen();

  // disable default menu for various screens
  win.setMenuBarVisibility(false);
  win.removeMenu();

  win.setResizable(false);

  teacherDetailsWin.setMenuBarVisibility(false);
  teacherDetailsWin.removeMenu();

  editTeacherDetailsWin.setMenuBarVisibility(false);
  editTeacherDetailsWin.removeMenu();

  editStudentDetailsWin.setMenuBarVisibility(false);
  editStudentDetailsWin.removeMenu();

  studentDetailsWin.setMenuBarVisibility(false);
  studentDetailsWin.removeMenu();

  editExpenseDetailsWin.setMenuBarVisibility(false);
  editExpenseDetailsWin.removeMenu();

  expenseDetailsWin.setMenuBarVisibility(false);
  expenseDetailsWin.removeMenu();

  feeDetailsWin.setMenuBarVisibility(false);
  feeDetailsWin.removeMenu();

  editFeeDetailsWin.setMenuBarVisibility(false);
  editFeeDetailsWin.removeMenu();

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL);

    // Load url of teachers details
    teacherDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/teachers/teacherDetails"
    );

    // load url of edit teachers details
    editTeacherDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/teachers/editTeacherDetails"
    );

    // Load url of student details
    studentDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/students/studentDetails"
    );

    // load url of edit student details
    editStudentDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/students/editStudentDetails"
    );

    // Load url of expense details
    expenseDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/expenses/expenseDetails"
    );

    // load url of edit expense details
    editExpenseDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/expenses/editExpenseDetails"
    );

    // Load url of fee details
    expenseDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/feesCollection/feeDetails"
    );

    // load url of edit fee details
    editExpenseDetailsWin.loadURL(
      process.env.WEBPACK_DEV_SERVER_URL + "/#/feesCollection/editFeeDetails"
    );

    // Open the DevTools.
    if (!process.env.IS_TEST) win.webContents.openDevTools();
  } else {
    createProtocol("app");
    // Load the index.html when not in development
    win.loadURL("app://./index.html");
  }

  win.on("closed", () => {
    win = null;
  });

  teacherDetailsWin.on("close", e => {
    e.preventDefault();
    teacherDetailsWin.hide();
  });

  editTeacherDetailsWin.on("close", e => {
    e.preventDefault();
    editTeacherDetailsWin.hide();
  });

  studentDetailsWin.on("close", e => {
    e.preventDefault();
    studentDetailsWin.hide();
  });

  editStudentDetailsWin.on("close", e => {
    e.preventDefault();
    editStudentDetailsWin.hide();
  });

  // hides expense details and edit expense details window when it's close
  expenseDetailsWin.on("close", e => {
    e.preventDefault();
    expenseDetailsWin.hide();
  });

  editExpenseDetailsWin.on("close", e => {
    e.preventDefault();
    editExpenseDetailsWin.hide();
  });

  // hides fee details and edit fee details window when it's close
  feeDetailsWin.on("close", e => {
    e.preventDefault();
    expenseDetailsWin.hide();
  });

  editFeeDetailsWin.on("close", e => {
    e.preventDefault();
    editExpenseDetailsWin.hide();
  });
}

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    // Devtools extensions are broken in Electron 6.0.0 and greater
    // See https://github.com/nklayman/vue-cli-plugin-electron-builder/issues/378 for more info
    // Electron will not launch with Devtools extensions installed on Windows 10 with dark mode
    // If you are not using Windows 10 dark mode, you may uncomment these lines
    // In addition, if the linked issue is closed, you can upgrade electron and uncomment these lines
    // try {
    //   await installVueDevtools()
    // } catch (e) {
    //   console.error('Vue Devtools failed to install:', e.toString())
    // }
  }
  createWindow();
});

ipcMain.on("toggle-teacher-details", (event, arg) => {
  teacherDetailsWin.show();
  teacherDetailsWin.webContents.send("teacher-id", arg);
});

ipcMain.on("toggle-edit-teacher-details", (event, arg) => {
  editTeacherDetailsWin.show();
  editTeacherDetailsWin.webContents.send("teacher-id", arg);
});

ipcMain.on("student-details-screen", (event, arg) => {
  studentDetailsWin.show();
  studentDetailsWin.webContents.send("student-id", arg);
});

ipcMain.on("edit-student-details-screen", (event, arg) => {
  editStudentDetailsWin.show();
  editStudentDetailsWin.webContents.send("student-id", arg);
});

// listens on expense-details-screen and sends the expense-id as arg
// to the expense details window or screen
ipcMain.on("expense-details-screen", (event, arg) => {
  expenseDetailsWin.show();
  expenseDetailsWin.webContents.send("expense-id", arg);
});

// listens on edit-expense-details-screen and sends the expense-id as arg
// to the edit expense details window or screen
ipcMain.on("edit-expense-details-screen", (event, arg) => {
  editExpenseDetailsWin.show();
  editExpenseDetailsWin.webContents.send("expense-id", arg);
});

// listens on fee-details-screen and sends the fee-id as arg
// to the fee details window or screen
ipcMain.on("fee-details-screen", (event, arg) => {
  expenseDetailsWin.show();
  expenseDetailsWin.webContents.send("fee-id", arg);
});

// listens on edit-fee-details-screen and sends the fee-id as arg
// to the edit fee details window or screen
ipcMain.on("edit-fee-details-screen", (event, arg) => {
  editExpenseDetailsWin.show();
  editExpenseDetailsWin.webContents.send("fee-id", arg);
});

// opens a dialog whenever a teacher is added to the database successfully
ipcMain.on("open-teacher-information-dialog", event => {
  const options = {
    type: "info",
    title: "Teacher Information",
    message: "Teacher added successfully",
    buttons: ["OK"]
  };

  dialog.showMessageBox(options, index => {
    event.sender.send("teacher-information-dialog-selection", index);
  });
});

// opens an error dialog when an error occurs when teacher is added
ipcMain.on("open-teacher-error-dialog", () => {
  dialog.showErrorBox(
    "Teacher Error",
    "An error occurred while adding teacher"
  );
});

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
