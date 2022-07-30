/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';



export const App = () => {
 const [goalInput, setGoalInput] = useState('');
 const [goalsArray, setGoalsArray] = useState([]);

/**
 * when the user will click on add
 * The current text will be added to the goals array with a _id
 */
 const onAdd = () => {
    const addObj = {
      _id: Math.random().toString(),
      title: goalInput  
    };

    setGoalsArray( goalsArray => [...goalsArray,addObj] );
    setGoalInput('');
 };

  return(
    <SafeAreaView style={styles.mainContainer} >
        <Text style={styles.headerText} >{"Add You Daily Goal's"}</Text>
        <View style={styles.inputView} >
          <TextInput
            value={ goalInput }
            placeholder={'Enter Your Goal'}
            onChangeText={(value) => {
              setGoalInput(value);
            }}
            style={styles.inputText}
            autoCapitalize={false}
            autoCorrect={false}
          />

          <TouchableOpacity onPress={onAdd} disabled={ goalInput?.length === 0 } style={styles.button} >
            <Text style={styles.btnText} >{'ADD'}</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.listView} >
          {
            goalsArray?.map((item) => <Pressable style={({pressed}) => {
              pressed && styles.pressedStyle
            }} >
              <Text style={styles.listText} key={ item?._id } >{item?.title}</Text></Pressable> )
          }
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor: 'white'
  },
  headerText:{
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: '600',
  },
  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
    justifyContent: 'space-between'
  },
  inputText:{
    borderWidth: 1,
    borderColor:'grey',
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '80%',
    borderRadius: 10,
    color: 'black'
  },
  button: {
    width: '18%',
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  btnText:{
    fontSize: 13,
    padding: 10,
    alignSelf: 'center',
    color: 'white',
    fontWeight: '900'
  },
  listView:{
    marginHorizontal: 20,
  },
  listText:{
    fontSize: 16,
    marginVertical: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    color :'white',
    backgroundColor: 'red',
  },
  pressedStyle:{
    opacity: 0.3
  }
});

export default App;
