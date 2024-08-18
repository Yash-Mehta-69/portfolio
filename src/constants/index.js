import {
  backend,
  creator,
  mobile,
  web,
  github,
  css,
  git,
  html,
  javascript,
  reactjs,
  python,
  mysql,
  airportschool,
  nichetech,
  train,
  codeworked,
  result,
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Database Management",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Python Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Github",
      icon: github,
    },
    {
      name: "Python",
      icon: python
    },
    {
      name: "Mysql",
      icon: mysql
    }

  ];
  
  const experiences = [
    {
      title: "Software Developer",
      company_name: "Airport School",
      icon: airportschool,
      iconBg: "#383E56",
      date: "Aug 2023 - April 2024",
      points: [
        "Design and develop desktop applications using Python and Tkinter to support various administrative and educational functions within the school.",
        "Implement and maintain MySQL databases to store and manage application data effectively.",
        "Work closely with other team members and stakeholders to understand their requirements and provide technical solutions.",
        "Participate in regular team meetings and contribute to project planning and progress discussions.",
      ],
    },
    {
      title: "Python Developer",
      company_name: "NicheTech Computer Solutions",
      icon: nichetech,
      iconBg: "#383E56",
      date: "Aug 2024 - Present",
      points: [
        "Developing and maintaining web applications using Python Django and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "School Office Administration Software",
      description:
      "Tasks including student fee collection and management, reporting, printing, and student personal data management are all handled by this office administration software.",
      tags: [
        {
          name: "tkinter",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: codeworked,
      source_code_link: "https://github.com/Kunal-63/CodeWorked",
    },
    {
      name: "Train Platform Allocation Software",
      description:
        "Manages real-time train schedules and platform assignments, adjusting for delays and resolving conflicts to ensure smooth operations. Provides real-time updates through digital display boards and announcements. Features a comprehensive dashboard for station management and mobile access for real-time updates and remote control.",
      tags: [
        {
          name: "tkinter",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: train,
      source_code_link: "https://github.com/Yash-Mehta-69/CS-project-yash-railways",
    },
    {
      name: "Marks Entry And Reports Card Software",
      description:
       "The Marks Entry and Report Card Generator software simplifies grade input and automates report card creation, facilitating efficient academic performance tracking for educational institutions.",
      tags: [
        {
          name: "tkinter",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "mysql",
          color: "pink-text-gradient",
        },
      ],
      image: result,
      source_code_link: "https://github.com/Yash-Mehta-69/REPORTCARD",
    },
  ];
  
  export { services, technologies, experiences, projects };