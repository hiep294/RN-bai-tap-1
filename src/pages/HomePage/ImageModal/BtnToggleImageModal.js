import React from 'react';
import {Button} from 'react-native';
import homepageActions from '../logic/actions';
import {connect} from 'react-redux';

const BtnToggleImageModal = ({toggleModal, title = 'Toggle'}) => {
  const onPress = () => {
    toggleModal();
  };

  return <Button title={title} onPress={onPress} />;
};

export default connect(
  null,
  {toggleModal: homepageActions.toggleModal},
)(BtnToggleImageModal);
