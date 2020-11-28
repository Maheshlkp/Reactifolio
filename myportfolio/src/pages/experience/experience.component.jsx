import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjScfkUzdD37WWGs-tIt7qV-2sHqhxDwKReQ&usqp=CAU"} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Sr Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Sr. UI Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python
                    <br />
                    <strong>Duration:</strong> June 2019 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> Gathered and analyzed the requirements from the client and developed POC screens and creating interactive user interface in application.
                      • Involved in developing UI pages using HTML5, DOM, CSS3, JSON, Bootstrap3, Angular7, and Alfresco development framework.
                      • Convert the default existing word press templates on customer facing pages to standard supportable HTML and CSS as per the updated design.
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`.
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according
                      to the business requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>


                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>

        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={"https://www.wraltechwire.com/wp-content/uploads/2019/08/cisco-big-logo.jpg"} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Software Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">UI Developer</strong>
                    <br />
                    <strong>Technology:</strong> React JS, DOTNET, C#, MS-SQL, Python
                    <br />
                    <strong>Duration:</strong> June 2019 - Present
                    <br />
                    <strong> Description </strong>
                    <ul className="text-left">
                      <li><strong>Developed &amp; enhanced</strong> multiple features with customizability option across web application.</li>
                      <li><strong>Developed</strong> Gathered and analyzed the requirements from the client and developed POC screens and creating interactive user interface in application.
                      • Involved in developing UI pages using HTML5, DOM, CSS3, JSON, Bootstrap3, Angular7, and Alfresco development framework.
                      • Convert the default existing word press templates on customer facing pages to standard supportable HTML and CSS as per the updated design.
                      </li>
                      <li><strong>Provided</strong> application maintenance while working as `Production Support`.
                      </li>
                      <li><strong>Performed</strong> CRUD operations on multiple databases to load/ remove data according
                      to the business requirements.</li>
                      {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}

                    </ul>


                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;
