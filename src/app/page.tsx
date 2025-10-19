import Hero from "../sections/Hero";
import ServicesSection from "../sections/ServicesSection";
import ContactSection from "../sections/ContactSection";
import VisionMissionValues from "../sections/VisionMissionValues";
import OurDivisions from "../sections/OurDivisions";
import AboutPreview from "../sections/AboutPreview";
import CreativeEFG from "../sections/CreativeEFG";


export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {" "}
      {/* غيرت من overflow-x-hidden إلى overflow-hidden */}
      <Hero />
      {/* <section className="w-full overflow-hidden">
        <div className="w-full">
          <AboutPreview />
        </div>
      </section> */}
      
{/* <section className="w-full overflow-hidden">
        <div className="w-full">
          <VisionMissionValues />
        </div>
      </section> */}


      <section className="w-full overflow-hidden">
        <div className="w-full">
          <CreativeEFG />
        </div>
      </section>
      
      {/* <section className="w-full overflow-hidden">
        <div className="w-full">
          <OurDivisions />
        </div>
      </section> */}

      {/* <section className="w-full overflow-hidden">
        <div className="w-full">
          <ContactSection />
        </div>
      </section> */}
      
      

      
    </div>
  );
}
