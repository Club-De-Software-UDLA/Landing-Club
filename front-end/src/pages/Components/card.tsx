import { Card, Grid, Text, Button, Row } from "@nextui-org/react";

export default function PageCard() {
  return (
    <Grid.Container gap={2}>
      <Grid sm={12} md={5}>
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Como usarla?</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
                <li>
               Compra y guarda Bitcoin
                </li>
                <h3> o </h3>
                <li>
                Guarda tu dinero en dólares digitales
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
        <Card css={{ mw: "330px" }}>
          <Card.Header>
            <Text b>Porque usarlo?</Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10" }}>
            <Text>
             Ten la custodia completa de tu dinero
            </Text>
          </Card.Body>
          <h3> Unete a la lista de espera:</h3>
          <input type="text" placeholder="email"></input>
          <Card.Divider />
          <Card.Footer>
            <Row justify="flex-end">
              <Button size="sm" color="secondary">
                ver más
              </Button>
            </Row> 
          </Card.Footer>
        </Card>
      </Grid>
    </Grid.Container>
  );
}