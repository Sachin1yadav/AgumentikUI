import React, { useEffect } from "react";
import "../Style/Portfolio.css";
import Aos from "aos";
const Portfolio = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="PortFolioPageDiv">
      <h2>Portfolio</h2>
      <div className="PortFolioGridDiv" >
        <div className="PortFolioInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <h1>01</h1>
          <h3>Mlearns</h3>
          <p>
            Mlearn is an online plate from which teach tomorrow’s skills today
            and allows to think out of the box and create a learning experience
            where the learner can interact with the content and their brains to
            enhance their skills.
          </p>
        </div>
        <div className="PortFolioImgDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/portfolio.png"
            alt=""
          />
        </div>
        <div className="PortFolioImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/portfolio2.png"
            alt=""
          />
        </div>
        <div className="PortFolioInfoDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <h1>02</h1>
          <h3>iSMRITI</h3>
          <p>
            iSMRITI is a technology leader with expertise in Artificial
            Intelligence, Internet of Things and Robotics. A brainchild of
            faculties and alumni from various IITs of India, iSMRITI tackles the
            toughest challenges through its Consultancy Services and Product
            Solution.
          </p>
        </div>

        <div className="PortFolioInfoDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <h1>03</h1>
          <h3>JIGYASA 2K19</h3>
          <p>
            Jigyasa is here at IITK to make you think, to drench you with
            questions regarding the self. It’s time to confront your Inner Self
            and realise your true potential. We are organising events for IIT
            Kanpur students such as dance, drama, music ,treasure hunt, pencil
            painting, quizzes, debates etc which would be designed to inquire
            about one’s innerself.
          </p>{" "}
        </div>
        <div className="PortFolioImgDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/portfolio3.png"
            alt=""
          />
        </div>
        <div className="PortFolioImgDiv" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <img
            src="https://www.agumentik.com/images/resource/portfolio4.png"
            alt=""
          />
        </div>
        <div className="PortFolioInfoDiv" data-aos="fade-down"
            data-aos-anchor-placement="center-bottom"
            data-aos-duration="1200">
          <h1>04</h1>
          <h3>WE CARE JAMSHEDPUR</h3>
          <p>
            "WE CARE JAMSHEDPUR is an NGO located in the heart of Birsanagar,
            Jamshedpur from JAMSHEDPUR 2016, which includes a team which works
            tirelessly in the service of deprived people throughout the day. WE
            CARE JAMSHEDPUR's ultimate objective is to provide medical check
            ups, health advocacy, education (tuition) and facilities provided in
            all types of services at all costs at no cost.
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
