import { FaGraduationCap } from "react-icons/fa";

function Experience() {
    return (
        <section className="px-8 py-12">
            {/* Experience Heading */}
            <div className="flex items-center gap-2">
                <div className="h-7 w-7 rotate-45 bg-blue-200"></div>

                <h2 className="text-3xl font-bold text-gray-800">
                    Experience
                </h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-[#343252] px-35 py-6 text-white shadow-lg">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <FaGraduationCap className="text-lg text-white" />
                            <div className="mt-1 min-h-16 w-px bg-gray-400"></div>
                        </div>

                        <div className="flex-1 pb-5">
                            <p className="text-xs text-gray-400">
                                2022 - Present
                            </p>
                            <h3 className="mt-1 text-sm font-bold">
                                Academic Degree
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-200">
                                Studying Information Systems and developing
                                knowledge in software development and database
                                management.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <FaGraduationCap className="text-lg text-white" />
                            <div className="mt-1 min-h-16 w-px bg-gray-400"></div>
                        </div>

                        <div className="flex-1 pb-5">
                            <p className="text-xs text-gray-400">
                                2024 - Present
                            </p>
                            <h3 className="mt-1 text-sm font-bold">
                                Web Development
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-200">
                                Learning HTML, CSS, JavaScript, React, and
                                building responsive websites through practice.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <FaGraduationCap className="text-lg text-white" />
                        </div>

                        <div className="flex-1">
                            <p className="text-xs text-gray-400">
                                2025 - Present
                            </p>
                            <h3 className="mt-1 text-sm font-bold">
                                Personal Projects
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-200">
                                Building portfolio projects to improve
                                programming skills and gain practical experience.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="rounded-2xl bg-[#343252] px-5 py-6 text-white shadow-lg">
                    {/* First Experience Item */}
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <FaGraduationCap className="text-lg text-white" />
                            <div className="mt-1 min-h-16 w-px bg-gray-400"></div>
                        </div>

                        <div className="flex-1 pb-5">
                            <p className="text-xs text-gray-400">
                                2023 - 2024
                            </p>
                            <h3 className="mt-1 text-sm font-bold">
                                Computer Fundamentals
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-200">
                                Building a strong foundation in computer
                                systems, information technology, and programming.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <FaGraduationCap className="text-lg text-white" />
                            <div className="mt-1 min-h-16 w-px bg-gray-400"></div>
                        </div>

                        <div className="flex-1 pb-5">
                            <p className="text-xs text-gray-400">
                                2024 - 2025
                            </p>
                            <h3 className="mt-1 text-sm font-bold">
                                Frontend Development
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-200">
                                Practicing modern web design and creating
                                interactive user interfaces with JavaScript.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <FaGraduationCap className="text-lg text-white" />
                        </div>

                        <div className="flex-1">
                            <p className="text-xs text-gray-400">
                                2025 - Present
                            </p>
                            <h3 className="mt-1 text-sm font-bold">
                                React Development
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-gray-200">
                                Developing reusable components and responsive
                                layouts using React and Tailwind CSS.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Experience;