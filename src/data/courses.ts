export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  semester: string;
  instructor: string;
  description: string;
  prerequisites?: string[];
  schedule: {
    days: string[];
    time: string;
    location: string;
  };
}

export const courses: Course[] = [
  {
    id: "cs101",
    code: "CS 101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Dr. Sarah Chen",
    description: "Fundamental concepts of computer science including programming basics, algorithms, and problem-solving techniques.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "10:00 AM - 11:00 AM",
      location: "Room 204, Science Building"
    }
  },
  {
    id: "cs201",
    code: "CS 201",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    credits: 4,
    semester: "Fall 2024",
    instructor: "Prof. Michael Rodriguez",
    description: "Study of abstract data types, algorithms for searching and sorting, and complexity analysis.",
    prerequisites: ["CS 101"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "2:00 PM - 4:00 PM",
      location: "Room 301, Science Building"
    }
  },
  {
    id: "math151",
    code: "MATH 151",
    name: "Calculus I",
    department: "Mathematics",
    credits: 4,
    semester: "Fall 2024",
    instructor: "Dr. Elena Vasquez",
    description: "Limits, derivatives, and applications of differential calculus.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "9:00 AM - 10:00 AM",
      location: "Room 105, Math Building"
    }
  },
  {
    id: "phys201",
    code: "PHYS 201",
    name: "General Physics I",
    department: "Physics",
    credits: 4,
    semester: "Fall 2024",
    instructor: "Dr. James Wilson",
    description: "Mechanics, thermodynamics, and wave motion with laboratory component.",
    prerequisites: ["MATH 151"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "11:00 AM - 1:00 PM",
      location: "Room 201, Physics Building"
    }
  },
  {
    id: "eng102",
    code: "ENG 102",
    name: "Technical Writing",
    department: "English",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Prof. Lisa Thompson",
    description: "Development of technical writing skills for scientific and engineering communication.",
    schedule: {
      days: ["Mon", "Wed"],
      time: "1:00 PM - 2:30 PM",
      location: "Room 150, Liberal Arts Building"
    }
  },
  {
    id: "cs301",
    code: "CS 301",
    name: "Database Systems",
    department: "Computer Science",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Dr. Kevin Park",
    description: "Database design, SQL, normalization, and database management systems.",
    prerequisites: ["CS 201"],
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "3:00 PM - 4:00 PM",
      location: "Room 305, Science Building"
    }
  },
  {
    id: "math251",
    code: "MATH 251",
    name: "Calculus II",
    department: "Mathematics",
    credits: 4,
    semester: "Fall 2024",
    instructor: "Dr. Robert Martinez",
    description: "Integration techniques, applications of integrals, and infinite series.",
    prerequisites: ["MATH 151"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "9:00 AM - 11:00 AM",
      location: "Room 107, Math Building"
    }
  },
  {
    id: "chem101",
    code: "CHEM 101",
    name: "General Chemistry I",
    department: "Chemistry",
    credits: 4,
    semester: "Fall 2024",
    instructor: "Dr. Amanda Foster",
    description: "Atomic structure, chemical bonding, stoichiometry, and chemical reactions.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "11:00 AM - 12:00 PM",
      location: "Room 102, Chemistry Building"
    }
  },
  {
    id: "cs401",
    code: "CS 401",
    name: "Software Engineering",
    department: "Computer Science",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Prof. David Kim",
    description: "Software development lifecycle, project management, and team-based software development.",
    prerequisites: ["CS 301"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "3:30 PM - 5:00 PM",
      location: "Room 310, Science Building"
    }
  },
  {
    id: "stat201",
    code: "STAT 201",
    name: "Introduction to Statistics",
    department: "Statistics",
    credits: 3,
    semester: "Fall 2024",
    instructor: "Dr. Jennifer Lee",
    description: "Descriptive statistics, probability distributions, hypothesis testing, and regression analysis.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "2:00 PM - 3:00 PM",
      location: "Room 201, Math Building"
    }
  }
];