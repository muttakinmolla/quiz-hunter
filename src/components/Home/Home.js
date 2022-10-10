import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './Home.css';

export const QuestionAnswerContext = createContext('nothing');

const Home = () => {
    const allCourse = useLoaderData();
    const courses = allCourse.data;

    const [answer, setAnswer] = useState(1);
    return (
        <QuestionAnswerContext.Provider value={[answer, setAnswer]}>
            <div>
                <div className='main-header'>
                    <div className='header'>
                        <h1 className='text-center p-3 '>Quiz hunter</h1>
                    </div>
                </div>
                <div className="row mt-5">
                    {
                        courses.map(course => <Courses course={course} key={course.id}></Courses>)
                    }
                </div>
            </div>
        </QuestionAnswerContext.Provider>

    );
};

export default Home;