import { ADD_STUDENT, REMOVE_STUDENT, GET_STUDENTS, EDIT_STUDENT } from './actions';

const initialState = {
    result: [],
};

export const studentsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_STUDENTS:
            return {
                isFetching: false,
                result: payload,
                error: null,
            };
        case ADD_STUDENT:
            return {
                isFetching: false,
                result: payload,
                error: null,
            };
        case REMOVE_STUDENT:
            return {
                isFetching: false,
                result: payload,
                error: null,
            };
        case EDIT_STUDENT:
            return {
                isFetching: false,
                result: payload,
                error: null,
            };
        default:
            return state;
    }
};
