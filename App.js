import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './pages/HomeScreen/HomeScreen'
import Header from './components/Header';
import Product_detial from './components/Product_detail';
import Cart from './components/Cart';
import Menu from './components/Menu';
import Login from './pages/Login/login';


const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 15 }}>
      <Header></Header>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
          />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="SingleProduct" component={Product_detial} options={{ headerTitle: 'Chi tiết sản phẩm' }} />
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
        <Menu></Menu>
      </NavigationContainer>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});