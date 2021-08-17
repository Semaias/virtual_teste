import { Container, Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Input    from '../../fragments/Input';
import TAGInput from '../../fragments/TAGInput';
import Button   from '../../fragments/Button';

import './styles.scss';

const TAGForm = () => (
  <Col sm={12} lg={12} >
    <div className="container__TAGForm">
      <Input type="text" name="Escreva o nome da tag"/>
      <TAGInput type="color" name="Escolha a cor da tag" />
      <Link to="/configuracoes">
        <Button text="Salvar tag"/>
      </Link>
    </div>
  </Col>
);

export default TAGForm;