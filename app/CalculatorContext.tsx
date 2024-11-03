
import { useReducer, createContext, useContext, Dispatch, ReactNode } from 'react';

// État initial
const initialState = {
  firstNumberInput: null as number | null,
  secondNumberInput: null as number | null,
  result: null as number | null,
};

// Types d'actions
type Action =
  | { type: 'SET_FIRST_NUMBER'; payload: number | null }
  | { type: 'SET_SECOND_NUMBER'; payload: number | null }
  | { type: 'SET_RESULT'; payload: number | null };

// Réducteur
const reducer = (state: typeof initialState, action: Action) => {
  switch (action.type) {
    case 'SET_FIRST_NUMBER':
      return { ...state, firstNumberInput: action.payload };
    case 'SET_SECOND_NUMBER':
      return { ...state, secondNumberInput: action.payload };
    case 'SET_RESULT':
      return { ...state, result: action.payload };
    default:
      return state;
  }
};

// Contexte
const CalculatorContext = createContext<{
  state: typeof initialState;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => undefined });

// Fournisseur de contexte
export const CalculatorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};

// Hook personnalisé pour utiliser le contexte
export const useCalculator = () => {
  return useContext(CalculatorContext);
};