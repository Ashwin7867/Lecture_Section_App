import React,{Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';

import {connect} from 'react-redux';

import Todo from './Todo';

import {VISIBILITY_FILTERS} from '../redux/constants';

const get_todo = (todo) => {
    return (
        <Todo key = {"todo".concat(todo.id)}
                 todo = {todo} />   
    )
}
const get_text_comp = () => {
    return (
        <Text>{"No todos Yay"}</Text>
    )
}
const get_Todo_list = (todos) => {
    const todo_lst = todos.map((todo, index)=> get_todo(todo));
    return todo_lst

}

const getFilteredTodos = (todos , filter) => {
    switch(filter){
        case VISIBILITY_FILTERS.COMPLETED : {
            return todos.filter(todo => todo.completed)
        }
        case VISIBILITY_FILTERS.INCOMPLETE : {
            return todos.filter(todo => !todo.completed)
        }
        case VISIBILITY_FILTERS.ALL : {
            return todos
        }
        default:
            return todos
    }
}

class TodoList extends Component{
    render(){
            const {todos} = this.props;
            const todo_lst = todos && todos.length ? get_Todo_list(todos): get_text_comp();
            return (
            <View style = {styles.container}>
                    {todo_lst}
                </View>
            )
            }
        }            

const mapStateToProps = (state) => {
    console.log(state);
    const {visibilityFilter} = state;
    const {byIds, allIds} = state.todos;
    const todos = allIds && allIds.length ? allIds.map(id => (byIds ? {...byIds[id], id} : null)) : null;
    const filtered_todos = getFilteredTodos(todos, visibilityFilter);
    return {todos : filtered_todos}
}    

export default connect(mapStateToProps)(TodoList);

const styles = StyleSheet.create({
    container : {
        flexDirection : 'column',
        alignContent : 'flex-start',
        alignItems : 'flex-start',
        marginTop : 50
    }
})