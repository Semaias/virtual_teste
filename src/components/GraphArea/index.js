import { Container, Row, Col } from 'react-bootstrap';

import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { BsGear, BsQuestionCircle } from 'react-icons/bs';

import Card from '../../fragments/Card';

import Graph from '../Graph';

import './styles.scss';

const GraphArea = () => (
  <Col sm={12} lg={12} >
    <div className="container__grapharea">
      <div className="container__grapharea--title">
        <h3 className="container__grapharea--h3">
          Quantidade de atendimentos
        </h3>
      </div>
        <Graph />
    </div>
  </Col>
);

export default GraphArea;