import ProjectDisplay from "../../../components/ProjectDisplay/ProjectDisplay";
import "./Projects.styles.scss";
import lenderLanding from "../../../assets/projects/lender/landing.png";
import lenderHowItWorks from "../../../assets/projects/lender/landing.png";
import homeAurochs from "../../../assets/projects/aurochs/home_aurochs.png";
import meetAurochs from "../../../assets/projects/aurochs/meet_aurochs.png";
import landingFd from "../../../assets/projects/freedev/landing_home.png";
import howItWorksFd from "../../../assets/projects/freedev/how-it-works.png";

import proPartners from "../../../assets/projects/olympus/pro_partners.png";
import proTokens from "../../../assets/projects/olympus/pro_tokens.png";

export default function Projects() {
  return (
    <div className="home_projects">
      <header className="home_header">
        <h5>PROJECTS</h5>
        <h3>My latest development portfolio projects.</h3>
      </header>
      <section className="projects-container">
        <ProjectDisplay
          name="Aurochs"
          techStack={["HTML", "CSS", "JAVASCRIPT", "REACT"]}
          image={homeAurochs}
          secondaryImg={meetAurochs}
        />
        <ProjectDisplay
          name="Lender"
          techStack={["HTML", "SCSS", "JAVASCRIPT", "REACT"]}
          image={lenderLanding}
          secondaryImg={lenderHowItWorks}
        />
        <ProjectDisplay
          name="FreeDev"
          techStack={["HTML", "SCSS", "JAVASCRIPT", "REACT"]}
          image={landingFd}
          secondaryImg={howItWorksFd}
        />
        <ProjectDisplay
          name="OlympusPRO"
          techStack={["HTML", "MUI", "TYPESCRIPT", "REACT", "JAVASCRIPT"]}
          image={proTokens}
          secondaryImg={proPartners}
        />
      </section>
    </div>
  );
}
