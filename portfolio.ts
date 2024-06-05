import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Sai Sivamani Vanapalli",
  title: "Hi all, I'm Sai Sivamani",
  description:
    "I'm a passionate Full Stack web developer with a proven track record in building comprehensive web applications using HTML, CSS, JavaScript, PHP, and React.js. My enthusiasm for technology drives me to continuously explore and integrate new tools and techniques into my projects. With a strong work ethic and a proactive mindset, I thrive on challenges and am eager to collaborate with teams to deliver exceptional results. As a proficient team leader, I excel in fostering collaboration and guiding my team towards success.",
  resumeLink: "assets/resume.pdf",
};

export const openSource = {
  githubUserName: "saisivamani",
};  

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:saisivamani.vanapalli@gmail.com",
  linkedin: "https://www.linkedin.com/in/sivamani56/",
  github: "https://github.com/saisivamani/",
  instagram: "https://www.instagram.com/always_mani.naidu/",
  // facebook: '#',
  // twitter: '#',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER & DESIGNER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Web applications using LAMP Stack"),
        emoji("⚡ Building responsive static websites using Next.js & React.js"),
        emoji("⚡ Building and Designing App protypes and User Interfaces"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Figma",
          iconifyTag: "logos:figma",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "PHP",
          iconifyTag: "logos:php",
        },
        
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
       
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "70",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "SRKR Engineering College, Bhimavaram",
    subHeader: "Bachelor of Technology in Computer Science & Design",
    duration: " 2021 - Present",
    desc: "",
    grade: "7.5 CGPA",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "Sri Chaitanya Jr College, Palakollu",
    subHeader: "Board of Intermediate",
    duration: " 2019 - 2021",
    desc: "",
    grade: "79.5 Percentile",
    descBullets: [], // Array of Strings
  }, 
  {
    schoolName: "ZPHS, Siragalapalli",
    subHeader: "Board of Secondary Education",
    duration: " 2017 - 2019",
    desc: "",
    grade: "9.2 CGPA",
    descBullets: [], // Array of Strings
  }, 
  
];

export const experience: ExperienceType[] = [
  {
    role: "Full Stack Developer Intern",
    company: "MCR Web Solutions",
    companyLogo: "/img/icons/common/mcr_logo.png",
    date: "Aug 2022 - June 2023",
    desc: "During my internship at MCR Web Solutions, I spearheaded the development of a Real-time Full Stack Web Application for a prestigious local association. Additionally, I formed and led a team of 10 members from our department to maintain our college's official website, demonstrating strong leadership and collaboration skills. My expertise in HTML, CSS, JavaScript, PHP, and MySQL ensured project success and effective team management.",
  },

  {
    role: "Co-Founder",
    company: "SRKR Campus Online",
    companyLogo: "/img/icons/common/co_logo.png",
    date: "Dec 2022 - Mar 2024",
    desc: "As a Co-founder of SRKR CAMPUS ONLINE, I contributed my abilities and efforts to its establishment, fostering a platform that bridges the gap between industries and students. Our startup facilitates student engagement with potential employers, resource exchange, and community building. I spearheaded vision conceptualization, team assembly, and platform development, achieving significant traction within our campus ecosystem. Additionally, we pioneered affordable, homemade food delivery on campus, fostering convenience and community among students.",
  },

  {
    role: "E-commerce Operations Coordinator Intern",
    company: "Bhimavaram Online",
    companyLogo: "/img/icons/common/bvrmol_logo.png",
    date: "Sep 2021 - Nov 2023",
    desc: "During my internship at Bhimavaram Online, an ONDC-enabled e-commerce platform, I excelled in harmonizing local stores with the digital marketplace. I orchestrated vendor onboarding, impactful social media campaigns, and streamlined order processing and delivery, amplifying customer satisfaction. This experience enriched my adeptness in project management, digital marketing, and business development.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  
];

export const projects: ProjectType[] = [
  
  {
    name: "College Official Website ",
    desc: "As Team Lead and Project Coordinator, I managed the SRKR College official website, facilitating seamless updates and content management across branches. My development of dynamic admin modules empowered branch administrators to modify content effortlessly, enhancing accessibility and functionality.",
    github: "https://github.com/saisivamani/srkrec_old",
    link: "https://srkrec.edu.in/web_team.php",
  },
  {
    name: "Youth Cultural Association Platform",
    desc: "Developed a full-stack web app for a national youth cultural association with 1100+ members, showcasing events and updates, and enabling branch clubs to verify member status and grant access seamlessly.",
    github: "https://github.com/saisivamani/youthclub",
    link: "https://ycabvrm.com/",
  },
  
  {
    name: "BO Lunch Box",
    desc: "Developed a software solution for BO Lunch Box that notifies parents about lunch pick-up, offers live location tracking, and confirms delivery at school, ensuring fresh and nutritious meals for students.",
    github: "https://github.com/saisivamani/lunchbox",
    link: "http://saipraveen.free.nf/lunchbox/?i=1", 
  },
  {
    name: "Personal Portfolio",
    desc: "Developed a responsive portfolio using React.js and Next.js with Bootstrap. This project showcases my work, skills, and experience as a software developer, providing a professional and interactive way to connect with potential employers and collaborators.",
    github: "https://github.com/saisivamani/personal-portfolio_",
    link: "https://saisivamani-vanapalli.vercel.app/",
  },
  
];




// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "SAI SIVA MANI VANAPALLI",
  description: greetings.description,
  author: "SAI SIVA MANI VANAPALLI",
  image: "https://avatars.githubusercontent.com/u/101646636?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Saisivamani Vanapalli",
    "Sai Sivamani",
    "@saisivamani",
    "Sivamani",
    "Portfolio",
    "Saisivamani Portfolio ",
    "Sai Sivamani Vanapalli Portfolio",
  ],
};
