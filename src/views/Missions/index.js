import React, { Component, useState } from 'react';
import {
  Row,
  Col,
  Card,
  CardTitle,
  CardHeader,
  CardBody,
  Button,
  Table,
  Form,
  FormGroup,
  Input,
  CardFooter
} from 'reactstrap';

export default class Missions extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md={4}>
              <Card>
                <CardHeader
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                  <CardTitle tag="h4">Missoes</CardTitle>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Titulo da Missao</label>
                          <Input style={{ color: '#000' }} type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Qtde</label>
                          <Input style={{ color: '#000' }} type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Tempo</label>
                          <Input
                            placeholder="semana / dia "
                            style={{ color: '#000' }}
                            type="select">
                            <option value="pet">Dias</option>
                            <option value="cab">Semana</option>
                            <option value="shop">Mes</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Premiação</label>
                          <Input
                            placeholder="semana / dia "
                            style={{ color: '#000' }}
                            type="select">
                            <option value="pet">petcoins</option>
                            <option value="desc">descontos</option>
                            <option value="cup">cupons</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label>Qtde </label>
                          <Input style={{ color: '#000' }} type="text" />
                        </FormGroup>
                      </Col>
                      <Col md="12">
                        <FormGroup>
                          <label>Descreva a missao</label>
                          <Input
                            cols="50"
                            rows="4"
                            style={{ color: '#000' }}
                            type="textarea"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                  <CardFooter>
                    <Button className="btn-fill" type="submit">
                      Cadastrar Missao
                    </Button>
                  </CardFooter>
                </CardBody>
              </Card>
            </Col>
            <Col md={8}>
              <Card>
                <CardHeader
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                  }}>
                  <CardTitle tag="h4">Ultimas Cadastradas</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table striped>
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Nome da Missao</th>
                        <th>Periodo</th>
                        <th>Possui Cupons </th>
                        <th>Quantidade de Cupons </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Caminhar 10 km</td>
                        <td>1 semana</td>
                        <td>Sim</td>
                        <td>2200</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Usar cupom petmap</td>
                        <td>30 dias </td>
                        <td>Sim</td>
                        <td>500</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Cadastro Facebook</td>
                        <td>1 ano</td>
                        <td>Sim</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Cadastro Instagram</td>
                        <td>1 ano</td>
                        <td>Sim</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>Indique 1 amigo</td>
                        <td>1 ano</td>
                        <td>Sim</td>
                        <td>1000</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>Visite um parceiro</td>
                        <td>2 semanas</td>
                        <td>Nao</td>
                        <td>0</td>
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
