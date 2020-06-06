import React from 'react';
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  CardTitle,
  Table,
  Button
} from 'reactstrap';
import './map.scss';

import mock from '../mock/index';

class Map extends React.Component {
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

                {mock.partners.map((data) => (
                  <p
                    key={data.id}
                    style={{
                      color: '#000'
                    }}>
                    {data.name}
                  </p>
                ))}

                <CardBody>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome do Local</th>
                        <th>Telefone</th>
                        <th>Parceiro</th>
                        <th>Endereço</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
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

export default Map;
