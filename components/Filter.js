import React, {Component} from 'react';
import {View, StyleSheet ,TouchableOpacity, Text} from 'react-native';

import {VISIBILITY_FILTERS} from '../redux/constants';

import {connect} from 'react-redux';
import {setFilter} from '../redux/actions';

class Filter extends Component{
    constructor(props){
        super(props);
    }
    handleFilterClick = () => {
        const {current_filter} = this.props;
        console.log('This filter button is clicked ',current_filter);
        this.props.setFilter(current_filter);
    }
    render(){
        const {visibilityFilter, current_filter, index} = this.props;
        const text_color = visibilityFilter === current_filter ? "blue":"black";
        return (
                    <TouchableOpacity style = {styles.filter}
                        onPress = {this.handleFilterClick}>
                        <Text style = {[styles.filter_text, {color : text_color}]}>{current_filter}</Text>
                    </TouchableOpacity>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('This has been printed from filter comp', state)
    const {visibilityFilter} = state;
    console.log(visibilityFilter);
    return {visibilityFilter}
}

export default connect(
    mapStateToProps,
    {setFilter}
    )(Filter)

const styles = StyleSheet.create({
    filter : {height  : 25, borderWidth : 1, marginRight : 13,alignItems : 'center', backgroundColor : 'lightgray'},
    filter_text : {
        marginRight : 10,
        fontSize : 16,
        fontWeight : 'bold',
        paddingLeft : 10
    }
})