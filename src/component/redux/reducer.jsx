import { legacy_createStore as createStore } from "redux";

const InitialState = {
  users: [],
  loggedUsers: null,
  products: [
    {
      id: 0,
      name: "pen",
      price: 5,
    },
    {
      id: 1,
      name: "book",
      price: 15,
    },
    {
      id: 2,
      name: "wood",
      price: 25,
    },
  ],
  cart: [],
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case "REGISTER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
};
export default createStore(reducer);
