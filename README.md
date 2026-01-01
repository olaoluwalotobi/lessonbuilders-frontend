# LessonBuilders - README

## 📚 What This Package Is

**LessonBuilders** is an AI-powered lesson planning tool that helps K-12 teachers create standards-aligned, professionally structured lesson plans in minutes instead of hours.

### Key Features:
- **7-Step Guided Builder** - From basic info to collaboration suggestions
- **4 Research-Backed Frameworks** - Madeline Hunter, 5E Model, UbD, Gradual Release
- **Teaching Style Customization** - Personalize lessons to match your classroom approach
- **California Standards Verification** - Real-time alignment to CDE standards
- **AI-Powered Generation** - Complete lessons in ~30 seconds via Claude API
- **Export & Share** - Print-ready formats, Discover community library
- **Collaboration Finder** - Cross-curricular connection suggestions

---

## 📁 What We Have - Complete File Inventory

### **Core Build Flow (7 Steps)**
```
build-step1.html    ✅ Basic Information (grade, subject, topic, duration)
build-step2.html    ✅ Teaching Style (5 sliders: hands-on, direct, collaborative, independent, technology)
build-step3.html    ✅ Choose Template (framework selection with recommendations)
build-step4.html    ✅ Build Method (generate now vs section-by-section)
build-step5.html    ✅ Assessments (exit ticket, formative checks, homework, quiz)
build-step6.html    ✅ Preview & Export (NEW - with standards verification)
build-step7.html    ✅ Collaborate (cross-curricular suggestions)
```

### **Alternative Build Path**
```
build-section-by-section.html    ✅ Guided section builder with recommendations
```

### **Main Pages**
```
index.html          ✅ Landing page with value proposition
library.html        ✅ My Lessons - organize by subject/template/grade
discover.html       ✅ Community-shared lessons browser
about.html          ✅ Help center (placeholder)
lesson-view.html    ✅ Individual lesson viewer with edit/export options
```

### **Reusable Components**
```
loading-component-reusable.html    ✅ Building blocks animation
```

### **Assets**
```
logo.png    ✅ LessonBuilders logo
```

### **Documentation (NEW)**
```
README.md                   ✅ This file - package overview
DEVELOPER_FRAMEWORK.md      ✅ Technical implementation guide
```

---

## 🎯 How to Use It - User Flow

### **Step-by-Step Process:**

1. **Start Building** (`index.html` → click "Start Building")
   
2. **Step 1: Basic Information** (`build-step1.html`)
   - Select grade level (K-12)
   - Choose subject (Math, ELA, Science, History, Arts, PE, Other)
   - Enter lesson topic (e.g., "Introduction to fractions")
   - Set duration (15-120 minutes slider)
   - Optional: Add class size, student needs, prior knowledge

3. **Step 2: Teaching Style** (`build-step2.html`)
   - Adjust 5 sliders to total 100%:
     - Hands-On Activities
     - Direct Instruction
     - Collaborative Work
     - Independent Practice
     - Technology Integration

4. **Step 3: Choose Template** (`build-step3.html`)
   - View recommendations based on teaching style
   - Select framework:
     - **Madeline Hunter** (7-step direct instruction)
     - **5E Model** (Engage, Explore, Explain, Elaborate, Evaluate)
     - **Understanding by Design** (Backward design)
     - **Gradual Release** (I Do, We Do, You Do Together, You Do Alone)

5. **Step 4: Build Method** (`build-step4.html`)
   - **Generate Now** (~30 seconds) - Complete lesson instantly
   - **Build Section-by-Section** (~10 minutes) - Guide each part with AI recommendations

6. **Step 5: Assessments** (`build-step5.html`)
   - Select which to include:
     - Exit Ticket (3-5 min questions)
     - Formative Checks (during-lesson questions)
     - Homework Assignment
     - Quiz (next day)

7. **Step 6: Preview & Export** (`build-step6.html`) **← NEW**
   - **Standards Verification Banner** (collapsed by default)
     - Click "View Details" to see all verified CA standards
     - Each standard shows: code, full text, confidence level, CDE link
   - **Two tabs:** Export View (clean print) & Online View (detailed)
   - **Feedback box:** Request changes, AI regenerates
   - **Actions:** Print, Save to Library

8. **Step 7: Collaborate** (`build-step7.html`)
   - See cross-curricular connection suggestions
   - Pre-written collaboration emails
   - Earn collaboration badge

### **After Building:**

- **My Lessons** (`library.html`) - Browse saved lessons by Subject/Template/Grade
- **Discover** (`discover.html`) - Share lessons, find community resources
- **View Lesson** (`lesson-view.html`) - Edit, export, delete individual lessons

---

## ✅ What's Working - Fully Functional Features

### **Frontend (100% Functional)**
- ✅ All 7 build steps with proper navigation
- ✅ Data persistence via `localStorage` across all steps
- ✅ Progress bar updates (12% → 100%)
- ✅ Teaching style validation (must equal 100%)
- ✅ Framework recommendations based on teaching style
- ✅ Section-by-section builder with contextual tips
- ✅ Lesson library with filtering (subject/template/grade)
- ✅ Drag-and-drop to Discover
- ✅ Collaboration badge system
- ✅ Loading animations with rotating messages
- ✅ Responsive design (mobile-friendly)
- ✅ Print-optimized layouts

### **Data Flow (100% Functional)**
- ✅ `lessonData` object stores all step inputs in `localStorage`
- ✅ Each step reads previous data and saves current step
- ✅ Lessons saved to `savedLessons` array in `localStorage`
- ✅ Cross-page navigation maintains state

### **UI/UX (100% Functional)**
- ✅ Consistent design system (navy #0D2847, orange #FF8C42)
- ✅ Typography: Crimson Pro (headings) + DM Sans (body)
- ✅ Smooth transitions and hover effects
- ✅ Expandable/collapsible sections
- ✅ Modal dialogs (collaboration email, congratulations)

---

## 🚧 What Needs Production Work - Critical TODOs

### **1. Standards Verification System** ⚠️ **CRITICAL**

**Current State:**
- ✅ UI complete (banner, cards, legend, badges)
- ✅ Standards displayed from AI-generated lesson
- ❌ **NOT VERIFIED** - Claude generates standards from training data, not CDE website

**What's Needed:**
- **Phase 1 (MVP - Launch Blocker):**
  ```javascript
  // Before generating lesson in build-step6.html, add:
  async function verifyStandardsViaCDE(grade, subject, topic) {
    // 1. Search CDE website for official standards
    const query = `"California ${grade} ${subject} content standards site:cde.ca.gov"`;
    
    // 2. Parse official CDE pages for exact standard text
    // Use web_search tool or scraping library
    
    // 3. Match lesson topic to relevant standards (3-6 standards)
    
    // 4. Return verified standards array:
    return [
      {
        code: "HSS 7.4.1",
        text: "Study the Niger River and the relationship...",
        confidence: "high", // high/medium/low
        source: "https://www.cde.ca.gov/be/st/ss/hssgrade7.asp",
        verifiedAt: "2024-12-17T..."
      }
    ];
  }
  ```

- **Phase 2 (Long-term):**
  - Build JSON database of all CA K-12 standards
  - Database-first approach (instant verification)
  - Web search fallback if database outdated
  - Annual update pipeline when CDE publishes changes

**Time Estimate:** 
- Phase 1: 2-3 days (MVP)
- Phase 2: 2-3 weeks (full system)

**See `DEVELOPER_FRAMEWORK.md` for detailed implementation plan.**

---

### **2. Claude API Integration** ✅ **FUNCTIONAL BUT NEEDS KEY**

**Current State:**
- ✅ API call structure complete in `build-step6.html`
- ✅ Prompt engineering for lesson generation
- ✅ JSON parsing and error handling
- ❌ **No API key in code** (security best practice)

**What's Needed:**
```javascript
// In production, replace this:
const response = await fetch("https://api.anthropic.com/v1/messages", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    // Add authentication header:
    "x-api-key": process.env.ANTHROPIC_API_KEY, // Server-side only
    "anthropic-version": "2023-06-01"
  },
  body: JSON.stringify({...})
});
```

**Security Requirements:**
- ❌ NEVER put API key in client-side JavaScript
- ✅ Use backend proxy server (Node.js, Python Flask, etc.)
- ✅ Rate limiting to prevent abuse
- ✅ Request validation

**Backend Proxy Example:**
```javascript
// server.js (Node.js + Express)
app.post('/api/generate-lesson', async (req, res) => {
  const { topic, grade, subject, ... } = req.body;
  
  // Validate request
  if (!topic || !grade || !subject) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Call Claude API (server-side)
  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-20250514',
      max_tokens: 4000,
      messages: [{ role: 'user', content: buildPrompt(req.body) }]
    })
  });
  
  const data = await response.json();
  res.json(data);
});
```

**Frontend Update:**
```javascript
// build-step6.html - replace direct API call with:
const response = await fetch('/api/generate-lesson', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    topic: lessonData.step1.topic,
    grade: lessonData.step1.grade,
    // ... all other data
  })
});
```

**Time Estimate:** 1-2 days (backend setup + frontend updates)

---

### **3. Database / Backend (Optional but Recommended)**

**Current State:**
- ✅ All data stored in browser `localStorage`
- ❌ No persistence across devices
- ❌ No user accounts
- ❌ No collaboration features

**What's Needed (if adding user accounts):**
```
User Authentication:
  - Firebase Auth, Auth0, or custom backend
  - Login/signup flow
  - User profiles

Database:
  - PostgreSQL, MongoDB, or Firebase Firestore
  - Tables: users, lessons, shared_lessons, collaborations
  
API Endpoints:
  POST   /api/lessons          - Save lesson
  GET    /api/lessons          - Get user's lessons
  GET    /api/lessons/:id      - Get specific lesson
  PUT    /api/lessons/:id      - Update lesson
  DELETE /api/lessons/:id      - Delete lesson
  POST   /api/lessons/:id/share - Share to Discover
  GET    /api/discover         - Browse community lessons
```

**Time Estimate:** 2-3 weeks (full backend + auth)

---

### **4. Export Functionality** 🚧 **PARTIAL**

**Current State:**
- ✅ Print to PDF (browser native)
- ❌ Export to DOCX (not implemented)
- ❌ Export to Google Docs (not implemented)
- ❌ Email lesson (not implemented)

**What's Needed:**
```javascript
// Option 1: Client-side DOCX generation
import { Document, Packer, Paragraph } from 'docx';

function exportToDocx(lessonData) {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        new Paragraph({ text: lessonData.title, heading: 'Heading1' }),
        // ... build document structure
      ]
    }]
  });
  
  Packer.toBlob(doc).then(blob => {
    saveAs(blob, `${lessonData.title}.docx`);
  });
}

// Option 2: Server-side PDF generation
// Use Puppeteer, wkhtmltopdf, or similar
```

**Time Estimate:** 2-3 days

---

### **5. Error Handling & Edge Cases** ⚠️

**What's Missing:**
- ❌ Network error handling (API timeout, offline mode)
- ❌ Validation messages (e.g., "Topic cannot be empty")
- ❌ localStorage quota exceeded handling
- ❌ Browser compatibility checks
- ❌ Graceful degradation if JavaScript disabled

**Example Improvements:**
```javascript
// Add to all API calls:
try {
  const response = await fetch(...);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  // ... process response
} catch (error) {
  // User-friendly error message
  if (error.message.includes('NetworkError')) {
    alert('Unable to connect. Please check your internet connection.');
  } else if (error.message.includes('timeout')) {
    alert('Request timed out. Please try again.');
  } else {
    alert('An error occurred. Please try again or contact support.');
  }
  console.error('Detailed error for debugging:', error);
}
```

**Time Estimate:** 1-2 days

---

### **6. Analytics & Tracking** (Optional)

**Recommended:**
- Google Analytics or Mixpanel
- Track: lessons created, frameworks used, most popular subjects
- Conversion funnel: Step 1 → Step 7 completion rate
- Error tracking: Sentry or similar

**Time Estimate:** 1 day

---

### **7. SEO & Performance** (Optional)

**Current State:**
- ✅ Semantic HTML
- ❌ No meta tags for social sharing
- ❌ No image optimization
- ❌ No lazy loading
- ❌ No service worker (offline support)

**Time Estimate:** 2-3 days

---

## 🏗️ Architecture Overview

### **Technology Stack:**
- **Frontend:** Vanilla HTML/CSS/JavaScript (no framework dependencies)
- **Fonts:** Google Fonts (Crimson Pro, DM Sans)
- **Storage:** Browser localStorage
- **API:** Anthropic Claude API (Sonnet 4)
- **Hosting:** Static site (Vercel, Netlify, GitHub Pages, etc.)

### **Data Structure:**

**`lessonData` (stored in localStorage during build process):**
```javascript
{
  step1: {
    grade: "7th Grade",
    subject: "Social Studies / History",
    topic: "Mansa Musa and West Africa",
    state: "California",
    duration: 60,
    classSize: "Medium (16-25 students)",
    standardFocus: "",
    priorKnowledge: "Have some background",
    additionalContext: "",
    studentNeeds: [false, false, false, false, false, false]
  },
  step2: {
    handsOn: 5,
    direct: 5,
    collaborative: 5,
    independent: 45,
    technology: 45
  },
  step3: {
    framework: "5e-model"
  },
  step4: {
    buildMethod: "generate" // or "section"
  },
  step5: {
    exitTicket: true,
    formativeChecks: true,
    homework: true,
    quiz: false
  },
  selectedHook: "technology", // determined in Step 6
  hasVisitedStep7: true,
  hasCollaborations: false
}
```

**`savedLessons` (array in localStorage):**
```javascript
[
  {
    id: 1734467890123,
    title: "Mansa Musa and West Africa",
    grade: "7th Grade",
    subject: "Social Studies / History",
    duration: 60,
    framework: "5e-model",
    hasCollaborations: false,
    verifiedStandards: [
      { code: "HSS 7.4.1", text: "...", confidence: "high" }
    ],
    savedAt: "2024-12-17T19:24:50.123Z",
    fullLesson: { /* entire lessonData object */ }
  }
]
```

---

## 🚀 Quick Start for Developers

### **1. Local Development**
```bash
# No build step required - just open in browser
open index.html

# Or use a local server:
python -m http.server 8000
# Then visit: http://localhost:8000
```

### **2. Testing the Full Flow**
1. Start at `index.html`
2. Click "Start Building"
3. Fill out Steps 1-5 (any values work)
4. Step 6 will call Claude API (needs backend proxy)
5. Step 7 shows collaboration suggestions
6. Visit `library.html` to see saved lesson

### **3. Testing Standards Verification**
- Currently shows **AI-generated standards** (not verified)
- Click "View Details" in green banner to expand
- See legend: High ✓✓, Medium ✓, Manual Check ⚠️
- Each standard has CDE link (currently generic URL)
- **TODO:** Implement real CDE verification before launch

---

## 📋 Pre-Launch Checklist

### **Critical (Must Have):**
- [ ] Standards verification via CDE website (Phase 1)
- [ ] Backend proxy for Claude API
- [ ] API key security (environment variables)
- [ ] Error handling for all API calls
- [ ] Input validation on all forms
- [ ] Print/export to PDF testing
- [ ] Mobile responsiveness testing
- [ ] Browser compatibility (Chrome, Safari, Firefox, Edge)

### **Important (Should Have):**
- [ ] User authentication system
- [ ] Database for lesson persistence
- [ ] Export to DOCX
- [ ] Share to Discover backend
- [ ] Error tracking (Sentry)
- [ ] Analytics integration

### **Nice to Have:**
- [ ] Standards database (Phase 2)
- [ ] Export to Google Docs
- [ ] Email lesson functionality
- [ ] Offline support (service worker)
- [ ] SEO optimization
- [ ] Social media meta tags

---

## 📞 Support & Questions

For technical questions about this codebase, refer to:
- **`DEVELOPER_FRAMEWORK.md`** - Detailed implementation guide
- **Inline comments** - Each HTML file has explanatory comments
- **Console logs** - Check browser DevTools for debugging info

---

## 📄 License & Credits

**LessonBuilders** - AI-Powered Lesson Planning Tool  
Built with Claude (Anthropic) and designed for K-12 educators.

**Design System:**
- Colors: Navy (#0D2847), Orange (#FF8C42)
- Fonts: Crimson Pro (serif, headings), DM Sans (sans-serif, body)
- Icons: Unicode emojis
- Loading animation: Custom building blocks

---

*Last Updated: December 17, 2024*
