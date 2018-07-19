import * as React from "react";
import Codebox from "../../components/codebox/";
import Markdown from "../../components/markdown/";

const markdownText = `# Markdown 编辑器

**粗体**
`;

function MarkdownDoc() {
  return (
    <Codebox
      title="基础"
      desc="可以在编辑器中使用所有的 ```Markdown``` 语法"
      style={{ margin: 20 }}
      language="markdown"
      code={markdownText}
    >
      <Markdown source={markdownText} />
    </Codebox>
  );
}

export default MarkdownDoc;
