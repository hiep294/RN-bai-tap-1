import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import ImageItem from './ImageList/ImageItem';
import {connect} from 'react-redux';
import homepageActions from './logic/actions';

const ImageList = ({imageList, setImageChosen, toggleModal, getDbImages}) => {
  const onPressItem = item => {
    setImageChosen(item);
    toggleModal();
  };

  useEffect(() => {
    // getDbImages();
  }, []);

  return (
    <View>
      <FlatList
        style={{padding: 5}}
        data={imageList}
        numColumns={2}
        keyExtractor={item => `${item.id}`}
        renderItem={({item}) => {
          return <ImageItem item={item} onPress={() => onPressItem(item)} />;
        }}
      />
    </View>
  );
};

const mapStateToProps = state => ({
  imageList: state.homepage.imageList,
});

export default connect(
  mapStateToProps,
  {
    toggleModal: homepageActions.toggleModal,
    setImageChosen: homepageActions.setImageChosen,
    getDbImages: homepageActions.getDbImages,
  },
)(ImageList);
