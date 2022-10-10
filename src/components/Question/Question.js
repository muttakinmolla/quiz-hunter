import React, { useState } from 'react';
import Options from '../Options/Options';

const Question = ({ qstn }) => {
    const { options, question, correctAnswer } = qstn;
    const [answer, setAnswer] = useState(correctAnswer);

    const handleCorrectAnswer = (option) => {
        if (option === answer) {
            alert('ok')
        } else {
            alert('false')
        }
    }

    return (
        <div>
            {question}

            {
                options.map(option => <Options option={option} handleCorrectAnswer={handleCorrectAnswer} key={option}></Options>)
            }
        </div>
    );
};

export default Question;