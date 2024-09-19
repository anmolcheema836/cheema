import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  tesla,
  carrent,
  jobit,
  seo,
  dms,
  car,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Engineer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Engineer",
    companyName: "Promark",
    icon: tesla,
    iconBg: "#383E56",
    date: "24-June-2024-Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Software Developer",
    companyName: "Promark",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "24-June-2024-Present",
    points: [
      "Worked on various projects to develop and maintain web applications using React.js.",
      "Collaborated with different teams to ensure project milestones were met.",
      "Ensured web applications were responsive and compatible across different browsers.",
      "Provided feedback and participated in code reviews.",
    ],
  },
  {
    title: "Web Developer",
    companyName: "Promark",
    icon: tesla,
    iconBg: "#383E56",
    date: "24-June-2024-Present",
    points: [
      "Developed and maintained web applications focusing on user experience and design.",
      "Worked closely with designers and product managers to refine project specifications.",
      "Ensured compatibility of applications across multiple browsers and devices.",
      "Engaged in code reviews and contributed to improving the codebase.",
    ],
  },
  {
    title: "Full Stack Developer",
    companyName: "Promark",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "24-June-2024-Present",
    points: [
      "Managed both frontend and backend development tasks for web applications.",
      "Collaborated with various stakeholders to deliver comprehensive solutions.",
      "Implemented responsive and accessible design principles.",
      "Provided mentorship and feedback during code reviews.",
    ],
  },
];


const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Anmol Cheema built a interactive website for me",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Anmol Cheema does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Anmol Cheema optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Desktop Assistant",
    description:
      "I created a desktop assistant that utilizes voice recognition to perform a range of tasks, similar to Google Assistant. The assistant can open applications, set alarms, and execute various commands based on vocal instructions. It features a robust voice-command system for seamless user interaction. The project showcases advanced capabilities in speech processing and application integration. Its intuitive interface and reliable performance enhance productivity and user convenience. This development highlights proficiency in both voice technology and desktop application functionality.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Gemini ai api",
        color: "green-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Promark Ai ",
    description:
      "I developed an AI model named ProMark AI, designed to function similarly to ChatGPT. This model leverages advanced natural language processing to engage in human-like conversations and provide insightful responses. ProMark AI is equipped with capabilities for understanding context, generating coherent dialogue, and assisting with a wide range of queries. It exemplifies my expertise in AI and machine learning, offering a versatile tool for interactive communication and problem-solving.",
    tags: [
      {
        name: "Html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "Google api",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trained Ai model to predict used car prices.",
    description:
      "I trained an AI model to predict used car prices, using machine learning techniques to analyze historical data and market trends. The model predicts prices based on features such as car make, model, age, mileage, and condition. It achieved a Root Mean Squared Error (RMSE) of 77,598.01, indicating its accuracy in forecasting prices. This project demonstrates my ability to apply predictive modeling and data analysis to real-world problems, providing valuable insights for buyers and sellers in the used car market.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Pandas",
        color: "green-text-gradient",
      },
      {
        name: "XBoost",
        color: "pink-text-gradient",
      },
      {
        name: "Keras",
        color: "blue-text-gradient",
      },    
    ],
    image: car,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Interactive Panel Demo",
    description:
      "I developed an interactive panel using HTML, CSS, and JavaScript that emulates the functionality of a real-world interface. This project features a dynamic UI with responsive elements, allowing users to engage with various interactive components. The design ensures a seamless user experience, closely mirroring the behavior of a physical panel. Key functionalities include real-time updates and intuitive controls. The project demonstrates proficiency in front-end development and user interface design. It’s optimized for modern web browsers and provides a smooth, interactive experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Device management system Testing",
    description:
      "I performed testing for a device management system designed for interactive panels, ensuring the system's functionality, reliability, and performance. The testing process involved evaluating key features such as device control, connectivity, and user interface responsiveness. I identified and resolved issues related to device interaction and panel management, ensuring seamless operation across different environments. This project demonstrated my proficiency in system testing and quality assurance for hardware-software integration.",
    tags: [
      {
        name: "Blackbox-Testing",
        color: "blue-text-gradient",
      },
      {
        name: "Whitebox-Testing",
        color: "green-text-gradient",
      },   
    ],
    image: dms,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Seo tools and tools to automate tasks.",
    description:
      "I developed a suite of tools designed to improve SEO and automate various tasks. These tools streamline processes such as keyword analysis, website performance tracking, and content optimization. By automating routine tasks like backlink monitoring and rank tracking, the tools enhance efficiency and improve website visibility. This project showcases my ability to create solutions that optimize workflow and deliver measurable results in digital marketing.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "chromedriver.exe",
        color: "pink-text-gradient",
      },
      {
        name: "scrapy",
        color: "blue-text-gradient",
      },    
    ],
    image: seo,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
