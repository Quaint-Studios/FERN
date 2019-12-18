import React, { createContext, useContext, useReducer } from 'react';

/// Interfaces & Enums

/**
 * What the context will pass through useThemeValue
 * and children for calling the <JSX />.
 */
interface IThemeContext {
  reducer: React.Reducer<string, IAction>;
  initialState: string;
  children: any;
}

/**
 * The structure of the JSX props.
 */
interface IThemeProps {
  children: any;
}

/**
 * What the dispatch is allowed to do.
 */
enum ActionType {
  TOGGLE = 'toggle'
}

interface IAction {
  type: ActionType;
  payload: string;
}

/// Configuration

const initialState = 'dark';

const reducer: React.Reducer<string, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.TOGGLE:
      return state === 'light' ? 'dark' : 'light';

    default:
      throw new Error('Invalid theme reducer used.');
  }
};

/// Context

/** This is the context */
export const ThemeContext = createContext<[string, React.Dispatch<IAction>]>(
  useReducer(reducer, initialState)
);

/** This is what you use to get the value */
export const useThemeValue = () => useContext(ThemeContext);

/// JSX

/**
 * Context JSX
 */
export function Theme({ children }: IThemeProps) {
  return (
    <ThemeContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ThemeContext.Provider>
  );
}
