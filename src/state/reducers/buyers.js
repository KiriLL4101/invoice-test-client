const buy = new Array(15).fill(0).map( item => {
  return {
    id: Math.floor(Math.random() * 100),
    firstName: "Ваня",
    avg: Math.floor(Math.random() * 200) + 100,
    count: Math.floor(Math.random() * 300) + 200,
    total:  Math.floor(Math.random() * 1000) + 300
  }
})
const initialState = {
  buyers:buy
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_BUYERS":
      return {
        ...state,
        buyers: action.payload
      };
    case "ADD_BUYERS":
      return {
        ...state,
        buyers: [action.payload, ...state.buyers]
      };
    default:
      return state;
  }
};
