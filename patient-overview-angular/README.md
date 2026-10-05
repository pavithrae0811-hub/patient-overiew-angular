# Patient Overview Angular

A hardcoded patient-management UI recreated from the supplied screenshot.

## Stack

- Angular 22 standalone application
- Angular Material dependency
- Tailwind CSS v4
- Bootstrap 5
- `@siemens/ngx-datatable` for the patient table
- Angular Router
- No backend/API/database

## Routes

- `/patients` — patient list
- `/patients/:id` — patient detail report

## Run

```bash
npm install
npm start
```

Then open:

```text
http://localhost:4200
```

## Project structure

```text
src/
  app/
    data/
      patients.data.ts
    models/
      patient.model.ts
    pages/
      patient-list/
        patient-list.ts
        patient-list.html
        patient-list.css
      patient-detail/
        patient-detail.ts
        patient-detail.html
        patient-detail.css
    services/
      patient.service.ts
    app.ts
    app.html
    app.css
    app.routes.ts
  main.ts
  styles.css
```

The data is intentionally hardcoded in `src/app/data/patients.data.ts`.
