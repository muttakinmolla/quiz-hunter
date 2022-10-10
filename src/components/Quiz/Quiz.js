import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Quiz = () => {
    const course = useLoaderData();
    const { name, logo, questions } = course.data;
    console.log(questions);
    return (
        <div>
            <div className="row">
                <div className="col-lg-6">
                    <div className='border rounded'>
                        <img src={logo} className="card-img-top img-fluid w-50" alt="..." />
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <h5 className="card-title">{name}</h5>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    {
                        questions.map(qstn => <Question qstn={qstn} key={qstn.id}></Question>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;