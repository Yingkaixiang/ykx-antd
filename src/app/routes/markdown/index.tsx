import * as React from "react";
import Codebox from "../../components/codebox/";
import Markdown from "../../components/markdown/";

const markdownText = `# Markdown 编辑器

**粗体**
`;

const markdownContent =
  "# Markdown 编辑器\n<p>可以使用 ```Markdown``` 语法进行编写。</p>\n## 何时使用\n<p>当你需要编写文档时可以使用当前组件。</p>";

function MarkdownDoc() {
  return (
    <div style={{ padding: 64 }}>
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
