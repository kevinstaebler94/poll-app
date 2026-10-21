# Angular: Aufgaben der einzelnen Bausteine

## Interfaces

Typisierung und Definition der Datenstrukturen.

## Services

Datenabfragen, Backend-Kommunikation und gemeinsam genutzte Geschäftslogik.

## Components

Benutzeroberfläche (HTML, SCSS) und die dazugehörige TypeScript-Logik, beispielsweise Klick-Events, Formularverarbeitung und die Darstellung von Daten.

# Angular CLI – Cheatsheet

## 1. Projektverwaltung

| Befehl               | Beschreibung                                  |
| -------------------- | --------------------------------------------- |
| `ng new projektname` | Neues Angular-Projekt erstellen               |
| `ng serve`           | Entwicklungsserver starten                    |
| `ng serve -o`        | Entwicklungsserver starten und Browser öffnen |
| `ng build`           | Anwendung für die Produktion bauen            |
| `ng version`         | Installierte Angular-Version anzeigen         |
| `ng help`            | Verfügbare Angular-Befehle anzeigen           |
| `ng update`          | Angular-Abhängigkeiten aktualisieren          |

## 2. Komponenten und Services erstellen

| Befehl                                | Beschreibung                |
| ------------------------------------- | --------------------------- |
| `ng g c components/home`              | Neue Component erstellen    |
| `ng g s services/survey`              | Neuen Service erstellen     |
| `ng g i interfaces/survey`            | Neues Interface erstellen   |
| `ng g class models/user`              | Neue Klasse erstellen       |
| `ng g pipe pipes/filter`              | Neue Pipe erstellen         |
| `ng g directive directives/highlight` | Neue Directive erstellen    |
| `ng g guard guards/auth`              | Neuen Route Guard erstellen |

**Abkürzungen:**

- `g` = `generate`
- `c` = `component`
- `s` = `service`
- `i` = `interface`

Beispiel: `ng generate component components/home` und `ng g c components/home` sind identisch.

## 3. Tests und Codequalität

| Befehl                                | Beschreibung                          |
| ------------------------------------- | ------------------------------------- |
| `ng test`                             | Unit-Tests ausführen                  |
| `ng test --watch=false`               | Tests einmalig ausführen              |
| `ng lint`                             | Linter ausführen, sofern konfiguriert |
| `ng build --configuration production` | Produktions-Build erstellen           |

## 4. Nützliche Optionen

| Befehl                                     | Beschreibung                                   |
| ------------------------------------------ | ---------------------------------------------- |
| `ng g c components/home --skip-tests`      | Component ohne Testdatei erstellen             |
| `ng g c components/home --inline-template` | HTML direkt in der TS-Datei definieren         |
| `ng g c components/home --inline-style`    | Styles direkt in der TS-Datei definieren       |
| `ng g c components/home --dry-run`         | Änderungen anzeigen, ohne Dateien zu erstellen |
| `ng serve --port 4300`                     | Entwicklungsserver auf Port 4300 starten       |

## 5. npm-Befehle

| Befehl                    | Beschreibung                       |
| ------------------------- | ---------------------------------- |
| `npm install`             | Projektabhängigkeiten installieren |
| `npm install paketname`   | Neues Paket installieren           |
| `npm uninstall paketname` | Paket entfernen                    |
| `npm outdated`            | Veraltete Pakete anzeigen          |
| `npm run`                 | Verfügbare npm-Skripte anzeigen    |

## 6. PowerShell – Dateien und Ordner

| Befehl          | Beschreibung                       |
| --------------- | ---------------------------------- |
| `ni support.md` | Neue Markdown-Datei erstellen      |
| `mkdir docs`    | Neuen Ordner erstellen             |
| `cd src/app`    | In einen Ordner wechseln           |
| `cd ..`         | Eine Verzeichnisebene zurück       |
| `ls`            | Dateien und Ordner anzeigen        |
| `code .`        | Aktuellen Ordner in VS Code öffnen |

---

**Hinweise:**

- Angular-CLI-Befehle innerhalb des Angular-Projektverzeichnisses ausführen.
- `ng lint` benötigt einen konfigurierten Linter, beispielsweise Angular ESLint.
- `ng g i` erstellt eine TypeScript-Interface-Datei. Interfaces benötigen keinen Angular-Decorator.
- Angular 22 verwendet standardmäßig Standalone Components.
- Die genaue Dateistruktur hängt von den CLI-Einstellungen ab.
