// data/hero.ts

import { PersonalInfo,SocialLink } from "@/lib/types";

export const heroData: PersonalInfo = {
  name: "Narottham K",
  resume: "/Cloud & App Sec Resume.pdf", // path to resume in public folder
  profileImage: "/profile.webp", // path to image in public folder
  setupImage: "/setup.webp", // path to setup image
  moreInfo: `
My journey into cybersecurity started with a strong interest in how modern applications, APIs, and cloud systems are secured in real-world environments. Early in my career, I worked on vulnerability assessments, system security, and secure infrastructure practices, which helped me build a strong foundation in identifying and mitigating security risks across enterprise environments.

As I gained experience, my focus shifted toward Application Security and DevSecOps, where I became increasingly interested in how security can be integrated directly into the software development lifecycle rather than treated as a separate process. This led me to work extensively with secure code reviews, API security testing, threat modeling, vulnerability remediation, and CI/CD security automation.

Today, I work as an Application Security Engineer at XSignOn, where I help secure enterprise web applications, APIs, and cloud-native systems across AWS environments. My work involves integrating SAST, DAST, and SCA tooling into CI/CD pipelines, performing application security assessments, supporting secure development practices, and collaborating closely with engineering teams to reduce security risks before deployment.

I enjoy working at the intersection of Application Security, Cloud Security, and DevSecOps, with a strong focus on building scalable security processes that align with modern engineering workflows. My goal is to help organizations build secure-by-design applications and resilient cloud-native platforms without slowing down development velocity.
  `.trim(),
  email:"narotthamk@gmail.com",
  workingHours:"9:00 AM - 6:00 PM",
  address:"USA"
};



