/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
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

          <TouchableOpacity style={styles.button} >
            <Text style={styles.btnText} >{'ADD'}</Text>
          </TouchableOpacity>
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
  }
});

export default App;
