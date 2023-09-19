import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: 'orange' },
          headerTitleAlign: 'center',
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={({ navigation }) => ({
            title: 'My Homepage',
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('User')}>
                <AntDesign name="user" size={24} color="black" />  
              </Pressable>
            ),
          })}
        />
        <Stack.Screen 
        name='User' 
        component={User}
        options={({ navigation }) => ({
          title: 'User Page',
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Info')}>
                <AntDesign name="info" size={24} color="black" />  
              </Pressable>
            ),
          })}
        />
        <Stack.Screen 
        name='Info' 
        component={Info}
        options={({ navigation }) => ({
          title: 'User Page',
            headerRight: () => (
              <Pressable onPress={() => navigation.navigate('Home')}>
                <AntDesign name="home" size={24} color="black" />  
              </Pressable>
            ),
          })}
        />
      </Stack.Navigator>
      {/* Set statusbar text color */}
      <StatusBar style='dark'/>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    /* Example pressable in function ,can be removed */
    <Pressable onPress={() => navigation.navigate('User')}>
      <Text style={styles.text}>USER</Text>
    </Pressable>
  );
}

function User({ navigation }) {
  return (
    /* Example pressable in function ,can be removed */
    <Pressable onPress={() => navigation.navigate('Info')}>
      <Text style={styles.text}>INFO</Text>
    </Pressable>
  );
}

function Info({ navigation }) {
  return (
    /* Example pressable in function ,can be removed */
    <Pressable onPress={() => navigation.navigate('Home')}>
      <Text style={styles.text}>HOME</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
  },
});