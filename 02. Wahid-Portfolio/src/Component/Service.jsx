import { FaHtml5, FaWordpress, FaVideo, FaFigma, } from "react-icons/fa"
function Service(){
    return(
        <section className="px-26 py-12">
            <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rotate-45 bg-blue-400"></div>

                <h2 className="text-3xl font-bold text-gray-1200 py-8">Services</h2>
            </div>
         <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="w-full max-w-xs rounded-2xl bg-[#343252] px-5 py-6 text-center text-white shadow-lg">
                    <FaHtml5 className="mx-auto text-4xl" />
                    <h3 className="mt-3 text-lg font-bold">PSD TO HTML</h3>
                    <p className="mt-2 text-sm leading-5 text-gray-200">I will design a pad to html web template fully responsively</p></div> 
            
            <div className="w-full max-w-xs rounded-2xl bg-[#343252] px-5 py-6 text-center text-white shadow-lg">
                <FaWordpress className="mx-auto text-4xl" />
                <h3 className="mt-3 text-lg font-bold">PSD TO WORDPRESS</h3>
                <p  className="mt-2 text-sm leading-5 text-gray-200">I will design a psd to wordpress web template fully responsively</p>
            </div>
            <div className="w-full max-w-xs rounded-2xl bg-[#343252] px-5 py-6 text-center text-white shadow-lg">
                <FaVideo className="mx-auto text-4xl" />
                <h3 className="mt-3 text-lg font-bold">PROMOTIONAL VIDEO</h3>
                <p  className="mt-2 text-sm leading-5 text-gray-200">I will make a promotional video for your brand </p>
            </div>
            <div className="w-full max-w-xs rounded-2xl bg-[#343252] px-5 py-6 text-center text-white shadow-lg">
                <FaFigma className="mx-auto text-4xl" />
                <h3 className="mt-3 text-lg font-bold">FIGMA DESIGN</h3>
                <p  className="mt-2 text-sm leading-5 text-gray-200">I will design a figma web template or mobile app</p>
            </div>
            <div className="w-full max-w-xs rounded-2xl bg-[#343252] px-5 py-6 text-center text-white shadow-lg">
                <FaWordpress className="mx-auto text-4xl" />
                <h3 className="mt-3 text-lg font-bold">FIGMA TO WORDPRESS</h3>
                <p  className="mt-2 text-sm leading-5 text-gray-200">I will convert a figma design into a responsive wordpress website </p>
            </div>
            <div className="w-full max-w-xs rounded-2xl bg-[#343252] px-5 py-6 text-center text-white shadow-lg">
                <FaVideo className="mx-auto text-4xl" />
                <h3 className="mt-3 text-lg font-bold">PROMOTIONAL VIDEO</h3>
                <p  className="mt-2 text-sm leading-5 text-gray-200">I will create an engaging promotional video for your businness</p>
            </div>
      </div>

           


        </section>
        )
}
export default Service
 
