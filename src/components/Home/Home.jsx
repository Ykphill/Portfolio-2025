import React from 'react';
import CurvedLoop from '../../snippets/curvedLoop/CurvedLoop.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../App.css';
import HeroPage from '../../snippets/Hero page/HeroPage.jsx';
import './Home.css';

const Home = () => {
    return (
         <Container fluid className="container-fluid">
           <Row>
            <CurvedLoop 
                marqueeText="Welcome ✦ to ✦ my ✦ Portfolio ✦ Website ✦"
                speed={.5}
                curveAmount={400}
                direction="right"
                interactive={true}
                className="custom-text-style"
            />
          </Row>
          <Row className="hero-row"> 
            <HeroPage />
          </Row>
       </Container> 
    );
};

export default Home;