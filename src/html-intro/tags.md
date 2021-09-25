# HTML 标签

我们可以使用 HTML 标签（以及他们之间的嵌套）标记想要展示的内容。

## 标题与段落

可以使用从 `<h1>` 到 `<h6>` 的标签来标记标题 1 ~ 6 级标题，使用 `<p>` 来标记一个段落。

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

HTML 标签中可以添加属性。比如，我们可以在 `<ol>` 标签中添加一条 `typr="a"` 的属性：

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


