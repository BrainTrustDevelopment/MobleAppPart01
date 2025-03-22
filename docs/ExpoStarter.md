# Expo CLI Cheatsheet: Starting and Managing React Native Apps

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn
- For iOS development: macOS and Xcode
- For Android development: Android Studio and Android SDK

## Installation

```bash
# Install Expo CLI globally
npm install -g expo-cli

# Verify installation
expo --version
```

## Creating a New Project

```bash
# Create a new project with default template
expo init MyNewApp

# Create using a specific template
expo init MyNewApp --template blank
expo init MyNewApp --template blank-typescript
expo init MyNewApp --template tabs

# Using npx (no global installation required)
npx create-expo-app MyNewApp
```

## Project Templates

- **blank**: Minimal dependencies for a clean start
- **blank-typescript**: Blank template with TypeScript
- **tabs**: Navigation structure with tabs
- **minimal**: Bare minimum needed to run Expo

## Running Your App

```bash
# Navigate to project directory
cd MyNewApp

# Start the development server
npx expo start
# OR
npm start
# OR
yarn start

# Start with clearing cache
npx expo start -c

# Start on a specific platform
npx expo start --android
npx expo start --ios
npx expo start --web
```

## Expo Go App

- Download the Expo Go app on your iOS or Android device
- Scan the QR code from the terminal or browser interface
- Connect device to the same network as your development machine

## Viewing on Simulators/Emulators

```bash
# iOS Simulator (macOS only)
npx expo start --ios

# Android Emulator
npx expo start --android
```

## Development Workflow Commands

```bash
# Install a new package
npx expo install package-name

# Add Expo modules 
npx expo install expo-camera expo-location

# Adding dependencies (React Navigation example)
npx expo install @react-navigation/native
npx expo install react-native-screens react-native-safe-area-context
```

## Expo Configuration

- Edit `app.json` to configure your app
- Important fields:
  - `name`: App name
  - `slug`: URL path for your project
  - `version`: App version
  - `orientation`: Device orientation
  - `icon`: App icon
  - `splash`: Splash screen
  - `updates`: Over-the-air update behavior
  - `ios`: iOS-specific settings
  - `android`: Android-specific settings

## Publishing Updates

```bash
# Publish to default project on Expo
npx expo publish

# Publish to a specific channel
npx expo publish --release-channel production
```

## Building for App Stores

```bash
# Build for iOS App Store
expo build:ios

# Build for Android Play Store
expo build:android

# With EAS (Expo Application Services)
npx eas build --platform ios
npx eas build --platform android
```

## Common Project Commands

```bash
# Generate native code (eject)
npx expo eject

# Upgrade Expo SDK version
expo upgrade

# View project dependencies
npx expo-doctor

# Show all connected devices
npx expo client:install:ios
npx expo client:install:android
```

## Environment Setup Troubleshooting

```bash
# Check for environment issues
npx expo doctor

# Clear npm cache
npm cache clean --force

# Clear watchman cache (macOS/Linux)
watchman watch-del-all

# Reset Metro bundler cache
npx expo start -c
```

## Debugging

- Use React Native Debugger
- Enable Chrome DevTools: shake the device and select "Debug JS Remotely"
- Access Expo development tools: shake the device or press `Cmd+D` (iOS Simulator) or `Ctrl+M` (Android Emulator)

## Useful Expo Documentation Links

- [Expo Documentation](https://docs.expo.dev/)
- [API Reference](https://docs.expo.dev/versions/latest/)
- [Expo SDK](https://docs.expo.dev/versions/latest/sdk/overview/)
- [Publishing](https://docs.expo.dev/workflow/publishing/)
- [Building standalone apps](https://docs.expo.dev/distribution/building-standalone-apps/)

## Example: Complete Project Setup Flow

```bash
# Install Expo CLI
npm install -g expo-cli

# Create a new project
expo init AwesomeProject --template tabs

# Navigate to project
cd AwesomeProject

# Install additional packages
npx expo install expo-camera
npx expo install @react-navigation/native @react-navigation/stack

# Start development server
npx expo start

# Preview on device: Scan QR code with Expo Go app
# OR
# Preview on simulator
npx expo start --ios
```

## EAS (Expo Application Services) Commands

```bash
# Install EAS CLI
npm install -g eas-cli

# Login to Expo account
eas login

# Configure EAS Build
eas build:configure

# Submit to app stores
eas submit -p ios
eas submit -p android

# Create update
eas update --branch production
```