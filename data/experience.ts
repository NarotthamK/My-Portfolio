// data/experience.ts

import { WorkExperience, Skill, Certificate } from "@/lib/types";

export const data: {
  workExperience: WorkExperience[];
  skills: Skill[];
  certificates: Certificate[];
} = {
    workExperience: [
      {
        companyName: "Dell Technologies",
        companyLogo: "/Delltechnologies.png",
        position: "Software Engineer",
        startDate: "2021-09",
        endDate: "2023-08",
        jobDescription: `
       At Dell Technologies, I contributed to modernizing legacy customer and internal portals used by 30 K + users monthly.
I rebuilt front-end modules with React + TypeScript + Material UI, unifying the design across five platforms and improving load time by 2.5 seconds through SQL query tuning and API optimization.
I developed over 20 Spring Boot REST APIs backed by SQL Server, integrated Node.js middleware, and containerized deployments using Azure DevOps, Docker, and Kubernetes — reducing manual setup time per sprint.
Additionally, I diagnosed production issues using Dynatrace and Splunk, cutting recurring incidents by 40%.
This experience taught me how to build reliable, high-performance systems at enterprise scale.`,
      },
      {
        companyName: "Uber",
        companyLogo: "/uber.png",
        position: "Software Engineer",
        startDate: "2024-09",
        endDate: "2025-01",
        jobDescription: `
        At Uber, I helped scale the ride-matching and surge-pricing systems that process over a million daily API requests across major cities.
Using Node.js, React, and microservices, I developed services to optimize driver-rider pairing and integrated Deep ETA ML models to improve time-to-pickup accuracy. I built a React-based admin console to monitor demand surges and trigger pricing overrides in real time.
Our services ran in Docker containers on Kubernetes, supported by automated CI/CD pipelines.
This work improved ride allocation efficiency, enhanced pricing accuracy, and made the system more resilient during high-demand spikes.

        `,
      },
      {
        companyName: "JPMorgan Chase & Co",
        companyLogo: "/jpmc.png",
        position: "Software Engineer",
        startDate: "2025-02",
        jobDescription: `At J.P.Morgan Chase, I engineered Java-based Spring Boot microservices to streamline artifact ownership and compliance across 12 enterprise applications. I integrated Apache Kafka for asynchronous workflows, eliminating manual ownership updates per release and improving traceability for audit teams.
I also implemented secure REST APIs with JWT + Spring Security, enabling data sharing across governance platforms and reducing deployment time from days to hours through Jenkins CI/CD. On the UI side, I built React + TypeScript components using Salt-DS to standardize dashboards and added automated testing with Jest to prevent regressions.
This project strengthened system reliability, cut manual dependencies, and made compliance workflows fully auditable.`,
      },
    ],


  

    skills: [
      {
        name: "React",
        image: "/react.webp",
        url: "https://reactjs.org/",
      },
      {
        name: "Angular",
        image: "/angular.webp",
        url: "https://angular.io/",
      },
      {
        name: "Java",
        image: "/java.png",
        url: "https://www.oracle.com/java/",
      },
      {
        name: "Spring Boot",
        image: "/springboot.png",
        url: "https://spring.io/projects/spring-boot",
      },
      {
        name: "Node.js",
        image: "/nodejs.webp",
        url: "https://nodejs.org/",
      },
      {
        name: "Python",
        image: "/Python.jpeg",
        url: "https://www.python.org/",
      },
      {
        name: "Flask",
        image: "/flask.png",
        url: "https://flask.palletsprojects.com/",
      },
      {
        name: "jQuery",
        image: "/jquery.png",
        url: "https://jquery.com/",
      },
      {
        name: "Bootstrap",
        image: "/bootstrap.webp",
        url: "https://getbootstrap.com/",
      },
      {
        name: "Material UI",
        image: "/materiaui.webp",
        url: "https://mui.com/",
      },
      {
        name: "Tailwind CSS",
        image: "/tailwind.webp",
        url: "https://tailwindcss.com/",
      },
      {
        name: "SQL",
        image: "/sql.png",
        url: "https://www.w3schools.com/sql/",
      },
      {
        name: "MongoDB",
        image: "/mongodb.png",
        url: "https://www.mongodb.com/",
      },
      {
        name: "JavaScript",
        image: "/javascript.webp",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        name: "TypeScript",
        image: "/typescript.png",
        url: "https://www.typescriptlang.org/",
      },
       {
        name: "AI",
        image: "/AI.jpeg",
        url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
      },
    ],
    

  certificates: [
    {
      title: "AI For Everyone",
      image: "/certificates/AI For Everyone.png",
      url: "https://www.coursera.org/account/accomplishments/records/T92EL4YMHJWW",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      image: "/certificates/Supervised Machine Learning- Regression and Classification.png",
      url: "https://www.coursera.org/account/accomplishments/records/VJKT7U9PQS7R",
    },
    {
      title: "Databases and SQL for Data Science with Python",
      image: "/certificates/Databases and SQL for Data Science with Python.jpeg",
      url: "https://www.coursera.org/account/accomplishments/records/AZF2YTUMHJE7",
    },
    {
      title: "PCAP – Programming Essentials in Python",
      image: "/certificates/Python.png",
      url: "/certificates/PCAP – Programming Essentials in Python.png",
    },
    {
      title: "CLA - Programming Essentials in C",
      image: "/certificates/C.png",
      url: "/certificates/CLA - Programming Essentials in C.png",
    },
  ],
};
