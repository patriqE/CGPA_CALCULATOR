<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# CGPA Calculator Project Instructions

This is a Next.js full-stack application for calculating Cumulative Grade Point Average (CGPA) built with:

## Tech Stack

- **Frontend**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Next.js API routes with JWT
- **Database**: (To be implemented)

## Project Structure

- Use `src/app` directory for App Router pages and layouts
- Components should be placed in `src/components`
- API routes should be in `src/app/api`
- Types should be in `src/types`
- Utilities should be in `src/lib`

## Development Guidelines

### Authentication

- Implement secure user authentication with sign up/login functionality
- Use form validation with proper error handling
- Implement JWT tokens for session management
- Create protected routes for authenticated users

### UI/UX

- Follow modern, clean UI design principles
- Use Tailwind CSS for responsive design
- Implement proper form validation with user feedback
- Create intuitive navigation and user experience

### Code Quality

- Use TypeScript for type safety
- Follow React best practices and hooks
- Implement proper error handling
- Write clean, maintainable code

### Features to Implement

1. User authentication (sign up, login, logout)
2. CGPA calculation functionality
3. Course and semester management
4. Grade tracking and history
5. Export/import functionality
6. Responsive design for mobile and desktop

## API Structure

- `/api/auth/signup` - User registration
- `/api/auth/login` - User login
- `/api/auth/logout` - User logout
- `/api/courses` - Course management
- `/api/semesters` - Semester management
- `/api/calculate` - CGPA calculation

When generating code, prioritize:

1. Security and authentication
2. Type safety with TypeScript
3. Clean, modern UI with Tailwind CSS
4. Proper error handling
5. Responsive design
6. Code maintainability
