import { useState } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';
import { Button } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { ScreenContainer } from '~/layout/ScreenContainer';
import { Routes } from '~/navigation/Route';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

export default function LoginScreen({
  navigation,
}: {
  navigation: NavigationProp<ParamListBase>;
}) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <ScreenContainer Isheader>
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
          onPress={() => navigation.navigate(Routes.STARSHIP_FEED_SCREEN)}
        >
          Login
        </Button>
        <TouchableOpacity onPress={() => navigation.navigate(Routes.TERMS_SCREEN)}>
          <Text style={{ textAlign: 'center', marginTop: 10 }}>
            Go to Terms and Conditions
          </Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
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
