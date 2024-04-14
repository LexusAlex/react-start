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
import UseStateArray from "../Hooks/UseState/UseStateArray";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
  useLocation,
} from "react-router-dom";
import Userfront, { SignupForm, LoginForm, PasswordResetForm, LogoutButton } from "@userfront/toolkit/react";

//Userfront.init("demo1234");

function Application() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/reset">Reset</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>
            {Userfront.tokens.accessToken && (
              <div style={{width: "200px"}}>
                <LogoutButton />
              </div>
            )}

          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/reset" element={<PasswordReset />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </Router>

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
        <UseStateArray></UseStateArray>
      </Container>
    </>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <SignupForm />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h2>Login</h2>
      <LoginForm />
    </div>
  );
}

function PasswordReset() {
  return (
    <div>
      <h2>Password Reset</h2>
      <PasswordResetForm />
    </div>
  );
}

function Dashboard() {
  const userData = JSON.stringify(Userfront.user, null, 2);
  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{userData}</pre>
      <button onClick={Userfront.logout}>Logout</button>
    </div>
  );
}

function RequireAuth({ children }) {
  let location = useLocation();
  if (!Userfront.tokens.accessToken) {
    // Redirect to the /login page
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}

export default Application;
