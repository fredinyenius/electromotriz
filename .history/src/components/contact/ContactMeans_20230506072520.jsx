import { BsClock, BsEnvelope, BsGeoAlt, BsWhatsapp } from "react-icons/bs";
import useContact from "../../hooks/useContact";

const ContactMeans = () => {
  const { contactData } = useContact();
  const { attributes } = contactData;

  return (
    <section className="section">
      <div className="container g-elements g-elements--responsive-2 gap-lg">
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title-sm">{attributes?.title}</h3>
          <ul className="list d-flex f-direction-column gap-xs">
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsGeoAlt /> Dirección</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  {attributes?.direction}
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsClock /> Horario de atención</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  L-D, {attributes?.time_ini}, {attributes?.time_fin}
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsEnvelope /> Correos</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  <a href={`mailto:${attributes?.mail}`} className="list__link">
                    Ventas: {attributes?.mail}
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h4 className="section__subtitle section__subtitle--xs"><BsWhatsapp /> Celular</h4>
              <ul className="list">
                <li className="section__text section__text--sm">
                  <a
                    href={`https://api.whatsapp.com/send?phone=${attributes?.phone}&text=Deseo información`}
                    className="list__link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {attributes?.phone}
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="d-flex f-direction-column gap-sm">
          <h3 className="section__title section__title--sm">Ubicación</h3>
          <p className="section__text">Nos puedes encontrar en</p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.5477587017126!2d-77.01735378474388!3d-12.005763144408988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cf7cb09fabf5%3A0xc951c1a12a22ebf3!2sJr.%20las%20Marticarias%20754%2C%20Lima%2015404!5e0!3m2!1ses-419!2spe!4v1676115498440!5m2!1ses-419!2spe" width="450" height="250" style={{borderRadius:10}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactMeans;