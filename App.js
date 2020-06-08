import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import TodoApp from './components/TodoApp';

import {Provider} from 'react-redux';
import store from './redux/store';

export default class App extends Component{
    render(){
        return (
            <Provider store = {store}>
                <TodoApp />
            </Provider>
        )
    }
}