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
    threejs,
    central,
    banana,
    hyundia,
    sait,
    aws,
    java,
    postgreSql,
    python,
    ai,
    youtube,
    data,
    teevision,
    logo,
} from "../assets";

export const navLinks = [
    {
        id: "services",
        title: "Services",
    },
    {
        id: "portfolio",
        title: "Portfolio",
    },
    {
        id: "about",
        title: "About Us",
    },
    {
        id: "testimonials",
        title: "Testimonials",
    },
];

const services = [
    {
        title: "Website Development",
        icon: mobile,
    },
    {
        title: "Website Design",
        icon: web,
    },
    {
        title: "SEO Optimization",
        icon: backend,
    },
    {
        title: "Mobile App Development",
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
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Java",
        icon: java,
    },
    {
        name: "Python",
        icon: python,
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
        name: "PostgreSQL",
        icon: postgreSql,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "aws",
        icon: aws,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Freelance Web Developer",
        company_name: "Self-Employed",
        icon: logo,
        iconBg: "#383E56",
        date: "2023 - Present",
        points: [
            "Design, develop, and maintain robust, scalable web applications using Node.js, Express.js, and MongoDB, demonstrating proficiency in full-stack development.",
            "Integrate various APIs to enhance application functionality, showcasing expertise in API utilization.",
            "Craft engaging, interactive user interfaces using React, JavaScript, HTML5/CSS3, Framer Motion, and Three.js, enhancing user experience and interaction.",
            "Use Framer Motion and Three.js to create immersive user interfaces and animations, demonstrating creativity and technical skills in UI/UX design.",
            "Develop websites using Wix and WordPress, demonstrating versatility and proficiency in different web development platforms.",
            "Leverage AWS to establish scalable, reliable cloud infrastructure, ensuring optimal application performance and reliability.",
        ],
    },
    {
        title: "Industry Software Project",
        company_name: "SAIT Polytechnic and Launchcode",
        icon: sait,
        iconBg: "#383E56",
        date: "April 2022 - December 2022",
        points: [
            "Spearheaded the development of a quote-to-cash system for commercial clients in the Oil & Gas industry, demonstrating leadership and project management skills.",
            "Employed a range of technologies including React, Typescript, Node.js, PostgreSQL, Git, Docker, and AWS, showcasing versatility and technical proficiency.",
            "Managed front-end and back-end development, client requirements gathering, and workflow, functionality, and reporting structure design.",
            "Performed code reviews, testing, and bug tracking, and prepared technical documents, ensuring code quality and project documentation.",
        ],
    },
    {
        title: "Hockey Referee",
        company_name: "Central Zone Referees",
        icon: central,
        iconBg: "#E6DEDD",
        date: "2016 - Feb 2022",
        points: [
            "Officiated Junior A, B, Midget, and Bantam Hockey Teams in Canada for over 6 years, demonstrating commitment and professionalism.",
            "Enforced Hockey Canada rules and regulations, communicated professionally with players, coaches, and parents, showcasing leadership and communication skills.",
            "Effectively managed conflicts and difficult situations, making quick, hard decisions to maintain a safe and fair playing environment.",
        ],
    },
    {
        title: "Concierge",
        company_name: "Precision Hyundai",
        icon: hyundia,
        iconBg: "#E6DEDD",
        date: "2020 - 2020",
        points: [
            "Restored and protected the appearance and value of customers' cars by detailing interiors and exteriors using advanced techniques and products.",
            "Provided professional and safe shuttle services for customers, ensuring a positive and stress-free experience.",
            "Handled transactions accurately and efficiently in the service and parts departments, providing customers with clear invoices and receipts.",
            "Scheduled customer service appointments over the phone, ensuring convenient service times for customers.",
        ],
    },
];


const testimonials = [
    {
        testimonial:
            "I had the pleasure of working with Aiden on a complex web development project, and I was impressed with their ability to handle multiple tasks while maintaining the highest level of quality.",
        name: "Ethan Nguyen",
        designation: "Software Developer",
        company: "SAIT",
        image: "https://randomuser.me/api/portraits/men/90.jpg",
    },
    {
        testimonial:
            "Aiden is an exceptional developer and a joy to work with. His passion for programming and problem-solving is unmatched.",
        name: "Nelson Torres",
        designation: "Software Engineer",
        company: "ByteForge",
        image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
        testimonial:
            "Aiden is a hardworking and detail-oriented software developer who consistently delivers high-quality work. His ability to collaborate effectively with team members and communicate technical concepts clearly is a valuable asset.",
        name: "Adrian Rhodes",
        designation: "Software Developer",
        company: "SAIT",
        image: "https://randomuser.me/api/portraits/men/18.jpg",
    },
];

const projects = [
    {
        name: "AI Image Generator",
        description:
            "Transform dreams into reality with AI-generated images using the MERN stack, Tailwind, OpenAI's DALL-E, and Cloudinary. This project provides a stunning user experience like no other, taking you on a magical journey into a world of wonders!",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "OpenAI DALL-E",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "MERN",
                color: "orange-text-gradient",
            },


        ],
        image: ai,
        source_code_link: "https://github.com/Aidenkopec/ai-image-generator",
    },
    {
        name: "Teevision",
        description:
            "Design the T-shirt of your dreams in stunning 3D! Unleash your creativity with React, ThreeJS, TailwindCSS, Framer Motion, and DALLE AI. Craft one-of-a-kind designs, add custom colors, and download with ease. Achieve a seamless user experience with responsive design and industry-standard best practices. Start creating now!",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "green-text-gradient",
            },
            {
                name: "Framer Motion",
                color: "pink-text-gradient",
            },
        ],
        image: teevision,
        source_code_link: "https://github.com/Aidenkopec/project-3d-clothing-website",
    },
    {
        name: "Data Management Sorting Algorithms",
        description:
            "Developed a high-performance Java multi-sorting algorithm that utilizes bubble, quick, insertion, selection, merge, and odd-even sorting algorithms. This solution offers lightning-fast sorting capabilities, enabling optimal efficiency.",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "Algorithms",
                color: "green-text-gradient",
            },
            {
                name: "Data management",
                color: "pink-text-gradient",
            },
        ],
        image: data,
        source_code_link: "https://github.com/Aidenkopec/Data-Management-Sorting-Algoritm",
    },
];

export {services, technologies, experiences, testimonials, projects};
