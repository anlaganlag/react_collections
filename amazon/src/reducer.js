
const LOCAL_STORAGE_KEY = "localBasket";
const storageBasket = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

export const initialState = storageBasket?{
  basket:[...storageBasket.basket],
  user: null,
}:{basket:[],user:null}

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      const newValue = {
        ...state,
        basket: [...state.basket, action.item],
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newValue));

      return newValue

    case "EMPTY_BASKET":
      localStorage.removeItem('localBasket')
      return {
        ...state,
        basket: [],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(`不能移除 (id: ${action.id}) 不在購物車裏!`);
      }
      const newDelValue =  {
        ...state,
        basket: newBasket,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newDelValue));

      return newDelValue
    case "SET_USER":
      const newUserValue = {
        ...state,
        user: action.user,
      };
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newUserValue));
      return newUserValue
    default:
      return state;
  }
};

export default reducer;
