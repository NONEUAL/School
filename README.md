
# Student Gateway

### An Integrated Digital Platform for Streamlining Educational Management and Student Services

**Olivarez College Tagaytay** · Bachelor of Science in Information Technology  
IT 204 – System Analysis and Design · AY 2025–2026 · BSIT 212-A

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)
[![Lucide](https://img.shields.io/badge/Lucide_React-0.263-F56565?style=flat-square)](https://lucide.dev)
[![License](https://img.shields.io/badge/License-Academic-2D6A35?style=flat-square)]()

</div>

-----

## What Is This?

**Student Gateway** is a web-based student portal prototype built for Olivarez College Tagaytay (OCT). It solves a real problem: students at OCT currently have to walk to different offices just to check their grades, tuition balance, or class schedule. This platform brings everything together in one place.

There are **two separate portals** in this project:

|Portal              |Who It’s For          |What They Can Do                                |
|--------------------|----------------------|------------------------------------------------|
| **Student Portal**|Enrolled students     |View grades, schedule, tuition, profile         |
| **Faculty Portal**|Instructors / Teachers|Encode grades, view class lists, manage schedule|

-----

## Features

### Student Portal

- **Secure Login** — Student ID + password authentication with session storage
-  **Dashboard** — GWA summary, grade overview table, academic calendar
-  **Class Schedule** — Full timetable with subject, room, faculty, and units
-  **Grades** — Prelim, Midterm, Finals per subject with auto-computed average and pass/fail status
-  **Tuition & Payments** — Fee breakdown, payment history, outstanding balance
-  **Certificate of Matriculation** — Downloadable/printable document generated in-browser
-  **Profile & Account** — View info, change password, sign out
-  **School Information Modal** — Quick access to OCT’s address, contacts, and office hours

### Faculty Portal

-  **Dashboard** — Classes handled, total students, schedule preview, calendar
-  **My Classes** — Overview of all assigned classes this semester
-  **Grade Encoding** — Enter Prelim, Midterm, Finals per student with live average computation
-  **Class List** — Full student roster per section
-  **Course Syllabus** — View and download syllabus files
-  **Archived Classes** — Read-only record of previous semester classes
-  **Downloadable Forms** — Grade sheets, clearance forms, and other official templates
-  **Personal Information** — Update profile details

-----

##  Tech Stack

|Layer             |Technology                               |
|------------------|-----------------------------------------|
|Frontend Framework|[React 18](https://react.dev)            |
|Build Tool        |[Vite 5](https://vitejs.dev)             |
|Icons             |[Lucide React](https://lucide.dev)       |
|Styling           |Plain CSS (modular per component)        |
|Data Storage      |`localStorage` (browser — prototype only)|
|Language          |JavaScript (JSX)                         |


> **Note:** This is a frontend prototype. There is no real backend or database. All data is stored in `localStorage` and defined in `src/constants/data.js`. A full production version would use Node.js + MySQL on the backend.

-----

##  Getting Started

### Prerequisites

Make sure you have these installed:

- [Node.js](https://nodejs.org) (v18 or higher)
- npm (comes with Node.js)

### Installation

```bash
# 1. Clone or download the project
git clone https://github.com/your-username/student-gateway.git
cd student-gateway

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Then open your browser and go to: **http://localhost:5173**

### Build for Production

```bash
npm run build
npm run preview
```

-----

##  Demo Accounts

The app comes with pre-loaded demo accounts. You can log in with any of these:

### Student Portal (`/`)

|Name                   |Student ID |Password    |
|-----------------------|-----------|------------|
|Velasquez, Gabriel     |`211C-5169`|`gabriel123`|
|Dela Cruz, Maria Santos|`211C-5201`|`maria123`  |
|Reyes, John Carlo      |`211C-5088`|`john123`   |


> **Tip:** Click any name on the left panel of the login page to auto-fill the credentials.

### Faculty Portal

The faculty portal is a separate app located in a different folder. Run it the same way (`npm install` → `npm run dev`) from that folder.

-----

##  Project Structure

```
student-gateway/
├── public/
│   └── OCT_logo.png              # School logo
├── src/
│   ├── main.jsx                  # App entry point
│   ├── App.jsx                   # Root component + routing logic
│   ├── constants/
│   │   ├── data.js               # All mock data (students, grades, schedule, etc.)
│   │   └── icons.js              # Lucide icon registry
│   ├── components/
│   │   ├── Navbar.jsx            # Top navigation bar
│   │   ├── Sidebar.jsx           # Left sidebar with navigation links
│   │   ├── PageHeader.jsx        # Reusable page title component
│   │   ├── StatCard.jsx          # Dashboard stat card
│   │   └── SchoolInfoModal.jsx   # School information popup
│   ├── views/
│   │   ├── LoginPage.jsx         # Login screen
│   │   ├── DashboardView.jsx     # Main dashboard with calendar
│   │   ├── ScheduleView.jsx      # Class schedule table
│   │   ├── GradesView.jsx        # Grades with GWA computation
│   │   ├── TuitionView.jsx       # Fees, payments, and COE download
│   │   ├── ProfileView.jsx       # Student profile and password change
│   │   └── PlaceholderView.jsx   # "Coming soon" fallback
│   └── styles/
│       ├── global.css            # Resets, shared classes, animations
│       ├── auth.css              # Login page styles
│       ├── navbar.css
│       ├── sidebar.css
│       ├── dashboard.css         # Dashboard + calendar styles
│       ├── grades.css
│       ├── schedule.css
│       ├── tuition.css
│       ├── profile.css
│       ├── pageheader.css
│       └── schoolinfo.css
├── index.html
├── vite.config.js
└── package.json
```

-----

##  Design System

The portal uses a consistent green-and-gold color palette inspired by OCT’s official branding.

|Token        |Value    |Usage                          |
|-------------|---------|-------------------------------|
|`--green-900`|`#0A1F0A`|Darkest backgrounds, gradients |
|`--green-800`|`#1A3A1A`|Primary dark elements          |
|`--green-700`|`#2D6A35`|Buttons, accents, active states|
|`--green-500`|`#4A9A55`|Hover states, secondary accents|
|`--gold`     |`#C8A825`|Highlights, awards, CTA buttons|
|`--bg`       |`#F0FAF2`|Page background                |
|`--card`     |`#FFFFFF`|Card backgrounds               |

**Typography:** `Plus Jakarta Sans` (body) + `Urbanist` (headings and large numbers)

-----

##  Known Issues & Limitations

- **No real backend** — All data is hardcoded in `data.js`. Nothing is saved to a real database.
- **No online payments** — The tuition page shows payment history but cannot process new payments.
- **No real-time notifications** — No email or SMS alerts for grade releases or deadlines.
- **Single device session** — Login session is stored in `localStorage` per browser. Logging in on another device won’t carry over.
- **Service Worker conflict** — If you see a MIME type error on `localhost`, it’s caused by a stale service worker from a previous project. Fix it by going to **DevTools → Application → Service Workers → Unregister**, then hard-refresh (`Ctrl+Shift+R`).

-----

##  Academic Context

This project was created as the **IT 204 Final Project** at Olivarez College Tagaytay.

|Detail       |Info                               |
|-------------|-----------------------------------|
|Subject      |IT 204 – System Analysis and Design|
|Instructor   |Mrs. Aleli D. Miranda, LPT, MSIT   |
|Section      |BSIT 212-A                         |
|Academic Year|2025–2026, 2nd Semester            |
|Submission   |Finals Week, May 4–9, 2026         |

The project applies the **Systems Development Life Cycle (SDLC)** — from system analysis and data gathering to system design and prototype development. Full documentation (Background of the Study, System Analysis, Diagrams, Cost-Benefit Analysis, etc.) is submitted separately as a Word document.

-----

##  Future Plans

If this system were to be fully developed and deployed, the following features would be added:

- [ ] Real backend with Node.js + Express
- [ ] MySQL database for persistent student and grade records
- [ ] Online payment integration (GCash, Maya, bank transfer)
- [ ] Email/SMS notifications for grades and payment deadlines
- [ ] Admin panel for the Registrar and Accounting Office
- [ ] Dedicated Android/iOS mobile app
- [ ] Automated grade report generation (PDF export)
- [ ] Integration with existing OCT enrollment records

-----