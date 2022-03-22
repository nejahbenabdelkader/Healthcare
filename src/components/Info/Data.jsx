export const Towns = [
  "Tunis",
  "Sfax",
  "Sousse",
  "Monastir",
  "Ariana",
  "Ben arous",
  "Nabeul",
  "Mahdia",
  "Kairouan",
  "Bizerte",
  "Medenine",
  "Mannouba",
  "Gabes",
  "Beja",
  "Gafsa",
  "Jendouba",
  "Le Kef",
  "Sidi bouzid",
  "Kasserine",
  "Zaghouan",
  "Siliana",
  "Kebili",
  "Tataouine",
  "Tozeur",
  "Djerba",
];
export const homeObjOne = {
  id: "about",
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: "Mydoctor",
  headline: "Make an appointment quickly with your doctor!",
  description:
    "Select your doctor, choose the date and time of your appointment and receive your confirmation text/email. It s that simple !",
  buttonLabel: "Get started",
  buttonPath: "/signin",
  imgStart: false,
  img: require(`../../images/about.png`),
  alt: "car",
  dark: true,
  primary: true,
  darkText: false,
};

export const homeObjTwo = {
  id: "consulting",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Unlimited Access",
  headline: "Login to your account at any time",
  description:
    "Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.",
  buttonLabel: "Learn More",
  buttonPath: "",
  imgStart: true,
  img: require("/"),
  alt: "Piggybanck",
  dark: false,
  primary: false,
  darkText: true,
};

export const homeObjThree = {
  id: "signup",
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: "Register Now",
  headline: "Creating an account is extremely easy",
  description:
    "Get access to our exclusive app that allows you to make an appointment very quickly.",
  buttonLabel: "Sign Up",
  buttonPath: "/signup",
  imgStart: false,
  img: require("../../images/signup.png"),
  alt: "car",
  primary: false,
  darkText: true,
};

export const workingHours = [
  {
    hour: "09:00",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "09:30",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "10:00",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "10:30",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "11:00",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "11:30",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "12:00",
    status: [
      { day: 0, statusDay: "UnAvailable" },
      { day: 1, statusDay: "UnAvailable" },
      { day: 2, statusDay: "UnAvailable" },
      { day: 3, statusDay: "UnAvailable" },
      { day: 4, statusDay: "UnAvailable" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "12:30",
    status: [
      { day: 0, statusDay: "UnAvailable" },
      { day: 1, statusDay: "UnAvailable" },
      { day: 2, statusDay: "UnAvailable" },
      { day: 3, statusDay: "UnAvailable" },
      { day: 4, statusDay: "UnAvailable" },
      { day: 5, statusDay: "" },
    ],
  },
  {
    hour: "14:00",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "UnAvailable" },
    ],
  },
  {
    hour: "14:30",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "UnAvailable" },
    ],
  },
  {
    hour: "15:00",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "UnAvailable" },
    ],
  },
  {
    hour: "15:30",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "UnAvailable" },
    ],
  },
  {
    hour: "16:00",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "UnAvailable" },
    ],
  },
  {
    hour: "16:30",
    status: [
      { day: 0, statusDay: "" },
      { day: 1, statusDay: "" },
      { day: 2, statusDay: "" },
      { day: 3, statusDay: "" },
      { day: 4, statusDay: "" },
      { day: 5, statusDay: "UnAvailable" },
    ],
  },
];

export const DoctorsData = [
  {
    name: "Foulen ben Foulen",
    description:
      "Spécialiste en Chirurgie Orthopédique Chirurgie du Rachis chirurgie prothétique Ancien Assistant à la Faculté de Médecine de Tunis Diplômé de la Faculté de Médecine de Paris ",
    adresse: "Ariana Ville 2080 Ariana Tunisie",
    rating: 4.5,
    coordoonées:"36.84546 10.215345",
    Phone:"+21698875465"
  },
  {
    name: "Foulen ben Foulen",
    description:
      "Spécialiste en Chirurgie Orthopédique Chirurgie du Rachis chirurgie prothétique Ancien Assistant à la Faculté de Médecine de Tunis Diplômé de la Faculté de Médecine de Paris ",
    adresse: "Ariana Ville 2080 Ariana Tunisie",
    rating: 4.5,
    coordoonées:"36.84546 10.215345",
    Phone:"+21698875465"
  },
  {
    name: "Foulen ben Foulen",
    description:
      "Spécialiste en Chirurgie Orthopédique Chirurgie du Rachis chirurgie prothétique Ancien Assistant à la Faculté de Médecine de Tunis Diplômé de la Faculté de Médecine de Paris ",
    adresse: "Ariana Ville 2080 Ariana Tunisie",
    rating: 4.5,
    coordoonées:"36.84546 10.215345",
    Phone:"+21698875465"
  },
];