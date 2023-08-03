import React, { useEffect, useState } from "react";
import logoVass from './../Images/logo-vass-blanco.png';
import contacto from '../Images/contacto.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import * as Icons from './../Complements/Icons';
import { Container, ListGroup, ListGroupItem } from "reactstrap";

export function NavMenuDesktop() {

    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        const isScrolled = window.scrollY > 0;
        setScrolled(isScrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleRedireccion = () => {
        window.location.href = '/rocketAir';
    };

    return (
        <div>
            <nav className={`${scrolled ? 'scrolled' : ''}`} id="navMenu_navbar">
                <img src={logoVass} onClick={handleRedireccion} alt="logo" className="logo" />
                <ul>
                    <li> 
                        <span> Industrias {Icons.CaretDownFill()}</span>
                        <ul>
                            <li>
                                <button>ADMINISTRACION PUBLICA</button>
                            </li>
                            <li>
                                <button>BANKING & CAPITAL MARKETS</button>
                            </li>
                            <li>
                                <button>ENERGY & UTILITIES</button>
                            </li>
                            <li>
                                <button>INDUSTRIAS & SERVICIOS</button>
                            </li>
                            <li>
                                <button>SEGUROS</button>
                            </li>
                            <li>
                                <button>RETAIL & CPG</button>
                            </li>
                            <li>
                                <button>TELECOM & MEDIA</button>
                            </li>
                            <li>
                                <button>INSTITUCIONES UE</button>
                            </li>
                            <li>
                                <button>CASOS DE EXITO</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span> Regiones {Icons.CaretDownFill()}</span>
                        <ul className="ulSemiTrans">
                            <Container>
                                <ListGroup>
                                    <ListGroupItem>
                                        <ol>
                                            <label>ESPAÑA</label>
                                        </ol>
                                        <ol>
                                            <button>España</button>
                                        </ol>
                                    </ListGroupItem>
                                    <ListGroupItem className="bordes-l-r">
                                        <ol>
                                            <label>AMERICAS</label>
                                        </ol>
                                        <ol>
                                            <button>EE.UU & Canadá</button>
                                        </ol>
                                        <ol>
                                            <button>MX & CA</button>
                                        </ol>
                                        <ol>
                                            <button>América del sur</button>
                                        </ol>
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        <ol>
                                            <label>EMEA & APAC</label>
                                        </ol>
                                        <ul>
                                            <li>
                                                <ol>
                                                    <button>UK & IRL</button>
                                                </ol>
                                                <ol>
                                                    <button>DACH</button>
                                                </ol>
                                                <ol>
                                                    <button>Países Nórdicos</button>
                                                </ol>
                                            </li>
                                            <li>
                                                <ol>
                                                    <button>Benelux</button>
                                                </ol>
                                                <ol>
                                                    <button>APAC</button>
                                                </ol>
                                                <ol>
                                                    <button>Grecia</button>
                                                </ol>
                                            </li>
                                        </ul>
                                    </ListGroupItem>
                                </ListGroup>
                            </Container>
                        </ul>
                    </li>
                    <li>
                        <span>Somos VASS {Icons.CaretDownFill()}</span>
                        <ul>
                            <li>
                                <button>Equipo VASS</button>
                            </li>
                            <li>
                                <button>Sobre nosotros</button>
                            </li>
                            <li>
                                <button>RSC</button>
                            </li>
                            <li>
                                <button>VASS en el equipo</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <span>Como lo hacemos {Icons.CaretDownFill()}</span>
                        <ul>
                            <li>
                                <button>
                                    Inpacto
                                    <br />
                                    ¿QUÉ LOGRAMOS?
                                </button>
                            </li>
                            <li>
                                <button>
                                    Metodo
                                    <br />
                                    ¿CÓMO LO LOGRAMOS?
                                </button>
                            </li>
                            <li>
                                <button>
                                    Tegnologias
                                    <br />
                                    ¿CON QUÉ LO LOGRAMOS?
                                </button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>Partners</button>
                    </li>
                    <li>
                        <span>Insights {Icons.CaretDownFill()}</span>
                        <ul>
                            <li>
                                <button>Insights</button>
                            </li>
                            <li>
                                <button>Podcasts</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>Noticias</button>
                    </li>
                    <li>
                        <button>VASS Research</button>
                    </li>
                    <li>
                        <button>Contacto</button>
                    </li>
                    <li>
                        <span>Join us! {Icons.CaretDownFill()}</span>
                        <ul>
                            <li>
                                <button>España</button>
                            </li>
                            <li>
                                <button>Perú</button>
                            </li>
                            <li>
                                <button>Chile</button>
                            </li>
                            <li>
                                <button>UK</button>
                            </li>
                            <li>
                                <button>México</button>
                            </li>
                            <li>
                                <button>Colombia</button>
                            </li>
                            <li>
                                <button>Benelux</button>
                            </li>
                            <li>
                                <button>DACH</button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <button>EN</button>
                    </li>
                    <li>
                        {Icons.Search()}
                    </li>
                </ul>
            </nav>
            <img src={contacto} alt="contacto" className="contacto" />
            <div className="contactoName">
                <h3>CONTACTO</h3>
            </div>
            <div>
                <Container>
                    <ListGroup>
                        <ListGroupItem>
                            <ol>
                                <label>EMPECEMOS A HACERLO SENCILLO</label>
                            </ol>
                        </ListGroupItem>
                        <ListGroupItem>
                            <ol>
                                <label>Nos emociona impulsar tu transformación digital</label>
                            </ol>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            </div>
        </div>
    )
}
