import React, {useReducer} from 'react';
import {AlertContext} from "./alertContext";
import alertReducer from "./alertReducer";
import {HIDE_ALERT, SHOW_ALERT} from "../actionTypes";
// компонент который проводит функционал для дочерних элементов
// аналог классового контекста (<Context>), только доступный в функциональных компонентах с помощьью хуков

const AlertState = ({ children }) => {
    const [state, dispatch] = useReducer(alertReducer, false);
    const hide = () => dispatch({type: HIDE_ALERT});
    const show = (text, type = 'secondary') => dispatch({
        type: SHOW_ALERT,
        payload: { text, type },
    });
    return (
        <AlertContext.Provider value={{ hide, show, alert: state, }}>
            {children}
        </AlertContext.Provider>
    )
};

export default AlertState;
