# PjStream - Video Streaming Platform

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern video streaming platform built with React, TypeScript, and Supabase for authentication.

## Features

- User authentication (Login/Signup)
- Video streaming capabilities
- Responsive design with Tailwind CSS
- Modern development stack (Vite, TypeScript)
- Supabase backend integration

## Technology Stack

- Frontend: React, TypeScript
- Styling: Tailwind CSS
- Build Tool: Vite
- Authentication: Supabase
- Linting: ESLint
- Formatting: Prettier

## Installation

1. Clone the repository:
```bash
git clone https://github.com/programerPj69/PjStream.git
cd PjStream
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env` file in the root directory with your Supabase credentials:
```env
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_ANON_KEY=your-supabase-key
```

## Available Scripts

- `dev`: Start development server
- `build`: Build for production
- `preview`: Preview production build
- `lint`: Run ESLint
- `format`: Run Prettier

## Project Structure

```
PjStream/
├── src/
│   ├── components/      # Reusable components
│   ├── hooks/           # Custom hooks
│   ├── lib/             # Library/SDK configurations
│   ├── pages/           # Page components
│   ├── App.tsx          # Main app component
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── .env                 # Environment variables
├── vite.config.ts       # Vite configuration
└── tailwind.config.js   # Tailwind configuration
```

## Screenshots

Coming soon...

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
