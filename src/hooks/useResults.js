import React, { useState, useEffect } from "react";
import Yelp from "../api/Yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMassage] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await Yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMassage("Something went wrong");
    }
  };

  // Call searchApi when compenent is first rendered. BAD CODE
  // searchApi('pasta');
  useEffect(() => {
    searchApi("pasta");
  }, []);
    
    return [searchApi, results, errorMessage];
};