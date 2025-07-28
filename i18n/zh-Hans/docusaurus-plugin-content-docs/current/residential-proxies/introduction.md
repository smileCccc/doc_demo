---
sidebar_position: 1
---

# 简介

适用于数据采集、隐私保护、跨区域访问等业务场景

# 管理文档版本

Docusaurus 可以管理你的文档多版本。

## 创建文档版本

发布你的 1.0 版本：

```bash
npm run docusaurus docs:version 1.0
```

`docs` 文件夹会被复制到 `versioned_docs/version-1.0`，并生成 `versions.json`。

你的文档现在有两个版本：

- `1.0` 位于 `http://localhost:3000/docs/`，对应 1.0 版文档
- `current` 位于 `http://localhost:3000/docs/next/`，对应即将发布的文档

## 添加版本下拉菜单

要无缝切换版本，在导航栏添加版本下拉菜单：

修改 `docusaurus.config.js`：

```js title="docusaurus.config.js"
export default {
  themeConfig: {
    navbar: {
      items: [
        // highlight-start
        {
          type: "docsVersionDropdown",
        },
        // highlight-end
      ],
    },
  },
};
```

## 更新已有版本

你可以在对应文件夹中编辑版本文档：

- `versioned_docs/version-1.0/hello.md` 更新 `http://localhost:3000/docs/hello`
- `docs/hello.md` 更新 `http://localhost:3000/docs/next/hello` 