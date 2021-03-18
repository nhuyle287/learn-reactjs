import React from 'react';
// import PropTypes from 'prop-types';
import TodoList from './components/TodoList/index.jsx'
// TodoFeature.propTypes = {
    
// };

function TodoFeature(props) {
    const todoList=[
        {
            id:1,
            title:'eat'
        },
        {
            id:2,
            title:'eat2'
        },
        {
            id:3,
            title:'eat3'
        }
    ];
    return (
        <div>
            <TodoList todoList={todoList}/>
        </div>
    );
}

export default TodoFeature;