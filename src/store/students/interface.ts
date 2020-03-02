import { StudentInfoTypes } from '../../scenes/students/interface';

export interface ISkillProps {
    label: string;
    value: string;
}

export interface IStudentsProps {
    [StudentInfoTypes.firstName]: string;
    [StudentInfoTypes.secondName]: string;
    [StudentInfoTypes.patronymic]: string;
    [StudentInfoTypes.birthday]: Date | number | null;
    [StudentInfoTypes.skill]: ISkillProps | null;
}
