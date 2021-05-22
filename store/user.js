import cookies from 'js-cookie';

export const state = () => ({
  token: cookies.get('x-access-token') ? cookies.get('x-access-token'): null,
});

export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
  },

};

export const actions = {
  setToken({commit}, {token, expiresIn}) {
    this.$axios.setToken(token, 'Bearer');
    const expiryTime = new Date(new Date().getTime() + expiresIn * 1000);
    cookies.set('x-access-token', token, {expires: expiryTime});
    commit('SET_TOKEN', token);
  },
};