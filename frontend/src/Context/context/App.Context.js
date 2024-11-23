import React, {createContext,useReducer,useContext

} from 'react';
import bookReducer from "../Reducers/state/bookReducer";
import  userReducer from "../Reducers/state/userReducer";

const AppContext = createContext();

const initialState = {
    books:[],
 //   selectedBook:null,
    reviews:[],
    user:null,
};

function rootReducer(state,action){
    return {
        books: bookReducer(state.books,action),
        user:userReducer(state.user,action),
        reviews:state.reviews,
    };
};

export const AppProvider = ({children}) => {
    const [state,dispatch] = useReducer(rootReducer,initialState);

    return(
        <AppContext.Provider value={{state,dispatch}}>
        {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);