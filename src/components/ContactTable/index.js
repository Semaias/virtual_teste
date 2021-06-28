import Table from 'react-bootstrap/Table';

import { FaWhatsapp } from 'react-icons/fa';

import ButtonContact from '../../fragments/ButtonContact';

import './styles.scss';

const ContactTable = () => (
  <Table striped bordered hover>
    <thead className="thead" >
      <tr>
        <th>Nome</th>
        <th>Telefone</th>
        <th>Data de inclusão</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr className="tr-1">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-2">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-1">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-2">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-1">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-2">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-1">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-2">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-1">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
      <tr className="tr-2">
        <td>asçoidasoifjpodisasdaspdasodij</td>
        <td> <FaWhatsapp size={20} /> +51641651651651</td>
        <td>22/02/2001</td>
        <td> <ButtonContact text="Iniciar conversa"/> </td>
      </tr>
    </tbody>
  </Table>
);

export default ContactTable;
