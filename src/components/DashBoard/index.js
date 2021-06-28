import { Container, Row, Col } from 'react-bootstrap';

import { BiMessageAltDetail }       from "react-icons/bi";
import { FiUsers }                  from 'react-icons/fi';
import { GoGraph }                  from 'react-icons/go';
import { BsGear, BsQuestionCircle } from 'react-icons/bs';

import { Link } from 'react-router-dom';

import Card from '../../fragments/Card';

import './styles.scss';

const DashBoard = () => (
  <Col sm={12} lg={12} >
    <div className="container__dashboard">
      <div className="container__dashboard--title">
        <h2 className="container__dashboard--h2"> Olá, laksjnclçksajfn </h2>
      </div>
      <div className="container__dashboard--card">
        <Link to="/chat">
          <Card icon={<BiMessageAltDetail size={100} />} text="Conversas" />
        </Link>
        <Link to="/contatos">
          <Card icon={<FiUsers size={100} />} text="Contatos" />
        </Link>
        <Link to="/relatorio">
          <Card icon={<GoGraph size={100} />} text="Relatórios" />
        </Link>
        <Link to="/configuracoes">
          <Card icon={<BsGear size={100} />} text="Configurações" />
        </Link>
        <Link to="/suporte">
          <Card icon={<BsQuestionCircle size={100} />} text="Suporte" />
        </Link>
      </div>
    </div>
  </Col>
);

export default DashBoard;