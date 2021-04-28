import React , {createContext , useReducer} from "react";
import AppReducer from "./appreducer"

const initialState = {
    transactions: [
        {
            id:1,
            description: "Income 1",
            transactionamount: 1000
        },
        {
            id:2,
            description: "Expense 1",
            transactionamount: -200
        },
        {
            id:3,
            description: "Income 2",
            transactionamount: 10000
        },
        {
            id:4,
            description: "Expense 2",
            transactionamount: -7000
        }
    ]
}

// function GlobalContext(){
//     createContext(initialState)
// }

// export default GlobalContext;

export const GlobalContext = createContext(initialState)

function GlobalProvider({children}){

    const [state , dispatch ] = useReducer(AppReducer , initialState)

    function deletetransaction(id){
        dispatch({
            type:"DELETE_TRANSACTION",
            payload: id
        });
    }

    return(
        <GlobalContext.Provider value={
            {
                transactions:state.transactions,
                deletetransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}


export default GlobalProvider