import Contact from "@/components/page/Contact";
import Experience from "@/components/page/Experience";
import Footer from "@/components/page/Footer";
import Profile from "@/components/page/Profile";
import Project from "@/components/page/Project";

export default function Home() {
  const projects = [
    {
      title: "Klik Indonesia",
      description:
        "Digital transport & service platform (API, PostgreSQL, RabbitMQ, FCM)",
      image: "/klik.jpg",
    },
    {
      title: "MRS App",
      description: "Retail operations app: inventory, orders, finance reports",
      image: "/mrs-app.jpg",
    },
    {
      title: "TNI PRIMA",
      description:
        "Official Indonesian Military website (news, info, recruitment)",
      image: "/tni.jpg",
      link: "https://tni.mil.id/",
    },
    {
      title: "Blanja (E-commerce)",
      description:
        "Online shopping site with various product categories - ReactJS",
      image: "/blanja.jpg",
    },
    {
      title: "Peworld",
      description: "Web platform for recruiters & job seekers - NextJS",
      image: "/peworld.jpg",
    },
    {
      title: "Food Recipe Mobile",
      description: "Recipe app with upload features - React Native",
      image: "/food-recipe-mobile.jpg",
    },
    {
      title: "Food Recipe Web",
      description: "Collaborative recipe search & upload website - ReactJS",
      image: "/food-recipe-web.jpg",
    },
  ];

  const experiences = [
    {
      title: "PT Bangsawan Cyberindo",
      role: "Backend Developer",
      period: "Oct 2023 – Present",
      tasks: [
        "Designing & developing RESTful APIs (Express.js, NestJS)",
        "Managing PostgreSQL for users, partners, etc.",
        "Implementing MinIO, WebSocket, RabbitMQ, and FCM",
        "Collaborating with frontend team (React.js & Flutter)",
      ],
    },
    {
      title: "PT Ursawhite Teknologi Indonesia",
      role: "Freelance Frontend Developer",
      period: "Apr 2024 – Dec 2024",
      tasks: [
        "Developing mobile apps with React Native",
        "Handling debugging, refactoring & security enhancements",
        "Coordinating with backend & cross-functional teams",
      ],
    },
  ];
  console.log(process.env.SERVICE_ID, "process.env.SERVICE_ID 11");
  const contact = {
    serviceId: process.env.SERVICE_ID,
    templateId: process.env.TEMPLATE_ID,
    publicKey: process.env.PUBLIC_KEY,
  };
  return (
    <div className="relative scroll-smooth font-ghibli bg-ghibliCream text-ghibliBrown">
      <Profile />
      <Project projects={projects} />
      <Experience experiences={experiences} />
      <Contact contact={contact} />
      <Footer />
    </div>
  );
}
