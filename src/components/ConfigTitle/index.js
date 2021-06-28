import { Container, Row, Col } from 'react-bootstrap';

import { BsGear,
         BsQuestionCircle,
         BsDownload }         from 'react-icons/bs';
import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { HiOutlineFilter }    from 'react-icons/hi';

import CardReport from '../../fragments/CardReport';

import './styles.scss';

const ConfigTitle = () => (
  <Col sm={12} lg={12} >
    <div className="container__ConfigTitle">
      <div className="container__ConfigTitle--title">
        <h2 className="container__ConfigTitle--h2"> Configurações </h2>
      </div>
      <div className="container__ConfigTitle--subtitle">
        <p>
          Como administrador, você pode realizar diversas configurações para 
          deixar a plataforma personalizada, de acordo com a necessidade de 
          atendimento da sua empresa.
        </p>
      </div>
    </div>
  </Col>
);

export default ConfigTitle;