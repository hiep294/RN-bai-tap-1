import homepageTypes from './types';
import imageApi from '../../../api/imageApi';

const homepageActions = {
  toggleModal: () => dispatch => {
    return dispatch({type: homepageTypes.TOGGLE_MODAL});
  },
  setImageChosen: (image = {}) => dispatch => {
    return dispatch({type: homepageTypes.SET_IMAGE_CHOSEN, payload: image});
  },
  getDbImages: () => dispatch => {
    imageApi
      .getList()
      .then(res =>
        dispatch({type: homepageTypes.GET_DB_IMAGES, payload: res.data}),
      );
  },
};

export default homepageActions;
