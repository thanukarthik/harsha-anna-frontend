import "./ImagesContainer.css";

const ImagesContainer = () => {
  const images = [
    { imageUrl: "https://harsha-simhadri.org/pic/hv-small.jpg" },
    { imageUrl: "	https://harsha-simhadri.org/pic/LBL_CRT.JPG" },
    { imageUrl: "https://harsha-simhadri.org/pic/gates.JPG" },
  ];
  return (
    <div className="main-container">
      <ul className="imageslist">
        {images.map((every, index) => (
          <li className="imageli" key={index}>
            <img src={every.imageUrl} alt="harsha" className="img" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImagesContainer;
