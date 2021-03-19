import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList/index.jsx'
// TodoFeature.propTypes = {
    
// };

function TodoFeature(props) {
    const inittodoList=[
        {
            id:1,
            title:'eat',
            status:'new',
        },
        {
            id:2,
            title:'eat2',
            status:'completed',
        },
        {
            id:3,
            title:'eat3',
            status:'new',
        }
    ];

    const [todoList, settodoList] = useState(inittodoList);

    const hangleTodoList=(todo,idx)=>{
            // console.log(todo,idx);
            // tạo một todolist mới = todolist
            const newTodoList=[...todoList];
            // Lấy cái todo với giá trị index truyền vào cập nhật lại trạng thái
            const newTodo={
                ...newTodoList[idx],
                status:newTodoList[idx].status==="new"?"completed":"new",
            }
            // todolist với gtri index bắng newtodo
            newTodoList[idx]=newTodo;
            settodoList(newTodoList);
    }

    return (
        <div>
            <h3>Todo List</h3>
            {/*cha có một cái todolist khi nào nhấn nút thì thực hiện hàm hangletodolist và reder todolist */}
            <TodoList todoList={todoList} onTodoClick={hangleTodoList} />
        </div>
    );
}

export default TodoFeature;