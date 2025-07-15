export interface Course {
  id: string;
  code: string;
  name: string;
  department: string;
  credits: number;
  season: "Spring" | "Autumn";
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
  // Semester 1 - Autumn
  {
    id: "cs101",
    code: "CS 101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    credits: 3,
    season: "Autumn",
    instructor: "Dr. Sarah Chen",
    description: "Fundamental concepts of computer science including programming basics, algorithms, and problem-solving techniques.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "10:00 AM - 11:00 AM",
      location: "Room 204, Science Building"
    }
  },
  {
    id: "math151",
    code: "MATH 151",
    name: "Calculus I",
    department: "Mathematics",
    credits: 4,
    season: "Autumn",
    instructor: "Dr. Elena Vasquez",
    description: "Limits, derivatives, and applications of differential calculus.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "9:00 AM - 10:00 AM",
      location: "Room 105, Math Building"
    }
  },
  {
    id: "eng102",
    code: "ENG 102",
    name: "Technical Writing",
    department: "English",
    credits: 3,
    season: "Autumn",
    instructor: "Prof. Lisa Thompson",
    description: "Development of technical writing skills for scientific and engineering communication.",
    schedule: {
      days: ["Mon", "Wed"],
      time: "1:00 PM - 2:30 PM",
      location: "Room 150, Liberal Arts Building"
    }
  },

  // Semester 2 - Spring
  {
    id: "cs201",
    code: "CS 201",
    name: "Data Structures and Algorithms",
    department: "Computer Science",
    credits: 4,
    season: "Spring",
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
    id: "phys201",
    code: "PHYS 201",
    name: "General Physics I",
    department: "Physics",
    credits: 4,
    season: "Spring",
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
    id: "math251",
    code: "MATH 251",
    name: "Calculus II",
    department: "Mathematics",
    credits: 4,
    season: "Spring",
    instructor: "Dr. Robert Martinez",
    description: "Integration techniques, applications of integrals, and infinite series.",
    prerequisites: ["MATH 151"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "9:00 AM - 11:00 AM",
      location: "Room 107, Math Building"
    }
  },

  // Semester 3 - Autumn
  {
    id: "cs301",
    code: "CS 301",
    name: "Database Systems",
    department: "Computer Science",
    credits: 3,
    season: "Autumn",
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
    id: "chem101",
    code: "CHEM 101",
    name: "General Chemistry I",
    department: "Chemistry",
    credits: 4,
    season: "Autumn",
    instructor: "Dr. Amanda Foster",
    description: "Atomic structure, chemical bonding, stoichiometry, and chemical reactions.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "11:00 AM - 12:00 PM",
      location: "Room 102, Chemistry Building"
    }
  },
  {
    id: "stat201",
    code: "STAT 201",
    name: "Introduction to Statistics",
    department: "Statistics",
    credits: 3,
    season: "Autumn",
    instructor: "Dr. Jennifer Lee",
    description: "Descriptive statistics, probability distributions, hypothesis testing, and regression analysis.",
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "2:00 PM - 3:00 PM",
      location: "Room 201, Math Building"
    }
  },

  // Semester 4 - Spring
  {
    id: "cs302",
    code: "CS 302",
    name: "Computer Networks",
    department: "Computer Science",
    credits: 3,
    season: "Spring",
    instructor: "Dr. Anna Johnson",
    description: "Network protocols, TCP/IP, network security, and distributed systems.",
    prerequisites: ["CS 201"],
    schedule: {
      days: ["Mon", "Wed"],
      time: "2:00 PM - 3:30 PM",
      location: "Room 306, Science Building"
    }
  },
  {
    id: "math301",
    code: "MATH 301",
    name: "Linear Algebra",
    department: "Mathematics",
    credits: 3,
    season: "Spring",
    instructor: "Dr. Thomas Brown",
    description: "Vector spaces, matrices, eigenvalues, and linear transformations.",
    prerequisites: ["MATH 251"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "10:00 AM - 11:30 AM",
      location: "Room 108, Math Building"
    }
  },

  // Semester 5 - Autumn
  {
    id: "cs401",
    code: "CS 401",
    name: "Software Engineering",
    department: "Computer Science",
    credits: 3,
    season: "Autumn",
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
    id: "cs403",
    code: "CS 403",
    name: "Operating Systems",
    department: "Computer Science",
    credits: 4,
    season: "Autumn",
    instructor: "Dr. Rachel Green",
    description: "Process management, memory management, file systems, and system calls.",
    prerequisites: ["CS 201"],
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "11:00 AM - 12:00 PM",
      location: "Room 307, Science Building"
    }
  },

  // Semester 6 - Spring
  {
    id: "cs404",
    code: "CS 404",
    name: "Machine Learning",
    department: "Computer Science",
    credits: 3,
    season: "Spring",
    instructor: "Dr. Alex Zhang",
    description: "Supervised and unsupervised learning, neural networks, and data mining techniques.",
    prerequisites: ["STAT 201", "MATH 301"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "1:00 PM - 2:30 PM",
      location: "Room 308, Science Building"
    }
  },
  {
    id: "cs405",
    code: "CS 405",
    name: "Web Development",
    department: "Computer Science",
    credits: 3,
    season: "Spring",
    instructor: "Prof. Maria Lopez",
    description: "Full-stack web development, modern frameworks, and web security principles.",
    prerequisites: ["CS 301"],
    schedule: {
      days: ["Mon", "Wed"],
      time: "3:00 PM - 4:30 PM",
      location: "Room 309, Science Building"
    }
  },

  // Semester 7 - Autumn
  {
    id: "cs501",
    code: "CS 501",
    name: "Advanced Algorithms",
    department: "Computer Science",
    credits: 3,
    season: "Autumn",
    instructor: "Dr. Steven Wang",
    description: "Advanced algorithmic techniques, graph algorithms, and computational complexity.",
    prerequisites: ["CS 201", "MATH 301"],
    schedule: {
      days: ["Tue", "Thu"],
      time: "2:00 PM - 3:30 PM",
      location: "Room 311, Science Building"
    }
  },
  {
    id: "cs502",
    code: "CS 502",
    name: "Computer Graphics",
    department: "Computer Science",
    credits: 3,
    season: "Autumn",
    instructor: "Dr. Lisa Chen",
    description: "3D graphics, rendering techniques, and computer animation principles.",
    prerequisites: ["MATH 301"],
    schedule: {
      days: ["Mon", "Wed"],
      time: "4:00 PM - 5:30 PM",
      location: "Room 312, Science Building"
    }
  },

  // Semester 8 - Spring
  {
    id: "cs601",
    code: "CS 601",
    name: "Capstone Project",
    department: "Computer Science",
    credits: 4,
    season: "Spring",
    instructor: "Prof. John Smith",
    description: "Independent research project demonstrating mastery of computer science concepts.",
    prerequisites: ["CS 401", "CS 404"],
    schedule: {
      days: ["Mon", "Wed", "Fri"],
      time: "2:00 PM - 4:00 PM",
      location: "Room 313, Science Building"
    }
  },
  {
    id: "cs602",
    code: "CS 602",
    name: "Professional Ethics",
    department: "Computer Science",
    credits: 2,
    season: "Spring",
    instructor: "Dr. Sarah Wilson",
    description: "Ethical issues in computing, professional responsibility, and social impact of technology.",
    schedule: {
      days: ["Tue"],
      time: "1:00 PM - 3:00 PM",
      location: "Room 314, Science Building"
    }
  }
];