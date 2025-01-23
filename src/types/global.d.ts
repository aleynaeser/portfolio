export declare global {
  interface ISocialMediaLink {
    icon: React.FunctionComponent;
    href: string;
  }

  interface IEducation {
    university: string;
    department: string;
    degree: string;
    date: string;
  }

  interface IExperience {
    title: string;
    company: string;
    date: string;
    location: string;
    description: string;
  }
}
