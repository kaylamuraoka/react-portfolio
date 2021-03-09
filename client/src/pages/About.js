import React, { Component } from "react";
import Container from "./../components/Container";
import Row from "./../components/Row";
import Col from "./../components/Col";
const imagePath = process.env.PUBLIC_URL + "/assets/images/";

class About extends Component {
  render() {
    return (
      <Container>
        <h1>About Me</h1>
        <hr />
        <Row />
        <Col size="col-md-12">
          <img
            className="pr-3 pb-2 float-left img-fluid"
            src={`${imagePath}headshot.jpeg`}
            alt="Profile Picture"
            width="300px"
            height="auto"
          />
          {/* // style="max-width: 55%; height: auto;" */}
          <p>
            My name is Kayla Muraoka. I recently graduated from Santa Clara
            University, in August 2020 with a dual degree consisting of a BSc in
            Management Information Systems and BA in Japanese Studies. As
            someone having experienced working full time and studying in Japan,
            I am passionate about working for a multinational retail corporation
            with close ties to Japan.
          </p>
          <p>
            My technical Management Information Systems coursework has equipped
            me with a broad understanding of business and the computer
            applications needed to support business activities. I've attained
            the skills necessary to leverage data, discover market
            opportunities, and deliver business solutions. On the other hand, my
            Japanese studies coursework, including a semester spent abroad at
            Nanzan University in 2019, while also serving as a photo &amp;
            social media correspondent for IES has deepened my knowledge of
            Japanese culture and truly advanced my Japanese speaking, listening,
            reading, writing, and social skills.
          </p>
          <p>
            As a recruiting intern at Optia Partners, an executive recruiting
            firm in Tokyo, I was directly responsible for sourcing a candidate
            where the company was able to successfully introduce, resulting in a
            27-thousand dollar sale. I was awarded the Optia Internship Award
            for the most sales pitch phone calls and appointments of all the
            interns, thus proving my ability to navigate linguistic barriers,
            and adapt to and overcome various cultural differences. I gained
            professional skills and industry exposure on a global level.
          </p>
          <p>
            I am actively involved on the SCU campus as a member of the women's
            club ultimate frisbee team, Kappa Kappa Gamma Eta Nu chapter,
            Intramural basketball team, while maintaining a full course load as
            well as working part-time as a sales associate at Quay Australia, an
            optical retailer. My academic and extra-curricular activity schedule
            confirms my work ethic, competitive drive, ability to juggle
            multiple responsibilities and priorities, and work as a part of a
            team. My leadership experience as a student ambassador, camp
            counselor, silent auction lead for Relay for Life, and group leader
            for the YMCA, provides the skills to make me an asset to and thrive
            in a fast-paced commercial environment.
          </p>
          <p>
            I believe that my work ethic, positive attitude, and eagerness to
            learn from every experience combined with my technical skill-set,
            international experience, leadership experience, and communication
            skills make me a versatile employee.
          </p>
        </Col>
      </Container>
    );
  }
}

export default About;
