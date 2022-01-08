import { Skill } from './skill';
import { workExperience} from './workExperience';
import { education } from './education';
import { socialMedia } from './socialMedia';
import { androiddevproject } from './androiddevproject';
import { softwaredevproject } from './softwaredevproject';
import { webdevproject} from './webdevProject';
import { cpprofile } from './cpprofile';
import { RolesAndResponsibilities } from './rolesAndResponsibilities';
import { Certifications } from './Certifications';
import { Achievements } from './Achievements';

export class Detail { 
    name: string;
    image: string;
    summary: string[];
    banner: string;
    skills: Skill[];
    certifications: Certifications[];
    github: string;
    githubusername: string;
    buymecoffee: string;
    twitter: string;
    instagram: string;
    quora: string;
    linkdin: string;
    workExperience : workExperience[];
    rolesAndResponsibilities : RolesAndResponsibilities[];
    education: education[];
    mail: string;
    whatsapp: string;
    socialMedia: socialMedia[];
    cpprofile: cpprofile[];
    androiddevproject: androiddevproject[];
    softwaredevproject: softwaredevproject[];
    webdevproject: webdevproject[];
    achievements: Achievements[];

}