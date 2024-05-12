import housingData from '../../data/housing.json';
import HousingCard from '../../components/HousingCard';
import Slideshow from '../../components/Slideshow';
import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Housing.scss';

function Housing() {
  const { id } = useParams();
  const navigate = useNavigate();

  const housingDetails = housingData.find((item) => item.id === id);

  useEffect(() => {
    if (!housingDetails) {
      navigate('/404');
    }
  }, [housingDetails, navigate]);

  if (!housingDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="housing">
      <Slideshow data={housingDetails.pictures} />
      <HousingCard data={housingDetails} />
    </div>
  );
}

export default Housing;
