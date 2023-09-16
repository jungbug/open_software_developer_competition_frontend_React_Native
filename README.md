# frontend_React_Native   

![](https://img.shields.io/badge/React%20Native-61DAFB?style=flat-square&logo=React&logoColor=black)

This repository contains the implementation of a health management app developed with React Native. The application helps users manage their diet and correct their exercise postures.

## Project Overview

The main goal of this project is to assist users in maintaining a healthy lifestyle by providing personalized diet management and exercise posture correction functionalities. The application has been developed using the Expo framework, which allows for rapid development and testing across multiple platforms.

## Key Features

- **Diet Management**: Users can track their daily food intake, which is then classified into different categories using an ensemble of machine learning models.
- **Exercise Posture Correction**: The app uses the device's camera to capture user's exercise postures, which are then analyzed and corrected if necessary.

### Frontend Configuration  
Manual with Yarn & expo:  

```shell
yarn install
yarn expo start
```

Manual with npm:
```shell
npm install
npm start
```

## Dependencies

This project uses several dependencies for its functionality:

- `@expo/webpack-config` for configuring webpack.
- `@react-native-async-storage/async-storage` for local data storage.
- `axios` for making HTTP requests.
- `expo`, `expo-camera`, `expo-device`, and `expo-image-picker` for various device capabilities.
- `react`, `react-dom`, and `react-native` as fundamental packages for building React Native applications.
- `react-native-dotenv` to load environment variables from .env files in React Native projects.
-  'react-native-svg' and 'react-native-svg-charts' to display SVG charts in our application.
  
DevDependencies include:

 -  '@babel/core': Babel is a toolchain that helps us convert ECMAScript 2015+ code into a backwards compatible version of JavaScript that can be run by older JavaScript engines.

