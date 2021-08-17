import Table from 'react-bootstrap/Table';

import { FaWhatsapp } from 'react-icons/fa';

import ButtonDropdownTAG from '../../fragments/ButtonDropdown';

import './styles.scss';

const TAGTable = ({ t_col_1, t_col_2, t_col_3 }) => (
  <Table striped bordered hover>
    <thead className="thead" >
      <tr>
        <th>{t_col_1}</th>
        <th>{t_col_2}</th>
        <th>{t_col_3}</th>
      </tr>
    </thead>
    <tbody>
      <tr className="tr-1">
        <td> Autorização </td>
        <td> Aleatório </td>
        <td> <ButtonDropdownTAG text="Opções" /> </td>
      </tr>
      <tr className="tr-2">
        <td> Confirmação </td>
        <td> Aleatório </td>
        <td> <ButtonDropdownTAG text="Opções" /> </td>
      </tr>
      <tr className="tr-1">
        <td> Autorização </td>
        <td> Aleatório </td>
        <td> <ButtonDropdownTAG text="Opções" /> </td>
      </tr>
      <tr className="tr-2">
        <td> Confirmação </td>
        <td> Aleatório </td>
        <td> <ButtonDropdownTAG text="Opções" /> </td>
      </tr>
      <tr className="tr-1">
        <td> Autorização </td>
        <td> Aleatório </td>
        <td> <ButtonDropdownTAG text="Opções" /> </td>
      </tr>
      <tr className="tr-2">
        <td> Confirmação </td>
        <td> Aleatório </td>
        <td> <ButtonDropdownTAG text="Opções" /> </td>
      </tr>
    </tbody>
  </Table>
);

export default TAGTable;
