import { Navbar, Button, Link, Text } from "@nextui-org/react";

export default function App() {
  const collapseItems = [
    { title: "Inicio", url: "/" },
    { title: "UDLA Blockchain Day", url: "https://www.eth-tricolor.org" },
    { title: "Únete al club", url: "/join-club" }
  ];

  const links = [
    
  ]

  return (
    <Navbar isBordered variant="sticky">
      <Navbar.Brand>
        <Navbar.Toggle aria-label="toggle navigation" />
        <Text b color="inherit" hideIn="xs">
          Club De Software 
        </Text>
      </Navbar.Brand>
      <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
        <Navbar.Link href="#">Eventos</Navbar.Link>
        <Navbar.Link href="#">Miembros</Navbar.Link>
        <Navbar.Link href="#">Nosotros</Navbar.Link>
        <Navbar.Link href="#">Proyectos</Navbar.Link>
        <Button color="gradient" auto>
          Registrate para ser miembro
        </Button>
      </Navbar.Content>
      <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item.title}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href= {item.url}
            >
              {item.title}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
