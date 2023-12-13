import axios from "axios";
import { useEffect, useState } from "react";
import Donors from "./Donors";


const DonorInfoPage = () => {
  const [donorArr, setDonorArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        setDonorArr(response.data.users);
        console.log('response', response.data.users)
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Donor list is loading, please wait</div>;
  }

  const mappedDonors = donorArr.map((donor) => (
    <Donors
      
    name={donor.firstName}
    key={donor.id}
    />
  ));

  return <><div>{mappedDonors}</div></>;
};

export default DonorInfoPage;
