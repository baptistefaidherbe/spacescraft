import { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import TermScreen from '~/components/TermScreen';

export default function LoginScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <View style={{ flex: 1, padding: 8 }}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
          keyboardType='email-address'
          style={styles.inputField}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          secureTextEntry={!isPasswordVisible}
          placeholder='Password'
          style={styles.inputField}
          keyboardType='numeric'
        />
        <TouchableOpacity onPress={togglePasswordVisibility}>
          <Ionicons
            name={isPasswordVisible ? 'eye-off' : 'eye'}
            size={24}
            color='black'
            style={{ justifyContent: 'flex-end' }}
          />
        </TouchableOpacity>
      </View>
      <Button
        icon='login'
        mode='contained'
        onPress={() => console.log('Pressed')}
      >
        Login
      </Button>
      <TermScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    padding: 14,
    fontSize: 15,
    width: '90%',
  },
  inputContainer: {
    borderWidth: 2,
    margin: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
