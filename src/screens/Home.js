import React,{useState,useEffect} from 'react';
import { StyleSheet, View, Taxt, TextInput, TouchableOpacity, FlagList } from 'react-native';

import Header from '../components/Header'
import Footer from '../components/Footer'


export default function Home({ navigation, GlobalState }){
    const { toDoList, setToDoList,task, setTask,setChoosenTask } = GlobalState

    useEffect(()=>{
        setToDoList(prevState => [...prevState, { id:2 , task: 'go to bed'}])
    },[])

    const handleSaveTask = () => {
        const index = toDoList.length + 1;
        setToDoList(prevState => [...prevState, { id:index , task: task}])
        setTask('');
    }

    const handleChooseTask = (item) => {
        setChoosenTask(item);
        navigation.navigate('ChoosenTask')
    }

    return(
        <View style = {styles.screen}>
            <View style= {styles.header} />
            <View style= {styles.body} />
            <View style= {styles.footer} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: 'red'
    },
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: 'blue'
    },
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'yellow'
    }
})