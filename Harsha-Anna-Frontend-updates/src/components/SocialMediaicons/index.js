import React, { useState } from "react";
import "./index.css";
import { GetIcon } from "../svgIcons/icons";

const SocialMediaIcons = () => {
  const [showIcons, setShowIcons] = useState(false);

  const socialMediaIcons = [
    {
      link: "mailto:harsha.v.simhadri@gmail.com",
      iconImageUrl: "https://harsha-simhadri.org/pic/email.svg",
      alt: "email",
      height: "32",
    },
    {
      link: "https://www.linkedin.com/in/harsha-vardhan-simhadri-66988a27/",
      iconImageUrl: "https://harsha-simhadri.org/pic/LinkedIn_logo.png",
      alt: "Linkedin Page",
      height: "26",
    },
    {
      link: "https://www.microsoft.com/en-us/research/people/harshasi/",
      iconImageUrl: "https://harsha-simhadri.org/pic/Microsoft_logo.svg",
      alt: "Microsoft Research Webpage",
      height: "28",
    },
    {
      link: "http://www.informatik.uni-trier.de/~ley/db/indices/a-tree/s/Simhadri:Harsha_Vardhan.html",
      iconImageUrl: "https://harsha-simhadri.org/pic/dblp_logo.png",
      alt: "DBLP",
      height: "32",
    },
    {
      link: "https://github.com/harsha-simhadri",
      iconImageUrl: "https://harsha-simhadri.org/pic/GitHub_Logo.png",
      alt: "Github",
      height: "32",
    },
  ];

  return (
    <div className="socialMediaContainer">
      <div className="social-media-icons">
        {/* Show icons directly */}
        {socialMediaIcons.map((icon, index) => (
          <a key={index} href={icon.link}>
            <img src={icon.iconImageUrl} alt={icon.alt} height={icon.height} />
          </a>
        ))}
      </div>
      {/* Show menu button on smaller screens */}
      <button className="menu-button" onClick={() => setShowIcons(!showIcons)}>
        <GetIcon type="menuIcons" />
      </button>
      {/* Show icons in a menu on smaller screens */}
      {showIcons && (
        <div className="mobile-menu">
          {socialMediaIcons.map((icon, index) => (
            <a key={index} href={icon.link}>
              <img
                src={icon.iconImageUrl}
                alt={icon.alt}
                height={icon.height}
              />
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default SocialMediaIcons;
