import interval from '../../fetch'

export const login = (params) => {
  return interval.post("user/login", params).then((res) => res);
};
