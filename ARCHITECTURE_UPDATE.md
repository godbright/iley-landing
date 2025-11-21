# iley Architecture Update Summary

## Overview
The iley project has been restructured to separate the marketing landing page from the main application, with proper subdomain routing and authentication flow.

## New Architecture

### 1. **Landing Page** - `iley-front/iley-landing-page`
- **Domain**: `iley.app` (main domain)
- **Purpose**: Marketing website with features, pricing, FAQ, use cases
- **Pages**: 
  - `/` - Main landing page
  - `/features` - Features overview
  - `/pricing` - Pricing plans
  - `/faq` - Frequently asked questions
  - `/usecases` - Use case examples
  - `/blog` - Blog posts
  - Legal pages: `/privacy`, `/terms`, `/refund`

### 2. **Main Application** - `image-editor`
- **Domain**: `app.iley.app` (subdomain)
- **Purpose**: Main AI image editing application and dashboard
- **Pages**:
  - `/auth` - **NEW** Authentication entry point
  - `/home` - Main dashboard
  - `/edit` - Image editing interface
  - `/library` - User's image library
  - `/settings` - User settings
  - Other existing application pages

## Authentication Flow

### New User Journey:
1. **Landing Page** (`iley.app`) → User sees marketing content
2. **Click CTA/Sign Up** → Redirects to `app.iley.app/auth`
3. **Authentication** → User signs up/signs in on auth page
4. **Dashboard** → Redirects to `app.iley.app/home` (main app)

### Key Changes Made:

#### Landing Page Updates (`iley-landing-page`):
- ✅ Removed `/home` route (no longer needed)
- ✅ Updated header "Get iley" button → `app.iley.app/auth`
- ✅ Updated header "Sign in" link → `app.iley.app/auth`
- ✅ Updated hero CTA "Start Creating Now" → `app.iley.app/auth`
- ✅ Updated CTA section button → `app.iley.app/auth`
- ✅ Updated pricing plan buttons → `app.iley.app/auth?redirect=/home?plan={planName}`

#### Image Editor Updates (`image-editor`):
- ✅ **NEW**: Created `/auth` page as main authentication entry point
- ✅ Updated `AuthModal.tsx` to handle redirect parameters
- ✅ Enhanced `next.config.ts` for subdomain configuration
- ✅ Added environment variables for domain management

## Technical Implementation

### Authentication Page Features:
- **Unified Auth Interface**: Single page handling both sign-up and sign-in
- **Redirect Support**: Supports `?redirect=/path` query parameters
- **Plan Selection**: Supports `?redirect=/home?plan=basic` for pricing integration
- **Fallback Handling**: Redirects back to landing if auth is cancelled
- **Loading States**: Proper loading and success states
- **Social Login**: Google OAuth integration maintained

### SEO & Marketing Features Maintained:
- ✅ Comprehensive SEO schema markup
- ✅ FAQ structured data
- ✅ How-to guides schema
- ✅ Open Graph meta tags
- ✅ Twitter Card integration
- ✅ Sitemap.xml with all pages
- ✅ Robots.txt configuration

## Deployment Configuration

### Domain Setup Required:
1. **Main Domain**: `iley.app` → Deploy `iley-landing-page`
2. **App Subdomain**: `app.iley.app` → Deploy `image-editor`

### Environment Variables:
```bash
# Image Editor (.env)
NEXT_PUBLIC_MAIN_DOMAIN=iley.app
NEXT_PUBLIC_APP_DOMAIN=app.iley.app

# Landing Page (.env)
NEXT_PUBLIC_APP_DOMAIN=app.iley.app
```

## Benefits of New Architecture

### 1. **Separation of Concerns**
- Marketing site optimized for conversions and SEO
- Application optimized for functionality and user experience

### 2. **Better Performance**
- Landing page loads faster (no heavy app bundles)
- App loads faster (no marketing content)

### 3. **Independent Scaling**
- Can optimize and deploy each part independently
- Different CDN strategies for each domain

### 4. **Clear User Journey**
- Obvious path from marketing → authentication → application
- No confusion between marketing and app content

### 5. **Professional Structure**
- Industry-standard multi-domain architecture
- Easier to maintain and update each part

## Next Steps

1. **Deploy Landing Page** to `iley.app`
2. **Deploy Image Editor** to `app.iley.app` 
3. **Configure DNS** for subdomain routing
4. **Test Authentication Flow** end-to-end
5. **Update Analytics** tracking for new domain structure
6. **Update Social Media Links** to point to new domains

## Files Modified

### Landing Page:
- `components/site-header.tsx` - Updated auth links
- `components/hero-section.tsx` - Updated CTA button
- `components/cta-section.tsx` - Updated CTA button
- `components/pricing-section.tsx` - Updated plan selection
- `app/page.tsx` - Removed home redirect logic

### Image Editor:
- `src/app/auth/page.tsx` - **NEW** Main auth page
- `src/components/AuthModal.tsx` - Enhanced redirect handling
- `next.config.ts` - Subdomain configuration

The architecture is now properly structured for a professional SaaS application with clear separation between marketing and application concerns.