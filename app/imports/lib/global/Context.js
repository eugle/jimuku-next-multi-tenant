import React, {useReducer, useContext, createContext} from 'react'

//全局数据
const GlobalStateContext = createContext({})
const GlobalDispatchContext = createContext({})

const reducer = (state, action) => {
    switch (action.type) {
        case 'Created Global Context':
            const Content = JSON.parse(JSON.stringify(action.content));
            //写入meteorUserToken,如果有
            const {userId, user} = Content.meteorUserToken || {};
            if (userId) {
                Content.userId = userId;
                Content.user = JSON.parse(user);
            }
            return Content
        case 'User Sign In':
            return action.content
        case 'User Logout':
            return action.content
        case 'User register':
            return action.content
        case 'Screen Change':
            return action.content
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, {})

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalStateContext)
export const useDispatchGlobalContext = () => useContext(GlobalDispatchContext)
