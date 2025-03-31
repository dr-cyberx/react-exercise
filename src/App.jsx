// import { useState } from "react";
import ClientPagination from "./clientBase";
import ServerPagination from "./serverBase";
import FolderStr from "./folderStr/FolderStr";
import Progressbar from "./progressBar";
import SearchBar from "./SearchBar";
// import "./App.css";

function App() {
  // const [paginationMethod, setPaginationMethod] = useState(true);

  return (
    <>
      {/* <div>
        <button onClick={() => setPaginationMethod(!paginationMethod)}>
          {!paginationMethod ? "Client Pagination" : "Server Pagination"}
        </button>
      </div>
      {paginationMethod ? <ClientPagination /> : <ServerPagination />} */}

      {/* <FolderStr /> */}
      {/* <Progressbar /> */}
      <SearchBar />
    </>
  );
}

export default App;
