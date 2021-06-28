import Table from 'react-bootstrap/Table';

import { FaWhatsapp } from 'react-icons/fa';

import ButtonContact from '../../fragments/ButtonContact';

import './styles.scss';

const SupportTable = () => (
  <Table striped bordered hover>
    <thead className="thead" >
      <tr>
        <th>Título</th>
        <th>Status</th>
        <th>Data de criação</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr className="tr-1">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Aguardando Resposta </td>
        <td> 22/02/2001</td>
        <td> <ButtonContact text="Responder"/> </td>
      </tr>
      <tr className="tr-2">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Encerrado</td>
        <td> 22/02/2001</td>
        <td>  </td>
      </tr>
      <tr className="tr-1">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Aguardando Resposta </td>
        <td> 22/02/2001</td>
        <td> <ButtonContact text="Responder"/> </td>
      </tr>
      <tr className="tr-2">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Encerrado</td>
        <td> 22/02/2001</td>
        <td>  </td>
      </tr>
      <tr className="tr-1">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Aguardando Resposta </td>
        <td> 22/02/2001</td>
        <td> <ButtonContact text="Responder"/> </td>
      </tr>
      <tr className="tr-2">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Encerrado</td>
        <td> 22/02/2001</td>
        <td>  </td>
      </tr>
      <tr className="tr-1">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Aguardando Resposta </td>
        <td> 22/02/2001</td>
        <td> <ButtonContact text="Responder"/> </td>
      </tr>
      <tr className="tr-2">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Encerrado</td>
        <td> 22/02/2001</td>
        <td>  </td>
      </tr>
      <tr className="tr-1">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Aguardando Resposta </td>
        <td> 22/02/2001</td>
        <td> <ButtonContact text="Responder"/> </td>
      </tr>
      <tr className="tr-2">
        <td> asçoidasoifjpodisasdaspdasodij</td>
        <td> Encerrado</td>
        <td> 22/02/2001</td>
        <td>  </td>
      </tr>
    </tbody>
  </Table>
);

export default SupportTable;
