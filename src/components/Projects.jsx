import { PROJECTS } from "../constants"


const Projects = () => {
  return (
    <section className="p-8" id="projects" >
        <h2 className="my-10 text-center text-3xl lg:text-8xl">My Works</h2>
        <div className="columns-1 md:columns-2 lg:columns-3">
            {PROJECTS.map((project) => (
                <a key={project.id} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative mb-4 overflow-hidden rounded-lg shadow-lg bg-black">
                    <img src={project.imgSrc} alt="" className="h-auto w-full "/>
                    <div className="absolute bottom-0 left-0 right-0 m-8 p-8 textwhite backdrop-blur-md">
                      <h3 className="text3xl"></h3>
                    </div>
                </div>
            </a>
            ))}
        </div>
    </section>
  )
}

export default Projects