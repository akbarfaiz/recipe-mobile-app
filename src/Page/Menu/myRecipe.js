import React, {useEffect,useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList
} from 'react-native';

import axios from "axios"
import {API_URL} from "@env"

import {useSelector, useDispatch } from 'react-redux';
import {getMyRecipe} from "../../Storage/Action/menu"

const MyRecipePage = ({navigation}) => {
  const dispatch = useDispatch()
  const auth = useSelector((state)=>state.auth)
  const menu = useSelector((state)=>state.myRecipe)
  const [recipe, setRecipe] = useState();
  console.log(recipe)

  // useEffect(() => {
  //   dispatch(getMyRecipe(auth.data.data.token))
  // },[])

  // useEffect(() => {
  //   if (menu.data) {
  //     console.log('Recipe ku -> ' + menu)
  //     console.log(menu.data)
  //   }
  // },[menu.data])

  useEffect(() => {
    const getData = async () => {
      let headers = {
        headers:{
          Authorization: `Bearer ${auth.data.data.token}`
      }}
      return await axios.get(API_URL+"/recipe/myRecipe",headers).then(
        res => {
        console.log(res)
        setRecipe(res.data.data)
        }
      ).catch(err => {
        console.log(err)
      })
    }
    getData()
  },[])

  return (
    <View style={{backgroundColor: '#f7f7f7' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
      <Text style={{color:'#EFC81A', fontSize: 30, textAlign: 'center', fontWeight: '500', marginTop: 70}}>My Recipe</Text>
      {/*Data Recipe Column*/}
      {!recipe ? <Text>Loading</Text> : recipe?.map((item,index) => {
        return(
          <View style={{backgroundColor: 'white',alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', marginTop: 25 ,marginHorizontal: 20, borderRadius: 15, padding: 10}}>
            <Image style={{marginTop: 5, width: 70, height: 70, borderRadius: 15}} source={{uri: item.photo}} />
            <View style={{justifyContent: 'space-around', padding: 20,marginTop: -10, marginLeft: -30}}>
                <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>{item.name}</Text>
                <Text style={{color: 'black', fontWeight: '500'}}>{item.category}</Text>
            </View>
            <View style={{padding: 5}}>
                <View style={{marginBottom: 15}}>
                    <Button color={'#30C0F3'} style={{color: 'white'}} title='Edit' />
                </View>
                <Button color={'#F57E71'} style={{color: 'white'}} title='Delete' />
            </View> 
          </View>
        )
      })}
    </View>
  )
};

export default MyRecipePage;