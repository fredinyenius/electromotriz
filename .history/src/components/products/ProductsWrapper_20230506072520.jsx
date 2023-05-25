import HeroBanner from "../common/hero/HeroBanner";
import LoadersModal from "../common/loaders/LoadersModal";

const ProductsWrapper = ({ loading, title, image, children }) => {
  return (
    <section className="section">
      <HeroBanner 
      image={image}
      title="Nuestros productos al mejor precio"
      />
      <div className="container d-flex f-direction-column gap-lg py-2">
        {loading && <LoadersModal />}
        <h1 className="section__title section__title--lg">{title}</h1>
        {children}
      </div>
    </section>
  );
};

export default ProductsWrapper;