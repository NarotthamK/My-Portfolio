import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    title: "Cloud Security Hardening & Monitoring",
    description:
      "Secured AWS cloud environments by enforcing IAM least-privilege access, hardening infrastructure, and enabling continuous threat monitoring to detect risky activity before impact.",
    gitUrl: "", // optional – add later if you want
    images: ["/robot.png"], // keeping same image as requested
    techStack: ["AWS IAM", "GuardDuty", "CloudTrail", "Terraform"],
    priority: 1,
  },
  {
    title: "SOC Automation & Threat Detection",
    description:
      "Built a SOC-style detection pipeline to ingest network telemetry, detect attacker behavior, and automate alert enrichment to reduce investigation time and improve response efficiency.",
    gitUrl: "", // optional – add later if you want
    images: ["/AI_ImageGen.jpg"], // keeping same image as requested
    techStack: ["Splunk", "Zeek", "Suricata", "Python"],
    priority: 2,
  },
];

