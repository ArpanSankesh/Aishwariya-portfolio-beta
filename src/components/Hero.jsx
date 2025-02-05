import { LuImport } from "react-icons/lu"
import hero from "../assets/hero.jpg"
const Hero = () => {
    return (
        <section>
            <div className="flex flex-col items-center justify-center" >
                <h1 className="mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none">
                    Aishwarya <br /> Dilip Ghore
                </h1>
                <div className="mt-8">
                    <a href="../Aishwarya_Ghore_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="flex justify-center items-center bg-lime-300 py-2 px-3 font-sans font-medium text-black hover:bg-lime-400 rounded-md"
                    >
                        <span>Resume</span>
                        <LuImport className="ml-2" />
                    </a>
                </div>
                <div className="w-full">
                    <img src={hero} alt="Aishwarya Dilip Ghor" className="mt-8 w-full h-96 object-cover object-[center_10%] "/>
                </div>
            </div>
        </section>
    )
}

export default Hero