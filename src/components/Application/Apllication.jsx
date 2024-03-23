import Header from "../Header";
import Footer from "../Footer";
import Modal from "../Modal";
import {Container} from "react-bootstrap";
import Items from "../Items/Items";

function Application() {
  return (
    <>
      <Container>
        <Header></Header>
        <Modal></Modal>
        <Items></Items>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Application;
