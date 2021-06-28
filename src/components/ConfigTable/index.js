import Table from 'react-bootstrap/Table';

import { FaWhatsapp } from 'react-icons/fa';

import ButtonContact from '../../fragments/ButtonContact';

import './styles.scss';

const ConfigTable = () => (
  <Table striped bordered hover>
    <thead className="thead" >
      <tr>
        <th>Título</th>
        <th>Categoria</th>
        <th>Ações</th>
      </tr>
    </thead>
    <tbody>
      <tr className="tr-1">
        <td> Pacote 1</td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-2">
        <td> Pacote 2 </td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-1">
        <td> Pacote 1</td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-2">
        <td> Pacote 2 </td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-1">
        <td> Pacote 1</td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-2">
        <td> Pacote 2 </td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-1">
        <td> Pacote 1</td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-2">
        <td> Pacote 2 </td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-1">
        <td> Pacote 1</td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
      <tr className="tr-2">
        <td> Pacote 2 </td>
        <td> Valores e condições </td>
        <td> <ButtonContact text="Editar"/> </td>
      </tr>
    </tbody>
  </Table>
);

export default ConfigTable;
