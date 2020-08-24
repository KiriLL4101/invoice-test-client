const initialState = {
  terminals: [
    {
      id:1,
      title: 'Ололололо',
      desc:'term'
    },
    {
      id:2,
      title: '123',
      desc:'term123'
    },
    {
      id:3,
      title: 'kekekekeke',
      desc:'kekus'
    }
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TERMINAL":
      return {
        ...state,
        terminals: [...state.terminals, action.payload],
      };
    case "REMOVE_TERMINAL":
      return {
        ...state,
        terminals: state.terminals.filter((o) => o.id !== action.payload),
      };
    default:
      return state;
  }
};
