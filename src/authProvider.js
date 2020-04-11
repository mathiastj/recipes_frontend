export default {
  // called when the user attempts to log in
  login: ({ username, password }) => {
    // Reject unless special username provided
    if (username !== 'foodGoesNomNom') {
      return Promise.reject()
    }
    // If somebody uses the special username they still won't know the password
    // Thus the page will just keep spitting out an error
    localStorage.setItem('key', password);
    // Hack to force App to update to get the proper dataProvider
    window.location.reload()
    return Promise.resolve();
  },
  // called when the user clicks on the logout button
  logout: () => {
      localStorage.removeItem('key');
      return Promise.resolve();
  },
  // called when the API returns an error
  checkError: ({ status }) => {
      if (status === 401 || status === 403) {
          localStorage.removeItem('key');
          return Promise.reject();
      }
      return Promise.resolve();
  },
  // called when the user navigates to a new location, to check for authentication
  checkAuth: () => {
      return localStorage.getItem('key')
          ? Promise.resolve()
          : Promise.reject();
  },
  // called when the user navigates to a new location, to check for permissions / roles
  getPermissions: () => Promise.resolve(),
};