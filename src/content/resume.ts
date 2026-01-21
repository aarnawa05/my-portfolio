export type Link = { label: string; href: string };

export type EducationItem = {
    school: string;
    degree: string;
    location: string;
    date: string;
    gpa?: string;
    coursework?: string[];
};

export type ExperienceItem = {
    company: string;
    role: string;
    location: string;
    date: string;
    bullets: string[];
};

export type ProjectItem = {
    name: string;
    stack: string;
    bullets: string[];
    links?: Link[];
};

export type ResumeData = {
    name: string;
    phone: string;
    email: string;
    links: Link[];
    education: EducationItem[];
    skills: {
        languages: string[];
        frameworks: string[];
        developerTools: string[];
        libraries: string[];
    };
    projects: ProjectItem[];
    experience: ExperienceItem[];
};

export const resume: ResumeData = {
    name: "Aarnawa Koirala",
    phone: "817-630-4442",
    email: "aarnawakoirala@gmail.com",
    links: [
        { label: "LinkedIn", href: "https://linkedin.com/in/aarnawa" },
        { label: "GitHub", href: "https://github.com/aarnawa05" }
    ],

    education: [
        {
            school: "University of Texas",
            degree: "B.S. in Computer Science, Minor in Business",
            location: "Austin, TX",
            date: "May 2027",
            gpa: "3.96 / 4.00",
            coursework: ["Data Structures", "Operating Systems", "Computer Vision", "Software Engineering"]
        }
    ],

    skills: {
        languages: ["Java", "C", "Python", "HTML/CSS", "JavaScript"],
        frameworks: ["Spring", "React", "Flask"],
        developerTools: ["Git", "VS Code", "SSH", "Postman"],
        libraries: ["Apache POI", "NumPy", "SQLAlchemy"]
    },

    projects: [
        {
            name: "PintOS",
            stack: "C · Concurrency · Kernel",
            bullets: [
                "Designed and implemented priority scheduling with priority donation to prevent starvation.",
                "Developed system calls (file operations, process management) for safe kernel/user interaction.",
                "Refactored timer system for precise thread sleeping with no busy waiting to reduce CPU waste.",
                "Debugged concurrency issues by analyzing race conditions and adding synchronization (semaphores/locks)."
            ]
        },
        {
            name: "Memory Allocator",
            stack: "C",
            bullets: [
                "Implemented custom malloc/free using explicit free lists, coalescing, and 16-byte alignment.",
                "Optimized fragmentation handling, improving utilization and allocation speed.",
                "Built a heap consistency checker for corruption/alignment/invalid free detection.",
                "Achieved ~85% utilization and ~1750 requests/sec throughput."
            ]
        },
        {
            name: "Education Website",
            stack: "React · Flask · PostgreSQL · Docker · AWS EC2",
            bullets: [
                "Built and deployed a full-stack app serving 50k+ relational records with filtered search, joins, and pagination (<300 ms avg API).",
                "Implemented REST endpoints with server-side pagination/filtering, cutting payload sizes by ~70% and improving load times.",
                "Created responsive UI + visualizations using React, Bootstrap, D3, and Recharts; deployed via AWS Amplify.",
                "Collaborated in a 5-person team with code reviews and iterative releases while maintaining 90%+ backend test coverage."
            ]
        }
    ],

    experience: [
        {
            company: "Sugarphoria - DFW Airport",
            role: "Store Associate",
            location: "Dallas, TX",
            date: "May 2024 – Sep 2024",
            bullets: [
                "Used Java (Apache POI) to automate sales trend analysis and streamline informal inventory reporting.",
                "Operated the store (often independently) during peak airport traffic; handled 200+ daily transactions and maintained stock accuracy.",
                "Processed ~$9,200/week in net sales through efficient service and strategic up-selling."
            ]
        }
    ]
};
