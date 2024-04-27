import housingData from '../../data/housing.json';
import Hero from '../../components/Hero';
import HousingThumbnails from '../../components/HousingThumbnails';
import homeHeroBg from '../../assets/background/home_hero_bg.jpg';

function Home() {
  return (
    <div>
      <Hero
        text="Chez vous, partout et ailleurs"
        backgroundImage={homeHeroBg}
      />
      <HousingThumbnails data={housingData} />
    </div>
  );
}

export default Home;
