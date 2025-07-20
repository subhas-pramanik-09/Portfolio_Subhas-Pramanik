// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import mlLogo from './assets/tech_logo/ML.png'
import cvLogo from './assets/tech_logo/CV.png'


// Experience Section Logo's
import gdgLogo from './assets/company_logo/gdg.png';
import piLogo from './assets/company_logo/prodigy_infotech_logo.png';



// Education Section Logo's
import tintLogo from './assets/education_logo/tint.png';
import dmbLogo from './assets/education_logo/dmb.png';

// Project Section Logo's
import applyLogo from './assets/work_logo/apply.png';
import sarathiLogo from './assets/work_logo/sarathi.png';
import jobLogo from './assets/work_logo/job.png';
import faceLogo from './assets/work_logo/face.png';
import connectLogo from './assets/work_logo/connect.png';
import aigymLogo from './assets/work_logo/aigym.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Machine Learning', logo: mlLogo },
      { name: 'Computer Vision', logo: cvLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: gdgLogo,
      role: "Web Developer Co-Lead",
      company: "Google Developer Groups - TINT",
      date: "January 2025 - Present",
      desc: "I am the Web Development Co-Lead of the Google Developer Student Clubs (GDSC) at my campus, where I collaborate with fellow developers, contribute to building web-based projects, share knowledge, and help organize technical sessions to encourage learning and innovation among students.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Node JS",
        "Express JS",
        "Tailwind CSS",
        "MongoDb",
        "Redux",
      ],
    },
    {
      id: 1,
      img: piLogo,
      role: "Web Development Intern",
      company: "Prodigy InfoTech",
      date: "February 2025 - February 2025",
      desc: "I worked as a Web Development Intern at Prodigy InfoTech, where I developed several full-stack and front-end projects. This internship helped me strengthen my skills in modern web technologies and gain practical experience in building responsive and user-friendly applications.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",
        "TypeScript",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: tintLogo,
      school: "Techno Intgernational New Town",
      date: "August 2023 - July 2027",
      grade: "8.81 CGPA",
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Information Technology at Techno International New Town under the Maulana Abul Kalam Azad University of Technology (MAKAUT). I am in my third semester with a current Cumulative Grade Point Average (CGPA) of 8.81.",
      degree: "B. Tech in Information Technology",
    },
    {
      id: 1,
      img: dmbLogo,
      school: "D. M. B. High School",
      date: "2021 - 2023",
      grade: "78.4%",
      desc: "I completed my Higher Secondary (Class XII) from DMB High School under the West Bengal Council of Higher Secondary Education (WBCHSE) with Physics, Chemistry, Mathematics, and Biology (PCMB) as my subjects, securing 78.4%.",
      degree: "WBCHSE (XII) - PCMB",
    },
    {
      id: 2,
      img: dmbLogo,
      school: "D. M. B. High School",
      date: "April 2019 - March 2021",
      grade: "93%",
      desc: "I completed my Secondary Education (Class X) from DMB High School under the West Bengal Board of Secondary Education (WBBSE) with Science as my main stream, securing 93%.",
      degree: "WBSE (X) - Science",
    },

  ];
  
  export const projects = [
    {
      id: 0,
      title: "Get My Scholarship",
      description:
        "A full-stack web application that helps students to find their best scholarship. Designed to bridge the gap between students and opportunities, this platform uses machine learning to recommend scholarships tailored to each student's unique profile",
      image: applyLogo,
      tags: ["Machine Learning", "Python", "Scholarship", "Recomendation System", "MERN Stack", "Decision Tree Classifier"],
      github: "/",
      webapp: "/",
    },
    {
      id: 1,
      title: "SARATHI",
      description:
        "A real-time Driver Fatigue Monitoring System using Python, OpenCV, and MediaPipe. It detects drowsiness and distraction through eye and head movement analysis. Alerts are triggered via sound/vibration",
      image: sarathiLogo,
      tags: ["Computer Vision", "Mediapipe", "OpenCV-Python", "Road Safety", "Smart Monitoring", "Drawsiness Detection", "Driver Fatigue Detection"],
      github: "/",
      webapp: "/",
    },
    {
      id: 2,
      title: "AI Personal Trainer",
      description:
        "An AI Powered personal Gym Trainer which monitiors you and by tracking Arm Landmarks counts the number of curls you do.",
      image: aigymLogo,
      tags: ["Mediapipe", "Computer Vision", "OpenCV-Python", "Pose Detection"],
      github: "/",
      webapp: "/",
    },
    {
      id: 3,
      title: "Connect Now",
      description:
        "A Full Stack real time video conferencing website using WebRTC and Socket.io",
      image: connectLogo,
      tags: ["Socket.io","WebRTC", "Node.js", "HTML","Express JS", "CSS"],
      github: "/",
      webapp: "/",
    },
    {
      id: 4,
      title: "Face Clustering App ",
      description:
        "This AI-powered app can automatically detect, recognize, and cluster faces from multiple images",
      image: faceLogo,
      tags: ["Face Clustering", "Facenet-PyTorch", "DBSCAN", "MTCNN", "OpenCV"],
      github: "/",
      webapp: "/",
    },
    {
      id: 5,
      title: "Apply Here",
      description:
        "A Full Stack Job search and apply portal",
      image: jobLogo,
      tags: ["React JS", "Tailwind CSS", "JavaScript", "Framer Motion", "MongoDB", "Node JS", "Express JS", "Cloudinary"],
      github: "/",
      webapp: "/",
    },
  ];  