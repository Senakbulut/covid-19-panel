import { VectorMap } from "react-jvectormap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const countries = require('country-data').countries;
  let navigate = useNavigate();

  const handleClick = (e, countryCode) => {
    const countryName = countries[countryCode].name;
    navigate(`/${countryName}`);
    window.location.reload();
  };

  return (
    <>
      <VectorMap
        map={"world_mill"}
        backgroundColor="transparent"
        zoomOnScroll={false}
        containerStyle={{
          width: "100%",
          height: "100vh",
        }}
        onRegionClick={handleClick}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: "#abdbe3",
            stroke: "none",
            "stroke-width": 0,
            "stroke-opacity": 0,
          },
          hover: {
            "fill-opacity": 0.8,
            cursor: "pointer",
          },
        }}
      />
    </>
  );
};

export default HomePage;
