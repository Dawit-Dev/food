import axios from 'axios';

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 6uTg3CbwH57ALQmWvmPR58_6Dmt4H04DIYjpezU-ODwMd4gU49pCGVbNrh--3S27TvItJmSpBPsA2iRHUitcRwV2HyKHFv3NrM0QJg1kDmr9gTNSw2hXjmW_Uk5mZHYx",
  },
});