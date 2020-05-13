import homepageTypes from './types';

const homepageState = {
  imageList: [],
  imageChosen: {},
  imageModalVisible: false,
};

const homepageReducer = (state = homepageState, action) => {
  switch (action.type) {
    case homepageTypes.TOGGLE_MODAL:
      return {...state, imageModalVisible: !state.imageModalVisible};
    case homepageTypes.SET_IMAGE_CHOSEN:
      return {...state, imageChosen: action.payload};
    case homepageTypes.GET_DB_IMAGES:
      return {...state, imageList: action.payload};
    default:
      return state;
  }
};

export default homepageReducer;
