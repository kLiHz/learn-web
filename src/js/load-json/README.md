# JavaScript 加载 JSON

假设有下面这样的 JSON 文件：

[fruits/fruits.json](./fruits/fruits.json)

```json
{{#include ./fruits/fruits.json}}
```

在 HTML 页面上有一按钮，点击后即可加载数据到 HTML 页面上的表格。

HTML 页面如下：

[fruits/index.html](./fruits/index.html) （最终效果）

```html
{{#include ./fruits/index.html}}
```

JavaScrpt: 

[fruits/load-fruits.js](./fruits/load-fruits.js) 

```javascript
{{#include ./fruits/load-fruits.js}}
```

CSS:

[fruits/stylesheet.css](./fruits/stylesheet.css)

```css
{{#include ./fruits/stylesheet.css}}
```

---

下面是一个内容更复杂的 JSON 文件：[pets/pets.json](./pets/pets.json)

以及对应的 JavaScript：[pets/load-pets.js](./pets/load-pets.js)

最终结果：[pets/index.html](./pets/index.html)

