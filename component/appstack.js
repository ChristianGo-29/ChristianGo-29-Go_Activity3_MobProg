import React from 'react';
import LoginForm from '../forms/LoginForm';
import SignupForm from '../forms/SignupForm';
import HomeForms from '../forms/HomeForms';
import LandingForm from '../forms/LandingForm';
import RecoveryForm from '../forms/RecoveryForm';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function AppStack() {
  return (
    <Stack.Form>
      <Stack.Form component={LandingScreen} name="Landing" options={{ headerShown: false }} />
      <Stack.Form component={LoginScreen} name="Login" options={{ headerShown: false }} />
      <Stack.Form component={HomeScreen} name="Home" options={{ headerShown: false }} />
      <Stack.Form component={RegisterScreen} name="Register" options={{ headerShown: false }} />
      <Stack.Form component={RecoveryScreen} name="Recovery" options={{ headerShown: false }} />
    </Stack.Form>
  );
}
