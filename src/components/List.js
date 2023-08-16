import React from 'react'

export default function List({ todoData, setTodoData }) {

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log('newTodoData', newTodoData);
    setTodoData(newTodoData);
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

  return (
    <div>
      {todoData.map((data) => (
        <div key={data.id}>
          <div className='flex items-center justify-between w-full px-4 py-1 my-2 text-gray-6000 bg-gray-100 border rounded'>
            <div className="tems-center">
              <input type="checkbox"
                onChange={() => handleCompleChange(data.id)}
                defaultChecked={false} />
              {" "}
              <span className={data.completed ? "line-through" : undefined}>{data.title}</span>
            </div>

            <div>
              <button className="px-4 py-2 float-right" onClick={() => handleClick(data.id)}>x</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
