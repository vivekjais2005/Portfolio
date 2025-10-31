export const myProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Facilitates purchases from international websites like Amazon and eBay, allowing customers to shop from these sites and have products delivered domestically.",
    subDescription: [
      "Built a scalable application with ASP.NET Core MVC, integrating global platforms like Amazon for domestic delivery.",
      "Implemented secure authentication and database management using ASP.NET Core Identity and Entity Framework Core.",
      "Designed a responsive frontend with Tailwind CSS, enhancing user experience.",
      "Added payment systems, localization, and product filtering for better functionality.",
    ],
    href: "",
    image: "/assets/projects/accessories.png",
    tags: [
      { id: 1, name: "React", path: "/assets/logos/react.svg" },
      { id: 2, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 2,
    title: "WanderLust",
    description:
      "A full-stack travel and vacation listing platform inspired by Airbnb, built with Node.js, Express, MongoDB, and EJS templates.",
    subDescription: [
      "Developed a responsive frontend using HTML, CSS, and Tailwind CSS for seamless browsing across devices.",
      "Implemented secure authentication and session management for user accounts.",
      "Added CRUD functionality for creating, editing, and managing travel listings.",
      "Integrated location-based search and filtering to enhance property discovery.",
      "Deployed the application on Render for scalability and live accessibility.",
    ],
    href: "https://wandelust-jbjv.onrender.com/listing",
    image: "/assets/projects/WanderLust.png",
    tags: [
      { id: 1, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.jpeg" },
      { id: 3, name: "MongoDB", path: "/assets/logos/mongodb.webp" },
      { id: 4, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
    ],
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A responsive music streaming web application inspired by Spotify, built with JavaScript, HTML, and CSS.",
    subDescription: [
      "Developed a dynamic user interface with JavaScript for seamless navigation and playback controls.",
      "Implemented playlist creation, track browsing, and song playback simulation to replicate core Spotify features.",
      "Designed a responsive layout using HTML and CSS for accessibility across devices.",
      "Optimized user interactions with smooth animations and an intuitive design.",
    ],
    href: "",
    image: "/assets/projects/spotify.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 4,
    title: "Jarvis",
    description:
      "An intelligent personal assistant web application built with JavaScript, Node.js, and EJS templates, designed to automate tasks and provide a smart interface.",
    subDescription: [
      "Developed a setup form with dark mode toggle, validation feedback, and offline-first data storage using localStorage.",
      "Implemented task automation, reminders, and note management through a responsive frontend with Tailwind CSS.",
      "Integrated voice input and command recognition for hands-free interaction with the assistant.",
      "Designed modular backend routes in Node.js to handle dynamic data and user requests efficiently.",
      "Enhanced user experience with smooth transitions, notifications, and a clean, intuitive UI.",
    ],
    href: "",
    image: "/assets/projects/jarvis.png",
    tags: [
      { id: 1, name: "EJS", path: "/assets/logos/ejs.svg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.jpeg" },
      { id: 3, name: "Git", path: "/assets/logos/git.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.webp" },
    ],
  },
  {
    id: 5,
    title: "LinguaLink: A Full-Stack Language Exchange Platform",
    description:
      "A global language exchange platform connecting learners with native speakers worldwide, built to bridge classroom learning and real-world practice.",
    subDescription: [
      "Designed a safe and engaging environment for learners to connect, offering premium subscriptions and pay-per-use video calls for monetization.",
      "Crafted an interactive user journey with real-time video, chat, and collaboration using the Stream API.",
      "Implemented secure JWT-based authentication to protect user data and manage sessions effectively.",
      "Enhanced personalization with 30+ customizable UI themes, allowing learners to tailor the interface to their preferences.",
      "Delivered a scalable full-stack architecture with Node.js/Express backend and React.js/Next.js frontend, ensuring high performance and cross-device compatibility.",
    ],
    href: "",
    image: "/assets/projects/linguallink.png",
    tags: [
      { id: 1, name: "Stream", path: "/assets/logos/stream.jpeg" },
      { id: 2, name: "Node.js", path: "/assets/logos/nodejs.jpeg" },
      { id: 3, name: "TailwindCSS", path: "/assets/logos/tailwindcss.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.webp" },
    ],
  },
];

export const mySocials = [
  {
    name: "GitHub",
    href: "https://github.com/vivekjais2005",
    icon: "/assets/socials/github.gif",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/vivek-jaiswal-3b52a4384/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "LeetCode",
    href: "https://leetcode.com/u/Vivekjais_1234/",
    icon: "/assets/socials/leetcode.png",
  },
];

export const experiences = [
  {
    title: "Intern Full Stack Developer",
    job: "Alfido Tech",
    date: "June 2025 - Aug 2025",
    image: "/assets/certificates/alfido.png", // 🆕 Add your image here (place file in /public/assets/experience/)
    contents: [
      "Engineered an end-to-end customer feedback and scheduling app used by 200K+ employees across leadership levels.",
      "Completed 6+ full-stack tasks using React, Node.js, and Express.js.",
    ],
  },
  {
    title: "Founder",
    job: "Handaura",
    date: "Jan 2025 - Present",
    contents: [
      "Launched and manage an e-commerce platform for handmade Indian crafts.",
      "Oversee artist onboarding, logistics, and full-stack development (JS/EJS, Node.js, MongoDB).",
      "Implemented a made-to-order model to reduce waste and ensure authenticity.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
