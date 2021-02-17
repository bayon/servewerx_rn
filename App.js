import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Image, StyleSheet } from 'react-native';
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeScreen from "./screens/HomeScreen";
import LogoutScreen from "./screens/LogoutScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ServiceNeededScreen from "./screens/ServiceNeededScreen";
import ServiceProvidedScreen from "./screens/ServiceProvidedScreen";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//PACKAGE>JSON HOMEPAGE:
// ? https://www.servewerx.com/static/js/2.906ceab3.chunk.js net::ERR_ABORTED 404 (Not Found)

const HeaderLeft = () => {
  const navigation = useNavigation();
  return (
     
    <MaterialIcons
      name="menu"
      size={24}
      onPress={() => {
        navigation.openDrawer();
      }}
    />

     
  );
};

const HeaderRight = () => {
  const navigation = useNavigation();
  return (
    
     <Image
        source={require("./assets/servewerx_logo.png")}
        style={styles.logo}
      />
    
  );
};

function homeNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen name="servewerx.com" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function registerNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

function logoutNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Logout" component={LogoutScreen} />
    </Stack.Navigator>
  );
}

function serviceProvidedNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Service Provided" component={ServiceProvidedScreen} />
    </Stack.Navigator>
  );
}

function serviceNeededNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => <HeaderLeft />,
      }}
    >
      <Stack.Screen name="Service Needed" component={ServiceNeededScreen} />
    </Stack.Navigator>
  );
}
function tabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="ServiceProvided"
      barStyle={{ marginBottom: 30, fontSize: 40 }}
      tabBarOptions={{
        labelStyle: {
          fontSize: 30,
          padding: 15,
        },
      }}
    >
      <Tab.Screen name="Service Provided" component={serviceProvidedNavigator} />
      <Tab.Screen name="Service Needed" component={serviceNeededNavigator} />
    </Tab.Navigator>
  );
}

export default function App() {
  //Error: could not find react-redux context value; please ensure the component is wrapped in a <Provider>

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Login">
          <Drawer.Screen name="Servewerx" component={tabNavigator} />
          <Drawer.Screen name="Login" component={homeNavigator} />
          <Drawer.Screen name="Register" component={registerNavigator} />
          <Drawer.Screen name="Logout" component={logoutNavigator} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 50,
    marginTop:10
  }
})