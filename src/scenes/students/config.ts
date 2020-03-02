import { StudentInfoTypes } from './interface';

export const studentSkills = [
    { value: 'verybad', label: 'Неуд' },
    { value: 'bad', label: 'Удовлетворительно' },
    { value: 'nice', label: 'Хорошо' },
    { value: 'verynice', label: 'Отлично' },
];

export const valuePrepare = (name: StudentInfoTypes, value) => {
    switch (name) {
        case StudentInfoTypes.firstName:
        case StudentInfoTypes.secondName:
        case StudentInfoTypes.patronymic:
            return value.target.value;
        default:
            return value;
    }
};
