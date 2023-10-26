from flask import Flask, send_file
import os

app = Flask(__name__)


# 主頁
@app.route("/")
def index():
    # 返回一個HTML頁面，這裡可以放你的網頁內容
    return send_file("./hw01/src-medium/index.html")


# 啟動伺服器
if __name__ == "__main__":
    app.run(debug=True)
