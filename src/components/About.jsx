import React from 'react'

function About() {
  return (
    <div name='about' className="w-full h-screen pt-3 bg-gradient-to-b from-gray-800 to-black text-white">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-green-800 pt-4">
                    ABOUT MARTIN FACT CHUNGA
                </p>
            </div>
            <p className="text-xl mt-20">
                Martin is a fresh graduate from the University of Malawi (formely called Chancellor college). I obtained My 
                Bachelor of Science degree majoring Computer Science in 2022. During my 4 years of learning i have been equipped with
                vast amount  of skills like Computer Programming, Computer Networking, Project Management and Database Systems Management.
            </p>
            <br />
            <p className="text-xl">
                My passion for Information Technology started way back when i was in Secondary School. I strongly 
                believe that IT has a huge impact on our lives. I see IT being linked to our everyday aspect of life.. Am more passionate
                about Computer Networks and Database Management as you can see on my Resume below the social links.
                
            </p>
        </div>
    </div>
  )
}

export default About