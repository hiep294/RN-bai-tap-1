import jsonplaceholderAxios from './jsonplaceholderAxios';

const imageApi = {
  getList: () => {
    return jsonplaceholderAxios.get('/photos?_limit=13');
  },
};

export default imageApi;
