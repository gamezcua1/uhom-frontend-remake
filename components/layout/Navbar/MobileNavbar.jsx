import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  Container,
  Divider,
  Grid,
  Icon,
  Menu,
  Segment,
  Sidebar,
  Image,
} from "semantic-ui-react";
import NavbarItems from "./NavbarItems";
import NavbarRightItems from "./NavbarRightItems";

export default function MobileNavbar() {
  const [isOpen, setOpen] = useState(false);

  const handleSidebar = () => setOpen(!isOpen);

  return (
    <div className="navbar-mobile">
      <Portal>
        <Sidebar
          as={Menu}
          animation="overlay"
          onHide={() => setOpen(false)}
          vertical
          visible={isOpen}
        >
          <Segment basic>
            <Image src={"/images/logos/NamedYellowLogo.png"} size="tiny" />
          </Segment>
          <Divider />
          <NavbarItems isMobile={true} handleSideBar={handleSidebar} />
        </Sidebar>
      </Portal>
      <Grid columns={1}>
        <Grid.Column>
          <Segment>
            <Segment basic textAlign="center" className="navbar">
              <Container>
                <Menu pointing size="large" text>
                  <Menu.Item onClick={handleSidebar}>
                    <Icon name="sidebar" />
                  </Menu.Item>

                  <NavbarRightItems />
                </Menu>
              </Container>
            </Segment>
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

const Portal = ({ children }) => {
  const [parent, setstate] = useState(null);

  useEffect(() => {
    const mount = document.getElementById("base");
    setstate(mount);
  }, []);

  return parent && ReactDOM.createPortal(children, parent);
};
