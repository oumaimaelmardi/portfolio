import { Timeline } from "primereact/timeline";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
//core
import "primereact/resources/primereact.min.css";
import { TabView, TabPanel } from "primereact/tabview";
import { Button } from "primereact/button";
import { useState } from "react";
function FormationAcad() {
  const [activeIndex, setActiveIndex] = useState(0);
  const events = [
    {
      status: "Cycle d'ingénieur en informatique et réseau",
      text: "École Marocaine des Sciences de l'Ingénieur",
      date: "2021- 2023",
      icon: "pi pi-calendar",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
    {
      status: "Licence Systèmes d'Informations Répartis",
      text: "Faculté des sciences et techniques",
      date: "2021- 2022",
      icon: "pi pi-twitter",
      color: "#673AB7",
    },
    {
      status: "Deust en Mathématique ,Informatique, Physique et chimie",

      text: "Faculté des sciences et techniques",
      date: "2019- 2021",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
    },
    {
      status: "Baccalauréat Sciences Expérimental",
      text: "Lycée cady Ayad",
      date: "2018- 2019",
      icon: "pi pi-check",
      color: "#607D8B",
    },
  ];

  const events2 = [
    {
      status: "Stage de projet de fin d'études",
      lieu: "CHU Marrakech",
      text: "Réalisation d'une application web de gestion de dossiers médicaux de service traumatologie CHU ",
      technlogie: "SpringBoot & Angular",
      date: "18 avril -18 juin 2022/2 mois",
      icon: "pi pi-twitter",
      color: "#673AB7",
    },
    {
      status: "Stage en développement web",
      lieu: "Gudiz Marrakech",
      text: "Réalisation d'une application web avec ReactJS",
      technlogie: "ReactJs",
      date: "7 september -18 september 2021/1 mois",
      icon: "pi pi-calendar",
      color: "#9C27B0",
      image: "game-controller.jpg",
    },
  ];
  return (
    <div className="card ">
      <TabView
        activeIndex={activeIndex}
        onTabChange={(e) => setActiveIndex(e.index)}
      >
        <TabPanel header="Formation Académique">
          <div className="card">
            <div className="text-center">
              <h1>FORMATION ACADÉMIQUE</h1>
            </div>
            <div className="text-center" style={{ marginBottom: "80px" }}>
              <i className="pi pi-folder icon text-center mr-3"></i>
              <span className="text">Parcours scolaire</span>
            </div>
            <Timeline
              value={events}
              opposite={(item) => item.status}
              content={(item) => (
                <div>
                  <small className="text-color-secondary">{item.date}</small>

                  <p>{item.text}</p>
                </div>
              )}
            />
          </div>
        </TabPanel>
        <TabPanel header="Experiences">
          <div className="card">
            <div className="text-center">
              <h1>EXPÉRIENCE</h1>
            </div>
            <div className="text-center" style={{ marginBottom: "80px" }}>
              <i className="pi pi-folder icon text-center mr-3"></i>
              <span className="text">EXPÉRIENCE PROFESSIONNELLE</span>
            </div>
            <Timeline
              value={events2}
              opposite={(item) => item.status}
              content={(item) => (
                <div>
                  <small className="text-color-secondary">{item.date}</small>
                  <small className="text-color-secondary">{item.lieu}</small>
                  <p>{item.text}</p>
                  <h5 className="text-color-secondary">{item.technlogie}</h5>
                </div>
              )}
            />
          </div>
        </TabPanel>
      </TabView>
    </div>
  );
}

export default FormationAcad;
