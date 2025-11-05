import { SanityDocument } from "next-sanity";

export type Testimonial = {
    authorName: string;
    authorImage: string;
    companyName: string;
    companyUrl: string;
    position: string;
    socialLink?: string;
    content: string;
    priority: number;
}

export interface PersonalInfo {
    name: string;
    resume: string;
    profileImage: string;
    setupImage: string;
    moreInfo: string;
    email:string;
    workingHours:string;
    address:string
}

export type SocialLink = {
  title: string;
  url: string;
  priority: number;
};


export type WorkExperience = {
  companyName: string;
  companyLogo: string; // path to image
  position: string;
  startDate: string;   // e.g., "2022-05"
  endDate?: string;    // optional
  jobDescription: string;
};

  
  export interface Skill {
    name: string;
    image: string; // required by <Image src={skill.image} />
    url?: string;  // optional link to skill doc/profile
  }
  
  export interface Certificate {
    title: string;
    image: string; // certificate image
    url?: string;  // link to certificate site
  }
  

  export interface Project {
    title: string;
    description: string;
    gitUrl?: string;
    liveUrl?: string;
    images: string[];
    techStack: string[];
    priority: number; // ✅ remove `?` to make it required
  }
  
  