import React, { createContext, useContext, useReducer } from 'react';

/// Interfaces & Enums

/**
 * CONFIG: EXAMPLE
 *
 * The structure of the state.
 *
 * interface IState {
 *  ...
 * }
 */

/**
 * The structure of the JSX props.
 */
interface IProps {
  children: any;
}

/**
 * What the dispatch is allowed to do.
 */
export enum ActionType {
  TOGGLE = 'toggle'
}

interface IAction {
  type: ActionType;
}

/**
 * The structure for the Context.Provider.
 */
interface IProvider {
  reducer: React.Reducer<string, IAction>;
  initialState: string; // CONFIG: Should match your state type, same with the reducer
  children: any;
}

/// Context

/** This is the context */
const Context = createContext<[string, React.Dispatch<IAction>]>(
  // tslint:disable-next-line: no-object-literal-type-assertion
  {} as [string, React.Dispatch<IAction>]
);

const Provider = ({ reducer, initialState, children }: IProvider) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

/** This is what you use to get the value */
export const useThemeValue = () => useContext(Context);

/// JSX

/**
 * Context JSX
 */
export function Theme({ children }: IProps) {
  const initialState = 'light';

  const reducer: React.Reducer<string, IAction> = (state, action) => {
    switch (action.type) {
      case ActionType.TOGGLE:
        return state === 'light' ? 'dark' : 'light';

      default:
        throw new Error('Invalid theme reducer used.');
    }
  };

  return (
    <Provider initialState={initialState} reducer={reducer}>
      {children}
    </Provider>
  );
}
