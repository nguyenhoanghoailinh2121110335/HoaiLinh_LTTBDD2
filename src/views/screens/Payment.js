import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCVV] = useState('');

  const handlePayment = () => {
    // Xử lý thanh toán khi nhấn nút "Thanh toán"
  };

  return (
    <ScrollView style={styles.container}>
     
      <View style={styles.header}>
        <Image source={require('../../assets/logo1.png')} style={styles.logo} />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={cardNumber}
          onChangeText={setCardNumber}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your phone number"
          value={expiryDate}
          onChangeText={setExpiryDate}
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your address"
          value={cvv}
          onChangeText={setCVV}
        //   secureTextEntry
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePayment}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    marginTop: 150,
    marginBottom: 80,
    width: 150,
    height: 100,
    resizeMode: 'contain',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  paymentOptions: {
    marginBottom: 20,
  },
  paymentLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  paymentIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentIcon: {
    marginRight: 10,
  },
  button: {
    backgroundColor: '#778899',
    paddingVertical: 12,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});


export default Payment;