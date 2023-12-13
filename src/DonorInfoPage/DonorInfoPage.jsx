import axios from "axios";
import { useEffect } from "react";
import Donors from "./Donors";


const DonorInfoPage = () => {
  const [userArr, setUserArr] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    axios
      .get('https://dummyjson.com/users')
      .then((response) => {
        setUserArr(response.data.users);
        console.log('response', response.data.users)
        setIsLoading(false)
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return <div>Donor list is loading, please wait</div>;
  }

  const mappedDonors = userArr.map((donor) => (
    <Donors
      key={donor.id} 
      image={donor.image}
    />
  ));

  return <div>{mappedDonors}</div>;
};

export default DonorInfoPage;
