import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";
import { Card } from "primereact/card";

function Contact() {
  return (
    <div className="Contact">
      <div className="text-center">
        <h1>Me contacter</h1>
      </div>
      <div className="grid  justify-content-center m-5">
        <div className="col-10 mb-4 ">
          <div className="grid text-center">
            <div className="col-12   ">
              <div className="card flex justify-content-center">
                <Card className="w-15rem h-10rem">
                  <i
                    className="pi pi-spin pi-envelope"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p>Email :elmardioumaima@gmail.com</p>
                  <a
                    style={{ textDecoration: "none", color: "black" }}
                    href={`mailto:${"elmardioumaima@gmail.com"}?subject=Email Subject`}
                  >
                    <i className="pi pi-arrow-right"></i>
                  </a>
                </Card>
              </div>
              <div className="card flex justify-content-center mt-4">
                <Card className="w-15rem h-10rem">
                  <i
                    className="pi pi-spin pi-github"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p>Github</p>
                  <a
                    href="https://github.com/oumaimaelmardi"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="pi pi-arrow-right"></i>
                  </a>
                </Card>
              </div>
              <div className="card flex justify-content-center mt-4">
                <Card className="w-15rem h-10rem">
                  <i
                    className="pi pi-spin pi-linkedin"
                    style={{ fontSize: "2rem" }}
                  ></i>
                  <p>Linkedin</p>
                  <a
                    href="https://www.linkedin.com/in/oumaima-el-mardi-1188a2209/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <i className="pi pi-arrow-right"></i>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
