export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  season?: "Spring" | "Autumn" | "";  // Made optional and allow empty string
  instructor?: string;  // Made optional
  description?: string;  // Made optional
  isLab?: boolean;  // New field to identify lab courses
  schedule: {
    days?: string[];  // Made optional
    time?: string;    // Made optional
    location?: string;  // Made optional
  };
  // New attributes for course details
  textbook?: string;  // URL
  otherReferenceMaterial?: string;  // URL
  notes?: string;  // URL
  questionPapers?: string;  // URL
  note?: string;  // Text content
  additionalLinks?: { description: string; url: string; }[];  // Array of links
  labReports?: { linkText: string; description: string; url: string; }[];  // Lab reports for lab courses
  labManuals?: { linkText: string; description: string; url: string; }[];  // Lab manuals for lab courses
}

/*
Fill additional links with the following format:
{
  description: "Description of the link",
  url: "URL of the link"
}

Fill lab reports with the following format:
{
  linkText: "Text to be displayed as the link",
  description: "Description of what the link contains",
  url: "URL of the lab report"
}

Fill lab manuals with the following format:
{
  linkText: "Text to be displayed as the link",
  description: "Description of what the manual contains",
  url: "URL of the lab manual"
}
 */

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
    },
    textbook: "https://drive.google.com/file/d/1GwmhseRDrAXKO8UwY-wqmnXZky8gV3pP/view?usp=drive_link",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC21203&exam=midsem%2Cendsem%2Cct",
    note: "Convolutions are very important in this course. Make sure you understand them well.",
    additionalLinks: [
      {
        description: "Network Theory Assignment Solutions",
        url: "https://drive.google.com/drive/folders/1qqwGw_-HeHi5tWbF6_IKHznHDhpfUnce?usp=drive_link"
      }
    ]
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
    },
    textbook: "https://drive.google.com/file/d/14J9PU_KrYrGFOxn2MHsdm-hA1xtcOy4n/view?usp=drive_link",
    otherReferenceMaterial: "https://drive.google.com/file/d/1e7lYZRtC4VfH1eGHTtxnzfinT2BxPjpz/view?usp=drive_link",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC21205&exam=midsem%2Cendsem%2Cct",
    note: "Course is theoretical, so make sure you understand the concepts well. Energy band diagrams are important and routinely asked in the exams.",
    additionalLinks: []
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
    },
    textbook: "https://drive.google.com/file/d/1y5rBtMhQ1FKW0E6_VZIQrcOD56Bz_pTE/view?usp=drive_link",
    otherReferenceMaterial: "https://drive.google.com/file/d/1GiGolco1TIk9sLpeHc50BuLzJyeDcGEI/view?usp=drive_link",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC21207&exam=midsem%2Cendsem%2Cct",
    note: "Follow Sedra Smith's book for the course. It is a good book and covers all the topics in the course, questions pop up from there. Use Razavi's book for more depth in the topics.",
    additionalLinks: [
      {
        description: "Differential Amplifier Notes",
        url: "https://drive.google.com/file/d/1y-nZBfuVA_7cxg4v_Hs8PLydzwI4_-2-/view?usp=drive_link"
      },
      {
        description: "Feedback Amplifier Notes",
        url: "https://drive.google.com/file/d/1nfYTxbZR9iEUErmrjRcuDVRbsdSe1mKE/view?usp=drive_link"
      },
      {
        description: "Oscillator Notes",
        url: "https://drive.google.com/file/d/1DSSwmRnwdG4V9nTg7H-W_BAQkvT89bEs/view?usp=drive_link"
      },
      {
        description: "Practice Questions on Differential Amplifier",
        url: "https://drive.google.com/file/d/1YVHI9MWbsKltYST95WnZThFc0HrRRi0f/view?usp=drive_link"
      },
      {
        description: "Practice Questions on Current Mirror",
        url: "https://drive.google.com/file/d/1fE6r0MvPUD7_1lxMZbrTYdbhUPIidDJM/view?usp=drive_link"
      },
      {
        description: "Practice Questions on Operational Amplifier",
        url: "https://drive.google.com/file/d/1ePGo7wH9tNxLD9VIXz5TP2-mDzrBJy0E/view?usp=drive_link"
      },
      {
        description: "OpAmp Problems Solutions",
        url: "https://drive.google.com/file/d/1Zg4Q6Mtr8PgbyAM1r1FFWaKxJ-dCsPAD/view?usp=drive_link"
      },
      {
        description: "Problems on differential amplifier",
        url: "https://drive.google.com/file/d/1YVHI9MWbsKltYST95WnZThFc0HrRRi0f/view?usp=drive_link"
      }
    ]
  },
  {
    id: "EC29203",
    code: "EC29203",
    name: "NETWORK THEORY LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Debashis Sen",
    description: `The following experiments were present in the Network Theory Lab:

- **Experiment 1:** RC Circuits as Low Pass, High Pass and Band Pass Filter\n
- **Experiment 2:** Maximum Power Transfer\n
- **Experiment 3:** Superposition Verification\n
- **Experiment 4:** Max Power Transfer through Transformer & Impedance Matching Network\n
- **Experiment 5:** Calculate & Verify Z, Y, ABCD and H Parameters of Two-Port Network\n
`,
    isLab: true,
    labReports: [
      {
        linkText: "Complete Lab Report",
        description: "",
        url: "https://drive.google.com/file/d/1tXjIafz39A8cTr7-BtmqMtCwKe4l3PSu/view?usp=drive_link" // Available
      },
    ],
    labManuals: [],
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
  },
  {
    id: "EC29205",
    code: "EC29205",
    name: "DEVICES LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Prasanta Kumar Guha",
    description: `There are three sub-labs within this course:

- **1:** Characterization Lab
- **2:** Fabrication Lab
- **3:** Silvaco Lab`,
    isLab: true,
    labReports: [
      {
        linkText: "Characterization Lab Report Complete",
        description: "",
        url: "https://drive.google.com/file/d/16HHL5xBLIDBX4z2ZWTbeL6mKTy0QFoup/view?usp=drive_link" // Available
      },
      {
        linkText: "Fabrication Lab Report Complete",
        description: "",
        url: "https://drive.google.com/file/d/1fBTLOX8zZvktFf53weRyrasiX0QblTB2/view?usp=drive_link" // Available
      },
    ],
    labManuals: [
      {
        linkText: "Silvaco Lab Experiment 1",
        description: "PN Junction Diode",
        url: "https://drive.google.com/drive/folders/1Lj6Vk-8J8XM8KfXYMgO49nxuRTuYoaIG?usp=drive_link" // Available
      },
      {
        linkText: "Silvaco Lab Experiment 2",
        description: "NPN BJT",
        url: "https://drive.google.com/drive/folders/1m3ik85zjOxjhrP1VkdDn4rUmGBDB9nJo?usp=drive_link" // Available
      },
      {
        linkText: "Silvaco Lab Experiment 3",
        description: "MOSFET",
        url: "https://drive.google.com/drive/folders/1r-xRcmYleAmsVkwLs52TX8LV6PFOu9Xn?usp=drive_link" // Available
      },
    ],
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    isLab: true,
    labReports: [
      {
        linkText: "Experiment 1",
        description: "Basic Filter Design",
        url: "https://drive.google.com/file/d/12vpZbvBIK8tjdJMFCk-jwMACEPcdJIua/view?usp=drive_link" // Available
      },
      {
        linkText: "Experiment 2",
        description: "Switching Modulator and Envelope Detector",
        url: "https://drive.google.com/file/d/1doWKpqIyeFo8iZ37Krvq01ZM9upxIQy6/view?usp=drive_link" // Available
      },
      
    ],
    labManuals: [
      {
        linkText: "Experiment 1",
        description: "Basic Filter Design",
        url: "https://drive.google.com/file/d/1TVajGultzmxyhC0IDrqkKI3KtcCOGDny/view?usp=drive_link" // Available
      },
      {
        linkText: "Experiment 2",
        description: "Switching Modulator and Envelope Detector",
        url: "https://drive.google.com/file/d/192pMPM1RmOZFgySBSG8H-vaErqGr2CmY/view?usp=drive_link" // Available
      },
    ],
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
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
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: []
  }
];