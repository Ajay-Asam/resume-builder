export interface Resume {
    personal: {
      name: string;
      email: string;
      phone: string;
      summary: string;
    };
    experience: {
      company: string;
      role: string;
      duration: string;
      description: string;
    }[];
    education: {
      institute: string;
      degree: string;
      year: string;
    }[];
    skills: string[];
  }

//   skills