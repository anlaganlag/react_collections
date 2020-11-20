export const initialState = {
  count: 0,
  users: [],
  usersFilters: {
    results: 50,
    seed: 'foobar'
  },
  currentUser: null, 
  pageStatus: {
    loading: false, 
    errors: false,
  },
};

export default initialState;
