import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='questionSec'>
            <h1>Question/Answer</h1>
            <div className='answerDiv'>
                <div className='answerChildDiv'>
                    <h2>Difference between props and state.</h2>
                    <p>Props, short for properties are used to pass data from parent element to child element. They are read-only, immutabe and as a result cannot be modified. So, to change the props, we can use states. States are properties that can change but they are only available to component itself. They cannot be passed to other components. We can make state of one component become props of its child components. And thus pass the state to other component.</p>
                </div>
                <div className='answerChildDiv'>
                    <h2>How does useState work?</h2>
                    <p>The useState is a hook which allows us to have a state variable in functional components. it takes a initial state and returns an array with two variable. One is the state variable and other one is the function to set values or update to the state variable. This state update function completely overwrites the current state value with the new value.</p>
                </div>
            </div>
        </div>
    );
};

export default Question;