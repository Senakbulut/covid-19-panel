import { toast } from "react-toastify";

export const getCountries = async (country) => {
  try {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
      },
    };
    const response = await fetch(
      `https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total?country=${country}`,
      options
    );
    const data = await response.json();
    return data.data;
  } catch (err) {
    toast.error("Error when loading the data!", {
      position: toast.POSITION.TOP_CENTER,
    });
    return console.log(err);
  }
};
