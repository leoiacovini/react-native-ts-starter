import { createStore } from 'redux'
import React from 'react'
import { Provider } from 'react-redux'

interface GlobalState {

}

interface Action {
    type: string,
    payload: any
}

const RootReducer = (state: GlobalState = {}, action: Action): GlobalState => {
    return state;
}

export const store = createStore(RootReducer)

export const withProvider = (Component: React.ComponentClass) => (props) => (
    <Provider store={store} {...props}>
        <Component />
    </Provider>
)