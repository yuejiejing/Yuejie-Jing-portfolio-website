import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 4 years of hands-on software engineering experience, I have honed my skills in front-end technologies like React, Next.js, TailwindCSS, as well as back-end technologies like MySQL. I'm also proficient in many coding languanges, such as JavaScript, TypeScript, Python and C++. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 4 years of hands-on software engineering experience, I have worked with a variety of technologies, including React, Next.js, TypeScript, TailwindCSS, MySQL, and D3.js. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2020 - Present",
    role: "Software Engineer",
    company: "MathWorks",
    description: `Designed and implemented user interfaces using C++ and JavaScript. Implemented high-impact infrastruactural APIs using JavaScript and MATLAB. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["JavaScript", "C++", "MATLAB", "CSS"],
  },
  {
    year: "2019 Summer",
    role: "Software Engineer Intern",
    company: "MathWorks",
    description: `Developed and maintained web-based dashboard application to show software feature performance using JavaScript and MATLAB. Worked closely with product managers to locate regressions and bugs with help of this dashboard application.`,
    technologies: ["JavaScript", "MATLAB", "HTML", "CSS"]
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  phoneNo: "",
  email: "",
};
