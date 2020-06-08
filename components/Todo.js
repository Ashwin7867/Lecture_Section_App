import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import {connect} from 'react-redux';
import {toggleTodo} from '../redux/actions';

class Todo extends Component{
    handleTextClick = ()=> {
        const {todo} = this.props;
        const {id, content, completed} = todo;
        this.props.toggleTodo(id);
    }
    render(){
        const {todo} = this.props;
        const color_ = todo.completed ? "green": "red";
        return (
            <TouchableOpacity style = {styles.todo}
                onPress = {this.handleTextClick}>
                <Text style = {[styles.text, {color: color_}]}>
                    {todo.content}
                </Text>
            </TouchableOpacity>
        )
    }
}

export default connect(
    null,
    {toggleTodo}
)(Todo)

const styles = StyleSheet.create({
    todo : {},
    text : {fontSize : 15}
})