import React, { createContext, useContext, useReducer, useState } from 'react';

/// Configuration

const initialState = {
  hidden: false,
  path: ''
};

const reducer: React.Reducer<INavState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.TOGGLE:
      return { hidden: !state.hidden };

    case ActionType.PATH:
      if (!action.payload) {
        throw new Error('Missing payload in nav reducer.');
      }

      return { path: action.payload };

    default:
      throw new Error('Invalid nav reducer used.');
  }
};

/// Context

/** This is the context */
export const NavContext = createContext<[INavState, React.Dispatch<IAction>]>(
  useReducer(reducer, initialState)
);

/** This is what you use to get the value */
export const useNavValue = () => useContext(NavContext);

/// Interfaces & Enums

/**
 * The structure of the state.
 */
interface INavState {
  /** The current page that the navigator recognizes. */
  path?: string;

  /** If the navigator should be shown. */
  hidden?: boolean;
}

/**
 * The structure of the JSX props.
 */
interface INavProps {
  children: any;
}

/**
 * What the dispatch is allowed to do.
 */
enum ActionType {
  TOGGLE = 'toggle',
  PATH = 'path'
}

interface IAction {
  type: ActionType;
  payload?: string;
}

/// JSX

/**
 * Context JSX
 */
export function Nav({ children }: INavProps) {
  return (
    <NavContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </NavContext.Provider>
  );
}
