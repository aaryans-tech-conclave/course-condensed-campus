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
    notes: "https://drive.google.com/drive/folders/1d9GWLAfvjLrWjpoWzBzh4Q1AOHVQ4Qum?usp=drive_link",
    questionPapers: "https://qp.metakgp.org/?query=EC21203&exam=midsem%2Cendsem%2Cct",
    note: "Convolutions are very important in this course. Make sure you understand them well.",
    additionalLinks: [
      {
        description: "Network Theory Assignment Solutions",
        url: "https://drive.google.com/drive/folders/1qqwGw_-HeHi5tWbF6_IKHznHDhpfUnce?usp=drive_link"
      },
      {
        description: "Network Theory Drive Link",
        url:"https://drive.google.com/drive/folders/1bAF_-kN9obCawoM9ueomKdUkxWQyUDJs?usp=drive_link"
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
    notes: "https://drive.google.com/drive/folders/1Dib7p5o-hMNWQp5tqsTrBHDnIeXLELt9?usp=drive_link",
    questionPapers: "https://qp.metakgp.org/?query=EC21205&exam=midsem%2Cendsem%2Cct",
    note: "Course is theoretical, so make sure you understand the concepts well. Energy band diagrams are important and routinely asked in the exams.",
    additionalLinks: [
      {
        description:"Problem Set",
        url:"https://drive.google.com/drive/folders/1qvZYVpZgBdDpiaFMMlfcWFbzu2JiUb2q?usp=drive_link"
      },
      {
        description:"Other Books",
        url:"https://drive.google.com/drive/folders/1DiqLUQGGCAfLEjMn2_xvLSN0n_51SqNq?usp=drive_link"
      },
      {
        description:"Some Important Graphs for Visualization",
        url:"https://drive.google.com/drive/folders/1nZzVjmC5t7R8EDGwUroUMaK1w16pxIHz?usp=drive_link"
      },
      {
        description:"Devices Drive Link",
        url:"https://drive.google.com/drive/folders/1_veBbOSoVVwnBS5sR_z-aQdNrjO2_pmY?usp=drive_link"
      }
    ]
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
      {
        linkText: "Alternate Lab Report",
        description:"",
        url:"https://drive.google.com/file/d/1EzTtzpIwzoOqYqKUHTubK_bUHzOy1-Ud/view?usp=drive_link"
      }
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
    questionPapers: "https://qp.metakgp.org/?query=EC21206&exam=midsem%2Cendsem%2Cct",
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
    questionPapers: "https://qp.metakgp.org/?query=EC21208&exam=midsem%2Cendsem%2Cct",
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
    isLab: true,
    labReports: [
      {
        linkText: "DEC Lab Experiment 1",
        description: "7 Seg-Display, Decoder-Deriver & Counter",
        url: "https://drive.google.com/file/d/1a_pjALyeWo2dpQPa3Nsm1-W0Xsqwiug8/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 2",
        description: "3-to-8 Decoder, Rolling Display",
        url: "https://drive.google.com/file/d/1DZ44oBkaE2zQvy2PtvZAo6DPmZJmzhtx/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 3",
        description: "Multiplexer ICs for Switch Displays",
        url: "https://drive.google.com/file/d/14ZhVFAFSOMg-MHgsEH96cKMidrN9Fsx5/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 4",
        description: "4 Bit Full Added",
        url: "https://drive.google.com/file/d/1N25o1louHlEl3eGJT7IMEPfM9sp_udcY/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 5",
        description: "Hex Key Pad & Basic Operations with Adders & ALU",
        url: "https://drive.google.com/file/d/1O8_HDSDUJjnJZe6w4szJ92bjumZQ5Qt6/view?usp=drive_link"
      },
    ],
    labManuals:[
      {
        linkText:"DEC EXP 1 Lab Manual",
        description:"",
        url:"https://drive.google.com/file/d/1alkuGwcIVHRUrWl6XB9WvZdTxdwm1yge/view?usp=drive_link"
      },
      {
        linkText:"DEC EXP 2 & 3 Lab Manual",
        description:"",
        url:"https://drive.google.com/file/d/1qh1o_8B4OkUfT4vy6Hm1U0P5QMnHxcJ2/view?usp=drive_link"
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
    id: "EC21210",
    code: "EC21210",
    name: "SYSTEMS AND CONTROL",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Ritwik Kumar Layek",
    description: `Pro Tip: Look at the complete syllabus notes attached, if you find yourself not understanding the subject 10 hours before the EndSem, memorizing the proofs in the Notes verbatim (and by verbatim I mean Verbatim, the order of the Letters as a sequence if you may), will do just the trick (will get you an A: A good grade if you remember what the order of matrices in a proof you dont understand).
    Read the Textbook and the additional reference, they are excellent to teach the subject, maybe just not the day before the exam.`,
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "https://drive.google.com/file/d/1YedKmsTxEmd3LJNiWmVcDXYPNOdxWPjS/view?usp=drive_link",
    otherReferenceMaterial: "https://drive.google.com/file/d/10RN6iGaFdI1Vmv4lFVUNEUeZuq4gcsUk/view?usp=drive_link",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC21210&exam=midsem%2Cendsem%2Cct",
    note: "",
    assignments: [
      {
        linkText: "Quiz 1",
        description: "",
        url: "https://drive.google.com/file/d/15eDgA33MVCa7vbIR-js3u6kpmfO8Rgxl/view?usp=drive_link"
      },
      {
        linkText: "Quiz 2",
        description: "",
        url: "https://drive.google.com/file/d/1HR0I5fMMb1NGyx7tBdS2AMu5eZmJQG1E/view?usp=drive_link"
      },
      {
        linkText: "Quiz 3",
        description: "",
        url: "https://drive.google.com/file/d/1kOYYXuCEDMTtdssjTAiubYZszTWGZ4ea/view?usp=drive_link"
      }
    ],
    additionalLinks: [
      {
        description:"Complete Syllabus Detailed Notes",
        url:"https://drive.google.com/file/d/1yvxM1QMqP2J1v6MIthvQRxUij6zmHN1Y/view?usp=drive_link"
      },
    ]
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
    isLab:true,
    labReports:[
      {
        linkText:"DSP Lab Report 1",
        description:"",
        url:"https://drive.google.com/file/d/1z-05SJatKv6TqMQTuncIGDsXFXC4FhmS/view?usp=drive_link"
      },
      {
        linkText:"DSP Lab Report 2",
        description:"",
        url:"https://drive.google.com/file/d/1vwK-YTN37yzNx4dhocFdlX2wZHV1FtKf/view?usp=drive_link"
      },
      {
        linkText:"DSP Lab Report 3",
        description:"",
        url:"https://drive.google.com/file/d/1ohlKvjBzUJWf1Ff2s1rOdTZw6yNB-Bax/view?usp=drive_link"
      },
      {
        linkText:"DSP Lab Report 4",
        description:"",
        url:"https://drive.google.com/file/d/1qOwwtBl0dbneFlunhIu2K-F7i_wSezMB/view?usp=drive_link"
      },
      {
        linkText:"DSP Lab Report 5",
        description:"",
        url:"https://drive.google.com/file/d/1TigmUZkQnq_m2bhBm-ZpVRXBfGuALELb/view?usp=drive_link"
      },
    ],
    labManuals: [
      {
        linkText: "DSP Lab Experiment 1",
        description: "Sampling",
        url: "https://drive.google.com/file/d/1vJRAwOgkl9CH-8N6Klr1dTZh0Jdgtc1u/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 2",
        description: "Designing LPF using Windowing",
        url: "https://drive.google.com/file/d/1xoBFS9yy5R6KE0e8nPLzi8I86HcVBsid/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 3",
        description: "DTMF Coder/Decoder",
        url: "https://drive.google.com/file/d/1lxkfBfH_UdJZe5xHLCApRXX2jub-9EZs/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 4 (1)",
        description: "Spech Recognition Lab Manual",
        url: "https://drive.google.com/file/d/1tlC04V8sPjBz_i2HtiY0KCih3Pp2Ko04/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 4 (2)",
        description: "Speech Recognition Temporal paper 1",
        url: "https://drive.google.com/file/d/1mhj59tsguIOGJ5gC9OaRXVJYGZ3hOHYI/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 4 (3)",
        description: "Speech Recognition Temporal paper 2",
        url: "https://drive.google.com/file/d/1cX2-vAoBTftWPPHlFORSjPmyiDYVixWG/view?usp=drive_link"
      },
      {
        linkText: "DEC Lab Experiment 5",
        description: "Power Spectrum Estimation",
        url: "https://drive.google.com/file/d/1iKqw9VbLh3sLHl8zRcp0OV4Y0iwadYf-/view?usp=drive_link"
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
    id: "EC31203",
    code: "EC31203",
    name: "COMMUNICATION-I",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Goutam Das",
    description: "This course might be difficult, the content is covered entirely in the NPTEL lecture, follow it entirely, questions show up from the BP Lathi Book, doing all the solved examples and trying the exercises will help you understand the subject better. If you find yourself a day before the EndSem not having have studied the syllabus at all, do the NPTEL in a reverse order and memorise the the techniques instead of the just the formula: the Endsems are applicative, not just a formulae showcase.",
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "https://drive.google.com/file/d/1AUrGtHYRVX33RylBRer_uUe9zwo-orXq/view?usp=drive_link",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC31203&exam=midsem%2Cendsem%2Cct",
    note: "",
    additionalLinks: [
      {
        description:"NPTEL Analog Communication Gourab Das",
        url:"https://nptel.ac.in/courses/117105143"
      }
    ]
  },
  {
    id: "EC39005",
    code: "EC39005",
    name: "MICROWAVE LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Rajat Roy",
    isLab: true,
    labManuals:[
      {
        linkText:"Experiment 1",
        description:"Waveguide Bench",
        url:"https://drive.google.com/file/d/1-X6MwOj1iOGQuHa9AVaCS6WLqIq_j6JQ/view?usp=drive_link"
      },
      {
        linkText:"Experiment 2",
        description:"Measurement of Unknown Impedance",
        url:"https://drive.google.com/file/d/1PHHTgP67PbkN0Q7QsVNNHnhfeJn2q75D/view?usp=drive_link"
      },
      {
        linkText:"Experiment 3",
        description:"Gunn Diode",
        url:"https://drive.google.com/file/d/1_i7dBoSlBeKyukf1X-pkxsOFqx7CB4U-/view?usp=drive_link"
      },
      {
        linkText:"Experiment 4",
        description:"Antenna",
        url:"https://drive.google.com/file/d/15zo5DCmkHg-rp1nOzEJcVcyd3cuvci3Q/view?usp=drive_link"
      },
      {
        linkText:"Experiment 5",
        description:"Simulation Study",
        url:"https://drive.google.com/file/d/1T_k8SagIR5FBvd80zU6sKB214L_AEdTi/view?usp=drive_link"
      },
      {
        linkText:"Experiment 6",
        description:"Passive Components",
        url:"https://drive.google.com/file/d/1YcWn6nRKI9bgpeFP8Msq2hSOxrOsP-h8/view?usp=drive_link"
      },
      {
        linkText:"Experiment 7",
        description:"Ring Resonator",
        url:"https://drive.google.com/file/d/1Mu4llB4XVyKgwgjWq5yRkyYqMP0I6NMb/view?usp=drive_link"
      },
      {
        linkText:"Experiment 8",
        description:"Amplifier",
        url:"https://drive.google.com/file/d/1smHo2Pe61TpgI5gHYHDCHIrXhogu91BP/view?usp=drive_link"
      },
    ],
    labReports:[
      {
        linkText:"Experiment 1 & 2",
        description:"Slotted Line & Unknown Impedance Kumar Aaryan",
        url:"https://drive.google.com/file/d/1T-BwaJ4kvilLrMi-gSMptZVcp2P_hUAJ/view?usp=drive_link"
      },
      {
        linkText:"Experiment 3",
        description:"Gunn Diode",
        url:"https://drive.google.com/file/d/12-g25LINQ0HWh0kPyrvlG_KNzMflZpH9/view?usp=drive_link"
      },
      {
        linkText:"Experiment 8",
        description:"Amplifier",
        url:"https://drive.google.com/file/d/1MIRFyJ7PWNBKllVrsjfgRWYbywndo-xP/view?usp=drive_link"
      },
      {
        linkText:"Experiment 5 (1)",
        description:"Simulation Passive Components on Microstrip Line",
        url:"https://drive.google.com/file/d/1ZuZrc07kX1rACzvMRCE5aRn14CTcBZ38/view?usp=drive_link"
      },
      {
        linkText:"Experiment 5 (2)",
        description:"Simulation Patch Antenna",
        url:"https://drive.google.com/file/d/1qNMSFtA6pioAw4eOKei3RShPzY5ELOZ0/view?usp=drive_link"
      },
      {
        linkText:"Experiment 4",
        description:"RF Characteristics of Antenna (Horn and Dipole)",
        url:"https://drive.google.com/file/d/1Ty6tLZt0oS3zSxL3QoyXzWJICRqOIWKJ/view?usp=drive_link"
      },
      {
        linkText:"Experiment 6",
        description:"RF Characteristics of Passive Components",
        url:"https://drive.google.com/file/d/13SXGFQwLQp6Vg1StF14FkkDk2XNL33_B/view?usp=sharing"
      },
      {
        linkText:"Experiment (?)",
        description:"RF Characteristics of a Schottky Junction",
        url:"https://drive.google.com/file/d/1aDHnFuzUlbuyUmFvbdI7vuu7rsuryyG_/view?usp=sharing"
      },
      {
        linkText:"Experiment 8",
        description:"RF Microwave Amplifier Characteristics (A and AB)",
        url:"https://drive.google.com/file/d/1r45idQyCyvb0suRDEKgQ_282X5uUjqyJ/view?usp=sharing"
      },
      {
        linkText:"Experiment 5(1)",
        description:"Simulation Passive Components on Microstrip Line",
        url:"https://drive.google.com/file/d/1pdkBKdxIkqeUdATJyjGX-pOrqzsvDjF0/view?usp=drive_link"
      },
      {
        linkText:"Experiment 5(2)",
        description:"Simulation of Patch Antenna",
        url:"https://drive.google.com/file/d/1Y8Fg-9xdFHDbyfhs0QshGz3iXyo9Pd1l/view?usp=drive_link"
      },
      {
        linkText:"Experiment 1",
        description:"Slotted Line Measurement",
        url:"https://drive.google.com/file/d/1rAevJlJhiDAICF5lJoIzlwg8wdKk5ksP/view?usp=drive_link"
      },
      {
        linkText:"Experiment (?)",
        description:"Study of Rectangular Waveguides",
        url:"https://drive.google.com/file/d/1FDR1Q099k5V4NhOozpy8uzTaduRmDbO-/view?usp=drive_link"
      },
      {
        linkText:"Experiment 8",
        description:"RF Microwave Amplifier Characteristics (A and AB)",
        url:"https://drive.google.com/file/d/1r45idQyCyvb0suRDEKgQ_282X5uUjqyJ/view?usp=sharing"
      },
    ],
    description: "I've attached reports from multiple sources, hopefully exhausting the entire experiment set atleast once, ensure that you read multple different reports for each experiment before you decide to begin writing and understanding your experiments, it'll help you understand exactly what the professor correcting your lab record looks for, so you wouldn't lose unnecessary marks anywhere.",
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
        description:"Alternate Lab Report Source(3) (Complete)",
        url:"https://drive.google.com/file/d/1jJsOw6c7eRcjZ8a82ryzu-CYxwb7iJhj/view?usp=drive_link"
      },
      {
        description:"Alternate Lab Report Source(4) (Complete)",
        url:"https://drive.google.com/file/d/1Y8cCGZEz5mPtEiUgiQYqOsR8FIlVQBXd/view?usp=drive_link"
      }
    ]
  },
  {
    id: "EC31005",
    code: "EC31005",
    name: "RF & MICROWAVE ENGINEERING",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Arijit De",
    description: "The Textbook is exhaustively the entire syllabus, you wont need anything more than it, memorize the proofs since the question paper arrives in a subjective manner. You may want to attend class, a bias based on your attendance may influences your final grade.",
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "https://drive.google.com/file/d/1Dnise4w0Zw_A7jqaz0VFA_Cxdcf8yRyu/view?usp=drive_link",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC31005&exam=midsem%2Cendsem%2Cct",
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
    description: "Follow the slides, the questions on the paper are theoretical and grading reflects how well you either rewrite the slides on your answer sheets exactly, or understand the concepts convincingly enough. Remember to include all the keywords mentioned in class when the Professor goes over the slides, marking is almost based on a keyword based search on your answer sheet.",
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "https://drive.google.com/file/d/13I6fXFemE5IdI6xiyHswyqI3IFJ_jH3e/view?usp=drive_link",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC31205&exam=midsem%2Cendsem%2Cct",
    note: "",
    additionalLinks: [
      {
        description:"Syllabus Index",
        url:"https://drive.google.com/file/d/1_eyExDWTeLtz86MI1Hyl9ntl1Tz2Bi9q/view?usp=drive_link"
      },
      {
        description:"Course Presentations",
        url:"https://drive.google.com/drive/folders/1GtIUQ8IqA9q3CW-yL12lbNlLRtuXVBpg?usp=drive_link"
      },
    ],
    assignments:[
      {
        description:"Syllabus: Upto Midsem, to write Handwritten Solutions",
        linkText:"Model Question Paper 1",
        url:"https://drive.google.com/file/d/1rQGk4i0kKM6ceZEYCD92kLYFHujmIKjI/view?usp=drive_link"
      },
      {
        description:"Syllabus: Upto Endsem",
        linkText:"Model Question Paper 2",
        url:"https://drive.google.com/file/d/1YzUSKTDoIbQGX9pfFiJO1mD7H5hhcJRj/view?usp=drive_link"
      },
      {
        description:"Coding Problem Statement",
        linkText:"Coding Assignemnt 2",
        url:"https://drive.google.com/file/d/1oXISk0kAljFcfgD3fV75ebOjyXhMHoko/view?usp=drive_link"
      }
    ],
    assignmentSolutions:[
      {
        description:"",
        linkText:"Model QP 1 Solutions",
        url:"https://drive.google.com/file/d/1HiQW9VJVzIJkETLNXQU7ddV428eupyT6/view?usp=drive_link"
      },
      {
        description:"",
        linkText:"Model QP 2 Solutions",
        url:"https://drive.google.com/file/d/1pYERVzs2LjRx8tyauFVbSsO2MJs-KSHr/view?usp=drive_link"
      },
      {
        description:"Notebook Print",
        linkText:"Coding Assignment 1",
        url:"https://drive.google.com/file/d/1Ne1G8kDiW25mIpIe9gJg6F4fDkb02YYW/view?usp=drive_link"
      },
      {
        description:"Assignment 1 Python Code File",
        linkText:"Coding Assignment 1",
        url:"https://drive.google.com/file/d/1Ba06cAH9mlQFak75cuxkOoCx_XIjgCsy/view?usp=drive_link"
      },
      {
        description:"Assignemnt 2 Python Code File",
        linkText:"Coding Assignment 2",
        url:"https://drive.google.com/file/d/1FGvpJ0sSVFKZt4wA1jOmcsKOTp6vCP5T/view?usp=drive_link"
      },
      {
        description:"Handwritten Working Solution",
        linkText:"Coding Assignment 2",
        url:"https://drive.google.com/file/d/1hFwYosbncNNSK4W0WYFspEomG8xCb-kV/view?usp=drive_link"
      },
    ]
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
    textbook: "https://drive.google.com/file/d/17WshLefmvTVtW4uOEF9m8L_NVmyCyYdo/view?usp=drive_link",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC31201&exam=midsem%2Cendsem%2Cct",
    note: "",
    additionalLinks: [
      {
        description:"Endsem Slides",
        url:"https://drive.google.com/drive/folders/1jZjzjr2E7WNFEbm22L81HeUcvl1oRoxX?usp=drive_link"
      },
      {
        description:"Alternate DSP Assignment Solutions",
        url:"https://drive.google.com/drive/folders/14UTPEfW7aE5fFMuqgVNXe1870VA2y-De?usp=drive_link"
      }
    ],
    assignments:[
      {
        linkText:"Assignment 1",
        description:"",
        url:"https://drive.google.com/file/d/1u2-1GBva57mBpDJ2SerkCNCV-2iMPSqo/view?usp=drive_link"
      },
      {
        linkText:"Assignment 2",
        description:"",
        url:"https://drive.google.com/file/d/1XxGORF1dyrSZ_YSXcLIaKSGyJQa2tiC5/view?usp=drive_link"
      },
      {
        linkText:"Assignment 3",
        description:"",
        url:"https://drive.google.com/file/d/14tp16vQKWLA1Ef71iyz7ghOsK3aRnyEU/view?usp=drive_link"
      },
      {
        linkText:"Assignment 4",
        description:"",
        url:"https://drive.google.com/file/d/1zd6vjhAySwIm_jLMkmenSCgzutG-rl_F/view?usp=drive_link"
      },
      {
        linkText:"Assignment 5",
        description:"",
        url:"https://drive.google.com/file/d/1wt6T7AndxzjgVxH4QZ2xrHfIeJp4nfEQ/view?usp=drive_link"
      },
      {
        linkText:"Assignment 6",
        description:"",
        url:"https://drive.google.com/file/d/1QiPjcFFYJUewnqvi4mmaZ3Rm01Y-Sr69/view?usp=drive_link"
      },
      {
        linkText:"Assignment 7",
        description:"",
        url:"https://drive.google.com/file/d/1Xy1evgUB5tgE3qpzCC64LqXy8cZroYti/view?usp=drive_link"
      },
    ],
    assignmentSolutions: [
  {
    linkText: "Assignment 1 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1Kgmr9jwcle_rsf5J4UU3YMpZBckaqQo-/view?usp=drive_link"
  },
  {
    linkText: "Assignment 2 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1kX3npR_lnsBX1HfDJJPoOvgTRcNh9DG2/view?usp=drive_link"
  },
  {
    linkText: "Assignment 3 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1c_M2VHtNf6L0ZfdfjW0tryZeSe8Jpmhx/view?usp=drive_link"
  },
  {
    linkText: "Assignment 4 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1sL0H1kziF1YHfjYw5SzFV23DtPvPNJio/view?usp=drive_link"
  },
  {
    linkText: "Assignment 5 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1ZOBJc09vVcV-O3Y13Mw_RlRtbytOLx06/view?usp=drive_link"
  },
  {
    linkText: "Assignment 6 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1HL42_9xexPj-fzGknUCgrgyV5Kuis6O2/view?usp=drive_link"
  },
  {
    linkText: "Assignment 7 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1KybzwdlCnInO9KQuypZJ6eyMGlNDeNuI/view?usp=drive_link"
  }
]

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
    labManuals: [
      {
        linkText: "Experiment 1",
        description: "Basic Filter Design",
        url: "https://drive.google.com/file/d/1TVajGultzmxyhC0IDrqkKI3KtcCOGDny/view?usp=drive_link"
      },
      {
        linkText: "Experiment 2",
        description: "Switching Modulator and Envelope Detector",
        url: "https://drive.google.com/file/d/192pMPM1RmOZFgySBSG8H-vaErqGr2CmY/view?usp=drive_link"
      },
      {
        linkText: "Experiment 3",
        description: "Amplitude Modulation",
        url: "https://drive.google.com/file/d/1EMDOMzdB0PZhRCoQ7juKFm2C80ceCOtp/view?usp=drive_link"
      },
      {
        linkText: "Experiment 4",
        description: "Frequency Modulation",
        url: "https://drive.google.com/file/d/1IJher-BZ53WqhJiG0LQCGH16nQKCN_Nc/view?usp=drive_link"
      },
      {
        linkText: "Experiment 5",
        description: "FM Demodulation",
        url: "https://drive.google.com/file/d/1cYjHkBMg4tHjIfqBDItAbchdLII8zV8x/view?usp=drive_link"
      },
      {
        linkText: "Experiment 6",
        description: "Sampling",
        url: "https://drive.google.com/file/d/1Cfnh6LT1PDz0b3Q_uSzjiZ3jofMPCTF1/view?usp=drive_link"
      },
      {
        linkText: "Experiment 7",
        description: "Analog to Digital Conversion",
        url: "https://drive.google.com/file/d/1ETN4sn7ab5yPeA2Y6Zh0IBIXgPozQwFN/view?usp=drive_link"
      }
    ],
    labReports: [
      {
        linkText: "Experiment 1",
        description: "Basic Filter Design",
        url: "https://drive.google.com/file/d/12vpZbvBIK8tjdJMFCk-jwMACEPcdJIua/view?usp=drive_link" 
      },
      {
        linkText: "Experiment 2",
        description: "Switching Modulator and Envelope Detector",
        url: "https://drive.google.com/file/d/1doWKpqIyeFo8iZ37Krvq01ZM9upxIQy6/view?usp=drive_link" 
      },
      {
        linkText: "Experiment 3",
        description: "Amplitude Modulation",
        url: "https://drive.google.com/file/d/1FyVrE9WrwA0pbJP-cgGKzzw8PeCfkOpj/view?usp=drive_link"
      },
      {
        linkText: "Experiment 4",
        description: "Frequency Modulation",
        url: "https://drive.google.com/file/d/1SZN-lo7QGV4R9ybMC7RAa3E1crqWElrL/view?usp=drive_link"
      },
      {
        linkText: "Experiment 5",
        description: "FM Demodulation",
        url: "https://drive.google.com/file/d/1ROHK0SUX1X7pH049roVPtUAqoBJ9ImgD/view?usp=drive_link"
      },
      {
        linkText: "Experiment 6",
        description: "Sampling",
        url: "https://drive.google.com/file/d/1yfmhpiBo-QpnVp2X_EIvvU9e8l9vrIcs/view?usp=drive_link"
      },
      {
        linkText: "Experiment 7",
        description: "Analog to Digital Conversion",
        url: "https://drive.google.com/file/d/1cTecp9OVV1WgR2H1R4s9lveFQ2lwt49v/view?usp=drive_link"
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
    textbook: "https://drive.google.com/file/d/1H95zh6MmrBUurSzgAtbl82RMcM1uZjHn/view?usp=drive_link",
    otherReferenceMaterial: "https://drive.google.com/file/d/1-HXlJInnLG4mWC7pIngRxpoC7r7WWwsY/view?usp=drive_link",
    notes: "https://drive.google.com/file/d/1fwZVec_7Y-YsmHftcfXjKsiSyZK2B2AJ/view?usp=drive_link",
    questionPapers: "https://qp.metakgp.org/?query=EC31204&exam=midsem%2Cendsem%2Cct",
    note: "The Syllabus is well defined, the professor outlines this well on a Teams Channel for the course, ensure you follow the material, it's a lot, but outlines the syllabus well. My advice, pick Wozencraft and finish everything you find useful, maybe start to finish, a little integrals hurt nobody. Pick the probability text Sir mentions to follow, and once these two are out of the way, all the other course contents would fit right in place. I liked the mathematics behind the subject the most, this way might not be optimal to get you an EX, but would be enough for an A/B but with a great understanding of the course. For an EX follow the course, attend your classes and pratice all the problems from the Texts and PYQs, expect repeated questions from books and papers, practice them and you're good to go.",
    additionalLinks: [
      {
        description:"Exhaustive List of Problem Source Books & Sols",
        url:"https://drive.google.com/drive/folders/1sIRYHQGW_nuMqkvfewYLJ62AyDzwTiHe?usp=drive_link",
      },
      {
        description:"Quiz 1",
        url:"https://drive.google.com/file/d/1QfKliK69MuJVLaySzSwBE2hmwACkVLQd/view?usp=drive_link"
      },
      {
        description:"Rate Optimization Games",
        url:"https://drive.google.com/file/d/1V2tDbUZspTVqAO4iei_V3OJD7H9DSU6G/view?usp=drive_link"
      },
      {
        description:"Some Communication II Papers",
        url:"https://drive.google.com/file/d/183df0Hmz4egETFP9jCgrosZRMfeKJ9dJ/view?usp=drive_link"
      },
      {
        description:"Notes Upto Midsem",
        url:"https://drive.google.com/file/d/1mQ8eTVppRUZsOGo0LkqQ6uIV3-btiwN3/view?usp=drive_link",
      },
      {
        description:"Notes Post Midsem",
        url:"https://drive.google.com/file/d/1re2NPtJKb3BqPY_BB3dksEoJ0REOYHzI/view?usp=drive_link",
      },
      {
        description:"Notes Post CT3",
        url:"https://drive.google.com/file/d/1gbPQ6iP7yrOzeH9SVI7ZYm1iq0_ILt3O/view?usp=drive_link",
      },
    ],
    assignments:[
      {
        linkText:"Assignment 1",
        description:"",
        url:"https://drive.google.com/file/d/10rL6LrVT-s9WLdYNOLndgrvYOFi6wvfD/view?usp=drive_link"
      },
      {
        linkText:"Assignment 2",
        description:"",
        url:"https://drive.google.com/file/d/1g6CyW1HM7uihXwrrTyKHCbSRmfdkEB3J/view?usp=drive_link"
      },
    ],
    assignmentSolutions: [
  {
    linkText: "Assignment 2 Solutions",
    description: "",
    url: "https://drive.google.com/file/d/1XpTN-xnUR2CBkq_WUO9jAzpd0o6JxuCl/view?usp=drive_link"
  },
    ]
    
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
    questionPapers: "https://qp.metakgp.org/?query=EC30202&exam=midsem%2Cendsem%2Cct",
    note: "The Syllabus for this course isn't vast, follow the NPTEL Lecture for this course, your syllabus can only be a subset of this course link, make notes and remember facts, expect the examinations to be theoretical, or even reflections of previous ones. My tip? See all the pyqs even before you start studying, note and remember the solutions, then follow the NPTEL Course and finally look through you PYQs again, can't not get an EX after that.",
    additionalLinks: [
      {
        description:"NPTEL Course Link",
        url:"https://nptel.ac.in/courses/117105078"
      },
    ]
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
    otherReferenceMaterial: "https://drive.google.com/drive/folders/1kxyQ3OFB5qu7JVbQIsmZi7r4C-vIuvVo?usp=drive_link",
    notes: "https://docs.google.com/document/d/1ABETfXl9Z3fUiC12oUAJIIh3bDJCuBVz3kcl9SURcVg/edit?tab=t.0",
    questionPapers: "https://qp.metakgp.org/?query=EC31004&exam=midsem%2Cendsem%2Cct",
    note: "There's a lot of both structured and unstructured material for this course, here notes happen to be the former and the textbook unfortunately the latter. My Tip? Follow the youtube lecture series (a perious year recording) for this course, then use the notes, I never personally found the textbook useful but maybe look at the book's exercises if you have time. Definitely look at the pyqs, and theres always a fabrication 10 marker on the endsem, so you know what to memorize right before your exams. The videos singlehandedly (albeit at 2x speed and a few skips in the middle) reduced my endsem prep time down to 7 hours before the exam, I'd suggest studying this series the week before and even with no attendance an A/EX should be achievable (if you look at your pyqs, or hope that the fabrication question gets you upto the B grade).",
    additionalLinks: [
      {
        description:"Previous Year Recording",
        url:"https://www.youtube.com/playlist?list=PLzV_ePoZHqWMPztxQ62ELNCRx-aKanf9R",
      },
      {
        description:"Rabaey Textbook",
        url:"https://drive.google.com/file/d/1kfGMbXkHbZeFieBopFY9VUFvz4XBpDCC/view?usp=drive_link",
      },
      {
        description:"Rabaey Solutions",
        url:"https://drive.google.com/file/d/1yugRNsGFuLNiy9Lql6s1HHYPx56iSVTI/view?usp=drive_link",
      },
      {
        description:"Kang Textbook",
        url:"https://drive.google.com/file/d/1JsgjXdhMDQsHd1IRQU_eeEJhoJvM6a4p/view?usp=drive_link",
      },
      {
        description:"Kang Solutions",
        url:"https://drive.google.com/file/d/12sdeGjd4WfGMpNCXOLsrfeIIcMbn28rV/view?usp=drive_link"
      },
      {
        description:"Notes Till Midsem",
        url:"https://drive.google.com/file/d/1wYMhk4S90CDrwoJzCbvhtEwoVFXNtj_p/view?usp=drive_link"
      }
    ]
  },
  {
    id: "EC31202",
    code: "EC31202",
    name: "DIGITAL SIGNAL PROCESSING-II",
    department: "Electronics and Electrical Communication Engineering",
    credits: 4,
    season: "",
    instructor: "Arijit De",
    description: `Lots of material, but you only need to follow a few things (textbooks only please). For the midsem follow Proakis Chapter 11 (Multi Rate Signal Processing, I've attached both the new edition's chapter and the old one as well), for the Endsem: Wavelets and Wavelet Transforms, C Sydney Burrus, it looks complicated (because its in latex), but if you read it slowly it makes your life much easier than half cooked books with horrible symbols. Follow the symbol style and equation representations from this book, its easier to read and more intuitive. My advice:

- Follow the old version for the midsemester, its structured more intuitively.
- also theres a small typo (incorrect formula) within it, which maybe was corrected in the new edition, but you finding out this mistake is what makes engineering worthwhile, find it, write it down and move on (don't waste 2.5 hrs like me once I found it, I thought I was wrong)
- everything else in this book is good and makes the content very intuitive for your exams, the 4th edition seems to lose this intuitive format in all its good looking latex.`,
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC31202&exam=midsem%2Cendsem%2Cct",
    note: "Do the Back exercises of the books, I've added a solutions manual for this purpose, you'll find out that these exercises are what actually show up on your exams. DSP-2 will be a breeze when you figure out how to do the questions on your own, after looking at a few solutions.",
    additionalLinks: [
      {
        description:"Ch 11 Multirate Signal Processing (New Edition)",
        url:"https://drive.google.com/file/d/1kvRfqYskaaxOZLmFqoPSB-vnV9JMeQdq/view?usp=drive_link"
      },
      {
        description:"Ch 11 Multirate Signal Processing (Old Edition)",
        url:"https://drive.google.com/file/d/1kvRfqYskaaxOZLmFqoPSB-vnV9JMeQdq/view?usp=drive_link"
      },
      {
        description:"Proakis New Edition (4th)",
        url:"https://drive.google.com/file/d/1kIUqGGB7itPRUJj_9fE1d3haBbuF76bv/view?usp=drive_link",
      },
      {
        description:"Solution Manual Proakis New Edition (4th)",
        url:"https://drive.google.com/file/d/1_CRmjSZmqWl4lGXdeS5EdFR9wTM4Et8j/view?usp=drive_link"
      },
      {
        description:"Proakis Old Edition (3rd)",
        url:"https://drive.google.com/file/d/1K0lZNbTAp-WOQtHXmWWb8rP9cwIBKj4c/view?usp=drive_link",
      },
      {
        description:"Wavelets and Wavelet Transforms",
        url:"https://drive.google.com/file/d/17MiJ5pFyy3rOXD1qYZS110A5pgZ1QzHH/view?usp=drive_link",
      },
      {
        description:"Midsem Material",
        url:"https://drive.google.com/drive/folders/15OfjhhpIG3R6UEZmsr6d_wtWNY2tjLSa?usp=drive_link"
      },
      {
        description:"Endsem Material",
        url:"https://drive.google.com/drive/folders/1DxrkzAPhI_OaBev_hVF8MR3BJMC_wCyY?usp=drive_link"
      },
    ]
  },
  {
    id: "EC39202",
    code: "EC39202",
    name: "EMBEDDED SYSTEMS LABORATORY",
    department: "Electronics and Electrical Communication Engineering",
    credits: 2,
    season: "",
    instructor: "Saumik Bhattacharya",
    description: "The course might start-off difficult, but after the first class (mostly theoretical), and a bit of consulting the instruction set websites, you'll quickly pick-up writing Assembly Code. Try doing the Codes yourself, instead of relying on LLMs since the TAs ask for justifications for your work, this would help you do well on your final lab exam as well in particular, and would allow you to develop building logic in Assembly in general.",
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    isLab: true,
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: [],
    labManuals: [
      {
        linkText:"Assignment 1",
        description:"Familiarization with 8051 Kit through Assembly language programming",
        url:"https://drive.google.com/file/d/1HzjHTcBy6fXLMaFgeqOifxhRYukWNIxO/view?usp=drive_link",
      },
      {
        linkText:"Assignment 2",
        description:"Four-input Combinational Logic",
        url:"https://drive.google.com/file/d/1DUTvTWs2SuUq1xBEbCutzmbjYcJBZD7-/view?usp=drive_link",
      },
      {
        linkText:"Assignment 3",
        description:"Real Time Clock with Stop Watch",
        url:"https://drive.google.com/file/d/1OszdVHhOtXYmXc3PIZK8ubfHoXMdF1Wd/view?usp=drive_link",
      },
      {
        linkText:"Assignment 4",
        description:"Interfacing an ADC",
        url:"https://drive.google.com/file/d/1JFkMsnf8veEvgiaUnEC0h1h0hhsIjB_O/view?usp=drive_link",
      },
      {
        linkText:"Assignment 5",
        description:"Temperature Controller",
        url:"https://drive.google.com/file/d/1wIWgTBBdIRPvpLU7iSyj9O26MVi6RaWc/view?usp=drive_link",
      }
    ],
    labReports:[
      {
        linkText:"8081 Instruction Set",
        description:"Handy website for quick review of all 8081 instructions",
        url:"https://aeb.win.tue.nl/comp/8051/set8051.html",
      },
      {
        linkText:"8081 Instruction Manual",
        description:"Detailed outline of 8081 Instruction Set",
        url:"https://developer.arm.com/documentation/101655/0961/8051-Instruction-Set-Manual/Instructions"
      },
      {
        linkText:"Assembly Codes",
        description:"Assembly Code Solutions for Assignemnts 1 to 4",
        url:"https://drive.google.com/drive/folders/1lIBgE01PPuMYggch6cuV5YRNwAYYTB9K?usp=drive_link",
      },
      {
        linkText:"Embedded Systems Design Repository",
        description:"Well documented repository of all our courses Assignments & Solutions",
        url:"https://github.com/vishwaksen-1/EC39202-Embedded_Systems_Laboratory"
      }
    ]
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
    isLab:true,
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: [],
    labManuals:[
      {
        linkText:"Experiment 1",
        description:"Line Coding",
        url:"https://drive.google.com/file/d/1D6cpgs388CuflqKoVVTOoDGKtqqHk6kn/view?usp=drive_link",
      },
      {
        linkText:"Experiment 2",
        description:"PN Sequence Generator with LFSR",
        url:"https://drive.google.com/file/d/168eDaRUAGIm4LiTAKrrMY4_9BeZawEXs/view?usp=drive_link",
      },
      {
        linkText:"Experiment 3",
        description:"Delta Modulation",
        url:"https://drive.google.com/file/d/1Gbh8cAuOzqoEFbnom5M4-2Boch9sUnWX/view?usp=drive_link",
      },
      {
        linkText:"Experiment 4",
        description:"BPSK Modulation and Demodulation",
        url:"https://drive.google.com/file/d/1RiiRrFE2DFBqqwcHzK9J3nwfcY05YKJO/view?usp=drive_link",
      },
      {
        linkText:"Experiment 5",
        description:"QPSK Modulation and Demodulation",
        url:"https://drive.google.com/file/d/1sk-Q3MKvRWCPQJeh64Z1hqGil73HIu3u/view?usp=drive_link",
      },
      {
        linkText:"Experiment 6 (No Manual As Such)",
        description:"Simulation of BPSK & QPSK Modulation & Demodulation",
        url:""
      }
    ],
    labReports:[
      {
        linkText:"Experiment 1",
        description:"Line Coding",
        url:"https://drive.google.com/file/d/1d2v8nBR16AQHcZD1Y8_Dn9TYkHxX0mio/view?usp=drive_link",
      },
      {
        linkText:"Experiment 2",
        description:"PN Sequence Generator with LFSR",
        url:"https://drive.google.com/file/d/16LoKfjP_8QBcxriW7XW-xbwCbsCXfDHk/view?usp=drive_link",
      },
      {
        linkText:"Experiment 3",
        description:"Delta Modulation",
        url:"https://drive.google.com/file/d/1oy1EcVJ6INzJjLwTiK2r3KdlddnbSOgL/view?usp=drive_link",
      },
      {
        linkText:"Experiment 4",
        description:"BPSK Modulation and Demodulation",
        url:"https://drive.google.com/file/d/1NJPvSeGlrlY729LO7bM5e9aK2fBquByf/view?usp=drive_link",
      },
      {
        linkText:"Experiment 5",
        description:"QPSK Modulation and Demodulation",
        url:"https://drive.google.com/file/d/1j0PAHFR3RHOmnkakjtHUazTiquSehOYL/view?usp=drive_link",
      },
      {
        linkText:"Experiment 6",
        description:"Simulation of BPSK & QPSK Modulation & Demodulation",
        url:"https://drive.google.com/file/d/14JKvmWakf6GmX6C2r5NiLP1KtR2Wnn8S/view?usp=drive_link"
      }
    ],
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
    isLab:true,
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "",
    note: "",
    additionalLinks: [],
    labReports:  [
      {
        linkText:"Experiment 1",
        description:"Verilog Simulation Lab 1",
        url:"https://drive.google.com/file/d/1o7n7HxP8DLUbgO9FMf8gEMRJrXSt3djy/view?usp=drive_link"
      },
      {
        linkText:"Experiment 2",
        description:"Verilog Simulation Lab 2",
        url:"https://drive.google.com/file/d/1G_OsVqRO_MsGv8Fftx0k590wguaHExoT/view?usp=drive_link"
      },
      {
        linkText:"Experiment 3",
        description:"Verilog Simulation Lab 3",
        url:"https://drive.google.com/file/d/1Oz88Z4FcIXEoCzxJY1bXGxFpDf3Z2bkn/view?usp=drive_link"
      },
      {
        linkText:"Experiment 4",
        description:"There was no experiment 4 lol",
        url:""
      },
      {
        linkText:"Experiment 5",
        description:"Cadence Simulation Lab 1",
        url:"https://drive.google.com/file/d/1iCNXHyd0mJDhO93GRaB08bWlYuBGhpKO/view?usp=drive_link"
      },
      {
        linkText:"Experiment 6",
        description:"Cadence Simulation Lab 2",
        url:"https://drive.google.com/file/d/1h44jzVDmb2C6vNBikoK3xHdWKRzKpVW1/view?usp=drive_link"
      },
      {
        linkText:"Experiment 7",
        description:"Cadence Simulation Lab 3",
        url:"https://drive.google.com/file/d/1nrENPRtUZqM1IrXL_uShsWTfOXvQLDt-/view?usp=drive_link"
      },
      {
        linkText:"Experiment 8",
        description:"Cadence Simulation Lab 4",
        url:"https://drive.google.com/file/d/11pM1zo8gulq7a_O9Kx8Ec2EP07CUr8x8/view?usp=drive_link"
      }
    ],
  },
  {
    id: "EC60294",
    code: "EC60294",
    name: "NANOELECTRONICS",
    department: "Electronics and Electrical Communication Engineering",
    credits: 3,
    season: "",
    instructor: "Prasanta Kumar Guha",
    description: "Follow the Google Drive Linked, it contains all the PPTs and Materials covered in class, the exam is purely theoretical, you'll be required to remember details and will have to answer theoretical questions with a few comparatively easier numericals sprinkled in between, on your exams.",
    schedule: {
      days: [],
      time: "",
      location: ""
    },
    textbook: "",
    otherReferenceMaterial: "",
    notes: "",
    questionPapers: "https://qp.metakgp.org/?query=EC60294&exam=midsem%2Cendsem%2Cct",
    note: "",
    additionalLinks: [
      {
        description:"Nanoelectronics Course Contents",
        url:"https://drive.google.com/drive/folders/1CEYUImDRj6t1kcMas59V_mqBHIHSHUee?usp=drive_link"
      }
    ]
  }
];