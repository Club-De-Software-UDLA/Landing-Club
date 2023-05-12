import { Navbar, Button, Link, Text } from "@nextui-org/react";


export default function App() {
  const collapseItems = [
    "Features",
    "Customers",
    "Pricing",
    "Company",
    "Legal",
    "Team",
    "Help & Feedback",
    "Login",
    "Sign Up",
  ];

  return (

      <Navbar isBordered variant="sticky">
        <Navbar.Brand>
          <Navbar.Toggle aria-label="toggle navigation" />
       
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs" variant="underline">
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link href="#">Cómo Funciona</Navbar.Link>
          <Navbar.Link href="#">Nosotros</Navbar.Link>
          <Button color="gradient" auto>
          Registrarse para el Beta
        </Button>
        </Navbar.Content>
        <Navbar.Collapse>
        {collapseItems.map((item, index) => (
          <Navbar.CollapseItem key={item}>
            <Link
              color="inherit"
              css={{
                minWidth: "100%",
              }}
              href="#"
            >
              {item}
            </Link>
          </Navbar.CollapseItem>
        ))}
      </Navbar.Collapse>
      </Navbar>
   
  )
}
