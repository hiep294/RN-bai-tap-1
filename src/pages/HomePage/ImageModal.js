import React from 'react';
import {View, Text, Modal, StyleSheet, Dimensions, Image} from 'react-native';
import {useSelector, connect} from 'react-redux';
import BtnToggleImageModal from './ImageModal/BtnToggleImageModal';

const ImageModal = ({imageModalVisible, imageChosen}) => {
  const {albumId, id, title, url, thumbnailUrl} = imageChosen;
  return (
    <Modal visible={imageModalVisible}>
      <Text style={styles.header} allowFontScaling={false}>
        {title}
      </Text>
      <View style={{padding: 10}}>
        <Image
          style={styles.logo2}
          source={{
            uri: thumbnailUrl,
          }}
        />
      </View>
      <View style={{marginHorizontal: 10}}>
        <BtnToggleImageModal title="Back" />
      </View>
    </Modal>
  );
};

const mapStateToProps = state => ({
  imageModalVisible: state.homepage.imageModalVisible,
  imageChosen: state.homepage.imageChosen,
});

const styles = StyleSheet.create({
  header: {
    padding: 5,
    textAlign: 'center',
    fontSize: 25,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo2: {
    width: Dimensions.get('window').width - 20,
    height: Dimensions.get('window').width - 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
});

export default connect(mapStateToProps)(ImageModal);
