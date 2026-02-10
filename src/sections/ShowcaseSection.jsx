import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const solutionsRef = useRef(null);
  const deliveryRef = useRef(null);
  const securityRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    const cards = [
      solutionsRef.current,
      deliveryRef.current,
      securityRef.current,
    ];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={solutionsRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Enterprise solutions" />
            </div>
            <div className="text-content">
              <h2>
                Software Development, IT Consulting, and Digital Solutions
                Agency
              </h2>
              <p className="text-white-50 md:text-xl">
                We deliver end-to-end technology services tailored to your
                business goals.
              </p>
              <p className="text-white-50 md:text-xl mt-4">
                Our core services include:
              </p>
              <ul className="text-white-50 md:text-xl mt-4 flex flex-col gap-3 list-disc ms-5">
                <li>Custom software and web application development</li>
                <li>Mobile application development</li>
                <li>IT consultancy and systems integration</li>
                <li>Digital transformation and process automation</li>
                <li>Website design, hosting, and maintenance</li>
                <li>Software deployment, support, and lifecycle maintenance</li>
                <li>Technology outsourcing and managed services</li>
              </ul>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={deliveryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Web and mobile applications"
                />
              </div>
              <h2>Web and Mobile Applications</h2>
            </div>

            <div className="project" ref={securityRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img src="/images/project3.png" alt="Security and reliability" />
              </div>
              <h2>Cybersecurity and Continuity Planning</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
