# My First App: Step-by-Step Tutorial

In this tutorial, we'll create a simple one-page Expo app with a form that collects a user's name, age, and city of birth. When the form is submitted, a modal will appear displaying this information in a greeting. This tutorial is specifically designed for Expo SDK 52.0.40.

## Prerequisites

- Node.js installed on your computer (version 16.0.0 or newer recommended)
- Basic knowledge of JavaScript and React

## Step 1: Set Up the Expo Project

First, let's create a new Expo project:

```bash
# Create a new Expo project using the latest version
npx create-expo-app@latest FormModalApp --template blank

# Navigate to the project directory
cd FormModalApp
```

## Step 2: Configure the Project

Let's make sure we're using Expo SDK 52.0.40. Update your `package.json` file to specify the exact Expo version:

```json
"dependencies": {
  "expo": "~52.0.40",
  ...
}
```

Then install the dependencies:

```bash
npm install
```

## Step 3: Create the Form Component

Now, let's create our application. Replace the contents of the `App.js` file with the following code:

```jsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Modal,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  // State for form fields
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  
  // State for modal visibility
  const [modalVisible, setModalVisible] = useState(false);
  
  // Function to handle form submission
  const handleSubmit = () => {
    // Basic validation
    if (name.trim() === '' || age.trim() === '' || city.trim() === '') {
      alert('Please fill in all fields');
      return;
    }
    
    // Show the modal with user information
    setModalVisible(true);
  };

  // Function to reset the form
  const resetForm = () => {
    setName('');
    setAge('');
    setCity('');
    setModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <StatusBar style="auto" />
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.formContainer}>
            <Text style={styles.title}>Personal Information</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Name</Text>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Age</Text>
              <TextInput
                style={styles.input}
                value={age}
                onChangeText={setAge}
                placeholder="Enter your age"
                keyboardType="numeric"
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.label}>City of Birth</Text>
              <TextInput
                style={styles.input}
                value={city}
                onChangeText={setCity}
                placeholder="Enter your city of birth"
              />
            </View>
            
            <Pressable 
              style={({pressed}) => [
                styles.button,
                pressed && styles.buttonPressed
              ]} 
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Submit</Text>
            </Pressable>
          </View>
          
          {/* Modal for displaying greeting */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.modalTitle}>Hello, {name}!</Text>
                <Text style={styles.modalText}>
                  You are {age} years old and were born in {city}.
                </Text>
                <Text style={styles.modalText}>
                  Welcome to our app!
                </Text>
                
                <Pressable
                  style={({pressed}) => [
                    styles.closeButton,
                    pressed && styles.buttonPressed
                  ]}
                  onPress={resetForm}
                >
                  <Text style={styles.buttonText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#555',
  },
  input: {
    backgroundColor: '#f9f9f9',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#4e90fe',
    borderRadius: 5,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonPressed: {
    backgroundColor: '#3a78d4',
    transform: [{ scale: 0.98 }],
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#555',
  },
  closeButton: {
    backgroundColor: '#4e90fe',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
    marginTop: 15,
  },
});
```

## Step 4: Test the Application

Now, let's run the application to test it:

```bash
# Start the Expo development server
npx expo start
```

This will start the Expo development server. You can then:
- Press 'a' to run on an Android emulator (requires Android Studio)
- Press 'i' to run on an iOS simulator (requires Xcode on macOS)
- Or scan the QR code with the Expo Go app on your physical device

## Step 5: Understanding the Key Updates for Expo SDK 52

Let's break down the key changes and best practices for Expo SDK 52:

### 1. Using SafeAreaView

```jsx
<SafeAreaView style={styles.safeArea}>
  {/* Rest of your app */}
</SafeAreaView>
```

In Expo SDK 52, it's recommended to use `SafeAreaView` to ensure your content respects the safe areas of the device (notches, home indicators, etc.).

### 2. Pressable instead of TouchableOpacity

```jsx
<Pressable 
  style={({pressed}) => [
    styles.button,
    pressed && styles.buttonPressed
  ]} 
  onPress={handleSubmit}
>
  <Text style={styles.buttonText}>Submit</Text>
</Pressable>
```

Expo SDK 52 recommends using `Pressable` instead of the older `TouchableOpacity` component. `Pressable` offers more customization options and better feedback states.

### 3. Form Reset Functionality

```jsx
// Function to reset the form
const resetForm = () => {
  setName('');
  setAge('');
  setCity('');
  setModalVisible(false);
};
```

I've added a reset function that clears the form when the user closes the modal, providing a better user experience.

### 4. Better Keyboard Handling

```jsx
<KeyboardAvoidingView
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  style={styles.container}
>
  <ScrollView contentContainerStyle={styles.scrollContainer}>
    {/* Form content */}
  </ScrollView>
</KeyboardAvoidingView>
```

This pattern ensures the keyboard doesn't obscure the form inputs on different devices and platforms.

## Step 6: Potential Enhancements

### 1. Add Form Validation with Expo SDK 52

```bash
# Install Yup for validation
npm install yup
```

Then implement validation in your component:

```jsx
import * as Yup from 'yup';

// Define validation schema
const formSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  age: Yup.number().required('Age is required').positive().integer(),
  city: Yup.string().required('City is required')
});

// In your handleSubmit function
const handleSubmit = async () => {
  try {
    await formSchema.validate({ name, age, city });
    setModalVisible(true);
  } catch (error) {
    alert(error.message);
  }
};
```

### 2. Use Expo SecureStore for Data Persistence

```bash
# Install SecureStore
npx expo install expo-secure-store
```

Then use it to save and retrieve user data:

```jsx
import * as SecureStore from 'expo-secure-store';

// Save user data
const saveUserData = async () => {
  const userData = JSON.stringify({ name, age, city });
  await SecureStore.setItemAsync('userData', userData);
};

// Load user data
const loadUserData = async () => {
  const userData = await SecureStore.getItemAsync('userData');
  if (userData) {
    const { name, age, city } = JSON.parse(userData);
    setName(name);
    setAge(age);
    setCity(city);
  }
};
```

### 3. Add Reanimated for Smooth Animations

```bash
# Install Reanimated
npx expo install react-native-reanimated
```

Then update your babel config in `babel.config.js`:

```js
module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin'],
  };
};
```

## Challenge: Add an Occupation Field

Now that you've built the basic form, it's time to put your skills to the test with this challenge:

### Challenge Description:
1. Add a new "Occupation" text input field to the form
2. Update the state management to handle this new field
3. Display the occupation in the modal greeting
4. Add appropriate styling for the new field
5. Ensure the form validation checks that occupation is not empty

### Hints:
1. You'll need to add a new state variable:
   ```jsx
   const [occupation, setOccupation] = useState('');
   ```

2. The TextInput component should follow the same pattern as the other fields:
   ```jsx
   <View style={styles.inputGroup}>
     <Text style={styles.label}>Occupation</Text>
     <TextInput
       style={styles.input}
       value={occupation}
       onChangeText={setOccupation}
       placeholder="Enter your occupation"
     />
   </View>
   ```

3. Don't forget to update your validation check and reset function!

4. You'll need to modify the modal content to display the occupation information:
   ```jsx
   <Text style={styles.modalText}>
     You are {age} years old, were born in {city}, and work as a {occupation}.
   </Text>
   ```

### Bonus Challenge:
Add a dropdown/picker for the occupation field with some predefined options instead of a free-form text input.

## Conclusion

You've now built a simple Expo app with a form and modal using Expo SDK 52.0.40. This example demonstrates several modern React Native patterns and best practices:

- Using `Pressable` for touch interactions
- Proper keyboard handling with `KeyboardAvoidingView`
- Safe area considerations with `SafeAreaView`
- Form handling with controlled components
- Modal implementation
- Modern styling approaches

By following this tutorial and completing the challenge, you'll have gained practical experience in building interactive forms in React Native that you can apply to more complex applications with Expo.