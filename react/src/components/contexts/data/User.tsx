import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { login, logout, ILoginResponse } from '../../firebase/firebase.auth';
import { auth } from 'firebase/app';

/// Interfaces & Enums

/**
 * The structure of the state.
 */
interface IState {
  user: firebase.User | null;
  error?: firebase.auth.Error;
  loading: boolean;
  action?: Promise<ILoginResponse | void>;
}

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
  LOGIN = 'login',
  LOGOUT = 'logout',
  READY = 'ready'
}

interface IPayload {
  user?: firebase.User | null;
  error?: firebase.auth.Error;
  loading?: boolean;
  action?: Promise<ILoginResponse | void>;
}

interface IAction {
  type: ActionType;
  payload?: IPayload | null;
}

/**
 * The structure for the ContextProvider.
 */
interface IProvider {
  reducer: [IState, React.Dispatch<IAction>];
  children: any;
}

/// Context

/** This is the context */
export const Context = createContext<[IState, React.Dispatch<IAction>]>(
  // tslint:disable-next-line: no-object-literal-type-assertion
  {} as [IState, React.Dispatch<IAction>]
);

const Provider = ({ reducer, children }: IProvider) => (
  <Context.Provider value={reducer}>{children}</Context.Provider>
);

/** This is what you use to get the value */
export const useUserValue = () => useContext(Context);

const reducer: React.Reducer<IState, IAction> = (state, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      if (state.user !== null) {
        console.error('Google Auth Error: User already logged in.');
        return { ...state };
      }

      return { ...state, loading: true, action: login() };

    case ActionType.LOGOUT:
      return { ...state, loading: true, action: logout() };

    case ActionType.READY:
      if (action.payload === undefined) {
        throw new Error('Missing payload in user reducer.');
      }

      return { ...state, ...action.payload };

    default:
      throw new Error('Invalid user reducer used.');
  }
};

/// JSX

/**
 * Context JSX
 */
export function User({ children }: IProps) {
  const initialState: IState = {
    user: null,
    error: undefined,
    loading: true,
    action: undefined
  };

  const constReducer = useReducer(reducer, initialState);

  const [, setUser] = constReducer;

  useEffect(() => {
    const unsubscribeAuthStateListener = auth().onAuthStateChanged(
      (newUser) =>
        setUser({
          type: ActionType.READY,
          payload: { user: newUser, loading: false }
        }),
      (error: firebase.auth.Error) =>
        setUser({
          type: ActionType.READY,
          payload: { error, loading: false }
        })
    );

    return () => {
      unsubscribeAuthStateListener();
    };
  }, [setUser]);

  return <Provider reducer={constReducer}>{children}</Provider>;
}
