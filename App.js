import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import {TextInput,Alert, Button, Form, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const[login, setLogin]= useState('')
  const[password,setPassword]= useState('')

  const Validation= () =>{
  console.log (login.length > 6 && password.length > 6)
  }
  return (
    <View style={styles.container}>
      
        <form>
  <label> 
    Login:
    <TextInput type="text" value={login} onChangeText={setLogin}/>
  </label>
  
</form>

<form>
  <label>
    Password:
    <TextInput type="text" value={password} onChangeText={setPassword} />
  </label>
  
  <Button
          title="Validate"
          onPress={ Validation }
        />

</form>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
