import { Dispatch } from 'redux';
import { initialStudentCard } from './config';

export const GET_STUDENTS = 'GET_STUDENTS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const REMOVE_STUDENT = 'REMOVE_STUDENT';
export const EDIT_STUDENT = 'EDIT_STUDENT';

export const getStudents = () => (dispatch: Dispatch, getState) => {
    const studentsList = localStorage.getItem('students');
    const { result } = getState().students;

    const data = studentsList ? JSON.parse(studentsList) : result;

    dispatch({ type: GET_STUDENTS, payload: data });
};

export const addStudent = () => (dispatch: Dispatch, getState) => {
    const { result } = getState().students;
    result.push(initialStudentCard);

    dispatch({ type: ADD_STUDENT, payload: result });
};

export const removeCurrentStudent = (index: number) => (dispatch: Dispatch, getState) => {
    const { result } = getState().students;
    result.splice(index, 1);

    dispatch({ type: REMOVE_STUDENT, payload: result });
};

export const editStudent = (index: number, name, value) => (dispatch: Dispatch, getState) => {
    const { result } = getState().students;
    const data = [
        ...result.slice(0, index),
        { ...result[index], [name]: value },
        ...result.slice(index + 1, result.length),
    ];

    dispatch({ type: EDIT_STUDENT, payload: data });
};
