<!-- @format -->

# ThinkBoard

ThinkBoard is a simple notes/catalog app with full CRUD support. The backend exposes a REST API for creating, viewing, updating, and deleting notes, while the frontend is a Vite + React app that routes between the home page, note creation screen, and note details screen.

## Features

- Create notes with a title and content.
- View the full list of notes.
- Open a single note by id.
- Update existing notes.
- Delete notes.
- Basic API rate limiting with an Upstash-backed limiter.

## Tech Stack

- React 19
- Vite
- React Router
- Axios
- Tailwind CSS + DaisyUI
- Express
- MongoDB + Mongoose
- Upstash Redis for rate limiting

## Project Structure

- `backend/` contains the Express API, database connection, rate limiter, controllers, and note model.
- `frontend/vite-project/` contains the React app, pages, shared components, and styling.

## Setup

### 1. Install dependencies

Install packages for both apps:

```bash
cd backend
npm install

cd ../frontend/vite-project
npm install
```

### 2. Configure environment variables

Create a `.env` file inside `backend/` with the values required by the API:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
```

If you are using the rate limiter, make sure your Upstash environment variables are available as well.

### 3. Start the backend

```bash
cd backend
npm run dev
```

The server listens on `http://localhost:5001` by default.

### 4. Start the frontend

```bash
cd frontend/vite-project
npm run dev
```

Vite will print the local development URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

### Backend

- `npm run dev` - start the Express server with Nodemon.

### Frontend

- `npm run dev` - start the Vite development server.
- `npm run build` - create a production build.
- `npm run lint` - run ESLint.
- `npm run preview` - preview the production build locally.

## API Endpoints

The notes API is mounted at `/api/notes`.

- `GET /api/notes` - fetch all notes.
- `GET /api/notes/:id` - fetch a single note.
- `POST /api/notes` - create a note.
- `PUT /api/notes/:id` - update a note.
- `DELETE /api/notes/:id` - delete a note.

## Frontend Routes

- `/` - home page
- `/create` - create note page
- `/note/:id` - note detail page

## Notes

- The backend uses ES modules.
- MongoDB connection is handled through `MONGO_URI`.
- Rate limiting is applied through middleware before the note routes.
- The UI is still being built out, but the app structure already supports the main CRUD flows.
