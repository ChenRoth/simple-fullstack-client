import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

export interface State {
    counter: number;
}

const initialState: State = {
    counter: 0,
}

export interface IAction {
    type: ActionType;
    payload: Record<string, any>;    
}

export enum ActionType {
    GetCounterPending = 'GET_COUNTER_PENDING',
    GetCounterSuccess = 'GET_COUNTER_SUCCESS',
    GetCounterFail = 'GET_COUNTER_FAIL',
}

const reducer = (state = initialState, action: IAction) => {
    switch (action.type) {
        case ActionType.GetCounterSuccess: {
            const { counter } = action.payload
            return {
                ...state,
                counter,
            }
        }

        default: {
            return state;
        }
    }
}

export function createReduxStore() {
    const logger = createLogger();
    const middleware = composeWithDevTools(applyMiddleware(thunk, logger));
    return createStore(reducer, middleware);
}