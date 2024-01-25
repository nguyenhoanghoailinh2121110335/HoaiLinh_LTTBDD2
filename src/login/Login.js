import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground,Image, TextInput, Alert } from 'react-native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (email === '' || password === '') {
      Alert.alert('Vui lòng điền đầy đủ thông tin !');
    } else {
      try {
        const existingUserItems = await AsyncStorage.getItem('userItems');
        if (!existingUserItems) {
          Alert.alert('Không tìm thấy tài khoản. Vui lòng đăng kí !');
          return;
        }

        const userItems = JSON.parse(existingUserItems);
        const existingUser = userItems.find(
          (item) => item.email === email && item.password === password
        );

        if (existingUser) {
          Alert.alert('Đăng nhập thành công');
          // Navigate to the home screen or any other screen
          navigation.navigate('HomeScreen');
        } else {
          Alert.alert('Sai email hoặc mật khẩu');
        }
      } catch (error) {
        console.log('Error retrieving account:', error);
      }
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
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
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

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.row}>
                        <Text style={styles.text1}>Do not have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                            <Text style={styles.link}>Register</Text>
                        </TouchableOpacity>
                    </View>
      </View>
      </ImageBackground>
    </View>
    
  );
};

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
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    marginBottom:20,
    fontSize: 35,
  },
  text1: {
    color: 'gray',
    fontSize: 12,
    marginTop:20,
  },
  link: {
    color: 'white',
    fontSize: 20,
    marginLeft: 35,
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
});

export default Login;