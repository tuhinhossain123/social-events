
import { useParams } from "react-router-dom";

const Details = () => {
  
  const { id } = useParams();
  console.log(id)
  
  return (
    <div>
        <h2>job detail</h2>
    </div>
  );
};

export default Details;
