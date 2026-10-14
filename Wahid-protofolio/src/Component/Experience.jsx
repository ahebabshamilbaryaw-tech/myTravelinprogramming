import {FaGraduationCap} from 'react-icons/fa'
function Experience(){
    return(
        <section className="px-24 py-7">
            <div className="flex flex-items-center gap-2">
                <div className="h-7 w-7 rotate-45 bg-blue-400"></div>
                <h2 className="text-3xl font-bold text-gray-800">Experience</h2>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div className="rounded-2xl bg-[#343252] px-5 py-6 text-white shadow-lg">
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                            <FaGraduationCap className="text-lg text-white" />
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Experiences