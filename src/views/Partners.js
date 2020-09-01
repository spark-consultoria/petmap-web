import React from 'react';
// react plugin used to create google maps

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardTitle,
  Table
} from 'reactstrap';
import './map.scss';

class Partners extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Parceiros</CardTitle>
                </CardHeader>

                <CardBody>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome do Local</th>
                        <th>Telefone</th>
                        <th>Parceiro</th>
                        <th>Endereço</th>
                        <th>Numero</th>
                        <th>Telefone</th>
                        <th>Tipo de Local</th>
                        <th>Cupons Ativos</th>
                        <th>Cupons Utilizados</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>PetShop Alegra </td>
                        <td>(11) 4426-2940</td>
                        <td>Sim</td>
                        <td>Rua Presidente Altino</td>
                        <td>426</td>
                        <td>(11) 4122-4812</td>
                        <td>Restaurante</td>
                        <td>626</td>
                        <td>312</td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Partners;
