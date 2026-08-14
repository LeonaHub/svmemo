# Svmemo

给中文母语者用的瑞典语背单词网站：间隔重复 + 拼写。产品说明见 [SPEC.md](./SPEC.md)。

## 现在有什么

- 词条类型：`src/types/word.ts`
- Dexie 表结构：`src/db/index.ts`
- A1 词库（名词/动词/形容词含完整变形，每词 3–4 条例句）：`src/data/a1.ts`
- 启动时写入 IndexedDB：`src/db/seed.ts`
- 今日学习：认识卡四键 + 拼写，进度用 FSRS 写回本地

## 本地运行

```bash
npm install
npm run dev
```

打开后先看「今日」配额，点「开始学习」。数据在浏览器 IndexedDB 里，可用「导出备份」拷走。刷新会把词库更新到最新版本，学习进度仍留在本地。
