/**
 * App.js
 *
 * Root component of the app, 
 * responsible for setting up routes.
 *
*/

// Libs
import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Components
import Home from './src/Home';
import Scanner from './src/Scanner';
import Manual from './src/Manual';
import Csv from './src/Csv';

/**
 * createStackNavigator
 *
 * Creates a stack of our routes.
 *
*/
const Navigator = createStackNavigator({
    Home: { screen: Home },
    Scanner: { screen: Scanner },
    Manual: { screen: Manual},
    Csv: { screen: Csv},
});

/**
 * createAppContainer
 *
 * Responsible for managing app state and linking
 * the top-level navigator to the app environment.
 *
*/
const App = createAppContainer(Navigator);

export default App;