# 为 HTML 应用样式

使用 CSS 可以对 HTML 文档中的元素或者指定 `id` 属性的元素进行选择，并为他们应用样式。

CSS 是“层叠样式表”的英文缩写。

可以以内嵌（internal）方式为 HTML 加入 CSS 文件。

[styling-example-1.html](./styling-example-1.html)

```html
{{#include styling-example-1.html}}
```

亦可以外部链接的方式链接 CSS 文件。

[styling-example-2.html](./styling-example-2.html)

```html
{{#include styling-example-2.html}}
```

[css-example.css](css-example.css)

```css
{{#include css-example.css}}
```

也可以使用行间（inline）方式，为单个元素添加样式：

```html
<p style="color:blue;text-align:center;">This is a paragraph.</p>
```

如果存在多个样式表文件，则优先使用行间/内联的样式，之后使用声明在 `<head>` 区的（在后面引入/定义会覆盖之前的相同设定）。
