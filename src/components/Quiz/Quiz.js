import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import 'react-toastify/dist/ReactToastify.css';
import { createContext, useState } from 'react';

export const AnswerContext = createContext();
export const falseAnswerContext = createContext()


const Quiz = () => {
    const course = useLoaderData();
    const { name, logo, questions, total } = course.data;

    const [answer, setAnswer] = useState(0);
    const [falseAnswer, setFalseAnswer] = useState(0);



    return (
        <AnswerContext.Provider value={[answer, setAnswer]}>
            <falseAnswerContext.Provider value={[falseAnswer, setFalseAnswer]}>
                <div>
                    <div className="row ">
                        <div className="col-lg-3">
                            <div className='border rounded'>
                                <img src={logo} className="card-img-top img-fluid" alt="..." />
                                <div className="card-body d-flex justify-content-between align-items-center">
                                    <h5 className="card-title text-center">{name}</h5>

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
                                <p>Total Question : {total}</p>
                                <p>Correct Answer : {answer}</p>
                                <p>In Correct Answer : {falseAnswer}</p>
                                <p>Your Score : {answer}/{total}</p>

                            </div>
                        </div>

                    </div>
                </div>
            </falseAnswerContext.Provider>
        </AnswerContext.Provider>
    );
};

export default Quiz;