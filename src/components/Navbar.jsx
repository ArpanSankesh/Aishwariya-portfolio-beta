import { useEffect } from "react"
import { useState } from "react"
import { FaTimes, FaBars } from "react-icons/fa";
import { LINKS } from "../constants/index";
import { SOCIAL_MEDIA_LINKS } from "../constants/index";

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

  }, [isOpen])


  return (
    <>
      <nav className="fixed right-0 top-0 z-30 p-4">
        <button onClick={toggleMenu} className="rounded-md p-2">
          {!isOpen ? <FaBars className=" w-6 h-6" /> : <FaTimes className=" w-6 h-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
          <ul className="space-y-6 text-white">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a href={`#${link.id}`} onClick={toggleMenu} className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl">{link.name}</a>
              </li>
            ))}
          </ul>
          <div className="absolute bottom-5  mt-20 flex items-center justify-center gap-8 mb-10 ">
            {SOCIAL_MEDIA_LINKS.map((link, id) => (
              <a key={id} href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-lime-300 ">{link.icon}</a>
            ))}
          </div>
        </div>
      )}

    </>
  )
}

export default Navbar