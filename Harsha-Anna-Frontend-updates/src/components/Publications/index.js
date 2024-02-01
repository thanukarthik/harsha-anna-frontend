import { useState } from "react";
import { GetIcon } from "../svgIcons/icons";
import "./publication.css";

const Publications = () => {
  const [showPublications, setShowPublications] = useState(true);

  const publications = [
    {
      link: "https://arxiv.org/pdf/2305.04359.pdf",
      name: "Scaling Graph-Based ANNS Algorithms to Billion-Size Datasets: A Comparative Analysis",
      authors:
        "Magdalen Dobson, Zheqi Shen, Guy E. Blelloch, Laxman Dhulipala, Yan Gu, Yihan Sun",
    },
    {
      link: "https://harsha-simhadri.org/pubs/Filtered-DiskANN23.pdf",
      name: "Filtered-DiskANN: Graph Algorithms for Approximate Nearest Neighbor Search with Filters",
      conference: "WWW'23",
      authors:
        "Siddharth Gollapudi, Neel Karia, Varun Sivashankar, Ravishankar Krishnaswamy, Nikit Begwani, Swapnil, Raz, Yiyong Lin, Yin Zhang, Neelam Mahapatro, Premkumar Srinivasan, Amit Singh",
    },
    {
      link: "https://arxiv.org/abs/2205.03763",
      name: "Results of the NeurIPS'21 Challenge on Billion-Scale Approximate Nearest Neighbor Search",
      authors:
        "George Williams, Martin Aumüller, Matthijs Douze, Artem Babenko, Dmitry Baranchuk, Qi Chen, Lucas Hosseini, Ravishankar Krishnaswamy, Gopal Srinivasa, Suhas Jayaram Subramanya, Jingdong Wang",
    },
    {
      link: "https://arxiv.org/abs/2105.09613",
      name: "FreshDiskANN: A Fast and Accurate Graph-Based ANN Index for Streaming Similarity Search",
      authors:
        "Aditi Singh, Suhas Jayaram Subramanya, Ravishankar Krishnaswamy",
    },
    {
      link: "https://harsha-simhadri.org/pubs/RNNPool20.pdf",
      name: "RNNPool: Efficient Non-linear Pooling for RAM Constrained Inference",
      conference: "NeurIPS'20",
      authors: "Oindrila Saha, Aditya Kusupati, Manik Varma, Prateek Jain",
      extraLinks: [
        {
          link: "https://github.com/Microsoft/EdgeML",
          linkName: "code",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/DROCC20.pdf",
      name: "DROCC: Deep Robust One-Class Classification",
      conference: "ICML'20",
      authors: "Sachin Goyal, Aditi Raghunathan, Moksh Jain, Prateek Jain",
      extraLinks: [
        {
          link: "https://github.com/Microsoft/EdgeML",
          linkName: "code",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/DiskANN19.pdf",
      name: "DiskANN: Fast Accurate Billion-point Nearest Neighbor Search on a Single Node",
      conference: "NeurIPS'19",
      authors:
        "Suhas Jayaram Subramanya, Devvrit, Rohan Kadekodi, Ravishankar Krishnawamy",
      extraLinks: [
        {
          link: "https://github.com/Microsoft/DiskANN",
          linkName: "code",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/SRNN19.pdf",
      name: "Shallow RNN: Accurate Time-series Classification on Resource Constrained Devices",
      conference: "NeurIPS'19",
      authors:
        "Don Dennis, Durmus Alp, Emre Acar, Vikram Mandikal, Vinu Sankar Sadasivan, Venkatesh Saligrama, Prateek Jain",
    },
    {
      link: "https://www.microsoft.com/en-us/research/publication/gesturepod-programmable-gesture-recognition-augmenting-assistive-devices/",
      name: "GesturePod: Programmable Gesture Recognition for Augmenting Assistive Devices",
      conference: "ACM UIST'19",
      authors:
        "Shishir Patil, Don Kurian Dennis, Chirag Pabbaraju, Rajanikant Deshmukh, Manik Varma, Prateek Jain",
      extraLinks: [
        {
          link: "https://github.com/Microsoft/EdgeML/tree/master/Applications/GesturePod/onMKR1000",
          linkName: "code",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/acl19.pdf",
      name: "Word2Sense: Sparse Interpretable Word Embeddings",
      conference: "ACL'19",
      authors: "Abhishek Panigrahi, Chiranjib Bhattacharyya",
    },
    {
      link:"https://harsha-simhadri.org/pubs/nsdi19_final.pdf",
      name: "BLAS-on-flash: An Efficient Alternative for Large Scale ML Training and Inference?",
      conference: "NSDI'19",
      authors:
        "Suhas Jayaram Subramanya, Srajan Garg, Anil Kag, Venkatesh Balasubramanian",
      extraLinks: [
        {
          link: "https://github.com/Microsoft/Blas-on-flash",
          linkName: "code",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/emi-rnn-nips18.pdf",
      name: "Multiple Instance Learning for Efficient Sequential Data Classification on Resource-Constrained Devices",
      conference: "NeurIPS'18",
      authors: "Don Kurian Dennis, Chirag Pabbaraju, Prateek Jain",
      extraLinks: [
        {
          link: "https://github.com/Microsoft/EdgeML/tree/master/tf/examples/EMI-RNN",
          linkName: "code",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/hipc17.pdf",
      name: "Provably Efficient Scheduling of Dynamically Allocating Programs on Parallel Cache Hierarchies",
      conference: "HiPC '17",
      authors: "Guy Blelloch, Phillip Gibbons",
    },
    {
      link: "https://harsha-simhadri.org/pubs/protonn.pdf",
      name: "ProtoNN: Compressed and Accurate kNN for Resource-scarce Devices",
      conference: "ICML '17",
      authors:
        "Chirag Gupta, Arun Sai Suggala, Ankit Goyal, Bhargavi Paranjape, Ashish Kumar, Saurabh Goyal, Raghavendra Udupa, Manik Varma, Prateek Jain",
      extraLinks: [
        {
          link: "https://github.com/Microsoft/EdgeML/tree/master/cpp",
          linkName: "code",
        },
      ],
    },
    {
      link: "http://arxiv.org/abs/1602.04552",
      name: "Extending the Nested Parallel Model to the Nested Dataflow Model with Provably Efficient Schedulers",
      conference: "ACM SPAA'16",
      authors: "David Dinh, Yuan Tang",
    },
    {
      link: "https://harsha-simhadri.org/pubs/EECS-2015-163.pdf",
      name: "Write-Avoiding Algorithms",
      conference: "IPDPS '16",
      authors: "Erin Carson, James Demmel, Laura Grigori, Nicholas Knight",
      extraLinks:[{
        link:"https://harsha-simhadri.org/pubs/ASPIRE-2015-summer-poster.pdf",
        linkName:"Poster"
      },{
        link:"https://harsha-simhadri.org/pubs/wa-ipdps16.pdf",linkname:"Conference Version"
      }]
    },
    // ... (continue for other publications)

    {
      link: "https://harsha-simhadri.org/pubs/topc16.pdf",
      name: "Experimental Analysis of Space-Bounded Schedulers",
      conference: "ACM SPAA '14",
      authors:
        "E. Blelloch, Jeremy T. Fineman, Phillip B. Gibbons and Aapo Kyrola) Invited to the ACM Transaction on Parallel Computing best papers issue, 2016, 3(1).",
      extraLinks: [
        {
          link: "https://harsha-simhadri.org/pubs/spaa14-SBFGK.pdf",
          linkName: "Conference Version",
        },
        {
          link: "https://github.com/harsha-simhadri/sbsched",
          linkName: "code",
        },
      ],
    },
    
    {
      link: "https://harsha-simhadri.org/pubs/mspc13-BFGS.pdf",
      name: "Program-Centric Cost Models for Locality",
      conference: "ACM MSPC'13",
      authors: "   E. Blelloch, Jeremy T. Fineman and Phillip B. Gibbons",
    },
    {
      link: "https://harsha-simhadri.org/pubs/spaa12-setcover.pdf",
      name: "Parallel and I/O efficient set covering algorithms",
      conference: "ACM SPAA '12",
      authors: "E. Blelloch and Kanat Tangwongsan",
    },
    {
      link: "https://harsha-simhadri.org/pubs/spaa12-SBFGKST.pdf",
      name: "Brief announcement: the problem based benchmark suite",
      conference: "ACM SPAA '12",
      authors:
        "Julian Shun, Guy E. Blelloch, Jeremy T. Fineman, Phillip B. Gibbons, Aapo Kyrola, and Kanat Tangwongsan",
    },
    {
      link: "https://harsha-simhadri.org/pubs/spaa11.pdf",
      name: "Scheduling Irregular Parallel Computations on Hierarchical Caches",
      conference: "ACM SPAA '11 ",
      authors:
        "E. Blelloch, Jeremy T. Fineman and Phillip B. Gibbons  Tech Report: CMU-CS-10-154 ",
      extraLinks: [
        {
          link: "https://pubs/CMU-CS-10-154-BFGS.pdf",
          linkName: "Tech Report",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/CMU-CS-09-134.pdf",
      name: "Low Depth Cache Oblivious Algorithms",
      conference: " ACM SPAA '10 ",
      authors: " E. Blelloch and Phillip B. Gibbons Tech Report: CMU-CS-09-134",

      extraLinks: [
        {
          link: "https://pubs/spaa10-BGS.pdf",
          linkName: "Conference Version",
        },
      ],
    },
    {
      link: "https://harsha-simhadri.org/pubs/spaa08-BGH.pdf",
      name: "Combinable Memory-Block Transactions",
      conference: "ACM SPAA '08",
      authors: "E. Blelloch and Phillip B. Gibbons",
    },
    {
      link: "https://harsha-simhadri.org/pubs/tcc07-FFGH.pdf",
      name: "Towards optimal and efficient perfectly secure message transmission",
      conference: "Theory of Cryptography Conference 2007",
      authors: " Mattias Fitzi, Mathew Franklin and Juan Garay",
    },
  ];

  return (
    <div className="publicationContainer">
      <h1 className="heading">
        Publications
        <span>
          <button
            onClick={() => {
              setShowPublications(!showPublications);
            }}
            className="collapseBtnUp"
          >
            {
              <sub>
                <GetIcon
                  type={showPublications ? "collapseDown" : "collapseUp"}
                />
              </sub>
            }
          </button>
        </span>
      </h1>
      {showPublications && (
        <ul className="publicationLinks">
          {publications.map((every, index) =>
            every.extraLinks ? (
              <li key={index} className="eachLink">
                <p className="PublicationsPara">
                  {index + 1}. <a href={every.link}>{every.name} </a> with{" "}
                  {every.authors}.
                  {every.extraLinks.map((extra, extraIndex) => (
                    <span key={extraIndex}>
                      {"  "}
                      <a href={extra.link}>{extra.linkName}</a>{" "}
                    </span>
                  ))}
                </p>
              </li>
            ) : (
              <li className="eachLink" key={index}>
                <p className="PublicationsPara">
                  {index + 1}. <a href={every.link}>{every.name} </a> with{" "}
                  {every.authors}.
                </p>
              </li>
            )
          )}
        </ul>
      )}
    </div>
  );
};

export default Publications;
