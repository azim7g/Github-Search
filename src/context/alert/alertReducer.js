// редьюсеры - это просто функции которые проверяют тип действия и возвращают новое состояние
import {HIDE_ALERT, SHOW_ALERT} from "../actionTypes";

const handlers = {
    [SHOW_ALERT]: (state, action) => action.payload,
    [HIDE_ALERT]: () => false,
    DEFAULT: state => state,
};

export default (state, action) => {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}
