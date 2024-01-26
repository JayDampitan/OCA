export const NAV_ITEMS = [
  {
    label: "Home",
    page: "/",
  },
  {
    label: "About",
    page: "about",
  },
  {
    label: "Services",
    page: "services",
  },
  {
    label: "Videos",
    page: "videos",
  },
  {
    label: "Facility",
    page: "facility",
  },
  {
    label: "Contact Us",
    page: "contact",
  },
];

//   ----------Services Section

export const TRAINING__SERVICES = [
  {
    title: "Womens Combat",
    header: "13+ yrs / $100 monthly / No contract",
    desc: "Empowering Women through Courage and Combat: Enroll in Our Comprehensive Women's Combat Training Program to Discover Your Inner Strength and Confidence!",
  },
  {
    title: "Combat kids",
    header: "6-12 yrs / $50 monthly / No contract / $15 additional kid",
    desc: "Empower Your Child with Confidence and Discipline: Enroll in Our Exciting Kids' Combat Training Program! Cultivating Strong Minds and Bodies for a Brighter Future! ",
  },
  {
    title: "Ochoa MMA ",
    header: "13+ yrs / $100 monthly / No contract",
    desc: "Master the Art of Mixed Martial Arts: Join Our Exclusive MMA Combat Training Program! Gain Expertise from Seasoned Instructors, Perfect Your Technique, and Transform Your Passion into Mastery in the Ultimate Fighting Arena!",
  },
  {
    title: "Personal Training ",
    header: "13+ yrs / $20 a session / No contract",
    desc: "Customized Excellence: Personal Combat Training Tailored to Your Goals! Achieve Mastery and Confidence in Self-Defense with Our Expert Instructors!",
  },
];

//   -------------Framer motion animation section

export const leftVariant = {
  hidden: {
    x: -10,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const rightVariant = {
  hidden: {
    x: 10,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};
export const topVariant = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    y: "-100vh",
    transition: {
      duration: 0.8,
    },
  },
};
export const bottomVariant = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export const heroImageVariant = {
  hidden: {
    y: "-120%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};
export const mainHeroVariant = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      duration: 0.5,
      delay: 1.2,
    },
  },
};
