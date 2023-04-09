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
  TouchableOpacity
} from 'react-native';

import axios from "axios"
import {API_URL} from "@env"

import { TextInput } from 'react-native-paper';
import Icon  from 'react-native-vector-icons/Ionicons';

const SearchPage = ({navigation}) => {
    const [search, onChangeSearch] = React.useState('');
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        const getData = async () => {
          return await axios.get(API_URL+"/recipe").then(
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
      <View style={{backgroundColor: 'white' , height: '100%'}}>
        <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
        <TextInput mode="outlined" left={<TextInput.Icon icon={'magnify'} iconColor='#C4C4C4' />} style={styles.input} activeOutlineColor={'#C4C4C4'} 
        onChangeText={onChangeSearch} value={search} placeholder='Search Pasta, Bread, etc' placeholderTextColor={'#C4C4C4'}/>
        {/*Recipe Data*/}
        <ScrollView>
            {!recipe ? <Text>Loading</Text> : recipe?.map((item,index) => {
                return(
                    <TouchableOpacity onPress={() => navigation.push('DetailRecipe')}>
                        <View style={{marginLeft: 20}}>
                            <View style={{backgroundColor: 'white',alignItems: 'center', flexDirection: 'row',marginHorizontal: 20, borderRadius: 15, padding: 10}}>
                                <Image style={{marginTop: 5, width: 70, height: 70, borderRadius: 15}} source={{uri: item.photo}} />
                                <View style={{justifyContent: 'space-around', padding: 20}}>
                                    <Text style={{color: 'black', fontWeight: '500', fontSize: 17}}>{item.name}</Text>
                                    <View style={{flexDirection: 'row', marginTop: 10, alignItems: 'center'}}>
                                        <Icon name='star' color={'#FFB200'} size={15}/>
                                        <Text style={{color: 'black', fontWeight: '500'}}> 4.3</Text>
                                        <Text style={{color: '#6E80B0', fontWeight: '500'}}> • </Text>
                                        <Text style={{color: '#6E80B0', fontWeight: '500'}}>{item.category}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            })}
        </ScrollView>
      </View>
    )
};

const styles = StyleSheet.create({
    input: {
      height: 40,
      marginHorizontal: 20,
      marginVertical: 20,
      padding: 10,
      borderRadius: 10,
      backgroundColor: '#F5F5F5',
    },
});
  
export default SearchPage;