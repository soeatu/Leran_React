import React, { useState } from "react";
import "./style.css";
import { InputTodo } from "./components/InpputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

//アプリケーションの本体　ここで何をレンダリングするかをいろいろいじる
//大きいコンポーネント
export const App = () => {
  //todo入力ステート
  const [todoText, setTodoText] = useState("");
  //未完了Todoステート
  const [incomplateTodos, setIncomplateTodos] = useState([]);
  //完了Todoステート
  const [complateTodos, setcomplateTodos] = useState([]);

  //Todo入力テキストボックスの値変更イベント
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  //追加ボタンの押下イベント
  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incomplateTodos, todoText];
    setIncomplateTodos(newTodos);
    setTodoText("");
  };

  //削除ボタンの押下イベント
  const onClickDelete = (index) => {
    const newTodos = [...incomplateTodos];
    newTodos.splice(index, 1);
    setIncomplateTodos(newTodos);
  };

  //完了ボタンの押下イベント
  const onClickComplete = (index) => {
    const newIncomplateTodos = [...incomplateTodos];
    newIncomplateTodos.splice(index, 1);
    const newComplateTodos = [...complateTodos, incomplateTodos[index]];
    setIncomplateTodos(newIncomplateTodos);
    setcomplateTodos(newComplateTodos);
  };

  //戻るボタンの押下イベント
  const onClickBack = (index) => {
    const completeTodos = [...complateTodos];
    completeTodos.splice(index, 1);
    const newIncomplateTodos = [...incomplateTodos, complateTodos[index]];
    setcomplateTodos(completeTodos);
    setIncomplateTodos(newIncomplateTodos);
  };

  return (
    <>
      {/*コンポーネント呼び出し */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClickAdd={onClickAdd}
      />
      <IncompleteTodo
        todos={incomplateTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodo todos={complateTodos} onClickBack={onClickBack} />
    </>
  );
};
