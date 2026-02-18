# 🧭 Navigation Data Flow - Complete Trace

## Quick Answer

**The navigation pulls from:**
```
Sanity CMS → Site Settings → Navigation Reference → Navigation Document → Items Array
```

---

## 📊 Complete Data Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│  SANITY CMS (Backend)                                       │
│  http://localhost:3333                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  1. Site Settings Document                                  │
│     (_type: "siteSettings")                                 │
│     ├── title: "Arielle Hastings Therapy"                  │
│     ├── description: "..."                                  │
│     └── navigation: {                                       │
│           _type: "reference",                               │
│           _ref: "navigation-main"  ← POINTS TO NAV DOC     │
│         }                                                    │
│                                                             │
│         ↓ (reference link)                                  │
│                                                             │
│  2. Navigation Document                                     │
│     (_id: "navigation-main")                                │
│     ├── title: "Main Navigation"                           │
│     └── items: [                                            │
│           {                                                  │
│             label: "Home",                                   │
│             linkType: "internal",                           │
│             internalPage: "home"                            │
│           },                                                 │
│           {                                                  │
│             label: "About",                                  │
│             linkType: "internal",                           │
│             internalPage: "about"                           │
│           },                                                 │
│           {                                                  │
│             label: "Services",                              │
│             linkType: "internal",                           │
│             internalPage: "services"                        │
│           },                                                 │
│           {                                                  │
│             label: "Contact",                               │
│             linkType: "anchor",                             │
│             anchor: "#contact"                              │
│           }                                                  │
│         ]                                                    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
                         ↓
              (Sanity API fetches data)
                         ↓
┌─────────────────────────────────────────────────────────────┐
│  FRONTEND (React App)                                       │
│  http://localhost:5173                                      │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  3. useSiteSettings Hook                                    │
│     (frontend/src/hooks/useSiteSettings.js)                 │
│                                                             │
│     useEffect(() => {                                       │
│       // Fetch site settings from Sanity                    │
│       const query = `*[_type == "siteSettings"][0]{        │
│         "navigation": navigation->{                         │
│           _id, title, items                                 │
│         }                                                    │
│       }`                                                     │
│       const data = await sanityClient.fetch(query)         │
│       setSiteSettings(data)                                 │
│     })                                                       │
│                                                             │
│         ↓ (returns siteSettings object)                     │
│                                                             │
│  4. Header Component                                        │
│     (frontend/src/components/Header/Header.jsx)             │
│                                                             │
│     export default function Header({ therapist }) {         │
│       const { siteSettings } = useSiteSettings()           │
│       const navigation = siteSettings?.navigation  ← GETS  │
│                                                             │
│       return (                                              │
│         <nav>                                               │
│           {navigation?.items.map((item) =>                 │
│             renderNavItem(item)  ← RENDERS                 │
│           )}                                                │
│         </nav>                                              │
│       )                                                      │
│     }                                                        │
│                                                             │
│         ↓ (renders in browser)                              │
│                                                             │
│  5. Browser Display                                         │
│     <nav>                                                   │
│       <Link to="/">Home</Link>                             │
│       <Link to="/about">About</Link>                       │
│       <Link to="/services">Services</Link>                 │
│       <a href="#contact">Contact</a>                       │
│     </nav>                                                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 🔍 Step-by-Step Breakdown

### Step 1: Sanity CMS Storage
**Location**: Sanity Studio (http://localhost:3333)

**Document**: Site Settings
```javascript
{
  _type: "siteSettings",
  _id: "1oPbursIe3uojjO5ZoPrIE",
  title: "Arielle Hastings Therapy",
  navigation: {
    _type: "reference",
    _ref: "navigation-main"  // ← Points to navigation document
  }
}
```

**Document**: Navigation (navigation-main)
```javascript
{
  _type: "navigation",
  _id: "navigation-main",
  title: "Main Navigation",
  items: [
    { label: "Home", linkType: "internal", internalPage: "home" },
    { label: "About", linkType: "internal", internalPage: "about" },
    { label: "Services", linkType: "internal", internalPage: "services" },
    { label: "Contact", linkType: "anchor", anchor: "#contact" }
  ]
}
```

---

### Step 2: useSiteSettings Hook (Data Fetcher)
**File**: `frontend/src/hooks/useSiteSettings.js`

**What it does**:
1. Connects to Sanity API
2. Fetches site settings document
3. Follows the navigation reference
4. Returns complete navigation data

**Query**:
```javascript
const query = `*[_type == "siteSettings"][0]{
  "navigation": navigation->{  // ← Follows the reference
    _id,
    title,
    items  // ← Gets all navigation items
  }
}`
```

**Returns**:
```javascript
{
  siteSettings: {
    navigation: {
      _id: "navigation-main",
      title: "Main Navigation",
      items: [
        { label: "Home", linkType: "internal", internalPage: "home" },
        { label: "About", linkType: "internal", internalPage: "about" },
        // ... etc
      ]
    }
  }
}
```

---

### Step 3: Header Component (Data Consumer)
**File**: `frontend/src/components/Header/Header.jsx`

**What it does**:
```javascript
export default function Header({ therapist }) {
  // 1. Get site settings (includes navigation)
  const { siteSettings } = useSiteSettings()
  
  // 2. Extract navigation from site settings
  const navigation = siteSettings?.navigation
  
  // 3. Render navigation items
  return (
    <nav>
      {navigation?.items ? (
        navigation.items.map((item, index) => 
          renderNavItem(item, index)  // ← Renders each link
        )
      ) : (
        // Fallback if Sanity data not available
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        // ...
      )}
    </nav>
  )
}
```

---

### Step 4: Link Rendering
**Function**: `renderNavItem(item, index)`

**Logic**:
```javascript
const renderNavItem = (item, index) => {
  const link = getNavLink(item)  // Convert to URL
  
  if (item.linkType === 'internal') {
    return <Link to={link}>{item.label}</Link>  // React Router
  }
  
  if (item.linkType === 'anchor') {
    return <a href={link}>{item.label}</a>  // Anchor tag
  }
  
  if (item.linkType === 'external') {
    return <a href={link} target="_blank">{item.label}</a>  // External
  }
}
```

---

## 🎯 Where to Edit Navigation

### Option 1: Sanity Studio (Recommended)
**Steps**:
1. Go to http://localhost:3333
2. Click **Site Settings** (gear icon in sidebar)
3. Scroll to **Navigation Menu** field
4. Click the linked navigation document
5. Edit the items array:
   - Change labels
   - Add/remove items
   - Reorder by dragging
   - Change link types
6. Click **Publish**
7. Refresh frontend → Changes appear! ✨

**Editable Fields per Item**:
- `label` - Display text (e.g., "About")
- `linkType` - "internal", "anchor", or "external"
- `internalPage` - Slug for internal pages (e.g., "about")
- `anchor` - Anchor link (e.g., "#contact")
- `externalUrl` - Full URL for external links
- `openInNewTab` - Boolean (for external links)

---

### Option 2: Directly in Database (Advanced)
**Script**: `sanity/updateNavigation.js`

```javascript
const navigation = {
  _id: 'navigation-main',
  items: [
    { label: 'Home', linkType: 'internal', internalPage: 'home' },
    // ... add/edit items
  ]
}

await client.patch('navigation-main').set(navigation).commit()
```

---

## 📂 File Locations

### Backend (Sanity):
```
sanity/
├── schemas/
│   ├── siteSettings.js      ← Defines site settings schema
│   └── navigation.js        ← Defines navigation schema
└── updateNavigation.js      ← Script to update navigation
```

### Frontend (React):
```
frontend/src/
├── hooks/
│   └── useSiteSettings.js   ← Fetches navigation from Sanity
├── components/
│   └── Header/
│       └── Header.jsx       ← Renders navigation
└── utils/
    └── sanityClient.js      ← Sanity API client
```

---

## 🔄 Data Flow Summary

```
Edit in Sanity Studio
    ↓
Click Publish
    ↓
Saved to Sanity Database
    ↓
useSiteSettings hook fetches on page load
    ↓
Header component receives navigation data
    ↓
renderNavItem converts to React components
    ↓
Navigation displays in browser
```

---

## 🧪 Verify the Connection

### Test 1: Check Sanity Data
```bash
cd sanity
node -e "
const { createClient } = require('@sanity/client');
require('dotenv').config();
const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
});
client.fetch('*[_type == \"siteSettings\"][0]{\"navigation\": navigation->{items}}')
  .then(data => console.log(JSON.stringify(data.navigation.items, null, 2)));
"
```

### Test 2: Check Browser Console
1. Open browser dev tools (F12)
2. Go to Console
3. Type: `localStorage.clear(); location.reload()`
4. Check for navigation data in Network tab

### Test 3: React DevTools
1. Install React DevTools extension
2. Find `Header` component
3. Check props → `siteSettings.navigation.items`
4. Should show array of navigation items

---

## 🎊 Summary

**Your navigation pulls from:**

1. **Sanity CMS** → Site Settings document
2. **Reference** → Navigation document (`navigation-main`)
3. **Items Array** → List of navigation links
4. **useSiteSettings Hook** → Fetches and provides data
5. **Header Component** → Renders navigation

**To edit**: Go to Sanity Studio → Site Settings → Navigation Menu

**Data flows**: Sanity → API → Hook → Component → Browser

---

**The navigation is fully wired to Sanity CMS!** 🚀
