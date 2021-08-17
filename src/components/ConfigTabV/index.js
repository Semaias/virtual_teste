import { Container, Row, Col, Nav } from 'react-bootstrap';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';

import ConfigTable from '../ConfigTable';
import URATable from '../URATable';
import TAGTable from '../TAGTable';
import ConfigTableTitle from '../ConfigTableTitle';

import './styles.scss';

const ConfigTabV = () => (
  <Tab.Container id="left-tabs-example" defaultActiveKey="1">
    <Row>
      <Col sm={2}>
        <Nav variant="pills" className="flex-column">
          <Nav.Item>
            <Nav.Link className="tab__option--top" eventKey="1">
              Respostas Rápidas
            </Nav.Link>
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
            <ConfigTable
              t_col_1="Título"
              t_col_2="Categoria"
              t_col_3="Ações"
            />
          </Tab.Pane>

          <Tab.Pane className="tab__content" eventKey="2">
            <ConfigTableTitle title="Scripts" />
            <ConfigTable />
          </Tab.Pane>

          <Tab.Pane className="tab__content" eventKey="3">
            <ConfigTableTitle title="Confirmações" />
            <ConfigTable />
          </Tab.Pane>

          <Tab.Pane className="tab__content" eventKey="4">
            <ConfigTableTitle title="Pesquisas" />
            <ConfigTable />
          </Tab.Pane>

          <Tab.Pane className="tab__content" eventKey="5">
            <ConfigTableTitle title="Horários" />
            <ConfigTable />
          </Tab.Pane>

          <Tab.Pane className="tab__content" eventKey="6">
            <ConfigTableTitle title="Auto Mensagens" />
            <ConfigTable />
          </Tab.Pane>

          <Tab.Pane className="tab__content" eventKey="7">
            <ConfigTableTitle title="URA's" />
            <URATable
              t_col_1="Ordem"
              t_col_2="URA"
              t_col_3="Sub-URAS"
              t_col_4="Usuários"
              t_col_5="Opções" />
          </Tab.Pane>

          <Tab.Pane className="tab__content" eventKey="8">
          <ConfigTableTitle title="TAG's" />
            <TAGTable
              t_col_1="Nome"
              t_col_2="Cor"
              t_col_3="Opções"
            />
          </Tab.Pane>

        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
);

export default ConfigTabV;