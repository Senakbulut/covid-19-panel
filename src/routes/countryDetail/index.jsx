import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCountry } from "state";
import { getCountries } from "api/countries";
import { Card, Col, Container } from "react-bootstrap";
import moment from "moment";
import Lottie from "lottie-react";
import Loading from "assets/loading.json";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CountryDetail = () => {
  const { country } = useParams();
  const dispatch = useDispatch();
  const countryData = useSelector((state) => state.countries);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function countries() {
      setLoading(true);
      const result = await getCountries(country);
      dispatch(setCountry({ countries: result }));
      setLoading(false);
    }
    countries();
  }, [country, dispatch]);

  return (
    <Container>
      <ToastContainer />
      {loading ? (
        <Container className="w-50">
          <Lottie animationData={Loading} loop={true} />
        </Container>
      ) : (
        <Card key={countryData.location} className="my-5 card">
          <Card.Header className="d-flex justify-content-between align-items-baseline flex-sm-row flex-column">
            <Col>
              <h1
                className="border-bottom border-danger"
                style={{ width: "fit-content" }}
              >
                {countryData.location}
              </h1>
            </Col>
            <Col className="text-end">
              <p>{moment(countryData.lastReported).format("MMM DD, YYYY")}</p>
            </Col>
          </Card.Header>
          <Card.Body className="py-5">
            <Card.Title className="pb-3">
              {countryData.location}'s Corona Virus Data
            </Card.Title>
            <Card.Text>
              Confirmed:{" "}
              {countryData.confirmed ? countryData.confirmed : "Unknown"}
            </Card.Text>
            <Card.Text>
              Deaths: {countryData.deaths ? countryData.deaths : "Unknown"}
            </Card.Text>
            <Card.Text>
              Recovered:{" "}
              {countryData.recovered ? countryData.recovered : "Unknown"}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default CountryDetail;
