import "./index.css";

const IntrestContainer = () => {
  const IntrestEamples = [
    {
      para: "Efficient algorithms for web-scale nearest-neighbor search deployed widely in Microsoft and elsewhere",
      link: "https://github.com/Microsoft/DiskANN",
      work: "DiskANN",
    },
    {
      para: "New ML operators and architectures for tiny IoT and edge devices",
      link: "https://github.com/Microsoft/EdgeML",
      work: "EdgeML",
    },
    {
      para: "Parallel algorithms and run-times with provable guarantees for multi-core processors",
      link: "https://harsha-simhadri.org/pubs/thesis.pdf",
      work: "PhD thesis",
    },
  ];

  return (
    <div className="contentContainer">
      <h2 className="heading">Interests</h2>
      <p className="para">
        I develop new algorithms with a view towards future platforms and
        practical systems. A few examples :
      </p>
      <ul className="intrests">
        {IntrestEamples.map((every, index) => (
          <li className="eachIntrest" key={index}>
            <p className="para">
              {" "}
              {index + 1}. {every.para}{" "}
              <span>
                <a href={every.link}>{every.work}</a>
              </span>
              .
            </p>
          </li>
        ))}
      </ul>
      <br />
      <div>
        <p className="para">
          I lead the organization of the{" "}
          <span>
            <a href="http://big-ann-benchmarks.com/">
              2023 Big ANN NeurIPS challenge
            </a>
          </span>
          on Approximate Nearest Neighbor Search. If you have a strong ANNS
          algorithm, please submit your idea through this{" "}
          <span>
            <a href="https://github.com/harsha-simhadri/big-ann-benchmarks/tree/main/neurips23/README.md">
              evaluation framework
            </a>
          </span>
        </p>

        <p className="para">
          {" "}
          <a href="pubs/ANNS-talk-Sep22.pptx">Slides</a> on DiskANN from recent
          seminars and a recording from{" "}
          <a href="https://www.ideal.northwestern.edu/events/theory-in-practice-workshop/">
            Northwestern IDEAL workshop
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default IntrestContainer;
