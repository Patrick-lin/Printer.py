import sys
from PyQt5.QtCore import QUrl, Qt
from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView


class FullScreenOnMaximizeWindow(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("深机检外国人入境卡打印")
        self.setGeometry(0, 0, 1920, 1080)

        # 创建WebEngine视图
        self.web_view = QWebEngineView()
        self.web_view.load(QUrl("http://localhost:5000"))
        self.setCentralWidget(self.web_view)
        self.is_full_screen = False

    def changeEvent(self, event):
        if event.type() == event.WindowStateChange:
            if self.windowState() & Qt.WindowMaximized and not self.is_full_screen:
                self.showFullScreen()
                self.is_full_screen = True
            elif not (self.windowState() & Qt.WindowMaximized) and self.is_full_screen:
                self.showNormal()
                self.is_full_screen = False

        super().changeEvent(event)


def run_gui():
    app = QApplication(sys.argv)

    window = FullScreenOnMaximizeWindow()

    # 显示普通窗口
    window.show()

    sys.exit(app.exec_())


if __name__ == '__main__':
    run_gui()
