# nu-button

```HTML
<a href="##" class="nu_btn _primary _ghost _large">大号的幽灵主按钮</a>
```

No UI 组件库系统 「 按钮组件 」。


## 怎么用?

```
$ npm i @y-fe/nu-button
$ yarn add @y-fe/nu-button
```

```
@y-fe/nu-button/css
├── core.css             // 核心代码
└── skins
    ├── bootstrap.css    // bootstrap 按钮皮肤
    ├── loading.css      // 按钮loading 效果
    ├── material.css     // material-ui  按钮皮肤
    └── webnovel.css     // webnovel  按钮皮肤
```

## Skin library

### Bootstrap

<iframe height="480" style="width: 100%;" scrolling="no" title="wbXgba" src="//codepen.io/ziven27/embed/wbXgba/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/wbXgba/'>wbXgba</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

### Material

<iframe height="480" style="width: 100%;" scrolling="no" title="nu-button-material" src="//codepen.io/ziven27/embed/rgKyap/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/rgKyap/'>nu-button-material</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


### Webnovel

<iframe height="480" style="width: 100%;" scrolling="no" title="nu-button-webnovel" src="//codepen.io/ziven27/embed/byKqEe/?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ziven27/pen/byKqEe/'>nu-button-webnovel</a> by ziven27
  (<a href='https://codepen.io/ziven27'>@ziven27</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## API

| 选择器 |  功能 |
|:-------------|------:|
| .nu_btn | 默认的按钮选择器 |
| .nu_btn._default | 默认按钮颜色 |
| .nu_btn._primary | 主按钮 |
| .nu_btn._secondary | 次级按钮 |
| .nu_btn._warning | 警告按钮 |
| .nu_btn._success | 成功按钮 |
| .nu_btn._danger | 危险按钮 |
| .nu_btn._large | 大号按钮 |
| .nu_btn._middle | 中号按钮 |
| .nu_btn._small | 小号按钮 |
| .nu_btn._fill | 实心按钮 |
| .nu_btn._ghost | 幽灵按钮 👻 |
| .nu_btn._link | 链接按钮 🔗 |
| .nu_btn._disabled | 不可用按钮 |
| .nu_btn._loading | loading按钮 |
| .nu_btn._capsule | 圆角按钮 💊 |
| .nu_btn._block | 占一行的按钮 |

- **功能 | 颜色**: `_default`、`_primary`、`_secondary`、`_warning`、`_success`、`_danger`
- **变体 | 形状**: `_fill`、`_ghost`、`_link`
- **尺寸**: `_large`、`_middle`、`_small`
- **其它**: `_disabled`、`_loading`、`_block`、`_capsule`

除了 颜色、形状、和尺寸是互斥的三个状态，其它选择器都是可以相互组合的。

约定变体默认状态是 `_fill`。

默认按钮大小，建议在`large`和 `middle`之间。

## 如何修改主题?

```scss
.nu_btn._default{
    color:#333333;
}
.nu_btn._primary{
    color:blue;
}
.nu_btn._warning{
     color:yellow;
}

/* 其它同理 */
```

虽然 `nu-button` 约定了6种颜色，往往实际项目并不需要这么多的颜色，基于实际项目编写即可。
对于边框和背景颜色，组件内部会自动实现。

```css
.nu_btn._ghost._primary{
    border-color: red;
}
```
如果自动实现的代码不能满足你的需求，你可以这样定制。这里我们将 ghost 主按钮的边框改成了红色。

## 如何修改大小？

```css
.nu_btn._large {
  padding: .5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: .3rem;
}
/* 其它同理 */
```

## 如何修改状态？

```css
.nu_btn._disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
/* 其它同理 */
```

## Logic Only

- [nu-button-react](https://nu-system.github.io/react/button/)
- [nu-button-vue](https://nu-system.github.io/vue/button/)

## Npm cdn

```HTML
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/loading.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/material.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@y-fe/nu-button/css/skins/webnovel.min.css">
```