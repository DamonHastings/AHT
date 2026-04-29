# Therapist Profile Website

A MERN stack application with Sanity CMS for managing therapist profile content.

## Tech Stack

- **Frontend**: React 18+ with Vite
- **Backend**: Express.js with Node.js
- **CMS**: Sanity.io
- **Database**: MongoDB (MongoDB Atlas)
- **Deployment**: Vercel

## Project Structure

```
/
├── frontend/          # React application
├── backend/           # Express.js API
├── sanity/            # Sanity Studio configuration
└── vercel.json        # Vercel deployment config
```

## Setup Instructions

### Prerequisites

- Node.js 18+ and npm/yarn
- MongoDB Atlas account (or local MongoDB)
- Sanity.io account

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd AHT
   ```

2. **Install frontend dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Install backend dependencies**

   ```bash
   cd ../backend
   npm install
   ```

4. **Install Sanity dependencies**
   ```bash
   cd ../sanity
   npm install
   ```

### Environment Variables

Create `.env` files in each directory:

**frontend/.env**

```
VITE_SANITY_PROJECT_ID=your_sanity_project_id
VITE_SANITY_DATASET=production
VITE_API_URL=http://localhost:5000/api
```

**backend/.env**

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=http://localhost:5173
```

**sanity/.env**

```
SANITY_STUDIO_PROJECT_ID=your_sanity_project_id
SANITY_STUDIO_DATASET=production
SANITY_API_TOKEN=your_write_token
```

### Development

1. **Start Sanity Studio** (in one terminal)

   ```bash
   cd sanity
   npm run dev
   ```

2. **Start backend server** (in another terminal)

   ```bash
   cd backend
   npm run dev
   ```

3. **Start frontend** (in another terminal)
   ```bash
   cd frontend
   npm run dev
   ```

### Sanity Setup

1. Create a new project at [sanity.io](https://sanity.io)
2. Initialize Sanity Studio (if not already done):
   ```bash
   cd sanity
   npx sanity init
   ```
3. Configure your project ID and dataset in `sanity/sanity.config.js`
4. **Seed initial content** (optional but recommended):
   ```bash
   cd sanity
   # Create .env file with SANITY_STUDIO_PROJECT_ID, SANITY_STUDIO_DATASET, and SANITY_API_TOKEN
   npm run seed
   ```
   See `sanity/SEED_README.md` for detailed seeding instructions.
5. **Configure CORS Origins** (IMPORTANT - Required to fix CORS 403 errors):

   - Go to [sanity.io/manage](https://www.sanity.io/manage)
   - Select your project
   - Navigate to **API** → **CORS origins**
   - Click **Add CORS origin**
   - Add the following origins:
     - `http://localhost:5173` (Vite dev server)
     - `http://localhost:3000` (if using different port)
     - Your production domain (e.g., `https://yourdomain.vercel.app`)
   - Make sure **Allow credentials** is enabled for localhost origins
   - Click **Save**

   **Note**: Without configuring CORS origins, you'll get 403 errors when the frontend tries to fetch data from Sanity.

### Vercel Deployment

1. Connect your repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy (Vercel will auto-detect the build settings)

### Render Backend Deployment

The backend can be deployed to Render from the root `render.yaml` blueprint.
Create a new Render Blueprint from this repository and configure these secret
environment variables in the Render dashboard:

```
MONGODB_URI=your_mongodb_connection_string
CORS_ORIGIN=https://your_frontend_domain
PRACTITIONER_EMAIL=recipient@example.com
MAILER_URL=smtp://user:password@smtp.example.com:587
```

If you do not use `MAILER_URL`, configure `SMTP_HOST`, `SMTP_USER`,
`SMTP_PASS`, and optionally `SMTP_PORT`, `SMTP_SECURE`, and `MAIL_FROM` instead.
After Render deploys, set `VITE_API_BASE_URL` in the frontend environment to the
Render service URL.

## Content Architecture

The project uses a reusable content architecture that supports:

- **Site Settings**: Global configuration, SEO, navigation, and footer
- **Navigation Menus**: Flexible navigation system with anchor, internal, and external links
- **Footer Content**: Multi-column footer with social links
- **Content Blocks**: Reusable content components (CTAs, testimonials, feature lists, FAQs)
- **Social Links**: Centralized social media profiles

See `sanity/SEED_README.md` for details on seeding initial content.

## Features

- Therapist profile display
- Contact form submission
- Consultation booking
- Content managed via Sanity CMS
- Reusable content architecture
- Responsive design
