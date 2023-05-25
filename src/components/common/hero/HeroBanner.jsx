import logoEAKON from '../../../assets/img/logo-eakon.webp';

const HeroBanner = ({ image, title }) => {
  return (
    <section
      className="hero d-flex a-items-center min-h-40vh"
      style={{
        backgroundImage: `url(${image ? image : logoEAKON})`
      }}
    >
      <div className="container">
        <h1 className="hero__title">{title}</h1>
      </div>
    </section>
  );
};

export default HeroBanner;