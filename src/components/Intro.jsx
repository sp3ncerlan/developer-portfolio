import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white b-1 md:mb-3 font-bold">Spencer Lan</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Aspiring Fullstack Software Engineer</p>

            <p className="text-sm max-w-xl mb-6 font-bold">
            Currently, I'm pursuing a BS in Computer Science at Oregon State University - building skills in software development and problem solving. I am actively seeking opportunities to transition into a role in software, where I aim to hone my developmental toolbelt and learn from the best in the industry.
            </p>
        </div>
    )
}

export default Intro;