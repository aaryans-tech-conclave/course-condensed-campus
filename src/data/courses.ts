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
  assignments?: { linkText: string; description: string; url: string; }[];  // Assignments for courses
  assignmentSolutions?: { linkText: string; description: string; url: string; }[];  // Assignment solutions for courses
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

Fill assignments with the following format:
{
  linkText: "Text to be displayed as the link",
  description: "Description of what the assignment contains",
  url: "URL of the assignment"
}

Fill assignment solutions with the following format:
{
  linkText: "Text to be displayed as the link", 
  description: "Description of what the solution contains",
  url: "URL of the assignment solution"
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
    isLab: true,
    labReports: [
      {
        linkText: "Analog Lab Experiment 1",
        description: "Frequency Response CE Amplifier",
        url: "https://drive.google.com/file/d/1_vxIdFy07m3VhuErmyx2bheMStEzsVay/view?usp=drive_link"
      },
      {
        linkText: "Analog Lab Experiment 2",
        description: "Cascaded Amplifier Design",
        url: "https://drive.google.com/file/d/1uQkoxCQloObRfp8m1m8dJHorSBifVWdU/view?usp=drive_link"
      },
      {
        linkText: "Analog Lab Experiment 3",
        description: "Common Base Amplifier",
        url: "https://drive.google.com/file/d/1HMZEaFoBFqDw9ECsDX0Gg3ODRxeugIJn/view?usp=drive_link"
      },
      {
        linkText: "Analog Lab Experiment 4",
        description: "Current Mirrors",
        url: "https://drive.google.com/file/d/1ZHCMlCvPrYJ2Om01gcCYgpOifIag8Zcx/view?usp=drive_link"
      },
      {
        linkText: "Analog Lab Experiment 5",
        description: "Differential Amplifier",
        url: "https://drive.google.com/file/d/18zeLDCxJu-X_H-ubI5a7aBtqfTAEM0TO/view?usp=drive_link"
      },
      {
        linkText: "Analog Lab Experiment 6",
        description: "RC Oscillator",
        url: "https://drive.google.com/file/d/1IACnudOMvBxtkH8XncVK0ahwURHGPPwF/view?usp=drive_link"
      },
      {
        linkText: "Analog Lab Experiment 7",
        description: "Audio Amplifier",
        url: "https://drive.google.com/file/d/1c2o0oFtQfCuq0VMkuXYU9PAJsjaDCXGG/view?usp=drive_link"
      }
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
    questionPapers: "https://qp.metakgp.org/?query=MA20205&exam=midsem%2Cendsem%2Cct",
    note: "",
    additionalLinks: [],
    assignments: [
      {
        linkText: "Assignment 1",
        description: "",
        url: "https://drive.google.com/file/d/1Tru77xRyykrFIkhrvc1-NNuYbuiMLi6P/view?usp=drive_link"
      },
      {
        linkText: "Assignment 2",
        description: "",
        url: "https://drive.google.com/file/d/1Tru77xRyykrFIkhrvc1-NNuYbuiMLi6P/view?usp=drive_link"
      },
      {
        linkText: "Assignment 3",
        description: "",
        url: "https://drive.google.com/file/d/1sLv6x_ahY0OKYb242F8V6ydEiBVy2HeM/view?usp=drive_link"
      },
      {
        linkText: "Assignment 4",
        description: "",
        url: "https://drive.google.com/file/d/1EDOq7UBRo9-TX_tofO4l2lnYp_giyU64/view?usp=drive_link"
      },
      {
        linkText: "Assignment 5",
        description: "",
        url: "https://drive.google.com/file/d/13rpQcrkYRdGDyLUvaCaXIFW4NMbhKffX/view?usp=drive_link"
      },
      {
        linkText: "Assignment 6",
        description: "",
        url: "https://drive.google.com/file/d/1XfJVuQg4NAeLRlbiqStuuxbB9s0fZOK1/view?usp=drive_link"
      },
      {
        linkText: "Assignment 7",
        description: "",
        url: "https://drive.google.com/file/d/1_62v8WmCYB9QuhAojmfdr1sGNxzNyUC4/view?usp=drive_link"
      },
      {
        linkText: "Assignment 8",
        description: "",
        url: "https://drive.google.com/file/d/19YyVCC60uMxR_aO8hthhHHQP_Cz-GfMV/view?usp=drive_link"
      }
    ],
    assignmentSolutions: [
      {
        linkText: "Assignment 1 Solution",
        description: "",
        url: "https://drive.google.com/file/d/1nUP3szHo0AnxjTJczYXd3cJ1pkHbsBiH/view?usp=drive_link"
      },
      {
        linkText: "Assignment 2 Solution",
        description: "",
        url: "https://drive.google.com/file/d/1117TlXWe_HBviUZ7KPYXgrArTGJe6_dY/view?usp=drive_link"
      },
      {
        linkText: "Assignment 3 Solution",
        description: "",
        url: "https://drive.google.com/file/d/1-C-Eg2FHs4ZMYxImy71tWXcWllu0x5A7/view?usp=drive_link"
      },
      {
        linkText: "Assignment 4 Solution",
        description: "",
        url: "https://drive.google.com/file/d/1NwP4df8aI3udjcKzlYT480RWvUhLVHOg/view?usp=drive_link"
      },
      {
        linkText: "Assignment 5 Solution",
        description: "",
        url: "https://drive.google.com/file/d/1JHENHSpy8b9gVS420jE76LTDrvMSel6-/view?usp=drive_link"
      },
      {
        linkText: "Assignment 6 Solution",
        description: "",
        url: "https://drive.google.com/file/d/1hhPMdYD_w_JHG8hAAP4qJOLX0lxbXgwa/view?usp=drive_link"
      },
      {
        linkText: "Assignment 7 Solution",
        description: "",
        url: "https://drive.google.com/file/d/1KdSy96u1Nq_VjoL9thqsXFfDjU16S96y/view?usp=drive_link"
      },
      {
        linkText: "Assignment 8 Solution",
        description: "",
        url: "https://drive.google.com/file/d/14-yeEGl1e9MxTA6XsEVgpuKZeMafxsj8/view?usp=drive_link"
      }
    ]
  },
  {
    id: "EC21204",
    code: "EC21204",
    name: "LINEAR ALGEBRA AND OPTIMIZATION MODELS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Mrityunjoy Chakraborty",
    description: `The Subject is split into two components, Linear Algebra and Optimization Models, former dealt with before the Midsems, the latter post. Your notes are very important for Optimization Models (if you can't understand the Textbook). Important Textbooks:

- **1:** Optimization Models Giuseppe Calafiore and Laurent El Ghaoui (OM Component)
- **2:** Linear Algebra Kenneth Hoffman and Ray Kunze (LA Component)`,
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "",
    otherReferenceMaterial: "https://drive.google.com/file/d/1m88iKc1_69UJ5-GqkthQ2xuvIuEz8xa1/view?usp=drive_link",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC21204&exam=midsem%2Cendsem%2Cct",
    note: "",
    additionalLinks: [
      {
        description: "Optimization Models Textbook",
        url: "https://drive.google.com/file/d/1MMA8ohIshlKGhheCEEzpKP9ow0DoIhKU/view?usp=sharing"
      },
      {
        description: "Linear Algebra Textbook",
        url: "https://drive.google.com/file/d/1c1Eq09scSuNC0cMqttRki1gZ7Hzk-TK_/view?usp=sharing"
      },
      {
        description: "OM Notes 1",
        url: "https://drive.google.com/file/d/1PVt67VYGMSuquKZrqOl71fawUyl80FdR/view?usp=sharing"
      },
      {
        description: "OM Notes 2",
        url: "https://drive.google.com/file/d/1YCpEC1DNDuj4DYaK7eyWN3XiaqeXIq7f/view?usp=sharing"
      },
      {
        description: "OM Notes 3",
        url: "https://drive.google.com/file/d/1v25rKcf4mZ-ZaDeHGWCZw2HevxK8NtMa/view?usp=sharing"
      },
      {
        description: "LAOM Sample Exam",
        url: "https://drive.google.com/file/d/1lk6fSMlS1WbJKjTXkqfFWLAnT5NSmAcO/view?usp=drive_link"
      }
    ]
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
    textbook: "https://drive.google.com/drive/u/3/folders/1ss3HH3q87AcI3fSE3zn5lm5DTvcJ7fxk",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC21202&exam=midsem%2Cendsem%2Cct",
    note: "",
    additionalLinks: [
      {
        description: "DEC PPT",
        url: "https://drive.google.com/file/d/1KBJujeo7iffjSOdk81dWAokbOk32Y4rJ/view?usp=drive_link"
      },
      {
        description: "Midsem Questions",
        url: "https://drive.google.com/drive/folders/1n-ao53WMpJ7KJmUoeOwzRGEtaLkBmXHY?usp=drive_link"
      },
    ],
    assignments: [
      {
        linkText: "Assignment 1",
        description: "",
        url: "https://drive.google.com/drive/folders/1eQzfChZH916dyktL5VCZk4q8S6TRQBny?usp=drive_link"
      },
      {
        linkText: "Assignment 2",
        description: "",
        url: "https://drive.google.com/drive/folders/18czMLG8-AxPLumIqe_vhgWMCJENBtmTx?usp=drive_link"
      },
      {
        linkText: "Assignment 3",
        description: "",
        url: "https://drive.google.com/drive/folders/1DThf1PHvFiYlo2Qg_pie5Ll5zKcJo0OS?usp=drive_link"
      },
      {
        linkText: "Assignment 5",
        description: "",
        url: "https://drive.google.com/drive/folders/1c2mg4cscfngMVkrfqLB87fFycssJ9sX7?usp=drive_link"
      },
      {
        linkText: "Assignment 6",
        description: "",
        url: "https://drive.google.com/drive/folders/1sEJbD3XXm4XoBvxBhX4kMqMEXnFpYKR6?usp=drive_link"
      },
    ],
  },
  {
    id: "EC21206",
    code: "EC21206",
    name: "ELECTROMAGNETIC ENGINEERING",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Sarang Pendharker",
    description: `Primary text books:
- **1:** Sadiku & Kulkarni, Principles of Electromagnetics. Oxford University Press, Asian Edition.
- **2:** R. K. Shevgaonkar, Electromagnetic Waves. Tata McGraw Hill.

Pro Tip: Attend the classes, attendance give a +10 Boost which you'll realise makes your A to an EX`,
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
    additionalLinks: [
      {
        description:"NPTEL Lecture (R. K. Shevgaonkar)",
        url:"https://nptel.ac.in/courses/117101056",
      },
    ],
    assignments: [
      {
        linkText: "Quiz 1",
        description: "",
        url: "https://drive.google.com/file/d/17E_LJLDiFJJpMs2ILoUsUtVPBZ_VQImt/view?usp=drive_link"
      },
      {
        linkText: "Quiz 2",
        description: "",
        url: "https://drive.google.com/file/d/1Omob3baF8ApNDToUYqYYGOXj1d9H4WVP/view?usp=drive_link"
      },
      {
        linkText: "Quiz 3",
        description: "",
        url: "https://drive.google.com/file/d/1skSCN8849DLCTTubQT48jXaykZdpfk9S/view?usp=drive_link"
      },
      {
        linkText: "Quiz 4",
        description: "",
        url: "https://drive.google.com/file/d/1FjnZxKB1wQwjqAyS7oavuYTB6xiiV50Q/view?usp=drive_link"
      },
      {
        linkText: "Tutorial 1",
        description: "",
        url: "https://drive.google.com/file/d/1kiWQAB1F2SnV6dhYZUNFFat4I_sIAhXD/view?usp=drive_link"
      },
      {
        linkText: "Tutorial 2",
        description: "",
        url: "https://drive.google.com/file/d/1WR_-kuYiM7TFKG3S12feAb1fy0QK6bmN/view?usp=drive_link"
      },
    ],
    assignmentSolutions: [
      {
        linkText: "Optional Assignment 1",
        description: "",
        url: "https://drive.google.com/file/d/16zxAemFeNQlzi0cTwZcJ6N1iHVkMZRhM/view?usp=drive_link"
      },
      {
        linkText: "Optional Assignment 2",
        description: "",
        url: "https://drive.google.com/file/d/1xntS0m6JllAKnr0oTRQfReKi1xnKHOKI/view?usp=drive_link"
      },
    ]
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