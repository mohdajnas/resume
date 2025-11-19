import React from 'react';

const ExperienceSec = () => {
    const experiences = [
        {
            year: "2023",
            title: "AI Marketing Lead",
            company: "www.adtech@mesce.ac.in",
            type: "Fulltime",
            description: "Led marketing and branding initiatives for AI and tech-focused student events. Designed outreach campaigns that increased engagement and strengthened community presence."
        },
        {
            year: "2024",
            title: "AI Engineer Intern",
            company: "www.camerininnovate.com",
            type: "Remote",
            description: "Built AI-driven chatbot and LLM modules for Hospital Information Systems. Automated patient data workflows and assisted in deploying and testing AI models in healthcare environments."
        },
        {
            year: "2025",
            title: "AI Developer Intern",
            company: "www.zoftcares.com",
            type: "Fulltime",
            description: "Improved real-time computer vision models for workplace hazard detection. Integrated AI components into safety systems to enhance accuracy and reliability."
        },
        {
            year: "2025+",
            title: "Junior AI Engineer",
            company: "www.zoftcares.com",
            type: "Fulltime",
            description: "Developed and deployed LLM-based chatbots and scalable AI services using RabbitMQ and RESTful APIs. Collaborated with team members to optimize model performance and deliver production-ready AI solutions."
        }
    ];

    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
                        <h2>Experience</h2>
                        <p className="text-xl text-primary">( 02 )</p>
                    </div>

                    <div className="space-y-7 md:space-y-12">
                        {experiences.map((exp, index) => (
                            <div key={index} className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative">
                                <div className="">
                                    <h3 className="font-bold mb-2 text-black">{exp.year}</h3>
                                    <h4 className="text-lg font-normal">{exp.title}</h4>
                                </div>

                                <div className=" relative">
                                    {index < experiences.length && (
                                        <div className={`absolute left-0 top-3 w-px ${index < experiences.length - 1 ? 'h-40' : 'h-30'} bg-softGray`}></div>
                                    )}

                                    <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                                        <div className={`no-print w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center ${index === 1 ? 'border-primary' : 'border-black'
                                            }`}>
                                            {index === 1 && (
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="pl-4 lg:pl-7">
                                        <div className="flex items-center gap-2 mb-1">
                                            <span className="text-xl text-black font-normal">{exp.company}</span>
                                        </div>
                                        <p className="text-base font-normal">{exp.type}</p>
                                    </div>
                                </div>

                                <div className="pl-8 sm:pl-0">
                                    <p className="leading-relaxed text-base">{exp.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceSec;