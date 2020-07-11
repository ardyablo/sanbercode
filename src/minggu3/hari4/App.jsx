import React from 'react';
import {connect} from 'react-redux';

class TodoList extends React.Component{
    todoRef = React.createRef();

    _handleNewTodo = (e) => {
        let newTodo = this.todoRef.current.value;
        this.props.addNewTodo(newTodo);

        e.preventDefault();
        this.todoRef.current.value = '';
    }

    render(){
        const {todos} = this.props;

        return(
            <div>
                <div>Todo List</div>
                <form onSubmit={this._handleNewTodo}>
                    <label>New Todo <input ref={this.todoRef}/></label>
                </form>
                <ul>{todos.map((item,index) => <li key={index}>{item}</li>)}</ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    todos: state.todos
})

const mapDispatchToProps = dispatch => ({
    addNewTodo: todo => dispatch({type: 'ADD TODO', todo})
})

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);