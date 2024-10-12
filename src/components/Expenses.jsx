import { useEffect, useState } from "react";
import { Card, CardHeader } from "react-bootstrap";

export default function Expenses() {
  const [list, setList] = useState([]);

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      setList(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
  }, []);
  return (
    <>
      <div className="d-flex flex-wrap gap-3 p-3">
        {list.map(({ category, amount, comment }, index) => (
          <Card
            className="flex-grow-1"
            style={{ minWidth: "250px", maxWidth: "400px" }}
          >
            <CardHeader>
              <Card.Title className="fs-4">{category}</Card.Title>{" "}
            </CardHeader>
            <Card.Body>
              <Card.Text className="fs-5">Сумма расхода: {amount} ₸</Card.Text>
            </Card.Body>
            <Card.Footer className="fs-6">{comment}</Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}
