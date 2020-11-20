# Actions

### Actions that return promises.

For some of my state actions I like to return a promise. This especially true for actions that send an HTTP requests.

The code below sends an HTTP request with axios, and returns a new Promise which resolves if the request is successful and rejects with an error if the request fails.

```
import { useDispatch } from "react-redux";
import axios from 'axios'

export const useUsersActions = () => {
  const dispatch = useDispatch();
  const url = buildApiUrl();

  const fetchUsers = () => {
    return new Promise((resolve, reject) => {
      axios.get(url)
      .then(response => {
        dispatch({
          type: "SET_USERS_DATA",
          data: response.data.results
        });
        resolve()
      })
      .catch((error) => {
        dispatch({
          type: "SET_USERS_DATA",
          data: []
        });
        reject(error)
      })
    })
  }

  return { fetchUsers };
};
```

This means that a functional component has the ability to run `then()` and `catch()` methods on the returned promise, which is useful for setting your App into a loading state and handing any potential errors smoothly.

```
const { fetchUsers } = useUsersActions()

useEffect(() => {
  setPageStatus({loading: true, errors: false})
  fetchUsers().then(() => {
    setPageStatus({loading: false, errors: false})
  })
  .catch(() => {
    setPageStatus({loading: false, errors: true})
  })
}, [getResults, getGender, getNationality])
```
