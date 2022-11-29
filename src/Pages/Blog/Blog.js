import React from 'react';

const Blog = () => {
    return (
        <div className='px-6 my-6 rounded-lg'>
            <div className='bg-slate-200'>
                <h2 className='bg-blue-600 text-white text-3xl py-4 px-4'>What are the different ways to manage a state in a React application?</h2>
                <p className='py-4 px-4'>Ans: There are four main types of state you need to properly manage in your React apps: <br />
                    1. Local state. <br />
                    2. Global state. <br />
                    3. Server state. <br />
                    4. URL state. <br />
                    The Four Kinds of React State to Manage When we talk about state in our applications, it’s important to be clear about what types of state actually matter.There are four main types of state you need to properly manage in your React apps: Local state,Global state. erver state & URL state
                </p>
            </div>
            <div className='bg-slate-200 my-3'>
                <h2 className='bg-blue-600 text-white text-3xl py-4 px-4'>How does prototypical inheritance work?</h2>
                <p className='py-4 px-4'>Ans: The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object</p>
            </div>
            <div className='bg-slate-200'>
                <h2 className='bg-blue-600 text-white text-3xl py-4 px-4'>What is a unit test? Why should we write unit tests?</h2>
                <p className='py-4 px-4'>Ans: The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='bg-slate-200 mt-3'>
                <h2 className='bg-blue-600 text-white text-3xl py-4 px-4'>React vs. Angular vs. Vue?</h2>
                <p className='py-4 px-4'>Ans: Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
            </div>
        </div>
    );
};

export default Blog;