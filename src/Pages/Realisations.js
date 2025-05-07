import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import bannerImg from "../assets/images/banner.jpg";
import realisation1 from "../assets/images/portfolio/fresh-food.jpg";
import realisation2 from "../assets/images/portfolio/restaurant-japonais.jpg";
import realisation3 from "../assets/images/portfolio/espace-bien-etre.jpg";
import realisation4 from "../assets/images/portfolio/seo.jpg";
import realisation5 from "../assets/images/portfolio/coder.jpg";
import realisation6 from "../assets/images/portfolio/screens.jpg";

const Realisations = () => {
  return (
    <div>
      <Navigation />
      <div className="container-fluid p-0 position-relative">
        <img className="img-fluid" src={bannerImg} alt="banner img" />
      </div>
      <div className="container m-auto ">
        <h1 className="text-center mt-5">Portfolio</h1>
        <p className="text-center">Voici quelques-unes de mes réalisations.</p>
        <hr className="w-25 mx-auto text-primary mb-5" />
        <div className="row justify-content-center">
          <div className="card col-12 col-md-6 col-lg-3 m-3 p-0 d-flex flex-column h-140">
            <img
              src={realisation1}
              className="card-img-top"
              alt="fresh-food img"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">Fresh Food</h5>
              <p className="card-text text-center">
                Site de vente de produits frais en ligne
              </p>
              <div className="text-center mt-auto">
                <a
                  href="https://www.freshfood.fr/"
                  className="btn btn-primary justify-content-center mb-1"
                  target="blank"
                >
                  Voir le Site
                </a>
              </div>
            </div>
            <div className="card-footer text-muted text-center py-3">
              Site réalisé avec PHP et MySQL
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 m-3 p-0 d-flex flex-column h-140">
            <img
              src={realisation2}
              className="card-img-top"
              alt="restaurant akira img"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">Restaurant Akira</h5>
              <p className="card-text text-center">
                Site de vente de produits frais en ligne
              </p>
              <div className="text-center mt-auto">
                <a
                  href="https://www.akirabackparis.com/fr/"
                  className="btn btn-primary justify-content-center mb-1"
                  target="blank"
                >
                  Voir le Site
                </a>
              </div>
            </div>
            <div className="card-footer text-muted text-center py-3">
              Site réalisé avec Wordpress
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 m-3 p-0 d-flex flex-column h-140">
            <img
              src={realisation3}
              className="card-img-top"
              alt="espace bien être img"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">Espace bien-être</h5>
              <p className="card-text text-center">
                Site de vente de produits frais en ligne
              </p>
              <div className="text-center mt-auto">
                <a
                  href="https://www.espacebienetre.net/"
                  className="btn btn-primary justify-content-center mb-1"
                  target="blank"
                >
                  Voir le Site
                </a>
              </div>
            </div>
            <div className="card-footer text-muted text-center py-3">
              Site réalisé avec LARAVEL
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 m-3 p-0 d-flex flex-column h-140">
            <img src={realisation4} className="card-img-top" alt="SEO img" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">SEO</h5>
              <p className="card-text text-center">
                Amélioration du référencement d'un site e-commerce
              </p>
              <div className="text-center mt-auto">
                <a
                  href="https://www.seo.fr/"
                  className="btn btn-primary justify-content-center mb-1"
                  target="blank"
                >
                  Voir le Site
                </a>
              </div>
            </div>
            <div className="card-footer text-muted text-center py-3">
              Utilisation des outils SEO
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 m-3 p-0 d-flex flex-column h-140">
            <img src={realisation5} className="card-img-top" alt="coder img" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">Création d'une API</h5>
              <p className="card-text text-center">
                Création d'une API RESTFULL publique
              </p>
              <div className="text-center mt-auto">
                <a
                  href="https://www.redhat.com/fr/topics/api/what-is-a-rest-api"
                  className="btn btn-primary justify-content-center mb-1"
                  target="blank"
                >
                  Voir le Site
                </a>
              </div>
            </div>
            <div className="card-footer text-muted text-center py-3">
              PHP - SYMFONY
            </div>
          </div>
          <div className="card col-12 col-md-6 col-lg-3 m-3 p-0 d-flex flex-column h-140">
            <img
              src={realisation6}
              className="card-img-top"
              alt="screens img"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title text-center">Maquette d'un site web</h5>
              <p className="card-text text-center">
                Création du prototype d'un site
              </p>
              <div className="text-center mt-auto">
                <a
                  href="https://www.figma.com/fr-fr/"
                  className="btn btn-primary justify-content-center mb-1"
                  target="blank"
                >
                  Voir le Site
                </a>
              </div>
            </div>
            <div className="card-footer text-muted text-center py-3">
              Réalisé avec FIGMA
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Realisations;
