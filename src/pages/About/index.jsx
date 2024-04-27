import Hero from '../../components/Hero';
import aboutHeroBg from '../../assets/background/about_hero_bg.jpg';
import Dropdown from '../../components/Dropdown';

function About() {
  return (
    <div>
      <Hero backgroundImage={aboutHeroBg} />
      <section className="mx-48 flex flex-col gap-10 mb-10">
        <Dropdown
          title="Fiabilté"
          content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          fontSize="text-2xl"
        />
        <Dropdown
          title="Respect"
          content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          fontSize="text-2xl"
        />
        <Dropdown
          title="Service"
          content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          fontSize="text-2xl"
        />
        <Dropdown
          title="Sécurité"
          content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          fontSize="text-2xl"
        />
      </section>
    </div>
  );
}

export default About;
