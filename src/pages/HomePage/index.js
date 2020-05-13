import React from 'react';
import {View, Text, Button} from 'react-native';
import ImageList from './ImageList';
import ImageModal from './ImageModal';

const HomePage = () => {
  return (
    <View>
      <ImageModal />
      <ImageList />
    </View>
  );
};

export default HomePage;
