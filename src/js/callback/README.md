# 回调函数

文本框同步：

[sync-textbox.html](./sync-textbox.html)

```html
{{#include sync-textbox.html}}
```

可以看到，`id` 为 `input` 的输入框会在 `oninput` 时调用 `syncTextBox` 函数，如此可实现二者的同步。
