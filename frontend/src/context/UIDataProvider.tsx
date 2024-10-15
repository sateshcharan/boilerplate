import { createContext, useReducer, Dispatch, ReactNode } from "react";

// Define the shape of the UI data state
interface UIDataState {
  sidebarHover: boolean;
}

// Define the actions that can be dispatched
type UIDataAction =
  | { type: "TOGGLE"; payload?: boolean }
  | { type: "ENTER" }
  | { type: "LEAVE" };

// Define the initial state
const sidebarHoverInitialuiData: UIDataState = {
  sidebarHover: false,
};

// Define the reducer function with proper types
const sidebarHooverReducer = (
  uiData: UIDataState,
  action: UIDataAction
): UIDataState => {
  switch (action?.type) {
    case "TOGGLE":
      return {
        sidebarHover:
          action.payload !== undefined ? action.payload : !uiData.sidebarHover,
      };
    case "ENTER":
      return { sidebarHover: true };
    case "LEAVE":
      return { sidebarHover: false };
    default:
      return uiData;
  }
};

// Define the context value type
interface UIDataContextValue {
  uiData: UIDataState;
  dispatchUiData: Dispatch<UIDataAction>;
}

// Create the context with a default value
const UIDataContext = createContext<UIDataContextValue>({
  uiData: sidebarHoverInitialuiData,
  dispatchUiData: () => {},
});

interface UIDataContextProviderProps {
  children: ReactNode;
}

// Create the provider component
const UIDataContextProvider = ({ children }: UIDataContextProviderProps) => {
  const [uiData, dispatchUiData] = useReducer(
    sidebarHooverReducer,
    sidebarHoverInitialuiData
  );

  // Create the value to be passed down via context
  const value = { uiData, dispatchUiData };

  return (
    <UIDataContext.Provider value={value}>{children}</UIDataContext.Provider>
  );
};

export { UIDataContext, UIDataContextProvider };
