import React, {useContext} from 'react';
import {CSSTransition} from 'react-transition-group';
import {AlertContext} from "../context/alert/alertContext";
// компонент который будет показывать определнные сообщения в приложении и вызывать его можно будет везде

const Alert = () => {
    const {alert, hide} = useContext(AlertContext);
    return (
        <CSSTransition
            in={!!alert}
            timeout={{
                enter: 1000,
                exit: 750,
            }}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit
        >
            <div className={`alert alert-${alert.type || 'secondary'} alert-dismissible"`}>
                { alert.text }
                <button type="button" className="close" aria-label="Close" onClick={hide}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
};

export default Alert;
