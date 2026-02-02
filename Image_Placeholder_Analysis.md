# Botanic Website Image Placeholder Analysis

This document identifies all image placeholders in the codebase and provides specifications for their replacement with actual images, icons, and custom graphics.

## Summary of Findings
The codebase contains 82 instances of image placeholders, primarily using HTML entity codes (emojis) and CSS-based image placeholders. These are categorized below by type and location.

## 1. Logo and Brand Identity

### 1.1 Main Logo
**Location**: [`views/partials/header.ejs:21`](views/partials/header.ejs:21)
**Current Code**: `<span class="logo-icon">&#127807;</span>`
**Emoji**: 🌿 (Herb)
**Replacement Specification**:
- **Type**: Custom SVG logo
- **Dimensions**: 40x40px (for header), 200x200px (for standalone use)
- **Style**: Clean, modern leaf/plant icon with "Botanic" text
- **Color**: Primary green (#1e4d3a)
- **Format**: SVG (for scalability)

## 2. Navigation and Trust Indicators

### 2.1 Trust Bar Icons
**Location**: [`views/index.ejs:20,24,28`](views/index.ejs:20)
**Current Code**: 
- `<span class="trust-icon" aria-hidden="true">&#127758;</span>` (🌍 Globe)
- `<span class="trust-icon" aria-hidden="true">&#9989;</span>` (✅ Check Mark)
- `<span class="trust-icon" aria-hidden="true">&#128205;</span>` (📍 Location Pin)

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 24x24px
- **Style**: Line art, consistent stroke width
- **Color**: Primary green (#1e4d3a)
- **Icons needed**:
  - FDA Registered: Shield or certification icon
  - GMP Certified: Quality seal or star icon
  - Location: Map pin or location icon

## 3. Service Icons

### 3.1 Main Service Icons
**Location**: [`views/index.ejs:44,50,56`](views/index.ejs:44)
**Current Code**:
- `<div class="service-icon">&#128138;</div>` (💊 Pill)
- `<div class="service-icon">&#127807;</div>` (🌿 Herb)
- `<div class="service-icon">&#129514;</div>` (🍾 Bottle)

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 64x64px
- **Style**: Outlined with subtle fill
- **Color**: Primary green (#1e4d3a)
- **Icons needed**:
  - Capsules: Capsule or pill icon
  - Powders: Powder or mixing icon
  - Liquids: Bottle or liquid icon

### 3.2 Service Detail Images
**Location**: [`views/services.ejs:31,59,87`](views/services.ejs:31)
**Current Code**:
- `<span>&#128138;</span>` (💊 Pill) - "NJP-2000 Encapsulator"
- `<span>&#127807;</span>` (🌿 Herb) - "Industrial Mixing Equipment"
- `<span>&#129514;</span>` (🍾 Bottle) - "Bottling Equipment"

**Replacement Specification**:
- **Type**: Professional equipment photography
- **Dimensions**: 800x800px
- **Format**: JPG (80% quality)
- **Style**: Clean, professional equipment photos
- **Content**:
  - NJP-2000 Encapsulation machine
  - Industrial powder mixing equipment
  - Liquid bottling/filling equipment

## 4. About Page Images

### 4.1 Facility Image
**Location**: [`views/about.ejs:23`](views/about.ejs:23)
**Current Code**: `<span>&#127981;</span>` (🏢 Building) - "Carroll County, GA Facility"

**Replacement Specification**:
- **Type**: Professional facility photography
- **Dimensions**: 1200x800px
- **Format**: JPG (80% quality)
- **Style**: Professional exterior building photo
- **Content**: Botanic manufacturing facility exterior

### 4.2 Facility Feature Images
**Location**: [`views/about.ejs:42,51,60,69`](views/about.ejs:42)
**Current Code**:
- `<span>&#9881;</span>` (⚙️ Gear) - Manufacturing equipment
- `<span>&#128260;</span>` (📦 Package) - Packaging area
- `<span>&#129514;</span>` (🍾 Bottle) - Bottling area
- `<span>&#128269;</span>` (🔬 Microscope) - Laboratory

**Replacement Specification**:
- **Type**: Professional facility photography
- **Dimensions**: 300x300px (for cards)
- **Format**: JPG (80% quality)
- **Style**: Clean, professional facility photos
- **Content**:
  - Manufacturing equipment
  - Packaging area
  - Bottling area
  - Quality control laboratory

### 4.3 Value Icons
**Location**: [`views/about.ejs:88,93,98,103`](views/about.ejs:88)
**Current Code**:
- `<div class="value-icon">&#128176;</div>` (💰 Money Bag) - Quality
- `<div class="value-icon">&#9989;</div>` (✅ Check Mark) - Compliance
- `<div class="value-icon">&#128101;</div>` (👥 People) - Partnership
- `<div class="value-icon">&#128200;</div>` (📈 Chart) - Transparency

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 48x48px
- **Style**: Line art with subtle fill
- **Color**: Secondary gold (#d4a574)
- **Icons needed**:
  - Quality: Shield or star icon
  - Compliance: Checkmark or certificate icon
  - Partnership: Handshake or people icon
  - Transparency: Eye or chart icon

## 5. Why Botanic Section

### 5.1 Facility Image
**Location**: [`views/index.ejs:98`](views/index.ejs:98)
**Current Code**: `<span>&#9881;</span>` (⚙️ Gear) - "Manufacturing Facility"

**Replacement Specification**:
- **Type**: Professional facility photography
- **Dimensions**: 600x400px
- **Format**: JPG (80% quality)
- **Style**: Professional facility interior
- **Content**: Clean, modern manufacturing facility

### 5.2 Benefit Checkmarks
**Location**: [`views/index.ejs:74,78,82,86,90`](views/index.ejs:74)
**Current Code**: `<span class="check">&#10003;</span>` (✓ Check Mark)

**Replacement Specification**:
- **Type**: Custom SVG icon
- **Dimensions**: 24x24px
- **Style**: Simple checkmark in circle
- **Color**: Primary green (#1e4d3a)
- **Format**: SVG

## 6. Certifications Page

### 6.1 Certification Badges
**Location**: [`views/certifications.ejs:25,49`](views/certifications.ejs:25)
**Current Code**:
- `<div class="badge-icon">&#9989;</div>` (✅ Check Mark) - "FDA Registered"
- `<div class="badge-icon">&#128176;</div>` (💰 Money Bag) - "GMP Certified"

**Replacement Specification**:
- **Type**: Custom SVG icons + actual certification logos
- **Dimensions**: 100x100px (icons), 300x300px (logos)
- **Style**: Professional, official certification appearance
- **Color**: Primary green (#1e4d3a) for icons, official colors for logos
- **Content**:
  - FDA registration logo/icon
  - GMP certification logo/icon

### 6.2 Quality Icons
**Location**: [`views/certifications.ejs:79,84,89,94`](views/certifications.ejs:79)
**Current Code**:
- `<div class="quality-icon">&#128269;</div>` (🔬 Microscope) - "Raw Material Testing"
- `<div class="quality-icon">&#128203;</div>` (📄 Document) - "Batch Documentation"
- `<div class="quality-icon">&#128200;</div>` (📈 Chart) - "In-Process Controls"
- `<div class="quality-icon">&#9989;</div>` (✅ Check Mark) - "Final Product Testing"

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 48x48px
- **Style**: Line art with subtle fill
- **Color**: Primary green (#1e4d3a)
- **Icons needed**:
  - Raw Material Testing: Microscope or test tube icon
  - Batch Documentation: Document or clipboard icon
  - In-Process Controls: Gear or control panel icon
  - Final Product Testing: Checkmark or certificate icon

## 7. Careers Page

### 7.1 Benefit Icons
**Location**: [`views/careers.ejs:34,39,44,49`](views/careers.ejs:34)
**Current Code**:
- `<div class="benefit-icon">&#127793;</div>` (🌱 Seedling) - "Growing Industry"
- `<div class="benefit-icon">&#128101;</div>` (👥 People) - "Great Team"
- `<div class="benefit-icon">&#128200;</div>` (📈 Chart) - "Career Development"
- `<div class="benefit-icon">&#127968;</div>` (🏠 House) - "Local Community"

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 64x64px
- **Style**: Line art with subtle fill
- **Color**: Secondary gold (#d4a574)
- **Icons needed**:
  - Growing Industry: Growth chart or plant icon
  - Great Team: People or team icon
  - Career Development: Career ladder or education icon
  - Local Community: Community or location icon

## 8. Contact Page

### 8.1 Contact Information Icons
**Location**: [`views/contact.ejs:76,84,92,100`](views/contact.ejs:76)
**Current Code**:
- `<span class="info-icon">&#128231;</span>` (✉️ Envelope) - Email
- `<span class="info-icon">&#128222;</span>` (📞 Phone) - Phone
- `<span class="info-icon">&#128205;</span>` (📍 Location Pin) - Location
- `<span class="info-icon">&#128336;</span>` (⏱️ Clock) - Hours

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 32x32px
- **Style**: Simple line art
- **Color**: Secondary gold (#d4a574)
- **Icons needed**:
  - Email: Envelope icon
  - Phone: Phone icon
  - Location: Map pin icon
  - Hours: Clock icon

### 8.2 Map Placeholder
**Location**: [`views/contact.ejs:124`](views/contact.ejs:124)
**Current Code**: `<span class="map-icon">&#128205;</span>` (📍 Location Pin) - "Carroll County, Georgia"

**Replacement Specification**:
- **Type**: Embedded Google Map or custom map graphic
- **Dimensions**: 100% width, 400px height
- **Style**: Clean, professional map
- **Content**: Map showing Carroll County, Georgia location

## 9. Private Label Page

### 9.1 Coming Soon Icon
**Location**: [`views/private-label.ejs:15`](views/private-label.ejs:15)
**Current Code**: `<div class="coming-soon-icon">&#127793;</div>` (🌱 Seedling)

**Replacement Specification**:
- **Type**: Custom SVG icon
- **Dimensions**: 80x80px
- **Style**: Line art with subtle fill
- **Color**: Primary green (#1e4d3a)
- **Icon**: Growth or coming soon icon

### 9.2 Feature Preview Icons
**Location**: [`views/private-label.ejs:23,28,33,38`](views/private-label.ejs:23)
**Current Code**:
- `<span class="feature-icon">&#128138;</span>` (💊 Pill) - "Ready-Made Formulations"
- `<span class="feature-icon">&#127912;</span>` (🏷️ Label) - "Custom Labeling"
- `<span class="feature-icon">&#128230;</span>` (📦 Package) - "Low Minimums"
- `<span class="feature-icon">&#128640;</span>` (⚡ Lightning) - "Fast Turnaround"

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 48x48px
- **Style**: Line art with subtle fill
- **Color**: Primary green (#1e4d3a)
- **Icons needed**:
  - Ready-Made Formulations: Formula or pill icon
  - Custom Labeling: Label or tag icon
  - Low Minimums: Small quantity or package icon
  - Fast Turnaround: Speed or clock icon

## 10. Client Portal

### 10.1 Login Icon
**Location**: [`views/portal/login.ejs:9`](views/portal/login.ejs:9)
**Current Code**: `<div class="login-icon">&#128274;</div>` (🔒 Lock)

**Replacement Specification**:
- **Type**: Custom SVG icon
- **Dimensions**: 64x64px
- **Style**: Line art with subtle fill
- **Color**: Primary green (#1e4d3a)
- **Icon**: Lock or security icon

### 10.2 Dashboard Icons
**Location**: [`views/portal/dashboard.ejs:20,28,38,48`](views/portal/dashboard.ejs:20)
**Current Code**:
- `<div class="card-icon">&#128203;</div>` (📄 Document) - "Submit Purchase Order"
- `<div class="card-icon">&#128197;</div>` (📅 Calendar) - "Order History"
- `<div class="card-icon">&#128196;</div>` (📁 Folder) - "Documents"
- `<div class="card-icon">&#128172;</div>` (💬 Speech Bubble) - "Need Help?"

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 48x48px
- **Style**: Line art with subtle fill
- **Color**: Primary green (#1e4d3a)
- **Icons needed**:
  - Submit Purchase Order: Form or document icon
  - Order History: History or list icon
  - Documents: Folder or file icon
  - Need Help?: Help or support icon

### 10.3 Portal Benefit Icons
**Location**: [`views/portal/login.ejs:42,49,56`](views/portal/login.ejs:42)
**Current Code**:
- `<span class="benefit-icon">&#128203;</div>` (📄 Document) - "Order Tracking"
- `<span class="benefit-icon">&#128200;</div>` (📈 Chart) - "Faster Processing"
- `<span class="benefit-icon">&#128196;</div>` (📁 Folder) - "Document Access"

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 32x32px
- **Style**: Simple line art
- **Color**: Secondary gold (#d4a574)
- **Icons needed**:
  - Order Tracking: Tracking or status icon
  - Faster Processing: Speed or time icon
  - Document Access: Document or download icon

## 11. Error and Success Icons

### 11.1 Error Icons
**Location**: 
- [`views/error.ejs:6`](views/error.ejs:6) - `<div class="error-icon">&#9888;</div>` (⚠️ Warning)
- [`views/404.ejs:6`](views/404.ejs:6) - `<div class="error-icon">&#127807;</div>` (🌿 Herb)
- [`views/portal/login.ejs:16`](views/portal/login.ejs:16) - `<span>&#9888;</span>` (⚠️ Warning)

**Replacement Specification**:
- **Type**: Custom SVG icons
- **Dimensions**: 64x64px (error pages), 24x24px (inline)
- **Style**: Simple, clear warning/error symbols
- **Color**: Error red (#e74c3c) for errors, primary green for 404
- **Icons needed**:
  - Error: Warning triangle or exclamation point
  - 404: Page not found or home icon

### 11.2 Success Icons
**Location**:
- [`views/contact.ejs:19`](views/contact.ejs:19) - `<div class="success-icon">&#10003;</div>` (✓ Check Mark)
- [`views/careers.ejs:16`](views/careers.ejs:16) - `<div class="success-icon">&#10003;</div>` (✓ Check Mark)
- [`views/portal/order.ejs:20`](views/portal/order.ejs:20) - `<div class="success-icon">&#10003;</div>` (✓ Check Mark)

**Replacement Specification**:
- **Type**: Custom SVG icon
- **Dimensions**: 64x64px
- **Style**: Simple, clear success symbol
- **Color**: Success green (#27ae60)
- **Icon**: Checkmark in circle or similar success indicator

## 12. Form Placeholders

### 12.1 Input Placeholders
**Locations**: Various form files
**Current Code**: HTML5 placeholder attributes in input fields
**Examples**: "John Doe", "john@example.com", "(555) 123-4567"

**Replacement Specification**:
- **Type**: No replacement needed (these are text placeholders, not visual)
- **Action**: Keep as is, these are appropriate form field placeholders

## Implementation Priority

### High Priority (Core Brand Elements)
1. Main logo (header)
2. Service icons (home page)
3. Trust bar icons
4. Facility images (about page)

### Medium Priority (Content Enhancement)
1. Service detail images
2. Value icons
3. Certification badges
4. Contact information icons

### Low Priority (Nice to Have)
1. Error/success icons
2. Dashboard icons
3. Private label feature icons
4. Map placeholder

## Technical Notes

1. **SVG Format**: All custom icons should be created as SVG for scalability and crisp rendering at all sizes.
2. **Image Optimization**: All photographic images should be optimized for web use (JPG at 80% quality).
3. **Alt Text**: All meaningful images must have appropriate alt text for accessibility.
4. **Responsive Images**: Consider using srcset for responsive image delivery where appropriate.
5. **Lazy Loading**: Implement lazy loading for below-the-fold images to improve page load performance.
6. **Consistency**: Maintain consistent visual style across all icons and graphics.