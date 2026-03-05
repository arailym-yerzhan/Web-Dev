# Album Browser

A simple Angular 17 single-page application for browsing and managing albums using the JSONPlaceholder API.

## Project Description

Album Browser is an academic lab project demonstrating fundamental Angular concepts including:
- Angular Router for navigation
- HttpClient for API communication
- Service layer architecture
- Reactive programming with Observables
- Component-based UI architecture
- TypeScript interfaces
- CSS Grid for responsive layouts

## Features

- Browse albums from JSONPlaceholder API
- View album details
- Edit album titles
- Delete albums
- View photos in an album
- Responsive photo gallery using CSS Grid
- Clean, minimal UI without external frameworks

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd album-browser
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

Start the development server:
```bash
npm start
```

or

```bash
ng serve
```

The application will be available at `http://localhost:4200/`

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/album-browser/` directory.

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── home/
│   │   ├── about/
│   │   ├── albums/
│   │   ├── album-detail/
│   │   └── album-photos/
│   ├── models/
│   │   ├── album.ts
│   │   └── photo.ts
│   ├── services/
│   │   └── album.service.ts
│   ├── app.component.ts
│   ├── app.routes.ts
│   └── app.component.html
├── main.ts
├── index.html
└── styles.css
```

## Routes

- `/home` - Welcome page
- `/about` - About page with course information
- `/albums` - List of all albums
- `/albums/:id` - Album detail page
- `/albums/:id/photos` - Photo gallery for an album

## API Reference

The application uses the JSONPlaceholder API:
- Base URL: `https://jsonplaceholder.typicode.com`

### Endpoints Used

- `GET /albums` - Fetch all albums
- `GET /albums/:id` - Fetch a specific album
- `GET /albums/:id/photos` - Fetch photos for an album
- `PUT /albums/:id` - Update an album
- `DELETE /albums/:id` - Delete an album

## Technologies Used

- Angular 17
- TypeScript
- RxJS
- CSS3 (Grid, Flexbox)

## Notes

- No external CSS frameworks (Bootstrap, Tailwind) are used
- Styling is implemented with clean, vanilla CSS
- Components use Angular's standalone API
- Proper separation of concerns with service layer
- Full TypeScript strict mode enabled
