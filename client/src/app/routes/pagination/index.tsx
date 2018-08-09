import * as React from "react";
import Codebox from "../../components/codebox/";
import Pagination from "../../components/pagination/";

const code = `<Pagination
  defaultCurrent={1}
  defaultPageSize={10}
  total={100}
/>
`;

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
        <Pagination defaultCurrent={1} defaultPageSize={10} total={100} />
      </Codebox>
      <Codebox title="更多" desc="更多分页。" language="jsx" code={code}>
        <Pagination defaultCurrent={1} defaultPageSize={10} total={1000} />
      </Codebox>
    </div>
  );
}

export default PaginationDoc;
