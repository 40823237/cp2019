var tipuesearch = {"pages": [{'title': '計算機程式', 'text': '計算機課程網頁: http://mde.tw/cp2019 \n Dartpad: https://dartpad.dev?id=68e451e4dcf5606a168856fdeca353d7 \xa0 \n 我的倉儲: https://gist.github.com/40823237 \n \n \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Hello   For Loop   Sum   Runge-Kutta   RK ex1   Mass Spring Damping   Function   Function Parameter   Fat Arrow   Temp 1 \n Html 程式 \n ROC Flag   Grid   X-Y Plot   Slithery \n Flutter 程式 \n Flutter0   Flutter1   Flutter2   Flutter3   Flutter4   Flutter Counter   ROC Flag   踩地雷 1   踩地雷 2   踩地雷 3   踩地雷 4   Dropdown   Multiselect   Search   Login   溫度轉換 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n', 'tags': '', 'url': '計算機程式.html'}, {'title': '筆記', 'text': '', 'tags': '', 'url': '筆記.html'}, {'title': '期末考', 'text': '\n \n \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n 重量 \n Html 程式 \n 重量轉換   各國國旗 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n 請輸入所要轉換的重量以數字加上 KG 或 LB:     轉換結果: \n \n \n \n \n Clear Canvas   Draw ROC   Draw JPN   Draw FRA   Draw RUS   Draw USA   Draw UK   Draw DEU   Draw NLD \n \n \n', 'tags': '', 'url': '期末考.html'}, {'title': '查驗考試', 'text': 'W16 查驗考試-報告影片 \n', 'tags': '', 'url': '查驗考試.html'}, {'title': '溫度轉換', 'text': '攝氏celsius = 5/9 ( 華氏fahrenheit − 32) \n \n  取 Dart 程式的按鈕  \n 純 Dart 程式 \n Temp 1 \n Html 程式 \n Temp 2   Python \n Flutter 程式 \n 溫度轉換 \n  內建放入的 Dart 原始碼  \n 放大   回復 \n \n 原始碼: \n import flask\n# 導入 flask_cors 模組中的 CORS\n# 目的在讓伺服器可以被遠端的 Dart 程式跨網域擷取資料\nfrom flask_cors import CORS\n \napp = flask.Flask(__name__)\n# 讓應用程式啟動後, 可以跨網域被截取資料\nCORS(app, support_credentials=False)\nglobal data\n \n@app.route(\'/\', methods =[\'POST\', \'GET\'])\ndef root():\n    if flask.request.method == \'POST\': \n        data = flask.request.form[\'data\'] \n        print(data)\n        resp = {"data": data}\n        output = flask.json.dumps(data)\n    else:\n        # 將 Python 中的 dictionary 資料透過 json 格式送出後\n        # 讓遠端的 Dart 程式可以擷取\n        data = {"a": 1, "b": data+"yen", "c": "字串"}\n        output = flask.json.dumps(data)\n    return output\n     \n@app.route(\'/<name>\', methods=[\'POST\', \'GET\'])\ndef convert(name):\n    #name[-1] 為字串最後一個字元\n    # name[:-1] 則為數字\n    if name[-1] is "F" or name[-1] is "f":\n        # 表示要將華氏溫度轉為攝氏\n        return FtoC(name[:-1])\n    else:\n        return CtoF(name[:-1])\n     \n#celsius = 5/9 ( fahrenheit − 32)\n#定義一個 celsius 轉 fahrenheit  函式\ndef CtoF(c):\n    return "攝氏" + c + "度=華氏" + str(round(int(c)*9/5 + 32, 2)) + "度"\n \n#定義一個 celsius 轉 fahrenheit  函式\ndef FtoC(f):\n    return "華氏" + f + "度=攝氏" + str(round((int(f) - 32)*5/9, 2)) + "度"\n \n \nif __name__ == \'__main__\':\n    # 內建的 Flask Web 啟動埠號為 5000\n    app.run() \n', 'tags': '', 'url': '溫度轉換.html'}, {'title': 'Hello', 'text': '原始碼: \n void main() {\n   print("哈囉!");\n} \n dartpad: \n \n', 'tags': '', 'url': 'Hello.html'}, {'title': 'sum', 'text': '原始碼: \n int i;\nint sum;\n\nmain(){\n  sum = 0;\n  for(i=1;i <= 10 ;i++){\n    sum += i;\n    print("$sum");\n  }\n  print(\'sum = $sum\');\n}\n \n dartpad:', 'tags': '', 'url': 'sum.html'}, {'title': 'for loop', 'text': '原始碼: \n // 在所有函式定義外圍所宣告的變數, 稱為全域變數, 有效範圍包含各函式內部與外部\n// for 迴圈所使用的索引值, 宣告為整數 (integer)\nint i;\n// 累加起始值 start 宣告為整數, 且設為 1\nint start = 1;\n// 累加終止值 end 宣告為整數, 且設為 10\nint end = 10;\n// 累加總數值 sum 宣告為整數\nint sum;\n\n// 定義 main() 主函式內容, 目的在利用 for 迴圈進行整數的累加\nmain(){\n  // 將前面已經宣告為全域整數的變數 sum 設為 0, 表示從 0 開始進行累加\n  sum = 0;\n  // 執行 for 迴圈內的整數累加設計, 使用前面已經宣告為全域整數的 i 作為索引變數\n  // 分別從 start 開始累加至 end, 且每次迴圈的索引值增加 1\n  for(i=start;i <= end ;i++){\n    // 當索引變數 i 所對應的值小於或等於 end 時, 對 sum 變數加上 i\n    sum += i;\n    // 可以在 for 迴圈每一個階段運算時, 列出當時的 sum 對應值, 查驗是否正確\n    //print("$sum");\n  }\n  // for 迴圈累加完成後, 列出最後訊息\n  print(\'從 $start 累加至 $end 的總數值為 $sum\');\n} \n dartpad: \n', 'tags': '', 'url': 'for loop.html'}, {'title': 'Mass-Spring-Damping', 'text': '原始碼: \n // 下列 Dart 程式, 利用 Runge Kutta 迭代運算法, 解常微分方程式\n// 設 t 為時間, x 則設為物體的位移\n// 假設要解 F=ma 的單一質量加上彈簧 (常數為 k) 與黏滯阻尼 (常數為 b)\n// f 為沿位移方向的施力\n// dx/dt = v, dv/dt = (f-kx-bv)/m\n// dx / dt = (t - x)/2, 起始值 t0=0, x0=1, 求 t=2 時的 x 值\n//\n// 已知起始值 t0 與 x0 後, 可以利用下列 rungeKutta 函式, 以\n// h 為每步階增量值, 求 dxdt 常微分方程式任一 t 的對應值 x\n// 定義函式 rungeKutta, 共有四個輸入變數\n// 物體質量\nconst num m = 1;\n// 對質量的施力 f\nconst num f = 0.0;\n// 彈簧係數\nconst num k = 1;\n// 阻尼係數\nconst num b = 1;\n\n// 呼叫運算時, 需要起始時間, 終點時間, 位移起始值與速度起始值, 增量 h\nrungeKutta(t0, x0, v0, t, h) {\n  // 利用步階增量值 h 與 t 的起始及終點值\n  // 計算需要迭代的次數 n\n  int n = ((t - t0) / h).toInt();\n  // 宣告 x 為雙浮點數, 且設為起始值 x0\n  double x = x0;\n  // 宣告 v 為雙浮點數, 且設為起始值 v0\n  double v = v0;\n\n  // 模擬運算前, 列出起始條件\n  // 只列到小數點第三位, 時間、位移與速度以 \\t  隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n\n  // 利用已知的 t0, x0, t 終點值與步階增量值 h, 迭代求 x 對應值\n  // 索引值 i 將每次增量 1, 從 i=1 執行 for 環圈至 i=n\n  for (int i = 1; i <= n; i++) {\n    // 將此階段的 t 與 x 值代入 dxdt 與 dvdt 函式求下列四個浮點變數值\n    // 因為必須兩個函式耦合, 必須同時計算\n    double xk1 = h * dxdt(t0, x, v);\n    double vk1 = h * dvdt(t0, x, v);\n    double xk2 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double vk2 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk1, v + 0.5 * vk1);\n    double xk3 = h * dxdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double vk3 = h * dvdt(t0 + 0.5 * h, x + 0.5 * xk2, v + 0.5 * vk2);\n    double xk4 = h * dxdt(t0 + h, x + xk3, v + vk3);\n    double vk4 = h * dvdt(t0 + h, x + xk3, v + vk3);\n    // 利用上述四個變數值求此步階增量後的對應 x 值\n    x = x + (1.0 / 6.0) * (xk1 + 2 * xk2 + 2 * xk3 + xk4);\n    v = v + (1.0 / 6.0) * (vk1 + 2 * vk2 + 2 * vk3 + vk4);\n    // 每次 for 迴圈執行最後, 準備計算下一個步階增量後的 x 對應值\n    // t 起始值配合步階增量值 h, 進行增量\n    t0 = t0 + h;\n    // 列出各模擬運算時間點所得到的結果\n    // 只列到小數點第三位, 時間、位移與速度以 \\t  隔開, \\t 代表插入 tab 符號, 可將資料複製到 Excel 進行繪圖\n  print("${t0.toStringAsFixed(3)} \\t ${x.toStringAsFixed(3)} \\t ${v.toStringAsFixed(3)}");\n  }\n\n  // 完成 for 迴圈迭代後, 傳回與 t 終點值對應的 x 值\n  return [x, v];\n}\n\n// 將微分方程式 "dx / dt = v" 定義為 dxdt 函式\ndxdt(t, x, v) {\n  return v;\n}\n\n// dx/dt = v, dv/dt = (f-kx-bv)/m\ndvdt(t, x, v) {\n  return (f - k * x - b * v) / m;\n}\n\n// 定義 main() 主函式內容, 目的在利用 rungeKutta 函式\n// 解常微分方程式\nmain() {\n// Driver method\n// num 資料型別可以是整數或雙浮點數\n  num t0 = 0;\n  num x0 = 1;\n  num v0 = 0;\n  num t = 5;\n  double h = 0.1;\n  rungeKutta(t0, x0, v0, t, h);\n} \n dartpad: \n \n 曲線圖: \n \n \n', 'tags': '', 'url': 'Mass-Spring-Damping.html'}]};