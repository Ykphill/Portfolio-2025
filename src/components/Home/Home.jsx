import React from 'react';
import CurvedLoop from '../../snippets/curvedLoop/CurvedLoop.jsx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../../App.css';

const Home = () => {
    return (
         <Container fluid className="container-fluid">
           <Row>
            <CurvedLoop 
                marqueeText="Welcome ✦ to ✦ my ✦ Portfolio ✦ Website ✦"
                speed={.5}
                curveAmount={300}
                direction="right"
                interactive={true}
                className="custom-text-style"
            />
          </Row>
       </Container> 
    );
};

export default Home;