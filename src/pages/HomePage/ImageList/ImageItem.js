import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const ImageItem = ({
  item = {
    albumId: '',
    id: '',
    title: '',
    url: '',
    thumbnailUrl: '',
  },
  onPress = () => {}
}) => {
  return (
    <TouchableOpacity style={{margin: 5}} onPress={onPress}>
      <Image 
        style={styles.tinyLogo2}
        source={{
          uri: item.thumbnailUrl
        }}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  tinyLogo2: {
    width: Dimensions.get('window').width / 2 - 15,
    height: Dimensions.get('window').width / 2 - 15,
  },
  logo: {
    width: 66,
    height: 58,
  },
})

export default ImageItem;
