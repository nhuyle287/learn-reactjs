import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import "./styles.scss"

TodoList.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}



function TodoList(props) {
    // console.log(props)
    // nhận todolist và ontodolist từ props truyền qua
    const { todoList } = props;
    const { onTodoClick } = props;
    // gửi todo với index qua todolist
    const hangletodoList = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }
    return (
        <ul className="todo-list">
            {/* Lấy danh sách todo và index để bk vtri cap nhat trang thái
                Khi dung map phải truyền key
                cài classNames để add class
                classNames({danh sách class})
            */}
            {todoList.map((todo, idx) => (
                <li key={todo.id}
                    className={classNames({
                        "todo-item": true,
                        completed: todo.status === "completed"
                    })}
                    onClick={() => hangletodoList(todo, idx)}
                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;