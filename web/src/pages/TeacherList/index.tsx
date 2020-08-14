import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import searchIcon from '../../assets/images/icons/search.svg';

import api from '../../services/api';

import './styles.css'

function TeacherList() {
    const [ teachers, setTeachers ] = useState([]);

    const [ subject, setSubject ] = useState('');
    const [ week_day, setWeekDay ] = useState('');
    const [ time, setTime ] = useState('');

    async function searchTeachers(event: FormEvent) {
        event.preventDefault();

        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time
            }
        });

        setTeachers(response.data);
    }

    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Esses são os proffys disponíveis.">
                <form id="search-teachers" onSubmit={ searchTeachers }>
                    <Select
                        label="Matéria"
                        name="subject"
                        value={ subject }
                        onChange={ (event) => { setSubject(event.target.value) } }
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Português', label: 'Artes' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Química', label: 'Química' }
                        ]}
                    />

                    <Select
                        label="Dia da semana"
                        name="week_day"
                        value={ week_day }
                        onChange={ (event) => { setWeekDay(event.target.value) } }
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}
                    />

                    <Input type="time" label="Hora" name="time" value={ time } onChange={ (event) => { setTime(event.target.value) } } />

                    <button type="submit">
                        <img src={ searchIcon } alt="Buscar"/>
                    </button>
                </form>
            </PageHeader>

            <main>
                { teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={ teacher.id } teacher={teacher} />
                }) }
            </main>
        </div>
    );
}

export default TeacherList;