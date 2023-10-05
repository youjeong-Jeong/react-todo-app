import React, { useState } from "react";
import "./App.css";
import Lists from "./components/Lists";
import Form from "./components/Form";

export default function App() {
  console.log('App Component');
  const [todoData, setTodoData] = useState([
    {
      id: "1",
      title: "공부하기",
      completed: false
    },
    {
      id: "2",
      title: "청소하기",
      completed: false
    }
  ]);
  const [value, setValue] = useState("");



  const handleSubmit = (e) => {
    // form 안에 input을 전송할 떄 페이지가 리로드 되는 걸 막아줌
    e.preventDefault();

    //새로운 할 일 데이터
    let newTodo = {
      id: Date.now(), //유니크한 값을 주기 위해
      title: value,
      completed: false,
    };

    //원래 있던 할일 목록에 새로운 할 일 추가
    setTodoData(prev => [...prev, newTodo]);
    setValue("");
  }

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
      <div className="w-full p-6 m-4 bg-white rouded shadow lg:w-3/4 lg:max-w-lg">
        <div className="flex justify-between mb-3">
          <h1>할일 목록</h1>
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />

        <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />

      </div>
    </div>
  )
}
