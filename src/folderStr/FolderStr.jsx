import React, { useState } from "react";

const initialNode = {
  type: "folder",
  name: "root",
  children: [
    {
      name: "src",
      type: "folder",
      children: [],
    },
  ],
};

const FolderStr = () => {
  const [structure, setstructure] = useState(initialNode);

  const addNode = (parentNode, filename, type) => {
    const newNode = { name: filename, type, children: [] };
    parentNode.children.push(newNode);
    setstructure({ ...structure });
  };

  function renderNode(node) {
    return (
      <div style={{ marginLeft: "20px" }}>
        <p
          onClick={() => {
            if (node.type === "file") return;
            const filename = prompt("Enter file/Folder name");
            const type = prompt("Enter file type (folder/file)");
            if (!filename) return;
            addNode(node, filename, type);
          }}
        >
          {node.type === "file" ? "📄" : "📁"} {node.name}
        </p>
        {node?.children?.map((Item) => renderNode(Item))}
      </div>
    );
  }

  return <div>{renderNode(structure)}</div>;
};

export default FolderStr;
