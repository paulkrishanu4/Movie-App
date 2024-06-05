
import { createContext, useReducer, useEffect } from "react"
import AppReducer from "./AppReducer";


const initialState ={
  watchlist: localStorage.getItem("watchlist")
  ? JSON.parse(localStorage.getItem("watchlist"))
  : [],
};
export const GlobalContext = createContext(initialState);

export const GlobalProvider = (props) => {
  const [state, dispatch] = useReducer(AppReducer,initialState);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(state.watchlist));
  }, [state]);


  const addMovie = (title) =>{
    console.log(title);
    dispatch({type: "add_book_to_watchlist", payload: title})
  }

  const removeMovie = (id) => {
    dispatch({ type: "remove_book_from_watchlist", payload: id });
  };
  return (
    <GlobalContext.Provider value={{watchlist: state.watchlist, watched: state.watched, addMovie,removeMovie,}}>
      {props.children}
    </GlobalContext.Provider>
  )
};


