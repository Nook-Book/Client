# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Nook Book (독서두기) is a React Native mobile application built with Expo, TypeScript, and React Query. It's a Korean reading management app that allows users to track reading habits, participate in reading challenges, and manage their book collections.

## Development Commands

### Core Development

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS device/simulator
- `npm run web` - Run web version

### Building & Deployment

- Build for production using Expo EAS Build (requires EAS CLI)
- Project uses EAS Updates for over-the-air updates

### No Test Suite Available

This project does not currently have a test suite configured.

## Architecture Overview

### Tech Stack

- **Framework**: React Native with Expo SDK 53
- **Language**: TypeScript with strict mode enabled
- **State Management**: Zustand for global state, React Query for server state
- **Navigation**: React Navigation v6 with bottom tabs and stack navigators
- **Authentication**: Custom auth context with Kakao SDK integration
- **Networking**: Axios with request/response interceptors
- **Storage**: AsyncStorage for persistence, SecureStore for tokens

### Project Structure

```
src/
├── api/           # API endpoints organized by feature
├── components/    # Reusable UI components organized by screen/feature
├── context/       # React contexts (AuthContext)
├── hooks/         # Custom hooks organized by feature
├── pages/         # Screen components organized by feature
├── store/         # Zustand stores
├── styles/        # Style definitions and theme
├── types/         # TypeScript type definitions
└── utils/         # Utility functions
```

### Key Architectural Patterns

#### Authentication Flow

- `AuthProvider` wraps the entire app providing auth state
- `AuthConsumer` conditionally renders login stack or main app based on auth status
- JWT tokens stored in SecureStore with automatic API header injection
- Supports Kakao social login integration

#### Navigation Architecture

- Root level: `AuthConsumer` → `LoginStackScreen` | `TabNavigation`
- Main app uses bottom tab navigation with 4 tabs: 서재 (Library), 검색 (Search), 챌린지 (Challenge), 마이 (My)
- Each tab has its own stack navigator for nested navigation
- Deep linking support for book details via `nookbook://book/{isbn}` scheme

#### API Layer

- Centralized Axios instance with base URL `https://nookbook.p-e.kr/`
- Request interceptor automatically adds Bearer token
- API endpoints organized by feature domains (auth, book, challenge, etc.)
- React Query for caching and state synchronization

#### Component Organization

- Components organized by feature/screen rather than type
- Heavy use of StyleSheet objects for styling (no CSS-in-JS)
- Custom theme system in `src/styles/Theme.ts`
- SVG icons imported as React components

### State Management Strategy

- **Local State**: React hooks (useState, useReducer)
- **Global State**: Zustand stores for UI state
- **Server State**: React Query for API data
- **Authentication**: Context API for auth state
- **Navigation State**: React Navigation handles navigation state

### Mobile-Specific Features

- Push notifications with Expo Notifications
- Image picker for profile/book images
- Deep linking for sharing books
- Onboarding overlay for first-time users
- Platform-specific styling for iOS/Android differences

## Development Guidelines

### File Naming Conventions

- **Files/Images**: PascalCase
- **Folders**: camelCase
- **Components**: PascalCase with descriptive names
- **Boolean variables**: isVariableName format

### Code Organization

- API calls grouped by domain in `src/api/`
- Types organized by feature in `src/types/`
- Hooks follow `use{Feature}` naming pattern
- Styles colocated with components in `styles/` directory

### Korean Language Support

- UI text primarily in Korean
- Navigation tab names: "서재", "검색", "챌린지", "마이"
- Comments and variable names in English for developer readability

### Platform Configuration

- Metro config customized for SVG support via react-native-svg-transformer
- Babel config uses standard expo preset
- TypeScript strict mode enabled for better type safety
- Expo app.json configured for iOS/Android builds with push notifications

## Key Features to Understand

1. **Reading Timer**: Users can set reading goals and track reading time
2. **Book Collections**: Personal library management with categories
3. **Reading Challenges**: Social challenges with friends
4. **Note Taking**: Rich text notes with image support
5. **Progress Tracking**: Reading statistics and reports
6. **Social Features**: Friend connections and sharing

This is an active mobile app targeting Korean users with social reading features.

# Using Gemini CLI for Large Codebase Analysis

When analyzing large codebases or multiple files that might exceed context limits, use the Gemini CLI with its massive
context window. Use `gemini -p` to leverage Google Gemini's large context capacity.

## File and Directory Inclusion Syntax

Use the `@` syntax to include files and directories in your Gemini prompts. The paths should be relative to WHERE you run the
gemini command:

### Examples:

**Single file analysis:**

````bash
  gemini -p "@src/main.py Explain this file's purpose and structure"

  Multiple files:
  gemini -p "@package.json @src/index.js Analyze the dependencies used in the code"

  Entire directory:
  gemini -p "@src/ Summarize the architecture of this codebase"

  Multiple directories:
  gemini -p "@src/ @tests/ Analyze test coverage for the source code"

  Current directory and subdirectories:
  gemini -p "@./ Give me an overview of this entire project"

#
 Or use --all_files flag:
  gemini --all_files -p "Analyze the project structure and dependencies"

  Implementation Verification Examples

  Check if a feature is implemented:
  gemini -p "@src/ @lib/ Has dark mode been implemented in this codebase? Show me the relevant files and functions"

  Verify authentication implementation:
  gemini -p "@src/ @middleware/ Is JWT authentication implemented? List all auth-related endpoints and middleware"

  Check for specific patterns:
  gemini -p "@src/ Are there any React hooks that handle WebSocket connections? List them with file paths"

  Verify error handling:
  gemini -p "@src/ @api/ Is proper error handling implemented for all API endpoints? Show examples of try-catch blocks"

  Check for rate limiting:
  gemini -p "@backend/ @middleware/ Is rate limiting implemented for the API? Show the implementation details"

  Verify caching strategy:
  gemini -p "@src/ @lib/ @services/ Is Redis caching implemented? List all cache-related functions and their usage"

  Check for specific security measures:
  gemini -p "@src/ @api/ Are SQL injection protections implemented? Show how user inputs are sanitized"

  Verify test coverage for features:
  gemini -p "@src/payment/ @tests/ Is the payment processing module fully tested? List all test cases"

  When to Use Gemini CLI

  Use gemini -p when:
  - Analyzing entire codebases or large directories
  - Comparing multiple large files
  - Need to understand project-wide patterns or architecture
  - Current context window is insufficient for the task
  - Working with files totaling more than 100KB
  - Verifying if specific features, patterns, or security measures are implemented
  - Checking for the presence of certain coding patterns across the entire codebase

  Important Notes

  - Paths in @ syntax are relative to your current working directory when invoking gemini
  - The CLI will include file contents directly in the context
  - No need for --yolo flag for read-only analysis
  - Gemini's context window can handle entire codebases that would overflow Claude's context
  - When checking implementations, be specific about what you're looking for to get accurate results # Using Gemini CLI for Large Codebase Analysis


  When analyzing large codebases or multiple files that might exceed context limits, use the Gemini CLI with its massive
  context window. Use `gemini -p` to leverage Google Gemini's large context capacity.


  ## File and Directory Inclusion Syntax


  Use the `@` syntax to include files and directories in your Gemini prompts. The paths should be relative to WHERE you run the
   gemini command:


  ### Examples:


  **Single file analysis:**
  ```bash
  gemini -p "@src/main.py Explain this file's purpose and structure"


  Multiple files:
  gemini -p "@package.json @src/index.js Analyze the dependencies used in the code"


  Entire directory:
  gemini -p "@src/ Summarize the architecture of this codebase"


  Multiple directories:
  gemini -p "@src/ @tests/ Analyze test coverage for the source code"


  Current directory and subdirectories:
  gemini -p "@./ Give me an overview of this entire project"
  # Or use --all_files flag:
  gemini --all_files -p "Analyze the project structure and dependencies"


  Implementation Verification Examples


  Check if a feature is implemented:
  gemini -p "@src/ @lib/ Has dark mode been implemented in this codebase? Show me the relevant files and functions"


  Verify authentication implementation:
  gemini -p "@src/ @middleware/ Is JWT authentication implemented? List all auth-related endpoints and middleware"


  Check for specific patterns:
  gemini -p "@src/ Are there any React hooks that handle WebSocket connections? List them with file paths"


  Verify error handling:
  gemini -p "@src/ @api/ Is proper error handling implemented for all API endpoints? Show examples of try-catch blocks"


  Check for rate limiting:
  gemini -p "@backend/ @middleware/ Is rate limiting implemented for the API? Show the implementation details"


  Verify caching strategy:
  gemini -p "@src/ @lib/ @services/ Is Redis caching implemented? List all cache-related functions and their usage"


  Check for specific security measures:
  gemini -p "@src/ @api/ Are SQL injection protections implemented? Show how user inputs are sanitized"


  Verify test coverage for features:
  gemini -p "@src/payment/ @tests/ Is the payment processing module fully tested? List all test cases"


  When to Use Gemini CLI


  Use gemini -p when:
  - Analyzing entire codebases or large directories
  - Comparing multiple large files
  - Need to understand project-wide patterns or architecture
  - Current context window is insufficient for the task
  - Working with files totaling more than 100KB
  - Verifying if specific features, patterns, or security measures are implemented
  - Checking for the presence of certain coding patterns across the entire codebase


  Important Notes


  - Paths in @ syntax are relative to your current working directory when invoking gemini
  - The CLI will include file contents directly in the context
  - No need for --yolo flag for read-only analysis
  - Gemini's context window can handle entire codebases that would overflow Claude's context
  - When checking implementations, be specific about what you're looking for to get accurate results
````
