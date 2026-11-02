import {FaUser} from 'react-icons/Fa';
function RwcentWorks (){
    return(
        <section className='bg-[#f9f8ff] px-25 py-12'>
            <div className='flex items-center gap-2'>
                <div className='h-7 w-7 rotate-45 bg-blue-200'></div>
                <h2 className='text-xl font-bold text-gray-800'>Recent Works</h2>
            </div>
            <div className='mt-8 flex flex-wrap gap-6 text-xs font-semibold'>
                <button className='text-emerlad-600'>Everithing</button>
                <button className='text-gray-700 hover:text-emerald-600'>creative</button>
                < button className='text-gray-700 hover:text:emerlad-600'>Design</button>
                <button className='text-gray-700 hover:text-emerald-600'>Branding</button>
            </div>
        </section>
    )
}