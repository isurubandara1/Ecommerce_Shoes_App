import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    // Handle login logic here
    console.log('Email:', email);
    console.log('Password:', password);
     navigation.navigate('MainTabs');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.arrow} onPress={() => navigation.navigate('FirstPage')}>
          <Ionicons name="arrow-back" size={24} color="white" />
        </TouchableOpacity>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#888"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupLink}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  arrow: {
    position:'absolute',
    top: 50,
    left: 30,
    zIndex: 1,
    borderColor:'#0B95BE',
    borderWidth:3,
    borderRadius:50,
    backgroundColor:'#0B95BE',
    width:50,
    height:50,
    alignItems:'center',
    justifyContent:'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333',
  },
  input: {
    width: width - 40,
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 18,
    color: '#333',
  },
  button: {
    backgroundColor: '#0B95BE',
    borderRadius: 10,
    width: width - 40,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#0B95BE',
    fontSize: 16,
    marginBottom: 20,
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 16,
    color: '#888',
  },
  signupLink: {
    color: '#0B95BE',
    fontSize: 16,
    marginLeft: 5,
  },
});
