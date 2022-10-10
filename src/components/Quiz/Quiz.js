import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import Question from '../Question/Question';
import 'react-toastify/dist/ReactToastify.css';


const Quiz = () => {
    const course = useLoaderData();
    const { name, logo, questions } = course.data;
    console.log(questions.correctAnswer);

    return (
        <div>
            <div className="row">
                <div className="col-lg-3">
                    <div className='border rounded'>
                        <img src={logo} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body d-flex justify-content-between align-items-center">
                            <h5 className="card-title">{name}</h5>

                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    {
                        questions.map(qstn => <Question
                            qstn={qstn}
                            key={qstn.id}
                        ></Question>)
                    }
                </div>
                <div className="col-lg-3">
                    <div className='result border bg-info text-white rounded px-3 py-3'>
                        <h1 className='text-center'>RESULT</h1>
                        <p>Total Question :</p>
                        <p>Correct Answer :</p>
                        <p>Incorrect Answer :</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Quiz;