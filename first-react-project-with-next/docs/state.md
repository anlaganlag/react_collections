# State managememt

## App Store

The app store is crated by `/state/store.js`.

Managing state for a large application can get quite complicated, so reducers in this application have been split into modules located in `./state/modules`. This is a structure I have enjoyed working with, and if you're wondering how I came up with this structure, it's from one of the Vue core developers. Take a look at [Chris Fritz's enterprise boilerplate](https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/state).

## Initial State

The initial app state is located in `/state/state.js` as this allows the initial state to be easily exported into other files that might need it. The idea behind this is that we can set intial values for state in this file, and export those values as defaults for some of the reducers located in `./state/modules`.

## What is a module

Modules provide some structure to the project.

A module contains:

- A Reducer to mutate state.
- Actions that will dispatch data to the reducer.
- Selectors (or "Getters" if you're familiar with Vue modules) that can easily hook into and fetch values from the reducer. _These aren't really necessary, and I may deprecate them in a future project_.

### Actions

This means that any action that needs to be taken on state can be found alongside it's reducer. This also means that actions, can be easily exported from the module, into any component or page that needs access to change state. This are actions like `fetchUsers` or `increment` for the counter.

[Read more on actions](actions.md).

### Getters/Selectors

Getters allow you to perform a little bit of repetitive logic on values that may be stored in state individually. A simple example might be filtering out todos with a "done" status.

These also exist alongside the reducer. Let's say you had a user object stored in state `state.currentUser.name.first`, and wanted to combine that with `state.currentUser.name.title`, and `state.currentUser.name.last` to create a `userFullName`, you can do that with a getter like this:

```
export const useCurrentUserGetters = () => {
  const userFullName = useSelector((state) => {
    if(state.currentUser){
      return `${state.currentUser.name.title} ${state.currentUser.name.first} ${state.currentUser.name.last}`
    }
    return null
  });
  return { userFullName }
}
```

And access them from your component like this:

```
const { userFullName } = useCurrentUserGetters()

return <h1 className="font-bold text-3xl mb-2">
  { userFullName &&
    <span>
      { userFullName }
    </span>
  }
</h1>
```
