import React, { useRef } from "react";
import { Card } from "primereact/card";
import { Menu } from "primereact/menu";
import { Toast } from "primereact/toast";
import { Image } from "primereact/image";
import admin from "./image/ouma.png";

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
          Futur ingénieur en informatique et réseaux, actuellement en quatrième
          année à l'EMSI (Ecole Marocaine des Sciences de l'Ingénieur). je suis
          une personne déterminée, créative, a une grande capacité d'analyse.
          Par rapport au savoir faire, grâce aux stages et formations en ligne
          que j'ai eu la chance de suivre, j'ai pu approfondir mes connaissances
          et compétences dans Spring boot, Angular, JavaScript, Django, React.
        </p>
      </div>
    </div>
  );
}
export default Banner;
