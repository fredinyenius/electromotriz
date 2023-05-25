import { useEffect } from "react";
import { useDispatch } from "react-redux";
import useServices from "../../hooks/useServices";
import { fetchReadServicesData } from "../../redux/thunks/servicesThunk";
import ContactMeans from "../contact/ContactMeans";
import Services from "../services/ServicesData";

const Footer = () => {
    const dispatch = useDispatch();
    const { servicesData } = useServices();

    useEffect(() => {
        dispatch(fetchReadServicesData());
      }, []);

    return ( 
        <>
            <Services servicesData={servicesData}/>
            <ContactMeans />
            <div className="container t-align-center">
                <p>Copyright © Calzado Dep 2023 Todos los derechos reservados</p>
            </div>
        </>
     );
};
 
export default Footer;