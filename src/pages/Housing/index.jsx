import housingData from '../../data/housing.json';
import HousingCard from '../../components/HousingCard';
import Slideshow from '../../components/Slideshow';
import { useParams } from 'react-router-dom';

function Housing() {
  const { id } = useParams();

  const housingDetails = housingData.find((item) => item.id === id);

  return (
    <div className="mx-5 md:mx-12 lg:mx-24">
      <Slideshow data={housingDetails.pictures} />
      <HousingCard data={housingDetails} />
    </div>
  );
}

export default Housing;
