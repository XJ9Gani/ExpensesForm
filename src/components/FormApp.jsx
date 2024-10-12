import React, { useState, useEffect } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function FormApp() {
  const [formData, setFormData] = useState({
    date: "",
    amount: "",
    category: "Food",
    comment: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("expenses");
    if (savedData) {
      console.log("Данные загружены из localStorage");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];
    expenses.push(formData);
    localStorage.setItem("expenses", JSON.stringify(expenses));

    setFormData({
      date: "",
      amount: "",
      category: "Food",
      comment: "",
    });

    console.log("Данные сохранены:", formData);
  };

  return (
    <Container>
      <h2 className="mt-3">Форма ввода расходов</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formDate">
          <Form.Label>Дата</Form.Label>
          <Form.Control
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formAmount" className="mt-3">
          <Form.Label>Сумма</Form.Label>
          <Form.Control
            type="number"
            name="amount"
            placeholder="Введите сумму"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="formCategory" className="mt-3">
          <Form.Label>Категория</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
          >
            <option value="Еда">Еда</option>
            <option value="Транспорт">Транспорт</option>
            <option value="Развлечение">Развлечения</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formComment" className="mt-3">
          <Form.Label>Комментарий</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            placeholder="Введите комментарий"
            value={formData.comment}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-3">
          Сохранить
        </Button>
      </Form>
    </Container>
  );
}
