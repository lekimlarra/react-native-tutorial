import { View } from "react-native";
import { StyleSheet } from 'react-native';
import { useDeviceOrientation } from '@react-native-community/hooks'
import WelcomeScreen from "./screens/WelcomeScreen";
import ViewImageScreen from "./screens/ViewImageScreen";

export default function Index() {
  
  return (
    //<WelcomeScreen/>
    <ViewImageScreen/>
  );
}

