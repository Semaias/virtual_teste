import { Container, Row, Col, Nav } from 'react-bootstrap';

import Tab          from 'react-bootstrap/Tab';
import Tabs         from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent   from 'react-bootstrap/TabContent';
import TabPane      from 'react-bootstrap/TabPane';

import ConfigTable      from '../ConfigTable';
import ConfigTableTitle from '../ConfigTableTitle';

import './styles.scss';

const ConfigTabV = () => (
  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
    <Row>
      <Col sm={2}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link className="tab__option--top" eventKey="1">Respostas Rápidas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="tab__option" eventKey="2">Scripts</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="tab__option" eventKey="3">Confirmações</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="tab__option" eventKey="4">Pesquisas</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="tab__option" eventKey="5">Horários</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="tab__option" eventKey="6">Auto Mensagens</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="tab__option" eventKey="7">URA's</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="tab__option--bottom" eventKey="8">TAG's</Nav.Link>
          </Nav.Item>
        </Nav>
      </Col>
      <Col sm={10}>
        <Tab.Content>
          <Tab.Pane className="tab__content" eventKey="1">
            <ConfigTableTitle title="Respostas Rápidas" />
            <ConfigTable />
          </Tab.Pane>
          <Tab.Pane className="tab__content" eventKey="2">
            <h1>B</h1>
          </Tab.Pane>
          <Tab.Pane className="tab__content" eventKey="3">
            <h1>C</h1>
          </Tab.Pane>
          <Tab.Pane className="tab__content" eventKey="4">
            <h1>D</h1>
          </Tab.Pane>
          <Tab.Pane className="tab__content" eventKey="5">
            <h1>E</h1>
          </Tab.Pane>
          <Tab.Pane className="tab__content" eventKey="6">
            <h1>F</h1>
          </Tab.Pane>
          <Tab.Pane className="tab__content" eventKey="7">
            <h1>G</h1>
          </Tab.Pane>
          <Tab.Pane className="tab__content" eventKey="8">
            <h1>H</h1>
          </Tab.Pane>
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

export default ConfigTabV;