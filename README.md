# ibqy.github.io

ibqy 个人作品集网站。

### 结构

| 路径 | 说明 |
|---|---|
| `index.html` | 主页（深色 + 蓝紫渐变主题） |
| `data/stats.json` | 每日自动刷新的统计数据 |
| `.github/workflows/update-stats.yml` | 每日 8:00 UTC 自动拉取 GitHub 数据 |

### 博客系统

文章通过 **GitHub Issues** 发布，在 [ibqy/ibqy](https://github.com/ibqy/ibqy) 仓库下创建 Issue 并打上 `blog` 标签即可自动出现在本站。

### 本地预览

```bash
python3 -m http.server 8000
```