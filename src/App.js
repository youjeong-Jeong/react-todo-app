import React, {useState} from "react";
import "./App.css";

export default function App() {

  const [todoData, setTodoData] = useState([]);
  const [value, setValue] = useState("");

  const btnStyle = {
    //color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%",
    cursor: "pointer",
    float: "right"
  }

  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };


  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    setTodoData(newTodoData);
  }

  const handleChange = (e) => {
    console.log('e',e.target.value);
    setValue(e.target.value);
  }

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

  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });

    setTodoData(newTodoData);
  }

    return(
        <div className="container">
          <div className="toolBlock">

            <div className="title">
              <h1>할일 목록</h1>
            </div>

            {todoData.map((data) => (
              <div style={getStyle(data.completed)} key={data.id}>
                <p>
                  <input type="checkbox" 
                  onChange={() => handleCompleChange(data.id)} 
                  defaultChecked={false}/>
                  {" "}{data.title}
                  <button style={btnStyle} onClick={() => handleClick(data.id)}>x</button>
                </p>
              </div>
            ))}
            
            <form style={{display: 'flex'}} onSubmit={handleSubmit}>
              <input
                type="text"
                name="value"
                style={{flex: '10', padding: '5px'}}
                placeholder="해야 할 일을 입력하세요."
                value={value}
                onChange={handleChange}
              />
              <input
              type="submit"
              value="입력"
              className="btn"
              style={{ flex: '1'}}
              />
            </form>

          </div>
        </div>
      )
  }
