import {Component} from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react';

import {Button, ButtonGroup} from '@chakra-ui/react';

class Chakra extends Component {
  render () {
    return (
      <div>
        <h1>Ejemplos de Chakra UI</h1>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>Tabla de ejemplo</Th>
                <Th>Prueba 1</Th>
                <Th isNumeric>Prueba 2 numérica</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Este es un ejemplo</Td>
                <Td>Chakra UI Prueba1</Td>
                <Td isNumeric>2023</Td>
              </Tr>
              <Tr>
                <Td>De como usar Chakra UI</Td>
                <Td>Prueba 2</Td>
                <Td isNumeric>2023</Td>
              </Tr>
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Titulo inferior</Th>
                <Th>Prueba inferior</Th>
                <Th isNumeric>Año inferior</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
        <hr />
        <br />
        <OrderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </OrderedList>
        <hr />
        <br />
          <Button colorScheme="facebook" size="xs">
            Button
          </Button>
          <Button colorScheme="red" size="sm">
            Button
          </Button>
          <Button colorScheme="whatsapp" size="md">
            Button
          </Button>
          <Button colorScheme="telegram" size="lg">
            Button
          </Button>
      </div>
    );
  }
}
export default Chakra;
