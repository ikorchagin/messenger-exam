import instance from '.';

export const fetchSignIn = async (data) => {
  const response = await instance.post('auth/sign-in', data);
  return response.data;
};

export const fetchSignUp = async (formData) => {
  const response = await instance.post('auth/sign-up', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
  return response.data;
};

export const refresh = async () => {
  const response = await instance.get('auth/refresh');
  return response.data;
};

export const me = async () => {
  const response = await instance.get('auth/me');
  return response.data;
};

export const fetchChangeProfile = async (formData) => {
  const response = await instance.post('auth/change-profile', formData, {
    headers: { 'content-type': 'multipart/form-data' },
  });
  return response.data;
};

export const fetchLogout = async () => {
  const response = await instance.post('auth/logout');
  return response.data;
};
