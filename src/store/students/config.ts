import { IStudentsProps } from './interface';
import { StudentInfoTypes } from '../../scenes/students/interface';

export const initialStudentCard: IStudentsProps = {
    [StudentInfoTypes.firstName]: '',
    [StudentInfoTypes.secondName]: '',
    [StudentInfoTypes.birthday]: null,
    [StudentInfoTypes.patronymic]: '',
    [StudentInfoTypes.skill]: null,
};
