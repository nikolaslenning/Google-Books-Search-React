import { createContext, useContext, useReducer } from 'react';

// set up our global context
export const GlobalContext = createContext();

// set up Global Provider & reducer
const defaultState = {
  books: []
};

const reducer = (state, action) => {
  console.log({action});
  switch(action.type) {
    case 'setBooks':
      return {
        ...state,
        books: action.payload
      };
    default:
      return state;
  }
};

const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <GlobalContext.Provider value={[state, dispatch]} {...props} />
  );
};


export default GlobalProvider;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
