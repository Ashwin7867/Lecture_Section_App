import React, {Component } from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';

import {addTodo} from '../redux/actions';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.state = {text_: " "}
    }
    handleChangeText = (text) => {
        this.setState({text_ : text})
    }
    handleAddClick = () => {
        this.props.addTodo(this.state.text_);
        this.setState({text_ : " "})
    }
    render(){
        return (
            <View style = {styles.container}>
                <View style = {styles.textinp_container}>
                    <TextInput value = {this.state.text_}
                                onChangeText = {this.handleChangeText}
                                style = {styles.textinp} />           
                </View>
                <TouchableOpacity style = {styles.addButton}
                                    onPress = {this.handleAddClick}>
                                        <Text style = {styles.add}>{'Add Todo'}</Text>
                                    </TouchableOpacity>
            </View>
        )
    }
}

export default connect(
    null,
    {addTodo}
)(AddTodo)

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : 'row',
        alignContent : 'flex-start',
        justifyContent : 'flex-start',
        marginTop : 10
    },
    textinp_container : {
        borderColor : 'gray',
        borderWidth : 1.5,
        height : 25,
        width : 190
    },
    textinp : {},
    addButton : {
        borderColor : 'gray',
        backgroundColor : 'lightgray',
        height : 25,
        width : 100,
        borderWidth : 2,
        marginLeft : 15
    },
    add : {
        textAlign : 'center',
        fontSize : 15,
    }
})