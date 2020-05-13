import {combineReducers} from 'redux';
import homepageReducer from '../pages/HomePage/logic/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['homepage'],
};

const homepagePersistConfig = {
  key: 'homepage',
  storage: AsyncStorage,
  blacklist: ['imageModalVisible', 'imageChosen'],
};

const rootReducer = combineReducers({
  homepage: persistReducer(homepagePersistConfig, homepageReducer),
});

export default persistReducer(rootPersistConfig, rootReducer);
