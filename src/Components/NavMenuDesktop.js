import React from "react";
import logoVass from './../Images/logo-vass-blanco.png';
import 'bootstrap/dist/css/bootstrap.css';
import * as Icons from './../Complements/Icons';
import { Container,  ListGroup, ListGroupItem } from "reactstrap";

export function NavMenuDesktop() {
    return(
        <nav className="navMenu_navbar">
            <img src={logoVass} alt="logo"/>
            <ul>
                <li>
                    <button>
                        <label> Industrias {Icons.CaretDownFill()}</label>
                    </button>
                    <ul style={{display:"none"}}>
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
                    <button>
                        <label> Regiones {Icons.CaretDownFill()}</label> 
                    </button>
                    <ul style={{display:"none"}}>
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
                            <ListGroupItem>
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
                    <button>
                        <label>Somos VASS {Icons.CaretDownFill()}</label>
                    </button>
                </li>
                <li>
                    <button>
                        <label>Como lo hacemos {Icons.CaretDownFill()}</label>
                    </button>
                </li>
                <li>
                    <button>Partners</button>
                </li>
                <li>
                    <button>
                        <label>Insights {Icons.CaretDownFill()}</label>
                    </button>
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
                    <button>
                        <label>Join us! {Icons.CaretDownFill()}</label>
                    </button>
                </li>
                <li>
                    <button>EN</button>
                </li>
                <li>
                    <i className="bi bi-search"></i>
                </li>
            </ul>
        </nav>
    )
}
