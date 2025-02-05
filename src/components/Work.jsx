import { EXPERIENCES } from "../constants"


const Work = () => {
    return (
        <section id="experience" className="bg-lime-300 text-black p-4" >
            <h2 className="my-10 text-center text-3xl lg:text-8xl" >Experience</h2>
            <div className="mx-auto max-w-6xl ">
                {EXPERIENCES.map((experience, id) => (
                    <div key={id} className="font-medium lg:text-xl mb-10">
                        <h2 className="py-1 lg:text-xl">{experience.company}</h2>
                        <div className="flex justify-between">
                            <h2 className="py-1 tracking-wide lg:text-xl">{experience.role}</h2>
                            <p className="py-1 lg:text-xl">{experience.year}</p>
                        </div>
                        <p className="py-4 text-gray-800">{experience.description}</p>
                        <div />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Work