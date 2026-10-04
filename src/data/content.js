// All copy is taken from tis.edu.in to retain the brand voice.
const IMG = "https://tis.edu.in/_next/static/media";

export const brand = {
  name: "Tulas International School",
  short: "TIS",
  logo: `${IMG}/schoolLogo.95f6e121.png`,
  phone: "+91-9837983791",
  email: "info@tis.edu.in",
  applyUrl: "https://admission.tis.edu.in",
  address: "Dhoolkot, P.O – Selaqui, Chakrata Road, Dehradun-248011 (Uttarakhand)",
};

export const navItems = [
  { label: "About TIS", href: "#about" },
  { label: "Sports", href: "#sports" },
  { label: "Rankings", href: "#rankings" },
  { label: "Parents", href: "#parents" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  title: "Welcome to Tulas International School (TIS)",
  lead: "TIS is one of India’s top boarding and day schools in Dehradun, India.",
  body: "Our CBSE curriculum focuses on academic excellence, holistic development, and preparing students to be global leaders.",
  marquee: "LET'S DO IT with Tulas",
  images: [
    { src: `${IMG}/polo.973ddbae.webp`, alt: "Students playing polo" },
    { src: `${IMG}/swimming.6fc81e65.webp`, alt: "Swimming at TIS" },
    { src: `${IMG}/dance.88843edb.webp`, alt: "Dance performance" },
  ],
};

export const about = {
  title: "Boarding and Day School Excellence",
  body: "We provide world-class education, modern facilities, and a nurturing environment for students to thrive academically, socially, and culturally. Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.",
  est: "Established in 2012 under the aegis of Rishabh Educational Trust.",
};

export const stats = [
  { value: 22, suffix: "", label: "Acre pollution free campus" },
  { value: 16, suffix: "+", label: "Olympic sports" },
  { value: 24, suffix: "*7", label: "Medical assistance" },
  { value: 6, suffix: ":1", label: "Student teacher ratio" },
];

export const sports = {
  title: "Sports? It’s not just a facility. At Tulas it’s the foundation!",
  body: "16+ sports curated to bring joy and discipline to your life.",
  list: ["Archery", "Cycling", "Hockey", "Swimming", "Taekwondo", "Football", "Shooting Range", "Horse Riding", "Billiards", "Squash", "Volleyball", "Basketball", "Cricket", "Lawn Tennis", "Badminton", "Table Tennis"],
};

export const rankings = [
  { rank: "#1", place: "In Dehradun", text: "Co-Educational Boarding School in Dehradun by Education Today" },
  { rank: "#2", place: "In Uttarakhand", text: "Co-Educational Boarding School in North India by Education Today" },
  { rank: "#1", place: "In North India", text: "Co-Educational Boarding School in North India by Outlook" },
  { rank: "#4", place: "In India", text: "Co-Educational Boarding School in India by Education Today" },
];

export const testimonials = [
  { name: "Namita Agarwal", role: "M/O Krishna Agarwal", quote: "Tulas gives a comprehensive environment for our child to grow. The sports, academics and extra-curricular activities have helped Krishna in knowing himself better." },
  { name: "Sandeep Kumar", role: "F/O Aryan", quote: "Our experience is very amazing with school. Staff is very cooperative and supportive. Our son always admires the school whenever we talk with him." },
  { name: "Ashu Arora", role: "M/O Manisha Changrani", quote: "It has been a fantastic journey for my daughter in Tulas International School so far. The boarding and infrastructure facility are excellent." },
  { name: "Suresh Kumar", role: "F/O Aditya Kumar", quote: "Tulas International School is doing excellent in all the fields especially giving a lot of exposure to children. Good efforts by all teachers." },
];

export const classes = ["Class IV", "Class V", "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", "Class XI", "Class XII"];
