# Quiz App Task List

Below is a structured task list broken into phases. You can copy these into a GitHub Project board as epics and issues.

## Phase 1: Core Quiz Builder

- Initialize Repository
- Create Git repo, set up folder structure (/client, /server)
- Add ESLint, Prettier, and basic README
- Install & Configure Backend
- Install Express, Mongoose, dotenv
- Connect to MongoDB Atlas and verify with a sample route
- Define Data Models
- Quiz schema with code, name, rounds
- Round sub-document with name and questions array
- Question sub-document with text, answers, correctAnswer
- Build Admin UI for Quiz Creation
- Form to enter quiz name and code
- Dynamic fields to add/remove rounds and questions
- Client-side validation (required fields, unique code check)
- Implement Quiz Creation API
- POST /api/quizzes to save new quiz
- GET /api/quizzes/:code to retrieve quiz by code

## Phase 2: Quiz Access & Lobby

- Route & Page for Code Entry
- Simple form asking for quiz code
- Client-side error handling for invalid codes
- Session Token Generation
- Generate short-lived token on successful code lookup
- Store token in HttpOnly cookie or localStorage
- Lobby UI
- Show quiz name, rounds count, “Waiting for host” message
- List of joined players (mocked list initially)
- Backend Lobby Endpoint
- GET /api/lobby/:code returns quiz details and active sessions
- Middleware to validate session token

## Phase 3: Game Flow & Question Delivery

- Define Game State in Memory
- Map<quizCode, { currentRound, questionIndex, players }>
- Admin Controls UI
- Buttons: Start Quiz, Next Round, Next Question, End Quiz
- Question Display & Answer Submission
- Render question and answer choices
- POST player answer endpoint and store to memory
- Scoring Logic
- Tally correct answers per question
- Update in-memory player scores

## Phase 4: WebSocket Integration

- Setup Socket.io
- Integrate on server and client
- Configure CORS and heartbeat pings
- Room Management
- Join players to room named by quiz code
- Emit events: quizStarted, roundStarted, question, scoresUpdate
- Reconnection Logic
- Handle disconnect and reconnect events
- Sync client state on reconnect
- Admin Broadcasts & Controls
- Socket events for admin actions
- Confirmations/acknowledgements from clients

## Phase 5: Hosting & Security

- Deploy Frontend
- Build static assets
- Host on Vercel or Netlify
- Deploy Backend
- Containerize with Docker (optional)
- Host on Render or Railway
- Set environment variables securely
- Secure Sessions & API
- Enable HTTPS
- Configure CORS whitelist
- Use Helmet and rate-limiting middleware
- Monitoring & Logs
- Add basic logging with Winston or Morgan
- Connect to a free-tier monitoring service (e.g., Logflare)

## Phase 6 (Optional): User Accounts & Persistence

- User Authentication
- Implement JWT login/register endpoints
- Create User model
- Persist Game History
- Store completed quiz sessions and player scores in MongoDB
- Endpoints to fetch past results
- User Dashboard
- UI for users to view their quiz history and stats

## Next Steps & Extras

- Draft a GitHub Project board with these phases as columns
- Sketch out WebSocket event payloads and client workflows
- Write basic unit tests for your API routes with Jest
- Consider Redis for persisting in-memory state across restarts
