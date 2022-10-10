import React, { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { AnswerContext } from '../Home/Home';
import Options from '../Options/Options';

const Question = ({ qstn }) => {
    const { options, question, correctAnswer } = qstn;
    const [answer, setAnswer] = useContext(AnswerContext);
    console.log(answer)

    const handleCorrectAnswer = (option) => {
        if (option === correctAnswer) {
            // console.log(newAnswer)
            correctToast();
            setAnswer(() => answer + 1)
        } else {
            falseToast();
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

    return (
        <div className='p-3 border rounded mb-3'>
            <p>{question}</p>

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

        </div>
    );
};

export default Question;