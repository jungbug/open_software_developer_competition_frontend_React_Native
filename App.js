import React from 'react';
import { StatusBar, TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Ionicons, FontAwesome5 } from 'react-native-vector-icons';

import Home from './src/Home/Home';
import Photo from './src/Photo/Photo';
import Video from './src/Video/Video';
import More from './src/More/More';

export default function App() {
  const [activeTab, setActiveTab] = React.useState('home');

  const navigateToMore = () => {
    setActiveTab('more');
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'home':
        return <Home onNavigateToMore={navigateToMore} />;
      case 'photo':
        return <Photo />;
      case 'video':
        return <Video />;
      case 'more':
        return <More />;
      default:
        return <Home onNavigateToMore={navigateToMore} />;
    }
  };


  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.content}>{renderPage()}</View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('home')}
        >
          <Ionicons name="home-outline" size={24} color={activeTab === 'home' ? '#000' : '#c0c0c0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('photo')}
        >
          <FontAwesome5 name="camera" size={24} color={activeTab === 'photo' ? '#000' : '#c0c0c0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('video')}
        >
          <FontAwesome5 name="dumbbell" size={24} color={activeTab === 'video' ? '#000' : '#c0c0c0'} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab('more')}
        >
          <FontAwesome5 name="chart-line" size={24} color={activeTab === 'more' ? '#000' : '#c0c0c0'} />
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#fff',
    borderColor: 'black',
    borderWidth: 1,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
