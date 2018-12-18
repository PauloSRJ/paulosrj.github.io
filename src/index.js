import React from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2";
import Slider from "react-slick";
import Config from "./infos";

import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "slider-exp"
};

const Profile = () => (
  <div className="col-3 profile">
    <img
      className="blockchain"
      src="https://acclaim-production-app.s3.amazonaws.com/images/c2137484-b8fa-4c38-b1ca-a2618a7360e9/Blockchain%2BEssentials.png"
      alt=""
    />
    <img className="git-dev" src="https://i.imgur.com/Szh0atU.png" alt="" />
    <a href="curriculo.pdf" className="down-cv" download target="_blank">
      Download CV
    </a>
  </div>
);

const Iconed = ({ red, url }) => (
  <a href={red} target="_blank" className="btn-circle">
    <img src={url} alt="Icon Social" />
  </a>
);

const Social = () => (
  <div className="social">
    <Iconed
      url="https://sourcerer.io/icons/logo-bright.svg"
      red={Config.sourcerer}
    />
    <Iconed
      url="https://cdn.worldvectorlogo.com/logos/github-octocat.svg"
      red={Config.github}
    />
    <Iconed
      url="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png"
      red={Config.whatsapp}
    />
    <Iconed
      url="http://growthmarketing.com.br/wp-content/uploads/2017/04/linkedin-1.png"
      red={Config.linkedin}
    />
  </div>
);

const Skilled = ({ title, time, color }) => (
  <div
    className="skilled"
    style={{ borderColor: color, width: time * 3 + 80 + "%" }}
  >
    {title} <code>+{time} years</code>
  </div>
);

const Skills = () => (
  <React.Fragment>
    {Config.skills.map((skill, key) => (
      <Skilled
        title={skill.name}
        time={skill.time}
        color={skill.color}
        key={key}
      />
    ))}
  </React.Fragment>
);

const Card = ({ title, className, height, children, over }) => (
  <fieldset class={className + "card"} style={{ height }}>
    <legend onMouseLeave={over} onMouseOver={over}>
      {title}
    </legend>
    {children}
  </fieldset>
);

const CardOne = ({ className }) => (
  <Card title="Contact" height="38.5vh" className={className}>
    <br />
    <br />
    <p>
      Age: <strong>{Config.age}</strong>
    </p>
    <p>
      Number: <strong>{Config.number}</strong>
    </p>
    <p>
      Mail:{" "}
      <strong>
        <a href={"mailto:" + Config.mail}>{Config.mail}</a>
      </strong>
    </p>
    <br />
    <Social />
  </Card>
);

const Exp = ({ user }) => (
  <div className="exp-div-father">
    <img src={user.logo} alt={user.name} />
    <div className="exp-div" style={{ borderColor: user.color }}>
      <h4>{user.name}</h4>
      <code>{user.time}</code>
      <p>{user.function}</p>
    </div>
  </div>
);

const toggleImage = ({ image, name, link }) => {
  // Swal({
  //   imageUrl: image,
  //   imageHeight: 500,
  //   imageWidth: 600,
  //   customClass: "imgresponsive",
  //   imageAlt: name
  // });
  Swal({
    title: name,
    html:
      "<br/><a href='" +
      link +
      "' target='_blank' class='btn btn-primary'>Go to site</a><br/><code>Note! Some sites do not link for security reasons</code>",
    imageUrl: image,
    imageWidth: 900,
    imageHeight: 450,
    imageAlt: name,
    animation: false
  });
};

const Portfolio = () => (
  <div className="col-12 portfolio">
    <Card title="Portfolio" className="">
      <div className="row">
        {Config.portfolio.map((port, key) => (
          <div className="port-col" key={key}>
            <img
              src={port.image}
              alt={port.type + " " + port.name}
              onClick={() => toggleImage(port)}
            />
            <div className="about">
              <h4>{port.name}</h4>
              <p>{port.text}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  </div>
);

// const Animate = e => {
//   console.log(e.target.toggleClass("animated infinite bounce delay-5s"));
// };

class App extends React.Component {
  state = {};

  render() {
    return (
      <div className="App container-flex">
        {/* Primary Container */}
        <div className="row">
          <Profile />
          <div className="col-3 im">
            <h2>Paulo Sergio</h2>
            <p>Full-stack Developer</p>
            <CardOne className="one-card " />
          </div>
          <div className="col-5 skills">
            <Card title="Skills" height="100%" className="">
              <Skills />
            </Card>
          </div>
        </div>
        {/* Second Container */}
        <div className="row">
          <div className="col-4 exp">
            <Card title="Experience" height="100%" className="">
              <Slider {...settings}>
                {Config.experience.map((exp, key) => (
                  <Exp user={exp} key={key} />
                ))}
              </Slider>
            </Card>
          </div>
          <div className="col-8 cert">
            <Card title="Certifications" height="100%" className="">
              <div className="cert-container">
                {Config.certifications.map((cert, key) => (
                  <a href={cert.url} target="_blank">
                    <img src={cert.logo} alt={cert.name} />
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
        <div className="row">
          <Portfolio />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
