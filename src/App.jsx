import { useState } from "react";
import ClientPagination from "./clientBase";
import ServerPagination from "./serverBase";
import FolderStr from "./folderStr/FolderStr";
import "./App.css";

function App() {
  const [paginationMethod, setPaginationMethod] = useState(true);

  return (
    <>
      {/* <div>
        <button onClick={() => setPaginationMethod(!paginationMethod)}>
          {!paginationMethod ? "Client Pagination" : "Server Pagination"}
        </button>
      </div>
      {paginationMethod ? <ClientPagination /> : <ServerPagination />} */}

      <FolderStr />
    </>
  );
}

export default App;
