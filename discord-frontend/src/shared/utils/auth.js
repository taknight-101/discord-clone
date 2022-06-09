export const logout = () => {
  localStorage.clear();
  // this causes a full browser refresh 
  window.location.pathname = "/login";
};
