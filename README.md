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

Start the server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Development

For development mode:
```bash
npm run dev
```

## Project Structure

```
reddit-picker/
├── server.js           # Express server
├── package.json        # Node.js dependencies and scripts
├── public/             # Static files
│   ├── index.html      # Main HTML file
│   ├── css/            # Stylesheets
│   │   └── styles.css
│   └── js/             # Client-side JavaScript
│       └── script.js
└── README.md           # This file
```

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **UI Framework**: Bootstrap 5
- **Icons**: Font Awesome

## License

ISC
