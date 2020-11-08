import axios from 'axios';

export const getContactApi = () => {
  return axios.get('/contact');
};

export const createContactApi = (data) => {
  const {id, ...rest} = data;
  return axios.post('/contact', {
    ...rest,
  });
};

export const updateContactApi = (data) => {
  const { id, ...someData} = data;
  return axios.put(`contact/${id}`, {
    ...someData,
  });
};

export const delContactApi = (contactId) => {
  return axios.delete(`/contact/${contactId}`);
};
