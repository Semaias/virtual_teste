import { Container, Row, Col } from 'react-bootstrap';

import ButtonSidebar    from '../../fragments/ButtonSidebar'
import Button           from '../../fragments/Button';
import CardSideBar      from '../../fragments/ButtonCardSideBar';
import FinishedTalkCard from '../../fragments/FinishedTalkCard';
import AcordiumSideBar  from '../../fragments/AcordiumSideBar';

import LastTalks      from '../LastTalks';
import DashBoard      from '../DashBoard';
import Navbar         from '../Navbar';
import Drawer         from '../Drawer';
import ChatTitle      from '../ChatTitle';
import GraphArea      from '../GraphArea'; 
import ReportDetails  from '../ReportDetails';
import ClientChat     from '../ClientChat';

import { HiOutlinePencilAlt } from 'react-icons/hi'

import { Link } from 'react-router-dom';

import './styles.scss';

const ChatSidebar = () => (
  <Container fluid>
    <Row>
      <Navbar />
        <Col sm={12} lg={2}>
          <div className="container__chatsidebar">
            <div>
              <span className="container__chatsidebar--button">
                <Button
                text="Iniciar Conversa (3/10)"
                icon={<HiOutlinePencilAlt size={24} />}
                />
              </span>
              <span className="container__chatsidebar--button">
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
          <ChatTitle />
          <ClientChat />
        </Col>
        <Col sm={12} lg={1}>
          <div>
            <Drawer />
          </div>
        </Col>
    </Row>
  </Container>
);

export default ChatSidebar;