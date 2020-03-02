import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addStudent, removeCurrentStudent, getStudents, editStudent } from '../../store/students';
import { Button } from '../../components/button';
import { Card } from '../../components/card';
import { Input } from '../../components/input';
import { DatePicker } from '../../components/date-picker';
import { Select } from '../../components/select';
import { valuePrepare, studentSkills } from './config';
import { StudentInfoTypes } from './interface';
import { Wrapper, Container, ButtonContainer, CardContainer } from './styles';

export const Students: React.FunctionComponent<{}> = () => {
    const dispatch = useDispatch();
    const { result } = useSelector((state: any) => state.students);

    useEffect(() => {
        dispatch(getStudents());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleAddStudent = useCallback(() => {
        dispatch(addStudent());
    }, [dispatch]);

    const handleSaveStudentsToLocaleStorage = useCallback(() => {
        localStorage.setItem('students', JSON.stringify(result));
    }, [result]);

    const handleRemoveStudentsInLocaleStorage = useCallback(() => {
        localStorage.removeItem('students');
    }, []);

    const handleDeleteStudent = useCallback(
        index => {
            dispatch(removeCurrentStudent(index));
        },
        [dispatch],
    );

    const handleChangeStudentInfo = useCallback(
        (key: StudentInfoTypes, index: number) => event => {
            const value = valuePrepare(key, event);
            dispatch(editStudent(index, key, value));
        },
        [dispatch],
    );

    return (
        <Wrapper>
            <Container>
                {result.map((student, index) => (
                    <Card key={`student-card-${index}`}>
                        <CardContainer>
                            <Input
                                name={StudentInfoTypes.firstName}
                                label="Имя"
                                value={student[StudentInfoTypes.firstName]}
                                onChange={handleChangeStudentInfo(
                                    StudentInfoTypes.firstName,
                                    index,
                                )}
                            />
                            <Input
                                name={StudentInfoTypes.secondName}
                                label="Фамилия"
                                value={student[StudentInfoTypes.secondName]}
                                onChange={handleChangeStudentInfo(
                                    StudentInfoTypes.secondName,
                                    index,
                                )}
                            />
                            <Input
                                name={StudentInfoTypes.patronymic}
                                label="Отчество"
                                value={student[StudentInfoTypes.patronymic]}
                                onChange={handleChangeStudentInfo(
                                    StudentInfoTypes.patronymic,
                                    index,
                                )}
                            />
                        </CardContainer>
                        <CardContainer>
                            <DatePicker
                                name={StudentInfoTypes.birthday}
                                label="Дата рождения"
                                selected={student.birthday ? new Date(student.birthday) : null}
                                onChange={handleChangeStudentInfo(StudentInfoTypes.birthday, index)}
                                className="datepicker"
                            />
                            <Select
                                name={StudentInfoTypes.skill}
                                options={studentSkills}
                                value={student.skill}
                                label="Успеваемость"
                                onChange={handleChangeStudentInfo(StudentInfoTypes.skill, index)}
                            />
                            <Button mode="delete" onClick={handleDeleteStudent}>
                                Удалить
                            </Button>
                        </CardContainer>
                    </Card>
                ))}
            </Container>
            <ButtonContainer>
                <Button mode="add" onClick={handleAddStudent}>
                    Добавить студента
                </Button>
                <Button mode="save" onClick={handleSaveStudentsToLocaleStorage}>
                    Сохранить список
                </Button>
                <Button mode="delete" onClick={handleRemoveStudentsInLocaleStorage}>
                    Очистить список
                </Button>
            </ButtonContainer>
        </Wrapper>
    );
};
