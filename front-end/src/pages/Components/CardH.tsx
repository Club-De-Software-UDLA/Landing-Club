import { Card, Text } from "@nextui-org/react";

export default function CardH() {
  return (
    <Card isHoverable variant="bordered" css={{ mw: "800px" }}>
      <Card.Body>
        <Text> Payz is creating a way for the third world to turn fiat into crypto and have their money in their own hands.</Text>
      </Card.Body>
    </Card>
  );
}