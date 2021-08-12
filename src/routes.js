import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home           from './pages/Home';
import Login          from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import EmailSent      from './pages/EmailSent';
import Report         from './pages/Report';
import Contacts       from './pages/Contacts';
import Support        from './pages/Support';
import Config         from './pages/Config';
import Chat           from './pages/UserChat';
import FAQ            from './pages/FAQ';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact path="/entrar"        component={Login} />
        <Route exact path="/mudar-senha"   component={ForgotPassword} />
        <Route exact path="/email-enviado" component={EmailSent} />

        <Route exact path="/relatorio"     component={Report} />
        <Route exact path="/contatos"      component={Contacts} />
        <Route exact path="/suporte"       component={Support} />
        <Route exact path="/configuracoes" component={Config} />

        <Route exact path="/chat" component={Chat} />
        <Route exact path="/faq"  component={FAQ} />
      </Switch>
    </BrowserRouter>
  );
}