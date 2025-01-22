# Aplikacja Internetowa do Zarządzania Hurtownią
## Opis Projektu
Niniejsza wersja projektu powstała w ramach przedmiotu "Aplikacje Internetowe". Zawiera ona interfejs użytkownika stworzony poprzez użycie framework'a React oraz API powstałego przy pomocy ASP.NET Core. Frontend zawiera stronę główną, kategorie oferowanych produktów, przykładowy opis firmy oraz dane kontaktowe wraz z formularzem kontaktowym obsługiwanym przez API, zapisujące dane z formularza w bazie danych.

## Technologie użyte w projekcie
Projekt został stworzony przy użyciu następujących technologii:
- **HTML**: Struktura strony internetowej
- **CSS**: Stylizacja i wygląd projektu
- **JavaScript (JS)**: Logika i interakcje w aplikacji frontendowej
- **Bootstrap**: Biblioteka do stylizacji i komponentów UI
- **React**: Framework JavaScript do budowy interfejsu użytkownika
- **Next.js**: Framework React wspierający renderowanie po stronie serwera (SSR) i statyczne generowanie stron (SSG)
- **C#**: Język programowania używany w backendzie
- **ASP.NET Core Web API**: Framework do budowy backendu i API

## Instrukcja uruchomienia projektu
Projekt składa się z dwóch części: **Frontendu (React + Next.js)** oraz **Backendowej API (ASP.NET Core Web API)**. Obie części należy uruchomić osobno.

### Wymagania wstępne
Upewnij się, że na twoim komputerze są zainstalowane:
- **Node.js** (zalecana wersja: LTS) wraz z menedżerem pakietów npm lub yarn
- **.NET SDK** (zalecana wersja: .NET 8)
- Baza danych **Microsoft SQL Server**

### Uruchomienie Frontendu

1. Przejdź do folderu z kodem frontendowym:
```bash
cd /sciezka/do/folderu/frontend
```

2. Zainstaluj zależności:
```bash
npm install
```

3. Uruchom projekt w trybie deweloperskim:
```bash
npm run dev
```

4. Otwórz przeglądarkę i przejdź pod adres http://localhost:3000, aby zobaczyć aplikację.

### Uruchomienie Backendowej API

1. Przejdź do folderu z kodem backendowym:
```bash
cd /sciezka/do/folderu/backend
```

2. Zbuduj projekt:
```bash
dotnet build
```

3. Zastosuj migracje do bazy danych (jeśli używasz Entity Framework):
```bash
dotnet ef database update
```

4. Uruchom projekt:
```bash
dotnet run
```

API będzie dostępne pod adresem https://localhost:5001 lub http://localhost:5000 (w zależności od konfiguracji).

## Dodatkowe informacje
Wszystkie użyte w projekcie obrazki zostały wygenerowane przez sztuczną inteligencję.
https://openart.ai/home