import { Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useCallback } from "react";
export default function Header() {
  const activeLinkHandler = useCallback(
    ({ isActive }) =>
      isActive
        ? `text-success   nav-link fs-2 m-3 fw-normal`
        : `text-light  nav-link fs-2 m-3`,
    []
  );
  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          background: "#1a1a1a",
          zIndex: 2,
        }}
      >
        <Container className="d-flex justify-content-around align-items-center text-white">
          <Navbar>
            <NavLink to="/" className={activeLinkHandler}>
              Добавить
            </NavLink>

            <NavLink to="/expenses" className={activeLinkHandler}>
              Мои Расходы
            </NavLink>
          </Navbar>
        </Container>
      </header>
    </>
  );
}
