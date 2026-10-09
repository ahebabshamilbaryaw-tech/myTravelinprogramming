function Statistics() {
    return (
        <section className="mt-8">
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
             <div className=" flex-1 nrounded-xl bg-white p-22 shadow-md">
                <h2 className="text-3xl font-bold text-800">198</h2>
                <p className="mt-2 text-sm text-500">Projects Completed</p>
            </div>
            <div className=" flex-1  rounded-xl bg-white p-22 shadow-md">
                <h2 className="text-3xl font-bold text-800">102</h2>
                <p className="mt-2 text-sm text-500">Running Projects</p>
            </div>
            <div className="flex-1 rounded-xl bg-white p-22 shadow-md">
                <h2 className="text-3xl font-bold text-800">90</h2>
                <p className="mt-2 text-sm text-500">Satisfied Clients</p>
            </div>
            <div className="flex-1  rounded-xl bg-white p-22 shadow-md">
                <h2  className="text-3xl font-bold text-800">85</h2>
                <p  className="mt-2 text-sm text-500" > Nomines Winner</p>
            </div>
            </div>
            
        </section>
    )
}

export default Statistics