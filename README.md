# Reddit Picker

A Node.js web application to fetch random posts from Reddit subreddits.

## Features

- Fetch random posts from r/AskReddit and r/AskRedditEspañol
- Dark/Light theme toggle
- Bilingual support (English/Spanish)
- Responsive design

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Metaheuristic08/reddit-picker.git
cd reddit-picker
```

2. Install dependencies:
```bash
npm install
```

## Usage

1. Build the React application:
```bash
npm run build
```

2. Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Development

For development mode with auto-rebuild:
```bash
npm run dev
```

Then in a separate terminal, start the server:
```bash
npm start
```

## Project Structure

```
reddit-picker/
├── server.js           # Express server
├── package.json        # Node.js dependencies and scripts
├── webpack.config.js   # Webpack configuration
├── src/                # React source files
│   ├── index.js        # React entry point
│   ├── index.html      # HTML template
│   ├── App.jsx         # Main App component
│   ├── App.css         # App styles
│   └── components/     # React components
│       ├── ThemeToggle.jsx
│       ├── LanguageToggle.jsx
│       ├── RedditButtons.jsx
│       └── PostCard.jsx
├── dist/               # Built React application (generated)
├── public/             # Legacy static files (deprecated)
└── README.md           # This file
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: React 18, JavaScript (ES6+)
- **Build Tools**: Webpack, Babel
- **UI Framework**: Bootstrap 5
- **Icons**: Font Awesome

## License

ISC
