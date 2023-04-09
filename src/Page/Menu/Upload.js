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

import { TextInput } from 'react-native-paper';

const UploadPage = ({navigation}) => {
  const [title, onChangeTitle] = React.useState('');
  const [ingredient, onChangeIngredient] = React.useState('');

  return (
    <View style={{backgroundColor: '#f7f7f7' , height: '100%'}}>
      <StatusBar translucent backgroundColor="transparent" barStyle={'dark-content'} />
      <Text style={{color:'#EFC81A', fontSize: 30, textAlign: 'center', fontWeight: '500', marginTop: 70}}>Add Your Recipe</Text>
      <SafeAreaView style={{margin: 25}}>
        <TextInput mode="outlined" left={<TextInput.Icon icon={'book-open-blank-variant'} iconColor='#C4C4C4' />} style={styles.input} activeOutlineColor={'#EFC81A'} onChangeText={onChangeTitle} value={title} placeholder='Title' placeholderTextColor={'#C4C4C4'}/>
        <TextInput mode="outlined" style={styles.textarea} activeOutlineColor={'#EFC81A'}  onChangeText={onChangeIngredient} value={ingredient} placeholder='Ingredient' placeholderTextColor={'#C4C4C4'}/>
        <TextInput mode="outlined" style={styles.input} activeOutlineColor={'#EFC81A'} placeholder='Add photo' placeholderTextColor={'#C4C4C4'}/>
        <TextInput mode="outlined" style={styles.input} activeOutlineColor={'#EFC81A'} placeholder='Category' placeholderTextColor={'#C4C4C4'}/>
        <Button onPress={() => navigation.push('BottomNav')}color={'#EFC81A'} title='POST' />
      </SafeAreaView>
    </View>
  )
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  textarea: {
    height: 200,
    marginTop: 12,
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
  }
});

export default UploadPage;