import React from 'react';
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

import Icon  from 'react-native-vector-icons/Ionicons';

const DetailRecipePage = ({navigation}) => {
  return (
    <View style={{backgroundColor: 'white' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'light-content'} />
      {/*Banner Recipe*/}
      <View style={{height: '50%'}}>
        <TouchableOpacity onPress={() => navigation.pop()} style={{position: 'absolute', elevation: 10, zIndex: 10, top: 30, left: 20}}>
            <Icon name="arrow-back" color={"white"} size={25} />
        </TouchableOpacity>
        <Image style={{height: '100%', width: '100%'}} source={require('../../Asset/recipe.png')} />
        <View style={{marginTop: -200, marginHorizontal: 30, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between'}}>
            <View style={{width: '70%'}}>
                <Text style={{color: 'white', fontSize: 40, fontWeight: 'bold'}}>Sandwich with Egg</Text>
                <Text style={{color: 'white', fontWeight: 'bold', width: '70%'}}>By Chef Ronald Humson</Text>
            </View>
            <TouchableOpacity style={{backgroundColor: '#EFC81A' ,justifyContent: 'center', alignItems: 'center', height: 40, width: 40, borderRadius: 15}}>
                <Icon name="bookmark-outline" color={"white"} size={25}/>
            </TouchableOpacity>
            <TouchableOpacity style={{backgroundColor: 'white' ,justifyContent: 'center', alignItems: 'center', height: 40, width: 40, borderRadius: 15}}>
                <Icon name="thumbs-up-outline" color={"#EFC81A"} size={25}/>
            </TouchableOpacity>
        </View>
      </View>
      {/*Recipe Ingredients*/}
      <View style={{backgroundColor: 'white', borderRadius: 20, marginTop: -20}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', padding: 20}}>Ingredients</Text>
        <Text style={{color: '#666666', fontSize: 15, fontWeight: 'bold', paddingHorizontal: 50, marginTop: 10}}>- 2 slices whole-grain bread (bakery-fresh recommended) - 1 tablespoon hummus - 2 slices tomato - 1/2 small cucumber, thinly sliced lengthwise - 1 slice low-fat cheese</Text>
      </View>
    </View>
  )
};

export default DetailRecipePage;