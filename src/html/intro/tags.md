# HTML 标签

我们可以使用 HTML 标签（以及他们之间的嵌套）标记想要展示的内容。

## 标题与段落

可以使用从 `<h1>` 到 `<h6>` 的标签来标记标题 1 ~ 6 级标题，使用 `<p>` 来标记一个段落。

[example.html](./example.html)

```html
{{#include example.html}}
```

## 列表

列表分为有序列表和无序列表。

**有序列表**（ordered list）使用一对 `<ol>` 标签包裹若干列表项，每个列表项（list item）由一对 `<li>` 标签包裹。

```html
<ol>
    <li>Firstly do this...</li>
    <li>Then do this...</li>
    <li>And this...</li>
    <li>Finally this.</li>
</ol>
```

效果如下：

<ol>
    <li>Firstly do this...</li>
    <li>Then do this...</li>
    <li>And this...</li>
    <li>Finally this.</li>
</ol>

HTML 标签中可以添加**属性**。比如，我们可以在 `<ol>` 标签中添加一条 `typr="a"` 的属性：

```html
<ol type="a">
    <li>Firstly do this...</li>
    <li>Then do this...</li>
    <li>And this...</li>
    <li>Finally this.</li>
</ol>
```

则会改变列表项前的序号类型：

<ol type="a">
    <li>Firstly do this...</li>
    <li>Then do this...</li>
    <li>And this...</li>
    <li>Finally this.</li>
</ol>

**无序列表**（unordered list）则使用一对 `<ul>` 标签包裹若干列表项：

```html
<ul>
    <li>An apple</li>
    <li>A piece of watermelon</li>
    <li>Some sugar</li>
</ul>
```

效果如下：

<ul>
    <li>An apple</li>
    <li>A piece of watermelon</li>
    <li>Some sugar</li>
</ul>

## 图片

```html
<img src="example.png" 
    alt="An example in the center." 
    width="104" height="142">
```

`src` 属性标记图片元素的路径；`alt` 属性标记图片的替换文本，替换文本应当能够作为图片的文字等价物。除此之外，图片还可以具有 `title` 属性，该属性对应的内容一般会在用户将光标悬浮在图片上时显示。

如果要为图片添加说明文字，可以使用 `<figure>` 和 `<figcaption>` 标签。`<figure>` 用来描述一个附有说明文字的图表元素，其下可以有 `<figcaption>` 标签。

```html
<figure>
    <img src="example-table.png" 
        alt="An example in the center." 
        width="104" height="142">
    <figcaption>A table showing ...</figcaption>
</figure>
```

## 超链接

```html
<a href="https://www.w3schools.com">This is a link</a>
```

标签 `<a>` 可以定义一个锚点，其 `href` 属性可以设置为一 URL，当用户点击该元素时，将会跳转到该属性对应的 URL 指向的位置。标签中的内容为显示时锚点的文本。

## 表格

使用 `<table>` 标签标记一个表格。其中的每一行使用 `<tr>` 标记。

每一行中，使用 `<td>` 标记每一个列元素；特殊地，每一行/列的标题单元格使用 `<th>` 标记。

对于单元格，可以使用 `rowspan` 和 `colspan` 属性来标记其在行或列方向上延申的单元格，由此得以实现“合并单元格”的效果。

简单表格：[table-example-1.html](table-example-1.html)

```html
{{#include ./table-example-1.html}}
```

略微复杂表格：[table-example-2.html](table-example-2.html)

```html
{{#include ./table-example-2.html}}
```
