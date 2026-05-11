// data/experience.ts

import { WorkExperience, Skill, Certificate } from "@/lib/types";

export const data: {
  workExperience: WorkExperience[];
  skills: Skill[];
  certificates: Certificate[];
} = {
    workExperience: [
    {
      companyName: "XSignOn Corporation",
      companyLogo: "/XSignOn.png",
      position: "Security Engineer (Cloud & Application)",
      startDate: "2025-02",
      jobDescription: `
At XSignOn, I work on securing cloud environments, web applications, APIs, and DevSecOps workflows across modern enterprise systems.

• Led application security assessments across web applications, APIs, and microservices by performing secure code reviews, threat modeling, and vulnerability analysis
• Integrated SAST and DAST security tools including Checkmarx, SonarQube, OWASP ZAP, and Snyk into CI/CD pipelines to support secure software delivery
• Conducted API security testing to identify authentication flaws, injection risks, insecure configurations, and data exposure vulnerabilities
• Implemented AWS security controls including IAM governance, least privilege access, and cloud security monitoring using AWS Security Hub and GuardDuty
• Developed DevSecOps workflows using GitHub Actions, Jenkins, Terraform, Docker, and Checkov to strengthen deployment security and infrastructure validation
• Partnered with engineering teams to prioritize remediation, improve secure coding practices, and reduce application security risk across production environments
      `,
    },
    {
      companyName: "XSignOn Corporation",
      companyLogo: "/XSignOn.png",
      position: "Security Engineer Intern",
      startDate: "2024-08",
      endDate: "2025-02",
      jobDescription: `
Supported application security, cloud security, and DevSecOps activities while contributing to secure development and vulnerability remediation workflows.

• Assisted in integrating SAST and SCA tools including SonarQube and Snyk into CI/CD pipelines for automated vulnerability detection
• Supported secure code review, API security testing, and vulnerability analysis across internal web applications and services
• Performed vulnerability assessments using AWS Security Hub and Nessus, helping engineering teams with triage and remediation coordination
• Assisted with AWS IAM access reviews to identify excessive permissions and support least privilege access management
• Contributed to infrastructure-as-code security validation using Terraform, Docker, and Checkov
• Supported ISO 27001 and NIST compliance documentation, audit preparation, and security remediation tracking
      `,
    },
    {
      companyName: "Visa",
      companyLogo: "/Visa.png",
      position: "Security Engineer",
      startDate: "2021-08",
      endDate: "2023-07",
      jobDescription: `
At Visa, I supported enterprise application security, cloud security, DevSecOps, and vulnerability management initiatives across large-scale financial technology environments.

• Performed application security assessments across enterprise web applications and APIs through secure code review, threat modeling, and penetration testing
• Integrated SAST and DAST security tooling including Checkmarx, SonarQube, and OWASP ZAP into CI/CD pipelines to improve automated security validation
• Conducted web and API security testing using Burp Suite and Nessus to identify authentication flaws, injection vulnerabilities, and insecure configurations
• Supported AWS and Azure cloud security controls including IAM governance, least privilege access, and security monitoring across production environments
• Built DevSecOps security workflows using Jenkins, GitHub Actions, Terraform, and Checkov to strengthen CI/CD and infrastructure security controls
• Partnered with engineering teams to remediate vulnerabilities, improve secure-by-design implementation, and support ISO 27001, NIST, and SOC 2 aligned security practices
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
      image: "/GPCC_image.png",
      url: "https://www.coursera.org/professional-certificates/google-cybersecurity",
    },
  ],
};
