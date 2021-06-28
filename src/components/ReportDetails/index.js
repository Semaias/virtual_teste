import { Container, Row, Col } from 'react-bootstrap';

import { BsGear,
         BsQuestionCircle,
         BsTrophy,
         BsGraphUp }                from 'react-icons/bs';
import { BiMessageAltDetail }       from "react-icons/bi";
import { FiUsers }                  from 'react-icons/fi';
import { GoGraph }                  from 'react-icons/go';
import { RiHistoryLine }            from 'react-icons/ri';

import Card from '../../fragments/Card';

import './styles.scss';

const ReportDetails = () => (
  <Col sm={12} lg={9} >
    <div className="container__reportdetails">
      <div className="container__reportdetails--title">
        <h2 className="container__reportdetails--h2"> Relatórios Detalhados </h2>
      </div>
      <div className="container__reportdetails--card">
        <Card icon={<RiHistoryLine size={72} />} text="Atendimentos" />
        <Card icon={<BsTrophy      size={72} />} text="Ranking" />
        <Card icon={<BsGraphUp     size={72} />} text="Picos" />
      </div>
    </div>
  </Col>
);

export default ReportDetails;