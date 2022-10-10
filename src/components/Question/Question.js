import React from 'react';

const Question = ({ qstn }) => {
    console.log(qstn);
    const { options, question, correctAnswer } = qstn;
    
    return (
        <div>
            <p>{question}</p>
            {
                options.map(option => <li>{option}</li>)
            }
        </div>
    );
};

export default Question;