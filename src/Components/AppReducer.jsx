export default (state, action)=>{
  switch(action.type){
    case "add_book_to_watchlist":
      return{
        ...state,
        watchlist: [action.payload, ...state.watchlist],
      };
      case "remove_book_from_watchlist":
        return {
          ...state,
          watchlist: state.watchlist.filter(
            (title) => title.id !== action.payload),
        };
    default:
      return state;
  }
};