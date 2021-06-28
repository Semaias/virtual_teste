import { Container, Row, Col } from 'react-bootstrap';

import { BsGear,
         BsQuestionCircle,
         BsDownload }         from 'react-icons/bs';
import { BiMessageAltDetail } from "react-icons/bi";
import { FiUsers }            from 'react-icons/fi';
import { GoGraph }            from 'react-icons/go';
import { HiOutlineFilter }    from 'react-icons/hi';
import { RiHistoryLine,
         RiShareForwardFill}  from 'react-icons/ri';

import CardReport    from '../../fragments/CardReport';
import ButtonSupport from '../../fragments/ButtonSupport';

import './styles.scss';

const ChatTitle = () => (
  <Col sm={12} lg={12} >
    <div className="container__ChatTitle">
      <div className="container__ChatTitle--title">
        <span className="container__ChatTitle--img"></span>
        <h2 className="container__ChatTitle--h2"> Pessoa Aleatória da Silva - #121212 </h2>
        <span className="container__ChatTitle--simbol">
          <BsDownload size={40} />
        </span>
        <span className="container__ChatTitle--simbol">
          <RiHistoryLine size={72} />
        </span>
        <span className="container__ChatTitle--simbol">
          <RiShareForwardFill size={40} />
        </span>
      </div>
    </div>
  </Col>
);

export default ChatTitle;