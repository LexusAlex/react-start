import Header from "../Header";
import Footer from "../Footer";
import Modal from "../Modal";
import {Container} from "react-bootstrap";
import Items from "../Items/Items";
import Card from "../Card";
import Lists from "../Lists";
import TestButton from "../TestButton";
import Form from "react-bootstrap/Form";
import FormTest from "../FormTest";
import UseState from "../Hooks/UseState/UseState";

function Application() {
  return (
    <>
      <Container>
        <Header></Header>
        <Modal></Modal>
        <Items></Items>
        <Lists></Lists>
        <Card>
          <Footer></Footer>
        </Card>
        <div onClick={(e) => {console.log('parent')}}>
          <TestButton></TestButton>
        </div>
        <FormTest></FormTest>
        <UseState></UseState>
      </Container>
    </>
  );
}

export default Application;
