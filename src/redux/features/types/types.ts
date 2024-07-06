export type Experience = {
  id: number;
  title: string;
  companyName: string;
  city: string;
  state: string;
  startDate: string;
  endDate: string;
  currentlyWorking: boolean;
  workSummery: string;
};

export interface PersonalInfoType {
  firstName: string;
  lastName: string;
  jobTitle: string;
  address: string;
  phone: string;
  email: string;
  themeColor?: string;
  summery?: string;
}

export interface DocumentType {
  id: number;
  documentId: string;
  locale?: string;
  title: string;
  resumeId: string;
  userEmail: string;
  userName?: string;
}
