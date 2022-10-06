import React, {createContext, useReducer } from 'react'
import reducer from './reducer'
import * as Actions from './actions'

const server_uri = process.env.REACT_APP_SERVER_URI

// Initial State
const initialState = {
    balance: 0,
    income: 0,
    expense: 0,
    transactions: [],
    
    error: null,
}

// Context
export const GlobalContext = createContext(initialState)

// Provider
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    async function getTransactions() {
        try {
            const res = await fetch(server_uri);
            const body = await res.json()

            if(body.error) throw body

            dispatch({
                type: Actions.GET_TRANSACTIONS,
                payload: body.data
            })      
        } catch (error) {
            console.log("GET_TRANSACTIONS_ERROR", error)
            dispatch({
                type: Actions.TRANSACTION_ERROR,
                payload: error.message
            })
        }
    }

    async function addTransaction(transaction){
        try {
            const res = await fetch(server_uri,{
                method:'POST',
                headers:{
                    "Accept":'application/json, text/plain, */*',
                    "content-Type":'application/json'
                },
                body: JSON.stringify(transaction)
            })

            const body = await res.json()

            if(body.error) throw body

            dispatch({
                type: Actions.ADD_TRANSACTION,
                payload: body.data
            })
        } catch (error) {
            console.log("ADD_TRANSACTION_ERROR", error)
            dispatch({
                type: Actions.TRANSACTION_ERROR,
                payload: error.message
            })
        }  
    }

    async function deleteTransaction(id) {
        try {
            const res = await fetch(server_uri + id, {method:'DELETE'})
            const body = await res.json()

            if(body.error) throw body

            dispatch({
                type: Actions.DELETE_TRANSACTION,
                payload: id
            })
        } catch (error) {
            console.log("DELETE_TRANSACTION_ERROR", error)
            dispatch({
                type: Actions.TRANSACTION_ERROR,
                payload: error.message
            })
        }
    }

    return (
        <GlobalContext.Provider value={{
            ...state,
            getTransactions,
            addTransaction,
            deleteTransaction,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}