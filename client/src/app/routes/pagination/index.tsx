import * as React from "react";
import Codebox from "../../components/codebox/";
import Pagination from "../../components/pagination/";

const code = `<Pagination
  defaultCurrent={1}
  defaultPageSize={10}
  total={100}
/>
`;

const code1 = `<Pagination
  defaultCurrent={6}
  total={500}
/>,
`;

const code2 = `<Pagination
  total={85}
  showTotal={total => \`Total \${total} items\`}
  pageSize={20}
  defaultCurrent={1}
/>
<br />
<Pagination
  total={85}
  showTotal={(total, range) => \`\${range[0]}-\${range[1]} of \${total} items\`}
  pageSize={20}
  defaultCurrent={1}
/>
`;

const showTotal = (total: number) => `Total ${total} items`;
const showRange = (total: number, range: number[]) =>
  `${range[0]}-${range[1]} of ${total} items`;

function PaginationDoc() {
  return (
    <div className="ykx-page">
      <Codebox
        title="基础"
        desc="基础分页。"
        language="jsx"
        code={code}
        style={{ marginBottom: 24 }}
      >
        <Pagination defaultCurrent={1} total={50} />
      </Codebox>
      <Codebox
        title="更多"
        desc="更多分页。"
        language="jsx"
        code={code1}
        style={{ marginBottom: 24 }}
      >
        <Pagination defaultCurrent={6} total={500} />
      </Codebox>
      <Codebox
        title="总数"
        desc="通过设置 ```showTotal``` 展示总共有多少数据。"
        language="jsx"
        code={code2}
      >
        <Pagination
          style={{ marginBottom: 16 }}
          defaultCurrent={1}
          defaultPageSize={20}
          total={85}
          showTotal={showTotal}
        />
        <Pagination
          defaultCurrent={1}
          defaultPageSize={20}
          total={85}
          showTotal={showRange}
        />
      </Codebox>
    </div>
  );
}

export default PaginationDoc;
