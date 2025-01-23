import { useGlobalContext } from "../Context/GlobalContext";
import { useTranslation } from "react-i18next";
import "../i118";
import { useNavigate, NavLink } from "react-router-dom";
import FeaturedDoctorsCards from "../Components/FeaturedDoctorsCards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserDoctor } from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    const { specializations, loading, error } = useGlobalContext();
    const { t } = useTranslation();
    const navigate = useNavigate();

    const handleCardClick = (specializationName) => {
        // Naviga alla pagina AdvancedSearchPage con la specializzazione nella rotta
        navigate(`/AdvancedSearchPage/${specializationName}`);
    };

    const scrollToSpecializations = () => {
        const element = document.getElementById("specializations");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div>
            <div className="jumbotron">
                <div className="container">
                    <div className="d-flex flex-row-reverse pt-4">
                        <NavLink to="/DoctorRegistration" className="register_btn d-none d-md-block">
                            SEI UN DOTTORE? REGISTRATI QUI
                        </NavLink>
                        <NavLink to="/DoctorRegistration" className="register_btn d-md-none">
                            <FontAwesomeIcon icon={faUserDoctor} />
                        </NavLink>
                    </div>
                    <h2>Benvenuto</h2>
                    <div>
                        <strong className="cprimary">BDoctors</strong> è la piattaforma di riferimento per trovare specialisti qualificati e condividere la tua esperienza in ambito sanitario. La nostra missione è semplificare la ricerca del medico giusto per le tue esigenze, promuovendo trasparenza e fiducia nella comunità sanitaria.
                        <br /><br />

                        Su <strong className="cprimary">BDoctors</strong>, sappiamo quanto sia importante avere accesso a cure personalizzate e di qualità. Per questo, ti offriamo una piattaforma intuitiva dove puoi: <br />
                        <ul className="text-start">
                            <li><strong>Trovare specialisti affidabili:</strong> Cerca per specializzazione o nome e scopri i migliori dottori nella tua zona.</li>
                            <li><strong>Leggere recensioni reali:</strong> Prendi decisioni informate grazie ai feedback onesti di altri pazienti.</li>
                            <li><strong>Condividere la tua esperienza:</strong> Aiuta altri utenti lasciando una recensione sulla tua visita, contribuendo a creare una comunità basata su trasparenza e fiducia.</li>
                        </ul>
                        <em>Crediamo che ogni paziente meriti cure di qualità e uno spazio dove poter esprimere liberamente la propria opinione. Che tu stia cercando un medico di famiglia, un dermatologo o un cardiologo, <strong className="cprimary">BDoctors</strong> è qui per aiutarti a trovare i professionisti della salute che fanno la differenza.</em>
                        <br />
                        <strong>Insieme, costruiamo un mondo più sano e connesso, una recensione alla volta.</strong>
                    </div>
                    <div className="d-flex pb-4">
                        <button className="btn" onClick={scrollToSpecializations}><i className="bi bi-arrow-down"></i></button>
                    </div>
                </div>
            </div>
            <div id="specializations" className="container">
                <div className="d-flex">
                    <h2 >Specializzazioni</h2>
                </div>
                <div className="row">
                    {loading && <p>Caricamento in corso...</p>}
                    {error && <p>Errore: {error}</p>}

                    {!loading && !error && specializations.length === 0 && (
                        <p>Nessuna specializzazione disponibile.</p>
                    )}

                    {!loading && !error && specializations.length > 0 && (
                        <div className="cards-container">
                            {specializations.map((specialization) => (
                                <div
                                    className="card_custom"
                                    key={specialization.id}
                                    onClick={() => handleCardClick(specialization.specialization_name)}
                                >
                                    <h3>{t(specialization.specialization_name)}</h3>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <h2 className="mt-3 mb-3 fw-bold">I Nostri 5 Dottori in Evidenza</h2>
                <FeaturedDoctorsCards />
            </div>
        </div>
    );
}
