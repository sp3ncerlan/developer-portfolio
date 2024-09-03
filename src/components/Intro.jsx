import React from 'react';

function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl dark:text-white b-1 md:mb-3 font-bold">Spencer</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Fullstack Software Engineer</p>
            <p className="text-sm max-w-xl mb-6 font-bold">With a background in finance and a BBA from Texas A&M University, I have experience in credit analysis and portfolio management as a Senior Analyst at Citi. <br></br> Now pursuing a BS in Computer Science at Oregon State University, I am building skills in software development, including Python, JavaScript, and React. I am actively seeking opportunities to transition into the software industry, where I aim to combine my financial expertise with technical skills to create impactful solutions.</p>
        </div>
    )
}

export default Intro;