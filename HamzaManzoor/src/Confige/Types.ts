export interface projectsAttr {
  id: any;
  img: any;
  til: string;
  dsc: string;
  link?: any;
  icons?: any;
  tags?: string[];
}

export interface projectsProps {
  id: string;
  description: string;
  link: string;
  img: string;
  tech: string[];
  title: string;
  catg: string[];
}
export interface clientProps {
  id: string;
  cls: string;
  box: string;
  date: string;
  ed: string;
}
export interface FaqProps {
  id: string;
  ques: string;
  ans: string;
}
export interface InfoProps {
  id: string;
  box: string;
  skill: string;
  time: string;
  company: string;
  date: string;
}
export interface initialFirebaseContext {
  projectsData: projectsProps[];
  clientData: clientProps[];
  FaqData: FaqProps[];
  InfoData: InfoProps[];
  getProjectData: () => void;
  getClientData: () => void;
  getFaqData: () => void;
  getInfoData: () => void;
}
