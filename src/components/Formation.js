import "primereact/resources/themes/lara-light-indigo/theme.css";
import dev from "./image/DEV.png";
import react from "./image/REACT.png";
import angular from "./image/angular.png";
import django from "./image/django.png";
import html from "./image/html.png";
import python from "./image/python.png";
import "./styles.css";
//core
import "primereact/resources/primereact.min.css";
import { Card } from "primereact/card";

function Formation() {
  const header = <img alt="Card" src={dev} height={"250px"} />;
  const header2 = <img alt="Card" src={react} height={"250px"} />;
  const header3 = <img alt="Card" src={angular} height={"250px"} />;
  const header4 = <img alt="Card" src={django} height={"250px"} />;
  const header5 = <img alt="Card" src={html} height={"250px"} />;
  const header6 = <img alt="Card" src={python} height={"250px"} />;
  const footer = (
    <div className="flex flex-wrap justify-content-end gap-2"></div>
  );
  return (
    <div>
      <div className="text-center">
        <h1>Formation en ligne</h1>
      </div>
      <div className="text-center" style={{ marginBottom: "80px" }}></div>

      <div className="grid  justify-content-center">
        <div className="col-10 mb-4 ">
          <div className="grid text-center">
            <div className="col-12 md:col-6 lg:col-4  ">
              <div className="card flex justify-content-center">
                <Card
                  title="DevOps, Cloud, and Agile "
                  footer={footer}
                  header={header}
                  className="md:w-25rem"
                >
                  <div class="paragraph-container text-justify">
                    <p class="text-color-secondary m-0 ml-1">Coursera</p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Date de délivrance : Mar 21, 2023
                    </p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Identifiant : BK5FTCG4W49J
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4  ">
              <div className="card flex justify-content-center">
                <Card
                  title="Advanced React "
                  footer={footer}
                  header={header2}
                  className="md:w-25rem"
                >
                  <div class="paragraph-container text-justify">
                    <p class="text-color-secondary m-0 ml-1">Meta</p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Date de délivrance : Feb 17, 2023
                    </p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Identifiant : XJ9QP6RVW B5R
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4  ">
              <div className="card flex justify-content-center">
                <Card
                  title="Débutez avec Angular"
                  footer={footer}
                  header={header3}
                  className="md:w-25rem"
                >
                  <div class="paragraph-container text-justify">
                    <p class="text-color-secondary m-0 ml-1">Open classroom</p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Date de délivrance : Sep 26, 2022
                    </p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Identifiant : 5649472221
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="col-10 mb-4 ">
          <div className="grid text-center">
            <div className="col-12 md:col-6 lg:col-4 ">
              <div className="card flex justify-content-center">
                <Card
                  title="Débutez avec le framework Django"
                  footer={footer}
                  header={header4}
                  className="md:w-25rem"
                >
                  <div class="paragraph-container text-justify">
                    <p class="text-color-secondary m-0 ml-1">Open classroom</p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Date de délivrance : Feb 8, 2022
                    </p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Identifiant : 7550494807
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4 ">
              <div className="card flex justify-content-center">
                <Card
                  title="Créer votre site web avec HTML5 et CSS3"
                  footer={footer}
                  header={header5}
                  className="md:w-25rem"
                >
                  <div class="paragraph-container text-justify">
                    <p class="text-color-secondary m-0 ml-1">Open classroom</p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Date de délivrance : Mar 7, 2021
                    </p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Identifiant : 5068426266
                    </p>
                  </div>
                </Card>
              </div>
            </div>
            <div className="col-12 md:col-6 lg:col-4 ">
              <div className="card flex justify-content-center">
                <Card
                  title="Apprenez les bases du langage Python"
                  footer={footer}
                  header={header6}
                  className="md:w-25rem"
                >
                  <div class="paragraph-container text-justify">
                    <p class="text-color-secondary m-0 ml-1">Open classroom</p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Date de délivrance : Oct 18, 2021
                    </p>
                    <p class=" text-color-secondary m-0 ml-1">
                      Identifiant : 4246045927
                    </p>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formation;
