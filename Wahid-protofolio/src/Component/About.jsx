import profile from '../assets/images/Wahid-profile.jpg'
function About(){
    return(
        <section className="px-8 py-10">
            <div className="mt-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <div className="mt-6 flex items-center gap-8">
                    <img src={profile} alt="" className="h-32 w-32 rounded-full object-cover"/>
                </div>
                
    </div>
        </section>

    )
}
export default About