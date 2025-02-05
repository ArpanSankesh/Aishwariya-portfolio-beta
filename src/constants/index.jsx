import {
  FaGithub,
  FaLinkedin,
  // FaInstagram,
} from "react-icons/fa6";


import project1 from "../assets/hero.jpg";

export const LINKS = [
  { id: "projects", name: "projects" },
  { id: "about", name: "about" },
  { id: "experience", name: "experience" },
  { id: "contact", name: "Contact" },
];

export const MARQUEE_TEXT =
  "React, Next.js, Node, MongoDb, Tailwind, MySql, Javascript, Redis,";

export const PROJECTS = [
  {
    id: 1,
    title: "E-commerce Website",
    description:
      "A full-featured e-commerce website built with React and Node.js.",
    imgSrc: project1,
    link: "https://example.com/ecommerce-website",
  },
  {
    id: 2,
    title: "Social Media App",
    description:
      "A social media application with real-time chat and notifications.",
    imgSrc: project1,
    link: "https://example.com/social-media-app",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase projects and skills.",
    imgSrc: project1,
    link: "https://example.com/portfolio-website",
  },
  {
    id: 4,
    title: "Blog Platform",
    description:
      "A blogging platform with user authentication and content management.",
    imgSrc: project1,
    link: "https://example.com/blog-platform",
  },
  {
    id: 5,
    title: "Task Management Tool",
    description: "A task management tool to organize and prioritize work.",
    imgSrc: project1,
    link: "https://example.com/task-management-tool",
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "An online learning platform offering various courses and resources.",
    imgSrc: project1,
    link: "https://example.com/online-learning-platform",
  },

];

export const ABOUT = "I am an Electronics & Telecommunication Engineering student passionate about technology and innovation. With expertise in Java, C++, SQL, and front-end development, I have experience in automation, data extraction, and security systems. As a Bosch Road Safety Hackathon finalist and Cadence India Scholar'23 awardee, I excel in problem-solving and research. My strong academic record (CGPA 9.27) and industry exposure through internships equip me to build impactful tech solutions. As an NSS volunteer and startup competition participant, I blend technical skills with a drive for societal impact."


export const EXPERIENCES = [
  {
    company: "Marquardt India PVT. Ltd.",
    role: "Software Intern",
    year: "Dec 2023 - Jan 2024",
    description:" I worked on automating data extraction using Python and Google Colab (Open Source), streamlining processes for efficiency and accuracy. This experience enhanced my skills in data processing, automation, and scripting. Additionally, I explored various aspects of software, hardware, and testing domains, gaining a well-rounded understanding of real-world applications. Working in a professional environment helped me improve my problem-solving abilities, debugging skills, and collaboration while contributing to impactful automation solutions."},
  {
    company: "BOSCH",
    role: "BOSCH ROAD SAFETY HACKATHON FINALISTrontend Developer",
    year: "April 2024",
    description:"I worked on implementing a Two-Wheeler Surrounding Awareness System, designed to enhance road safety by alerting riders about nearby vehicles or obstacles. This system utilizes sensor-based detection to monitor the surroundings and provide real-time alerts, reducing blind spots and potential collisions. Through this project, I gained hands-on experience in hardware integration, sensor data processing, and real-time alert mechanisms. Additionally, I collaborated with a team to optimize detection accuracy and ensure seamless functionality, contributing to the project's success as a Bosch Road Safety Hackathon finalist."},
];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaInstagram fontSize={26} className="hover:opacity-80" />,
  // },
  
  {
    href: "https://github.com/aishwaryaghore04",
    icon: <FaGithub fontSize={26} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aishwarya-ghore-666486243/",
    icon: <FaLinkedin fontSize={26} className="hover:opacity-80" />,
  },
];

export const CONTACT = {
  text: "I am always excited to collaborate on new and challenging projects. Whether you have a specific project in mind or just want to explore potential opportunities, Id love to hear from you. Lets combine my skills and expertise to create something amazing. Feel free to reach out to discuss how we can work together to achieve your goals.",
  email: "aishwaryaghore04@gmail.com",
  phone: "+91 9130515133",
};