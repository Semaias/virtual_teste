import { Container, Row, Col } from 'react-bootstrap';

import ButtonSidebar from '../../fragments/ButtonSidebar'
import Button from '../../fragments/Button';
import CardSideBar from '../../fragments/ButtonCardSideBar';
import FinishedTalkCard from '../../fragments/FinishedTalkCard';
import AcordiumSideBar from '../../fragments/AcordiumSideBar';

import LastTalks from '../LastTalks';
import DashBoard from '../DashBoard';
import Navbar from '../Navbar';
import Drawer from '../Drawer';
import TitleReport from '../TitleReport';
import GraphArea from '../GraphArea';
import ReportDetails from '../ReportDetails';
import ContactTable from '../ContactTable';
import ContactTitle from '../ContactTitle';
import ConfigTitle from '../ConfigTitle';

import { HiOutlinePencilAlt } from 'react-icons/hi'

import { Link } from 'react-router-dom';

import './styles.scss';

const ContactSidebar = () => (
  <Container fluid>

    <Row>
      <Navbar />
      <Col sm={12} lg={2}>
        <div className="container__contactsidebar">
          <div>
            <span className="container__contactsidebar--button">
              <Button
                text="Iniciar Conversa (3/10)"
                icon={<HiOutlinePencilAlt size={24} />}
              />
            </span>
            <span className="container__contactsidebar--button">
              <Link to="/">
                <ButtonSidebar
                  text="Home"
                />
              </Link>
              <Link to="/chat">
                <ButtonSidebar
                  text="Conversas"
                />
              </Link>
              <Link to="/contatos">
                <ButtonSidebar
                  text="Contato"
                />
              </Link>
              <Link to="/relatorio">
                <ButtonSidebar
                  text="Relatórios"
                />
              </Link>
              <Link to="/suporte">
                <ButtonSidebar
                  text="Suporte"
                />
              </Link>
              <Link to="/configuracoes">
                <ButtonSidebar
                  text="Configurações"
                />
              </Link>
            </span>
          </div>
        </div>
      </Col>
      <Col sm={12} lg={9}>
        <ContactTitle />
        <ContactTable />
      </Col>
      <Col sm={12} lg={1} className="qwerty">
        <div className="qwerty">
          <Drawer />
        </div>
      </Col>
    </Row>
  </Container>
);

export default ContactSidebar;