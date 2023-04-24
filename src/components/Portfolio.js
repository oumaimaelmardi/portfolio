import { Button } from "primereact/button";
import { Card } from "primereact/card";
import poki from "./image/poki2.jpeg";
import morpion from "./image/morpion.png";
import chu from "./image/ACCUEIL.png";
import para from "./image/para.png";

function Portfolio() {
  const header = <img alt="Card" src={poki} height={"250px"} />;
  const header2 = <img alt="Card" src={morpion} height={"250px"} />;
  const header3 = <img alt="Card" src={chu} height={"250px"} />;
  const header4 = <img alt="Card" src={para} height={"250px"} />;
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2"></div>
  );
  return (
    <div>
      <div className="text-center">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="text-center" style={{ marginBottom: "80px" }}>
        <i className="pi pi-check icon text-center msr-2"></i>
        <span className="text">PROJETS RÉALISÉS</span>
      </div>

      <div className="grid  justify-content-center">
        <div className="col-8 mb-4 ">
          <div className="grid text-center">
            <div className="col-12 md:col-6 lg:col-6  ">
              <div className="card flex justify-content-center">
                <Card
                  title="Application mobile de Pokemon avec une API"
                  footer={footer}
                  header={header}
                  className="w-25rem"
                >
                  <p className="m-0 text-xs">
                    Cette application Android utilise l'API PokeAPI pour
                    afficher une liste de Pokémons et permettre à l'utilisateur
                    de cliquer sur un Pokémon pour obtenir des détails.
                  </p>
                </Card>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-6  ">
              <div className="card flex justify-content-center">
                <Card
                  title="Application web Jeu de morpion "
                  footer={footer}
                  header={header2}
                  className="w-25rem"
                >
                  <p className="m-0 text-xs">
                    Cette application est un jeu de réflexion se pratiquant à
                    deux joueurs au tour par tour et dont le but est de créer le
                    premier un alignement sur une grille.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="col-8 mb-4 ">
          <div className="grid text-center">
            <div className="col-12 md:col-6 lg:col-6 ">
              <div className="card flex justify-content-center">
                <Card
                  title="Application web de gestion de dossier médicaux"
                  footer={footer}
                  header={header3}
                  className="w-25rem "
                >
                  <p className="m-0 text-xs">
                    Cette application permet de gérer des dossiers médicaux du
                    service traumatologique au CHU.
                  </p>
                </Card>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-6 ">
              <div className="card flex justify-content-center">
                <Card
                  title="Application Desktop de gestion d'une parapharmacie  "
                  footer={footer}
                  header={header4}
                  className="w-25rem"
                >
                  <p className="m-0 text-xs">
                    Cette application permet de gérer le stock ,les clients,
                    ,les produits et les commandes d'une parapharmacie.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
