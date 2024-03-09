import { createContext, useContext, useState, useReducer } from 'react';

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
  const [productQuantities, setProductQuantities] = useState({});

  const addToQuote = (product) => {
    dispatch({ type: 'ADD_TO_QUOTE', product });
  };

  const contextValue = {
    state,
    addToQuote,
    productQuantities, // Include productQuantities in the context value
    setProductQuantities, // If you need to update productQuantities outside QuoteProvider
  };

  return (
    <QuoteContext.Provider value={contextValue}>
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
