import { useState, useEffect } from "react";
import HewsonPage from "./HewsonPage";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import CRESupportPage from "./CRESupportPage";
import ReviewPage from "./ReviewPage";
import TeamPage from "./TeamPage";
import ContactPage from "./ContactPage";

function getPage() {
  const hash = window.location.hash;
  if (hash.startsWith("#/about")) return "about";
  if (hash.startsWith("#/services")) return "services";
  if (hash.startsWith("#/cre-support")) return "cre-support";
  if (hash.startsWith("#/review")) return "review";
  if (hash.startsWith("#/team")) return "team";
  if (hash.startsWith("#/contact")) return "contact";
  return "home";
}

export default function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const handler = () => {
      setPage(getPage());
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  if (page === "about") return <AboutPage />;
  if (page === "services") return <ServicesPage />;
  if (page === "cre-support") return <CRESupportPage />;
  if (page === "review") return <ReviewPage />;
  if (page === "team") return <TeamPage />;
  if (page === "contact") return <ContactPage />;
  return <HewsonPage />;
}
