import React, {Component} from 'react';
import {View, StyleSheet ,TouchableOpacity, Text} from 'react-native';

import {VISIBILITY_FILTERS} from '../redux/constants';
import Filter from './Filter';

export default class VisibilityFilters extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const filter_lst = Object.keys(VISIBILITY_FILTERS).map((filter_key, index) => {
            const current_filter = VISIBILITY_FILTERS[filter_key];
            return (
                <Filter key = {index}
                        current_filter = {current_filter}
                        index = {index} />
            )
        });
        return (
            <View style = {styles.container}>
                {filter_lst}
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection : 'row',
        alignContent : 'flex-start',
        justifyContent : 'flex-start',
        marginTop : 20
    },
   
})