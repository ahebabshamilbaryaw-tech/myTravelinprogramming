import profile from '../assets/images/Wahid-profile.jpg'

function About() {
    return (
        <section className="px-25 py-15">
            <div className="mt-6">
                <div className="flex items-center gap-2">
    <div className="h-7 w-7 rotate-45 bg-blue-200"></div>

    <h2 className="text-3xl font-bold">
        About Me
    </h2>
</div>
                <div className="mt-6 flex items-start gap-8">
                    <img
                        src={profile}
                        alt=""
                        className="h-32 w-32 rounded-full object-cover"
                    />
                      <div className="flex flex-1 gap-10 rounded-xl bg-white p-5 shadow-lg">          
                  <div className="flex-1">
                            <h3 className="text-2xl font-bold">
                                Wahid Ahmed
                            </h3>
                            <p className="mt-2 text-gray-600">
                                I Am Wahid Ahmed, a proposal web Designer
                                And Video Editor. I have rich experience in
                                web Site design and building and customization,
                                also I am good at wordPress.
                            </p>
                            <button className="mt-4 rounded-lg bg-black px-5 py-2 text-white">
                                DOWNLOAD CV
                            </button>
                        </div>
                        <div className="flex-1">
                            <h4 className="text-xl font-semibold">
                                My Skills
                            </h4>
                            <div className="mt-4">
                              <div className="mt-4">

    <div className="flex justify-between text-sm">
        <span>HTML</span>
        <span>92%</span>
    </div>
    <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 w-[92%] rounded-full bg-cyan-400"></div>
    </div>
    <div className="mt-4">
    <div className="flex justify-between text-sm">
        <span>CSS</span>
        <span>92%</span>
    </div>
    <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 w-[95%] rounded-full bg-yellow-400"></div>
    </div>
    <div className="mt-4">
    <div className="flex justify-between text-sm">
        <span>JavaScript</span>
        <span>87%</span>
    </div>
    <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 w-[87%] rounded-full bg-green-400"></div>
    </div>
    <div className="mt-4">
    <div className="flex justify-between text-sm">
        <span>figma</span>
        <span>83%</span>
    </div>
    <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 w-[83%] rounded-full bg-orange-400"></div>
    </div>
    <div className="mt-4">
    <div className="flex justify-between text-sm">
        <span>adobe premiere pro</span>
        <span>87%</span>
    </div>
    <div className="mt-1 h-2 w-full rounded-full bg-gray-200">
        <div className="h-2 w-[92%] rounded-full bg-red-400"></div>
    </div>
</div>
</div>
</div>
</div>
</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About