# React Native & Expo Components Cheatsheet

## Core Components

### View
The fundamental building block - similar to a `<div>` in web development.

```jsx
import { View } from 'react-native';

<View style={{ flex: 1, backgroundColor: 'white', padding: 20 }}>
  {/* Child components go here */}
</View>
```

**Key props:**

- `style`: Apply styling using JS objects
- `pointerEvents`: Control touch event handling
- `onLayout`: Triggered when component is laid out

### Text

Used for displaying text - like `<p>`, `<span>`, etc. in web.

```jsx
import { Text } from 'react-native';

<Text style={{ fontSize: 16, color: 'black' }}>
  Hello World
</Text>
```

**Key props:**

- `style`: Text-specific styling
- `numberOfLines`: Limit number of lines (with ellipsis)
- `selectable`: Allow text selection
- `onPress`: Handle press events

### Image
Displays images from various sources.

```jsx
import { Image } from 'react-native';

// Local image
<Image source={require('./assets/logo.png')} style={{ width: 100, height: 100 }} />

// Remote image (requires dimensions)
<Image 
  source={{ uri: 'https://example.com/image.jpg' }} 
  style={{ width: 200, height: 200 }}
/>
```

**Key props:**

- `source`: Image source (local require or remote URI)
- `style`: Dimensions and styling
- `resizeMode`: How image should resize ('cover', 'contain', 'stretch', 'repeat', 'center')
- `onLoad`, `onError`: Events for image loading

### ScrollView

Container that allows scrolling of content.

```jsx
import { ScrollView } from 'react-native';

<ScrollView 
  style={{ flex: 1 }}
  contentContainerStyle={{ padding: 20 }}
>
  {/* Scrollable content */}
</ScrollView>
```
**Key props:**

- `horizontal`: Enable horizontal scrolling
- `showsVerticalScrollIndicator`: Show/hide scrollbars
- `refreshControl`: Add pull-to-refresh functionality
- `contentContainerStyle`: Style the content container

### FlatList
Optimized list component for rendering large lists of data.

```jsx
import { FlatList } from 'react-native';

<FlatList
  data={items}
  renderItem={({ item }) => <Text>{item.title}</Text>}
  keyExtractor={(item) => item.id.toString()}
/>
```
**Key props:**

- `data`: Array of data to render
- `renderItem`: Function that renders each item
- `keyExtractor`: Function to extract unique keys
- `ListHeaderComponent`, `ListFooterComponent`: Components for header/footer
- `onEndReached`: Function for infinite scrolling
- `ItemSeparatorComponent`: Component between items

### TextInput
Input field for text entry.

```jsx
import { TextInput } from 'react-native';

<TextInput
  style={{ height: 40, borderWidth: 1, padding: 10 }}
  value={text}
  onChangeText={setText}
  placeholder="Enter text here"
/>
```
**Key props:**

- `value`: Current input value
- `onChangeText`: Function called when text changes
- `placeholder`: Placeholder text
- `secureTextEntry`: For password fields
- `multiline`: Enable multi-line input
- `keyboardType`: Specify keyboard type ('default', 'numeric', 'email-address', etc.)

### Touchable Components
Wrapper components that make their children respond to touches.

```jsx
import { 
  TouchableOpacity, 
  TouchableHighlight,
  TouchableWithoutFeedback,
  Text 
} from 'react-native';

<TouchableOpacity onPress={() => console.log('Pressed!')}>
  <Text>Press Me</Text>
</TouchableOpacity>
```

**Options:**

- `TouchableOpacity`: Reduces opacity when pressed
- `TouchableHighlight`: Changes background color when pressed
- `TouchableWithoutFeedback`: No visual feedback
- `Pressable`: Modern alternative with more customization

## Layout Components

### SafeAreaView

Container that automatically adds padding to avoid notches, status bars, etc.

```jsx
import { SafeAreaView } from 'react-native';

<SafeAreaView style={{ flex: 1 }}>
  {/* Your content */}
</SafeAreaView>
```

### KeyboardAvoidingView
Adjusts layout when keyboard appears.

```jsx
import { KeyboardAvoidingView, Platform } from 'react-native';

<KeyboardAvoidingView
  style={{ flex: 1 }}
  behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
>
  {/* Content that should avoid keyboard */}
</KeyboardAvoidingView>
```

## Expo Specific Components

### Expo Status Bar
Customizable status bar.

```jsx
import { StatusBar } from 'expo-status-bar';

<StatusBar style="auto" /> // 'auto', 'light', 'dark'
```

### Expo Image
Enhanced Image component with modern features.

```jsx
import { Image } from 'expo-image';

<Image
  source="https://example.com/image.jpg"
  style={{ width: 200, height: 200 }}
  contentFit="cover"
  transition={1000}
/>
```

**Key props:**

- `contentFit`: Similar to CSS object-fit ('cover', 'contain', 'fill', 'none', 'scale-down')
- `transition`: Fade duration in milliseconds
- `placeholder`: Blur-up placeholder image or component

### Expo LinearGradient
Creates beautiful gradient backgrounds.

```jsx
import { LinearGradient } from 'expo-linear-gradient';

<LinearGradient
  colors={['#4c669f', '#3b5998', '#192f6a']}
  style={{ flex: 1, padding: 15 }}
>
  {/* Content over gradient */}
</LinearGradient>
```

### Expo WebView
Renders web content within your app.

```jsx
import { WebView } from 'expo-web-view';

<WebView
  style={{ flex: 1 }}
  source={{ uri: 'https://expo.dev' }}
/>
```

## User Interface Components

### Modal
Full-screen overlay.

```jsx
import { Modal, View, Text, Button } from 'react-native';

<Modal
  visible={modalVisible}
  animationType="slide"
  transparent={true}
>
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
      <Text>Modal Content</Text>
      <Button title="Close" onPress={() => setModalVisible(false)} />
    </View>
  </View>
</Modal>
```

### ActivityIndicator
Loading spinner.

```jsx
import { ActivityIndicator } from 'react-native';

<ActivityIndicator size="large" color="#0000ff" />
```

### Button
Simple button component.

```jsx
import { Button } from 'react-native';

<Button
  title="Press me"
  onPress={() => alert('Button pressed')}
  color="#841584"
/>
```

### Switch
Toggle switch.

```jsx
import { Switch } from 'react-native';

<Switch
  value={isEnabled}
  onValueChange={setIsEnabled}
  trackColor={{ false: "#767577", true: "#81b0ff" }}
  thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
/>
```

## Form Components

### Slider

```jsx
// Use @react-native-community/slider instead
import Slider from '@react-native-community/slider';

<Slider
  style={{ width: 200, height: 40 }}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor="#FFFFFF"
  maximumTrackTintColor="#000000"
  onValueChange={(value) => setSliderValue(value)}
/>
```

## Common Styling Patterns

### Flexbox Layout

```jsx
<View style={{ 
  flex: 1,
  flexDirection: 'row', // 'column', 'row', 'column-reverse', 'row-reverse'
  justifyContent: 'center', // 'flex-start', 'flex-end', 'space-between', 'space-around'
  alignItems: 'center', // 'flex-start', 'flex-end', 'stretch'
}}>
  <View style={{ flex: 1, backgroundColor: 'red' }} />
  <View style={{ flex: 2, backgroundColor: 'blue' }} />
</View>
```

### Common Style Props

```jsx
const styles = {
  container: {
    // Layout
    flex: 1,
    width: 100, // or '50%'
    height: 100,
    margin: 10,
    padding: 10,
    
    // Appearance
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    
    // Shadow (iOS)
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    // Shadow (Android)
    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold', // 'normal', '700', etc.
    color: '#333',
    textAlign: 'center', // 'left', 'right', 'justify'
    textDecorationLine: 'underline', // 'line-through', 'underline', 'none'
  }
};
```
