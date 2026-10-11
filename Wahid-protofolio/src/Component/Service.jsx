import { FaHtml5 } from "react-icons/fa"
function Service(){
    return(
        <section className="px-26 py-12">
            <div className="flex items-center gap-2">
                <h2 className="text-3xl font-bold text-gray-800">Services</h2>
            </div>
            <div className="mt-8 flex justify-center">
                <div className="w-full max-w-xs rounded-2xl bg-[#343252] px-5 py-6 text-center text-white shadow-lg">
                    <FaHtml5 className="mx-auto text-4xl" />
                    <h3 className="mt-3 text-lg font-bold">PSD TO HTML</h3>
                    <p className="mt-2 text-sm leading-5 text-gray-200">I will design a pad to html web template fully responsively</p></div> 
            </div>
        </section>
    )
}
export default Service
 