// import React from 'react'
import { createContext, useReducer, useState } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transaction: [],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  function addTransaction(transobj) {
    dispatch({
      type: "add_data",
      payload: transobj,
    });
  }
  function deleteTransaction(id) {
    dispatch({
      type: "deleteTransaction",
      payload: id,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transaction: state.transaction,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
