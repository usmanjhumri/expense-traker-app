export default (state, action) => {
  switch (action.type) {
    case "add_data":
      return {
        ...state,
        transaction: [action.payload, ...state.transaction],
      };
    case "deleteTransaction":
      return {
        ...state,
        transaction: state.transaction.filter(
          (transaction) => transaction.id != action.payload
        ),
      };
    default:
      return state;
  }
};
