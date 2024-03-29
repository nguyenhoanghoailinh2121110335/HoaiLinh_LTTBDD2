import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ImageBackground, Alert } from 'react-native';

const Register = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  const handleRegister = () => {
      if (email === "" || password === "" || confirmPassword === "") {
          Alert.alert('Vui lòng điền đầy đủ thông tin !');
      }
      else {
          if (password !== confirmPassword) {
              Alert.alert('Mật khẩu không trùng khớp.');
          }
          else {
              const newAccount = {
                  email: email,
                  password: password,
              };
              addRegister(newAccount);
          }
      }
  }

  const addRegister = async (itemAccount) => {
      try {
          const existingUserItems = await AsyncStorage.getItem('userItems');
          let userItems = [];
          if (existingUserItems) {
              userItems = JSON.parse(existingUserItems);
          }

          // Kiểm tra xem email đã tồn tại trong danh sách đăng ký chưa
          const existingUserIndex = userItems.findIndex(
              (item) => item.email === itemAccount.email
          );

          if (existingUserIndex !== -1) {
              Alert.alert('Tài khoản đã tồn tại');
          } else {
              const newAccount = {
                  ...itemAccount
              };
              userItems.push(newAccount);
              await AsyncStorage.setItem('userItems', JSON.stringify(userItems));
              console.log('aaa', userItems);
              alert('Đăng kí thành công');
              navigation.navigate('Login');
          }
      } catch (error) {
          console.log('Error adding account:', error);
      }
  };

return (
  <View style={styles.container}>
    <ImageBackground
                source={require('../assets/bg.jpg')}
                style={styles.back}
            >
                 <Image source={require('../assets/logo2.jpg')} style={styles.logo} />
          <View style={styles.content}>
              <Text style={styles.new}>New Account</Text>
              <TextInput
                  style={styles.input}
                  placeholder="Email"
                  keyboardType="input your email-address"
                  value={email}
                  onChangeText={(value) => setEmail(value)}
              />

              <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry
                  value={password}
                  onChangeText={(value) => setPassword(value)}
              />

              <TextInput
                  style={styles.input}
                  placeholder="ConfirmPassword"
                  secureTextEntry
                  value={confirmPassword}
                  onChangeText={(value) => setConfirmPassword(value)}
              />

              <TouchableOpacity
                  style={styles.button}
                  onPress={handleRegister}
              >
                  <Text style={styles.buttonText}>Register</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                            <Text style={styles.link}>Login</Text>
                </TouchableOpacity>
          </View>
          </ImageBackground>
  </View>
);
}
const styles = StyleSheet.create({
    logo: {
        marginTop: 25,
        marginLeft: 105,
        width: 200,
        height: 300,
        resizeMode: 'contain',
      },
    back:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    
      },
  link: {
    marginTop: 30,
    color: 'white',
    fontSize: 20,
    justifyContent: 'center',
  },
  new:{
    color: 'white',
    marginBottom:20,
    fontSize: 35,
    marginTop: 16,
  },
  input: {
      color: 'gray',
      backgroundColor: '#ffff',
      margin: 10,
      borderRadius: 50,
      height: 70,
      width: '70%',
      borderWidth: 1,
      marginBottom: 10,
      paddingLeft: 10,
  },
  container: {
      flex: 1,
      backgroundColor: 'white',

  },
  buttonUserName: {
      justifyContent: 'left',
  },
  content: {
      flex: 1,
      alignItems: 'center',
  },
  text: {
      fontSize: 18,
      marginBottom: 16,
  },
  button: {
      backgroundColor: '#778899',
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 50,
      width: '70%',
      marginTop: 30,
      alignItems: 'center',
  },
  buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
  },
  footer: {
      padding: 16,
      backgroundColor: '#f9f9f9',
      alignItems: 'center',
  },
  footerText: {
      fontSize: 12,
      color: '#888',
  },
});



export default Register;
