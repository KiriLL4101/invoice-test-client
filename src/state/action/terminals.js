export const addTerminals = (item) => ({
    type: "ADD_TERMINAL",
    payload: item,
  });
  
  export const removeTerminal = (id) => ({
    type: "REMOVE_TERMINAL",
    payload: id,
  });
  