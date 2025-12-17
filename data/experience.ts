// data/experience.ts

import { WorkExperience, Skill, Certificate } from "@/lib/types";

export const data: {
  workExperience: WorkExperience[];
  skills: Skill[];
  certificates: Certificate[];
} = {
  workExperience: [
    {
      companyName: "XsignON (Client: Citi Bank)",
      companyLogo: "/XSignOn.png",
      position: "Cloud & Application Security Engineer",
      startDate: "2024-11",
      jobDescription: `
At XsignON, I work on securing cloud infrastructure and applications in enterprise financial environments.

• Integrated security controls into GitHub Actions CI/CD pipelines to detect insecure code and cloud misconfigurations before production
• Designed and enforced AWS IAM least-privilege access models to reduce excessive permissions
• Hardened containerized workloads and cloud resources to minimize attack surfaces
• Collaborated with development teams to remediate OWASP Top 10 vulnerabilities such as SQL injection and XSS
• Validated remediation using application security testing tools as part of a secure SDLC
      `,
    },
    {
      companyName: "Independent / Self-Employed",
      companyLogo: "/uber.png",
      position: "Independent Security Analyst",
      startDate: "2023-03",
      endDate: "2024-10",
      jobDescription: `
Worked independently on security assessments and system hardening for small environments.

• Conducted vulnerability assessments using Nessus and Nmap
• Hardened Linux and Windows systems following CIS Benchmarks
• Implemented network security controls using UFW and iptables for asset isolation
• Provided remediation guidance to reduce recurring security findings
      `,
    },
    {
      companyName: "Vellore Institute of Technology (VIT)",
      companyLogo: "/VIT Vellore.png",
      position: "Teaching Assistant – Cybersecurity Lab",
      startDate: "2022-05",
      endDate: "2023-02",
      jobDescription: `
Supported hands-on cybersecurity labs and helped students troubleshoot real infrastructure and networking issues.

• Managed Linux and VMware-based lab environments for multiple student groups
• Diagnosed and resolved system and network configuration issues during lab sessions
• Guided students through packet analysis using Wireshark and access control concepts
      `,
    },
  ],

 






  

skills: [
      {
        name: "AWS",
        image: "/aws.png",
        url: "https://aws.amazon.com/",
      },
      {
        name: "Terraform",
        image: "/terraform.png",
        url: "https://www.terraform.io/",
      },
      {
        name: "Kubernetes",
        image: "/kubernetts.png",
        url: "https://kubernetes.io/",
      },
      {
        name: "Docker",
        image: "/docker.png",
        url: "https://www.docker.com/",
      },
      {
        name: "Burp Suite",
        image: "/burpsuite.png",
        url: "https://portswigger.net/burp",
      },
      {
        name: "Python",
        image: "/Python.jpeg",
        url: "https://www.python.org/",
      },
      {
        name: "Nmap",
        image: "/nmap.png",
        url: "https://nmap.org/",
      },
      {
        name: "OWASP",
        image: "/owasp.png",
        url: "https://owasp.org/",
      },
      {
        name: "Wireshark",
        image: "/wireshark.png",
        url: "https://www.wireshark.org/",
      },
      {
        name: "Bash",
        image: "/bash.png",
        url: "https://www.gnu.org/software/bash/",
      },
      {
        name: "Git",
        image: "/git.png",
        url: "https://git-scm.com/",
      },
      {
        name: "Linux",
        image: "/linux.png",
        url: "https://www.linux.org/",
      },
      {
        name: "Splunk",
        image: "/splunk.jpg",
        url: "https://www.splunk.com/",
      },
      {
        name: "Suricata",
        image: "/suricata.jpg",
        url: "https://suricata.io/",
      },
      {
        name: "Zeek",
        image: "/zeek.png",
        url: "https://zeek.org/",
      },
       {
        name: "AI",
        image: "/AI.jpeg",
        url: "https://en.wikipedia.org/wiki/Artificial_intelligence",
      },
    ],

certificates: [
    {
      title: "CompTIA Security+",
      image: "/certificates/SecurityPlus.png",
      url: "https://www.comptia.org/certifications/security",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      image: "/certificates/AWS_CP.png",
      url: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
    },
    {
      title: "Google Cybersecurity Professional Certificate",
      image: "/GCPC.png",
      url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
    },
  ],
};
