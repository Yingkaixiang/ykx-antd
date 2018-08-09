import * as React from "react";
import Codebox from "../../components/codebox/";
import Markdown from "../../components/markdown/";

const markdownText = `# Markdown 编辑器

**粗体**
`;

const markdownContent = `# Markdown 编辑器

可以使用 Markdown 语法进行编写。

## 何时使用

当你需要编写文档时可以使用当前组件。`;

function MarkdownDoc() {
  return (
    <div className="ykx-page">
      <Markdown source={markdownContent} />
      <Codebox
        title="基础"
        desc="可以在编辑器中使用所有的 ```Markdown``` 语法"
        language="markdown"
        code={markdownText}
      >
        <Markdown source={markdownText} />
      </Codebox>
    </div>
  );
}

export default MarkdownDoc;
