import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function PageCard() {
  return (
    <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Nuestros objetivos?</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
                <li>
                Crear eventos de tecnología para la comunidad UDLA
                </li>
                <li>
                Crear eventos de capacitación técnica en tecnologías emergentes(Blockchain,IA)
                </li>
                <li>
                Apoyar a estudiantes en sus proyectos personales 
                </li>
            </Text>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "500px" }}>
          <Card.Header>
            <Text b>Cómo unirte?</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
           Ingresa tu email aquí
            </Text>
          </Card.Body>
          <input type="text" placeholder="email"></input>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" color="secondary">
               Enviar
              </Button>
            </Row> 
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}