import { Container, Row, Col } from 'react-bootstrap';

import Input from '../../fragments/Input';
import Button from '../../fragments/Button';

import BannerLogin from '../BannerLogin';

import { Link } from 'react-router-dom';

import './styles.scss';

const Login = () => (
  <Container fluid>
    <Row>
      <BannerLogin />
      <Col sm={12} lg={6}>
        <div className="container__login">
          <div className="container__login--col">
            <div>  
              <h2 className="container__login--h2">Virtual Fácil</h2>
              <p className="container__login--p">
                Seja bem-vindo(a)! Informe suas credenciais <br /> para acessar sua conta.
              </p>
              <Input type="text" name="Usuário"/>
              <Input type="password" name="Senha"/>
              <div className="container__login--enter">
                <Button text="Entrar" />
              </div>
              <div className="container__login--f_password">
                <small> 
                  <Link className="container__login--f_pass_link">
                    Esqueceu sua senha?
                  </Link >
                </small>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Login;