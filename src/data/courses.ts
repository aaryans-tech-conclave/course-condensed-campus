export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  season?: "Spring" | "Autumn" | "";  // Made optional and allow empty string
  instructor?: string;  // Made optional
  description?: string;  // Made optional
  schedule: {
    days?: string[];  // Made optional
    time?: string;    // Made optional
    location?: string;  // Made optional
  };
}

export const courses: Course[] = [
  {
    id: "EC21203",
    code: "EC21203",
    name: "NETWORK THEORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Amitabha Bhattacharya",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC21205",
    code: "EC21205",
    name: "SEMICONDUCTOR DEVICES",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Aniket Singha",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC21207",
    code: "EC21207",
    name: "ANALOG ELECTRONIC CIRCUITS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Tarun Kanti Bhattacharyya",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC29203",
    code: "EC29203",
    name: "NETWORK THEORY LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Debashis Sen",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC29205",
    code: "EC29205",
    name: "DEVICES LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Prasanta Kumar Guha",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC29207",
    code: "EC29207",
    name: "ANALOG CIRCUITS LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Anindya Sundar Dhar",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "MA20205",
    code: "MA20205",
    name: "PROBABILITY AND STATISTICS",
    department: "Mathematics",
    credits: 3,
    season: "",
    instructor: "",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC21204",
    code: "EC21204",
    name: "LINEAR ALGEBRA AND OPTIMIZATION MODELS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Mrityunjoy Chakraborty",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC21202",
    code: "EC21202",
    name: "DIGITAL ELECTRONIC CIRCUITS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Goutam Saha",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC21206",
    code: "EC21206",
    name: "ELECTROMAGNETIC ENGINEERING",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Sarang Pendharker",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC21208",
    code: "EC21208",
    name: "SIGNALS AND SYSTEMS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Subhadip Mukherjee",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC29202",
    code: "EC29202",
    name: "DIGITAL CIRCUITS LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Goutam Saha",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC21210",
    code: "EC21210",
    name: "SYSTEMS AND CONTROL",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Ritwik Kumar Layek",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC39201",
    code: "EC39201",
    name: "DSP LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Sharba Bandyopadhyay",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC31203",
    code: "EC31203",
    name: "COMMUNICATION-I",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Goutam Das",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC39005",
    code: "EC39005",
    name: "MICROWAVE LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Rajat Roy",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC31005",
    code: "EC31005",
    name: "RF & MICROWAVE ENGINEERING",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Arijit De",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC31205",
    code: "EC31205",
    name: "ALGORITHMS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Debashis Sen",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC31201",
    code: "EC31201",
    name: "DIGITAL SIGNAL PROCESSING-I",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Goutam Saha",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC39001",
    code: "EC39001",
    name: "ANALOG COMMUNICATIONS LAB.",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Jithin R",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC31204",
    code: "EC31204",
    name: "COMMUNICATION-II",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Amitalok Jayant Budkuley",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC30202",
    code: "EC30202",
    name: "COMPUTER ARCHITECTURE",
    department: "Electronics and Electrical Communication Engineering",
    credits: 3,
    season: "",
    instructor: "Prabir Kumar Biswas",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC31004",
    code: "EC31004",
    name: "VLSI ENGG.",
    department: "Electronics and Electrical Communication Engineering",
    credits: 3,
    season: "",
    instructor: "Gourab Dutta",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC31202",
    code: "EC31202",
    name: "DIGITAL SIGNAL PROCESSING-II",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Arijit De",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC39202",
    code: "EC39202",
    name: "EMBEDDED SYSTEMS LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Saumik Bhattacharya",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC39002",
    code: "EC39002",
    name: "DIGITAL COMMUNICATION LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Jithin R",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC39004",
    code: "EC39004",
    name: "VLSI LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Gourab Dutta",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  },
  {
    id: "EC60294",
    code: "EC60294",
    name: "NANOELECTRONICS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 3,
    season: "",
    instructor: "Prasanta Kumar Guha",
    description: "",
    schedule: {
      days: [],
      time: "",
      location: ""
    }
  }
];