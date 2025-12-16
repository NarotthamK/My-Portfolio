// data/hero.ts

import { PersonalInfo,SocialLink } from "@/lib/types";

export const heroData: PersonalInfo = {
  name: "Narottham K",
  resume: "/Naveen Sai_SDE_ Resume.pdf", // path to resume in public folder
  profileImage: "/profile.webp", // path to image in public folder
  setupImage: "/setup.webp", // path to setup image
  moreInfo: `
My path into security started in a hands-on cybersecurity lab, not from theory alone. As a Teaching Assistant, I saw how well-written code could still be insecure, which pushed me to focus on how real systems fail—not just how they’re designed.

That curiosity led me to work independently on security assessments, where I gained practical experience hardening Linux systems, configuring firewalls, and identifying vulnerabilities in small environments. This phase taught me how to solve security problems without predefined playbooks.

Today, I work as a Cloud and Application Security Engineer at XsignON, where I help secure AWS environments and production applications. My work focuses on IAM least-privilege, cloud hardening, and integrating security controls into CI/CD pipelines so risks are addressed before deployment.

I believe effective security is built through clear design, automation, and collaboration with engineering teams—not just tools. My goal is to help build cloud-native systems that are secure by default and resilient in real-world environments.
  `.trim(),
  email:"narotthamk@gmail.com",
  workingHours:"9:00 AM - 6:00 PM",
  address:"USA"
};



