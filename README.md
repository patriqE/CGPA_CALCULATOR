# CGPA Calculator

A modern, full-stack web application for calculating Cumulative Grade Point Average (CGPA) built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **User Authentication**: Secure sign up and login functionality
- **Modern UI**: Clean, responsive design with Tailwind CSS
- **Form Validation**: Client-side validation with error handling
- **Protected Routes**: Authentication-based route protection
- **TypeScript**: Full type safety throughout the application
- **JWT Authentication**: Secure token-based authentication

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: JWT with bcrypt password hashing
- **API**: Next.js API routes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd cgpa-calculator
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory and add:

```
JWT_SECRET=your-jwt-secret-key
```

4. Run the development server:

```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   └── auth/
│   │       ├── login/
│   │       └── signup/
│   ├── dashboard/
│   ├── login/
│   ├── signup/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
├── types/
└── lib/
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Features in Development

- [ ] CGPA calculation functionality
- [ ] Course and semester management
- [ ] Grade tracking and history
- [ ] Export/import functionality
- [ ] Database integration
- [ ] Email verification
- [ ] Password reset functionality

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
"# CGPA_CALCULATOR" 
"# CGPA_CALCULATOR" 
