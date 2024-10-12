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
      <div className="d-flex flex-wrap gap-5 p-5">
        {list.map(({ category, amount, comment }) => (
          <Card style={{ width: "40%", height: "40%" }}>
            <CardHeader>
              <Card.Title>{category}</Card.Title>
            </CardHeader>
            <Card.Body style={{ width: "40%", height: "40%" }}>
              Сумма расхода : {amount} ₸
            </Card.Body>
            <Card.Footer>{comment}</Card.Footer>
          </Card>
        ))}
      </div>
    </>
  );
}
