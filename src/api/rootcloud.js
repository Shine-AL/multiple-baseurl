import instance from '../../fetch2'

export const auth = (params) => {
  return instance.post("dev-auth/auth/clientAuth", params).then((res) => res);
};
