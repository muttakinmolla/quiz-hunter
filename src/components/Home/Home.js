import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Courses from '../Courses/Courses';
import './header.css';

const Home = () => {
    const allCourse = useLoaderData();
    const courses = allCourse.data;
    return (
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

    );
};

export default Home;