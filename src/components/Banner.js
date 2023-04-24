import React, { useRef } from "react";
import { Card } from "primereact/card";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import admin from "./image/adminfinal.png";
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

import "primeicons/primeicons.css";

import "./styles.css";
import { Avatar } from "primereact/avatar";
function Banner() {
  const toast = useRef(null);
  //const router = useRouter();
  const items = [
    {
      items: [
        {
          icon: "pi pi-github",
          command: () => {
            toast.current.show({
              severity: "success",
              summary: "Updated",
              detail: "Data Updated",
              life: 3000,
            });
          },
        },
        {
          icon: "pi pi-instagram",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
        {
          icon: "pi pi-twitter",
          command: () => {
            toast.current.show({
              severity: "warn",
              summary: "Delete",
              detail: "Data Deleted",
              life: 3000,
            });
          },
        },
      ],
    },
  ];

  return (
    <div>
      <div className="banner">
        <img alt="Card" src={admin} height={"250px"} />
        <h1>EL MARDI OUMAIMA</h1>
        <div style={{ margin: "2rem" }}>
          <a href="https://github.com/oumaimaelmardi">
            <i
              className="pi pi-github icon text-center"
              style={{
                fontSize: "26px",
                paddingLeft: "1rem",
                textDecoration: "none",
                color: "black",
              }}
            ></i>
          </a>
          <a href="https://www.linkedin.com/in/oumaima-el-mardi-1188a2209/">
            <i
              className="pi pi-linkedin icon text-center"
              style={{ fontSize: "26px", paddingLeft: "1rem", color: "black" }}
            ></i>
          </a>
        </div>
        <p>
          Ingénieur d'État en Informatique diplômé de l'ENSIAS en 2009 et
          titulaire d'un doctorat en informatique obtenu à l'Université Cadi
          Ayyad en 2017, est également professeur en informatique à l'École
          Nationale des Sciences Appliquées de l'Université Chouaib Doukkali, El
          Jadida, Maroc. Ses domaines de recherche englobent le développement
          d'outils d'automatisation dans les logiciels embarqués, la
          modélisation et la conception de logiciels, la conception de
          métamodèles, la transformation de modèles, les méthodes de
          vérification et de validation de modèles, ainsi que l'application du
          machine learning et du deep learning dans plusieurs domaines. En tant
          que concepteur et formateur spécialisé dans les technologies JAVA, il
          met en avant les outils et solutions Open Source pour le développement
          de projets Internet et mobile. Il dispense des cours sur la
          plate-forme Java Enterprise Edition (JEE), la programmation mobile, la
          programmation web, la programmation multiplateforme, l'architecture
          des applications d'entreprises (JEE), UML et les bases de données.
        </p>
      </div>
    </div>
  );
}
export default Banner;
