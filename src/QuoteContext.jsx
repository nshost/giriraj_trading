import { createContext, useContext, useReducer } from 'react';

const QuoteContext = createContext();

const initialState = {
  selectedProducts: [],
};

const quoteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_QUOTE':
      return {
        ...state,
        selectedProducts: [...state.selectedProducts, action.product],
      };
    default:
      return state;
  }
};

const QuoteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quoteReducer, initialState);

  const addToQuote = (product) => {
    dispatch({ type: 'ADD_TO_QUOTE', product });
  };

  return (
    <QuoteContext.Provider value={{ state, addToQuote }}>
      {children}
    </QuoteContext.Provider>
  );
};

const useQuote = () => {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
};

export { QuoteProvider, useQuote };
