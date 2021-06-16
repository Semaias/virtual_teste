import { Container, Row, Col } from 'react-bootstrap';

import Button           from '../../fragments/Button';
import CardSideBar      from '../../fragments/CardSideBar';
import FinishedTalkCard from '../../fragments/FinishedTalkCard';

import LastTalks from '../LastTalks';
import DashBoard from '../DashBoard';
import Navbar    from '../Navbar';

import { HiOutlinePencilAlt } from 'react-icons/hi'

import { Link } from 'react-router-dom';

import './styles.scss';

const SideBar = () => (
  <Container fluid>
      <Navbar />
      <Row>
        <Col sm={12} lg={2}>
          <div className="container__sidebar">
            <div>
              <span className="container__sidebar--button">
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
          </div>
        </Col>
        <Col sm={12} lg={10}>
          <DashBoard />
          <LastTalks />
        </Col>
      </Row>
    </Container>
);

export default SideBar;