import React from 'react';
import './icons.scss';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  Row,
  Col,
  Button,
  CardFooter,
  FormGroup,
  Form,
  Input,
  CustomInput,
  Table
} from 'reactstrap';

import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

class Places extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <h5 className="title">Cadastrar Local</h5>
                </CardHeader>
                <CardBody>
                  <Form>
                    <Row></Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Nome do Local</label>
                          <Input
                            placeholder="Pet / Restaurante / Loja "
                            type="text"
                            style={{ color: '#000' }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="6">
                        <FormGroup>
                          <label>Tipo de Local</label>
                          <Input
                            placeholder="00000-000"
                            type="select"
                            style={{ color: '#000' }}>
                            <option value="pet">Petshop</option>
                            <option value="cab">Cabeleireiro</option>
                            <option value="shop">Shopping</option>
                            <option value="rest">Restaurante</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md="2">
                        <FormGroup>
                          <label>Digite o CEP</label>
                          <Input
                            placeholder="00000-000"
                            type="text"
                            style={{ color: '#000' }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Nome da Rua</label>
                          <Input
                            placeholder=""
                            type="text"
                            style={{ color: '#000' }}
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pr-md-1" md="1">
                        <FormGroup>
                          <label>Numero</label>
                          <Input
                            placeholder=""
                            type="text"
                            style={{ color: '#000' }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Cidade</label>
                          <Input
                            placeholder=""
                            type="text"
                            style={{ color: '#000' }}
                          />
                        </FormGroup>
                      </Col>
                      <Col md="3">
                        <FormGroup>
                          <label>Estado</label>
                          <Input
                            placeholder="00000-000"
                            type="select"
                            style={{ color: '#000' }}>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                            <option value="EX">Estrangeiro</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="3">
                        <FormGroup>
                          <label>Fotos do Local</label>
                          <CustomInput
                            placeholder="Fotos"
                            type="file"
                            id="customFile"
                            name="customFile"
                            label={'choose an image file'}
                            style={{ color: '#000' }}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </Form>
                </CardBody>
                <CardFooter>
                  <Button className="btn-fill" type="submit">
                    Save
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Places;
