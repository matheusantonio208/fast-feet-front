import { Input, Form } from '@rocketseat/unform';
import styled from 'styled-components';

export const Container = styled.div`
  > h1:first-child {
    margin-bottom: 35px;
  }
`;

export const ActionsBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  button {
    width: 140px;
    height: 36px;
    border: 0;
    border-radius: 4px;
    color: #eee;
    font-weight: bold;
    text-transform: uppercase;
    background: #7d40e7;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const SearchBar = styled(Form)`
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    margin-left: 16px;
  }
`;

export const SearchInput = styled(Input)`
  width: 240px;
  padding: 9px 40px;
  border: 1px solid #dddddd;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;

  th {
    color: #444444;
  }
  td {
    text-align: center;
    background: #fff;
    border-left: 0px;
    padding: 20px 0;
  }
  tr {
    border-radius: 50%;
  }
`;
