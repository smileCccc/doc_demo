---
sidebar_position: 2
---

# API 提取

让我们将 `docs/intro.md` 翻译成中文。

## 配置 i18n

修改 `docusaurus.config.js` 以支持 `zh-Hans` 语言：

```js title="docusaurus.config.js"
export default {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh-Hans"],
  },
};
```

## 翻译文档

将 `docs/intro.md` 文件复制到 `i18n/zh-Hans` 文件夹：

```bash
mkdir -p i18n/zh-Hans/docusaurus-plugin-content-docs/current/

cp docs/intro.md i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md
```

将 `i18n/zh-Hans/docusaurus-plugin-content-docs/current/intro.md` 翻译成中文。

## 启动本地化站点

以中文启动站点：

```bash
npm run start -- --locale zh-Hans
```

你的本地化站点可通过 [http://localhost:3000/zh-Hans/](http://localhost:3000/zh-Hans/) 访问，`Getting Started` 页面已翻译。

:::caution

开发环境下一次只能使用一种语言。

:::

## 添加语言下拉菜单

要无缝切换语言，在导航栏添加语言下拉菜单：

修改 `docusaurus.config.js`：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "localeDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

## 构建本地化站点

为指定语言构建站点：

```bash
npm run build -- --locale zh-Hans
```

或一次性为所有语言构建：

```bash
npm run build
``` 