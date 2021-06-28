import { Container, Row, Col } from 'react-bootstrap';

import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { BsGear, BsQuestionCircle } from 'react-icons/bs';

import CardReport from '../../fragments/CardReport';

import './styles.scss';

const TitleReport = () => (
  <Col sm={12} lg={12} >
    <div className="container__titlereport">
      <div className="container__titlereport--title">
        <h2 className="container__titlereport--h2"> Relatórios </h2>
      </div>
      <div className="container__titlereport--subtitle">
        <h3 className="container__titlereport--h3">
          Últimos 30 dias
        </h3>
      </div>
      <div className="container__titlereport--card">
        <CardReport title="20" text="Atendimentos" />
        <CardReport title="0.6" text="Atendimentos/Dia" />
        <CardReport title="4" text="Novos contatos" />
        <CardReport title="5" text="Pesquisas" />
        <CardReport title="7.3" text="Tempo médio de atendimento" />
      </div>
    </div>
  </Col>
);

export default TitleReport;