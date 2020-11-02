import React, { useState } from 'react';
import { MdSearch, MdAdd } from 'react-icons/md';

import {
  Container,
  ActionsBar,
  SearchBar,
  SearchInput,
  Table
} from '#pages/Orders/orders-page-style.js';

export default function OrdersPage() {
  // const [stateName, setStateFunction] = useState([]);

  return (
    <Container>
      <h1>Gerenciando encomendas</h1>
      <ActionsBar>
        <SearchBar>
          <MdSearch size={16} color={'#999999'} />
          <SearchInput name="search" placeholder="Buscar por encomendas" />
        </SearchBar>
        <button>
          <MdAdd color={'#eee'} size={24} />
          Cadastrar
        </button>
      </ActionsBar>

      <Table>
        <tr>
          <th>ID</th>
          <th>DESTINATÁRIO</th>
          <th>ENTREGADOR</th>
          <th>CIDADE</th>
          <th>ESTADO</th>
          <th>STATUS</th>
          <th>AÇÕES</th>
        </tr>
        <tr>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <td>
            <img src="" alt="" />
            John Doe
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>ENTREGUE</td>
          <td>...</td>
        </tr>
        <tr>
          <td>#01</td>
          <td>Ludwig van Beethoven</td>
          <td>
            <img src="" alt="" />
            John Doe
          </td>
          <td>Rio do Sul</td>
          <td>Santa Catarina</td>
          <td>ENTREGUE</td>
          <td>...</td>
        </tr>
      </Table>
    </Container>
  );
}
