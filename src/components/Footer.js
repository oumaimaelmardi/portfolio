import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { Card } from "primereact/card";
import "./styles.css";

function Footer() {
  return (
    <div className="Footer">
      <div className="text-center mt-4">
        <h3 className="mt-4">EL MARDI </h3>
      </div>
      <div className="grid  justify-content-center">
        <div className="col-10 mb-4 ">
          <div className="grid text-center">
            <div className="col-12   ">
              <div className="card flex justify-content-center ">
                <a
                  href="/"
                  style={{ textDecoration: "none", color: "black" }}
                  className="mr-3"
                >
                  About{" "}
                </a>
                <a
                  href="/portfolio"
                  style={{ textDecoration: "none", color: "black" }}
                  className="mr-3"
                >
                  Projets{" "}
                </a>
                <a
                  href="/contact"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  Contact{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
