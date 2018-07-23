import * as React from "react";
import Codebox from "../../components/codebox/";
import Pagination from "../../components/pagination/";

function PaginationDoc() {
  return (
    <div style={{ padding: 64 }}>
      <Codebox
        title="基础"
        desc="基础分页。"
        language="jsx"
        code="<Pagination total={100} pageSize={10} />"
      >
        <Pagination total={100} pageSize={10} />
      </Codebox>
    </div>
  );
}

export default PaginationDoc;
