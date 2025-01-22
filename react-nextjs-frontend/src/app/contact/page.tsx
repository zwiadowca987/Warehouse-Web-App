'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [comment, setComment] = useState("");
  const id = 0;
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://localhost:44305/api/Comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, name, lastName, email, message }),
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setComment(result.message);
        setName("");
        setLastName("");
        setEmail("");
        setMessage("");
      } else {
        setComment(result.message || 'Nie udało się wysłać wiadomości')
        console.log(JSON.stringify(result, null, 2));
      }
    }
    catch(error: unknown) {
      if (error instanceof Error) {
        setComment(error.message || 'Nie udało się wysłać wiadomości');
      } else {
        setComment('Nieznany błąd.');
      }
    }
  }
  
  return (
    <div className={"container text-center"}>
      <h1 className={"display-2"}>Kontakt</h1>
      
      <h1 className={"display-4 mt-5"}>Dane Kontaktowe</h1>
      <p>Adres: Uniwersytecka 7, 25-406 Kielce</p>
      <p>Telefon: 413496230</p>
      <p>Adres E-Mail: dziekan.wsp@ujk.edu.pl</p>
      
      <h1 className={"display-4 mt-5"}>Godziny Otwarcia</h1>
      <p>Poniedziałek - Piąte: 8.00 - 17.00</p>
      <p>Sobota: 9.00 - 14.00</p>
      <p>Niedziela: Zamknięte</p>
      
      <h1 className={"display-4 mt-5"}>Formularz Kontaktowy</h1>
      <form onSubmit={handleSubmit} className="p-4 border rounded shadow bg-light text-start">
        <div className="form-row mb-3">
          <div className="col">
            <label className="form-label">Imię</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Wpisz swoje imię"
              required
            />
          </div>
          <div className="col">
            <label className="form-label">Nazwisko</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Wpisz swoje nazwisko"
              required
            />
          </div>
        </div>
        <div className="mb-3">
          <label className="form-label">E-Mail</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Wpisz swój e-mail"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Wiadomość</label>
          <textarea
            className="form-control"
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Wpisz swoją wiadomość"
          ></textarea>
        </div>
        <div className="text-center">
          <button type="submit" className="btn btn-primary btn-block">
            Wyślij
          </button>
        </div>
      </form>
      
      {comment && <p className={"text-danger"}>{comment}</p>}
    </div>
  );
}
