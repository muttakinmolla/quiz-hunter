import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import Options from '../Options/Options';
import { AnswerContext, falseAnswerContext } from '../Quiz/Quiz';
import './Question.css';


const Question = ({ qstn }) => {
    const { options, question, correctAnswer } = qstn;

    let newQuestion = question.split("<p>").pop();
    let finalQuestion = newQuestion.split("</p>").shift();
    console.log(finalQuestion);

    const [answer, setAnswer] = useContext(AnswerContext);
    const [falseAnswer, setFalseAnswer] = useContext(falseAnswerContext);

    const handleCorrectAnswer = (option) => {
        if (option === correctAnswer) {
            correctToast();
            setAnswer(answer + 1)

        } else {
            falseToast();
            setFalseAnswer(falseAnswer + 1)
        }

    }

    const correctToast = () => toast.success('🦄 Wow!!! Your answer is correct', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const falseToast = () => toast.error('🦄 oppss! wrong answer', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const showCorrectAnswer = (answer) => toast(answer, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <div className='p-3 border rounded mb-3'>

            <div className="d-flex justify-content-between">
                <p className='text-center'><b>{finalQuestion}</b></p>
                <button className='btn eye-btn' onClick={() => showCorrectAnswer(correctAnswer)}><FontAwesomeIcon icon={faEye} /></button>
            </div>

            {
                options.map(option => <Options option={option} handleCorrectAnswer={handleCorrectAnswer} key={option}></Options>)
            }

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />

            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

        </div>
    );
};

export default Question;