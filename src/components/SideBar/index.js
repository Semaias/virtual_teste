import { Container, Row, Col } from 'react-bootstrap';

import Button from '../../fragments/Button';
import CardSideBar from '../../fragments/CardSideBar';

import { HiOutlinePencilAlt } from 'react-icons/hi'

import { Link } from 'react-router-dom';

import './styles.scss';

const SideBar = () => (
  <div className="container__sidebar">
    <Container fluid>
        <Col sm={12} lg={12}>
          <div className="container__sidebar--title">
            <h2 className="container__sidebar--h2" >Virtual Fácil</h2>
          </div>
          <div className="container__sidebar--button">
            <span>
              <Button
              text="Iniciar Conversa (3/10)"
              icon={<HiOutlinePencilAlt size={24} />}
              />
            </span>
          </div>
          <div className="container__sidebar--card">
            <CardSideBar name="Ana Tamara" number="3"/>
            <CardSideBar name="Ana Maria" number="7"/>
            <CardSideBar name="Ana Júlia" number="1"/>
            <CardSideBar name="Ana Alice" number="+99"/>
            <CardSideBar name="Mariana" number="2"/>
          </div>
        </Col>
    </Container>
  </div>
);

export default SideBar;