import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Work = () => {
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1025px)", () => {
      const workSection = document.querySelector<HTMLElement>(".work-section");
      const workContainer =
        document.querySelector<HTMLElement>(".work-container");
      const workFlex = document.querySelector<HTMLElement>(".work-flex");
      const boxes = gsap.utils.toArray<HTMLElement>(".work-box");

      if (!workSection || !workContainer || !workFlex || boxes.length === 0) {
        return;
      }

      const getTranslateX = () => {
        const rectLeft = workContainer.getBoundingClientRect().left;
        const rect = boxes[0].getBoundingClientRect();
        const parentWidth = workFlex.getBoundingClientRect().width;
        const padding =
          parseInt(window.getComputedStyle(boxes[0]).padding, 10) / 2;

        return Math.max(
          rect.width * boxes.length - (rectLeft + parentWidth) + padding,
          0
        );
      };

      const tween = gsap.to(workFlex, {
        x: () => -getTranslateX(),
        ease: "none",
        scrollTrigger: {
          trigger: workSection,
          start: "top top",
          end: () => `+=${getTranslateX()}`,
          scrub: true,
          pin: true,
          id: "work",
          invalidateOnRefresh: true,
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    mm.add("(max-width: 1024px)", () => {
      ScrollTrigger.getById("work")?.kill();
      gsap.set(".work-flex", { clearProps: "transform" });
    });

    return () => {
      mm.revert();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>01</h3>
                  <div>
                    <h4>Ripple Media</h4>
                    <p>Social Media App</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>React.js, Node.js, Express, MongoDB, JWT</p>
              </div>
              <WorkImage image="/images/ripple-media.png" alt="Ripple Media" link="https://ripple-frontendog.vercel.app" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>02</h3>
                  <div>
                    <h4>Sir Consultant</h4>
                    <p>Visa Consultancy</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>React.js, Responsive Design, Clean UI/UX</p>
              </div>
              <WorkImage image="/images/sir-consultant.png" alt="Sir Consultant" link="https://sirconsultant.com" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>03</h3>
                  <div>
                    <h4>Outfitters POS</h4>
                    <p>Inventory System</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>React.js, Node.js, Express, MySQL</p>
              </div>
              <WorkImage image="/images/outfitters-pos.png" alt="Outfitters POS" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>04</h3>
                  <div>
                    <h4>Secure File Manager</h4>
                    <p>Award Winner</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Python, GUI, AES Encryption</p>
              </div>
              <WorkImage image="/images/secure-file-manager.png" alt="Secure File Manager" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>05</h3>
                  <div>
                    <h4>AI Chatbot</h4>
                    <p>Generative AI</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>MERN Stack, Gemini API, Streaming</p>
              </div>
              <WorkImage image="/images/ai-chatbot.jpg" alt="AI Chatbot" />
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>06</h3>
                  <div>
                    <h4>AI Automation Bots</h4>
                    <p>n8n Workflows</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>n8n, AI Automation, Email Classifier</p>
              </div>
              <WorkImage image="/images/n8n-automation.png" alt="AI Automation Bots" />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
