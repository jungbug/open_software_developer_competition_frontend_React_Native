import React from 'react';
import { StatusBar, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons } from 'react-native-vector-icons';

import Home from './src/Home';
import People from './src/People';
import Settings from './src/Settings';
import Alarm from './src/Alarm';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('home');

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home />;
      case 'people':
        return <People />;
      case 'settings':
        return <Settings />;
      case 'alarm':
        return <Alarm />;
      default:
        return <Home />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderPage()}</View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('home')}
        >
          <Ionicons name="home-outline" size={24} color={activeTab === 'home' ? 'blue' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('people')}
        >
          <Ionicons name="person-outline" size={24} color={activeTab === 'people' ? 'blue' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('settings')}
        >
          <Ionicons name="settings-outline" size={24} color={activeTab === 'settings' ? 'blue' : 'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('alarm')}
        >
          <Ionicons name="notifications-outline" size={24} color={activeTab === 'alarm' ? 'blue' : 'black'} />
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f2f2f2',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
