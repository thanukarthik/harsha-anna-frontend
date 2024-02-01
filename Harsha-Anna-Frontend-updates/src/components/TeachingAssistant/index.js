import "./index.css";

export const TeachingAssistant = () => {
  const teaching = [
    {
      link: "http://www.cs.cmu.edu/afs/cs/academic/class/15750-s11/www/",
      linkName: "15-750",
      subject: "Graduate Algorithms (Spring 2011)",
    },
    {
      link: "http://www.cs.cmu.edu/afs/cs/academic/class/15499-s09/www/",
      linkName: "15-499",
      subject: "Parallel Algorithms (Spring 2009)",
    },
  ];

  const earlier = [
    {
      year: "2013-2016",
      subject:
        "Postdoctoral Fellow, CS Department, Lawrence Berkeley National Lab.",
    },
    {
      year: "2007-2013",
      subject: "Ph.D., CS Department, Carnegie Mellon University, Advisor.",
      links: [
        {
          link: "http://www.cs.cmu.edu/~guyb/",
          linkName: "Guy Blelloch",
        },
      ],
    },
    {
      year: "2003-2007",
      subject: "B.Tech, IIT Madras, Major: CS, Minor: Physics.",
    },
  ];

  return (
    <div className="teachingContainer">
      <div>
        <h2 className="heading">Teaching Assistant</h2>
        <ul className="ul">
          {teaching.map((every, index) => (
            <li key={index} className="teaching-list">
              <p className="para">
                {index + 1}.{" "}
                <span>
                  <a href={every.link}>{every.linkName}</a>
                </span>{" "}
                {every.subject} .
              </p>
            </li>
          ))}
        </ul>{" "}
      </div>

      <div>
        <h2 className="heading">Earlier</h2>
        {earlier.map((every, index) => (
          <div key={index} className="earlier-item">
            <p className="para">
              {index + 1}. {every.year} : {every.subject}
            </p>
            {every.links &&
              every.links.map((each, linkIndex) => (
                <div key={linkIndex} className="earlier-link">
                  <p className="para">
                    <a href={each.link}>{each.linkName}</a>
                  </p>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};
