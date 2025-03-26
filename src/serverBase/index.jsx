import React, { useState, useEffect } from "react";

const ServerPagination = () => {
  const [todos, setTodos] = useState([]);
  const [totalTodo, setTotalTodo] = useState(0);
  const [limit, setLimit] = useState(10);
  const [skip, setSkip] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}&select=title,price`
    )
      .then((response) => response.json())
      .then((json) => {
        setTodos(json.products);
        setTotalTodo(json.total);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [limit, skip]);

  const totalPages = Math.ceil(totalTodo / limit);

  return (
    <>
      <h1>My Todos</h1>

      <div>
        <label>Items per page:</label>
        <select
          name="selectItemPerPage"
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setSkip(0); // Reset pagination when limit changes
          }}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              {todo.title} - ${todo.price}
            </li>
          ))}
        </ul>
      )}

      <div>
        <button
          disabled={skip === 0}
          onClick={() => setSkip((prev) => Math.max(prev - limit, 0))}
        >
          Previous
        </button>

        <span>
          Page {Math.ceil(skip / limit) + 1} of {totalPages}
        </span>

        <button
          disabled={skip + limit >= totalTodo}
          onClick={() => setSkip((prev) => prev + limit)}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ServerPagination;
