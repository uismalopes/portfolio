export interface ResumeCard {
  start: number;
  end?: number;
  current?: boolean;
  title: string;
  description: string;
  company?: string;
  school?: string;
}

export interface PropsCardWork {
  title: string;
  subtitle: string;
  link: string;
  image: string;
  description: string;
}

export interface PropsModal {
  dados: PropsCardWork;
  show?: boolean;
  onHide: any;
}

export interface PropsCareer {
  start: number;
  end?: number;
  current?: boolean;
  title: string;
  description: string;
  company: string;
}

export interface PropsCourses extends Omit<PropsCareer, "company"> {
  school: string;
}

export interface PropsWork extends PropsCardWork {
  filter: string;
}
