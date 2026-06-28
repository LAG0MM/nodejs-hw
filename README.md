# nodejs-hw

## Homework 1: Express app for notes collection

**What was done**
- Initialized project with npm init
- Installed express, cors, pino-http, dotenv
- Installed nodemon and eslint as dev dependencies
- Created src/server.js with express server
- PORT is loaded from .env using dotenv
- Added cors middleware
- Added express.json() middleware
- Set up pino-http logger
- Implemented GET /notes route
- Implemented GET /notes/:noteId route
- Implemented GET /test-error route
- Added 404 middleware for undefined routes
- Added 500 error handling middleware
- Deployed to render.com

## Homework 2: MongoDB connection

**What was added (Update)**
- Connected to MongoDB using Mongoose
- Moved connection string to .env (MONGO_URL)
- Created Mongoose schema and model for Notes
- Added POST /notes route to create notes
- Added PATCH /notes/:noteId route to update notes
- Added DELETE /notes/:noteId route to delete notes
- Removed the old /test-error route

## Homework 3: Filtering, pagination and validation

**What was added (Update)**
- Moved tags list to src/constants/tags.js
- Added index to tag field in the Note schema
- Added filtering for GET /notes by tag and search (title, content)
- Added pagination for GET /notes with page and perPage query params
- GET /notes now returns page, perPage, totalNotes, totalPages and notes
- Installed celebrate and joi for request validation
- Created validation schemas in src/validations/notesValidation.js
- Added validation middleware to all note routes
- Added celebrate errors handler in server.js
- Deployed branch 03-validation to render.com

## Homework 4: Auth, sessions, cookies and private notes

**What was added (Update)**
- Installed bcrypt and cookie-parser
- Added User model with username, email, password
- Hidden password from json response via toJSON method
- Added pre('save') hook to set username from email by default
- Added Session model with access and refresh tokens and their expiration dates
- Added time constants in src/constants/time.js
- Added auth service with createSession and setSessionCookies helpers
- Added auth validation schemas (registerUserSchema, loginUserSchema)
- Added auth controller with register, login, refresh and logout
- Added authenticate middleware that checks accessToken cookie
- Notes model now has required userId field
- Notes routes are protected by authenticate middleware
- Each note operation works only with notes of the current user
- Deployed branch 04-auth to render.com

## Homework 5: Password reset email and avatar upload

**What was added (Update)**
- Installed nodemailer, jsonwebtoken, handlebars, cloudinary and multer
- Added new env vars: JWT_SECRET, FRONTEND_DOMAIN, SMTP_*, CLOUDINARY_*
- Added avatar field to the User model with a default url
- Added HTML email template src/templates/reset-password-email.html
- Added sendEmail utility using nodemailer and Brevo SMTP
- Added POST /auth/request-reset-email route that sends a reset link with JWT
- Added POST /auth/reset-password route that verifies the JWT and updates the password
- Added multer middleware that stores files in memory, limits to 2MB and accepts only images
- Added saveFileToCloudinary utility that uploads buffers via upload_stream
- Added userRoutes and updateUserAvatar controller
- Added PATCH /users/me/avatar route protected by authenticate and upload middleware
- Moved authenticate to per-route in notesRoutes so 404 works for unknown paths
- Deployed branch 05-mail-and-img to render.com
