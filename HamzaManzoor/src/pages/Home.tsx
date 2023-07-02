import { lazy } from "react";
const Header = lazy(() => import("../components/Header"));
const Fullstack = lazy(() => import("../components/Fullstack"));
const Aboutme = lazy(() => import("../components/Aboutme"));
const Expertise = lazy(() => import("../components/Expertise"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Biography = lazy(() => import("../components/Biography"));
const Contactme = lazy(() => import("../components/Contactme"));
const Footer = lazy(() => import("../components/Footer"));
import { Route,Routes } from 'react-router-dom';
import Experience from "../components/Experience";
import Education from "../components/Education"

const Home = () => {
  return (
    <div
      className={`bg-[#242025] w-full bg-no-repeat bg-cover bg-fixed bg-[url('./assets/img/HM.png')]`}
    >
      <Header>
        <Fullstack />
        <Aboutme />
        <Expertise />
        <Portfolio />
        <Biography />
        <Routes>
        <Route path="*" element={<Education />} />
        <Route path="Expertise" element={<Experience />} />
        </Routes>
        <Contactme />
        <Footer />
      </Header>
    </div>
  );
};

export default Home;
