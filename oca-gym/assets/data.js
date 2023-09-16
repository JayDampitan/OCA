export const NAV_ITEMS = [
    {
      label: "Home",
      page: "home",
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
      title: "4 sessions for $170.00",
      header: "Limited Offer",
      desc: "Our perfect starter package! Wether you're a new member looking for that extra instruction to begin your fitness journey or a fitness regular looking to revitalize your program, our 4 one hour sessions are sure to help.",
    },
    {
      title: "15 Sessions for $535.00",
      header: "Discount of $165 OFF",
      desc: "If you are serious about achieving your fitness goals, our 15 session training package is a great value. If you're looking for accountability, motivation and ultimately results, our 15 session package will be sure to deliver. ",
    },
    {
      title: "8 Session Double @ $225 Each",
      header: "Training for only $28 per session!",
      desc: "Grab a friend and save. Training with a friend has many benefits such as accountability, comradery and savings. When you train with a friend you reduce your rate to less than $25 per session.",
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