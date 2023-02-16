import React, { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import "./styles.css";
import Todos from "./Todos";

function App() {

  const [todos, setTodos] = useState([
    {
      text: "Купить бананы",
      favorite: false,
    },

    {
      text: "Купить дом",
      favorite: true,
    },

    {
      text: "Выучить JS",
      favorite: false,
    },
  ]);

  const [text, setText] = useState("");

  const deleteTodo = (indexOfItem) => {
    const filtered = todos.filter((todo, index) => {
      if (index === indexOfItem) {
        return false;
      }
      return true;
    });
    setTodos(filtered);
  };

  const makeFavorite = (i) => {
    const newTodos = todos.map((item, index) => {
      if (i === index) {
        return {
          ...item,
          favorite: !item.favorite,
        };
      }
      return item;
    });
    setTodos(newTodos);
  };

  const addTodo = () => {
    if (text) {
      setTodos([
        ...todos,
        {
          text: text,
          favorite: false,
        },
      ]);
      setText("");
    } else {
      alert("Поле не должно пустым.");
    }
  };

  return (
    <div className="app">
      <Header />
      <Form text={text} setText={setText} addTodo={addTodo} />
      <Todos
        todos={todos}
        makeFavorite={makeFavorite}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
