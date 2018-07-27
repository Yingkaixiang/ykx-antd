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
    <div style={{ padding: 64 }}>
      <Codebox title="基础" desc="基础分页。" language="jsx" code={code}>
        <Pagination defaultCurrent={1} defaultPageSize={10} total={100} />
      </Codebox>
    </div>
  );
}

export default PaginationDoc;
