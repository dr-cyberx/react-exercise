import { useEffect, useState } from "react";
import "../App.css";

function ClientPagination() {
  const [todos, setTodos] = useState([]);
  const [todoPerPage, setTodoPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const numberOfTotalPages = Math.ceil(todos.length / todoPerPage);
  const pages = Array(numberOfTotalPages)
    .fill(0)
    .map((_, index) => index + 1);

  const indexofLastTodo = currentPage * todoPerPage;
  const indexofFirstTodo = indexofLastTodo - todoPerPage;
  const visibleTodos = todos.slice(indexofFirstTodo, indexofLastTodo);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setTodos(json));
  }, []);

  function handlePrev() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handleNext() {
    if (currentPage < numberOfTotalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  return (
    <>
      <h1>My Todos {numberOfTotalPages}</h1>

      <div>
        <select
          name="selectItemPerPage"
          onChange={(e) => setTodoPerPage(e.target.value)}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
        </select>
      </div>

      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
      <ul>
        {visibleTodos.map((todo) => (
          <li key={todo.id}>
            {todo.id} - {todo.title}
          </li>
        ))}
      </ul>

      <p>
        {pages.map((item) => (
          <span
            style={{ cursor: "pointer" }}
            key={item}
            onClick={() => setCurrentPage(item)}
            className={`${currentPage === item ? "active" : ""} pageNumber`}
          >
            {item} |{" "}
          </span>
        ))}
      </p>
    </>
  );
}

export default ClientPagination;
