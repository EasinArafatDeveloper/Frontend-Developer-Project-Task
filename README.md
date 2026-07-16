# 🌟 AURA | Premium Modern Fashion Store Frontend

**AURA** is a modern, premium, and fully responsive e-commerce fashion storefront built with **React (Vite) + TypeScript** and styled with **Vanilla CSS** (supporting complete Light/Dark mode transitions). 

This project was built following production-quality guidelines for the **OXIVOS Frontend Developer Project Task (Round 1)**. It runs entirely on local mock data with client-side state managers and zero external database dependencies.

---

## 🎨 Design & Aesthetic Decisions
* **Typography:** Woven with Google Fonts (`Outfit` for bold, high-impact headings and `Plus Jakarta Sans` for clean, highly legible body texts).
* **Color System:** Features curated HSL color tokens for Light and Dark modes. Toggling themes triggers fluid transitions across all elements.
* **Micro-interactions:** Interactive color swatches, size selectors, item quantity adjusting, hover-zoom effects on catalog images, slide-up "Quick Add to Cart" buttons, and shimmer skeleton loading states.
* **Centered Fluid Layout:** Elements are aligned along a responsive container grid layout matching standard viewport margins.

---

## 🚀 Key Features Implemented

### 1. Home Page
* **Hero Banner:** A high-impact hero image from Unsplash with a smooth gradient fade-out transition, styling overlays, and clear CTA buttons.
* **Value Props Row:** Highlighted customer benefits (Free Shipping threshold, 15-day Returns, Secure Checkout) using modern iconography.
* **Category Quick Links:** Image cards for Men, Women, and Accessories that link directly to the Shop catalog pre-filtered by category.
* **Trending Showcase:** Shows a handpicked selection of top-rated items based on customer reviews.

### 2. Shop Page (Product Listing)
* **Keyword Search Bar:** Real-time text-input matching against names, descriptions, and categories.
* **Category Filters:** Sidebar filters for instantly switching between Men, Women, Accessories, or All products.
* **Sort Dropdown:** Allows sorting catalog products by Price (Low to High, High to Low) and Ratings.
* **Simulated Shimmer Skeletons:** Triggers skeleton card loaders when changing filters or searches to simulate fetch latency.
* **Clean Empty States:** Interactive empty state illustrations with a "Reset Filters" action when search results yield zero matches.

### 3. Product Details Page
* **Interactive Image Gallery:** Thumbnails on the left panel that update the main active zoom image.
* **Dynamic Options Selectors:** Color swatches (rendered with their CSS color equivalents) and sizing chips.
* **Stock Indicators:** Displays the quantity left in stock in green or a "Sold Out" warning in red.
* **Counter Adjuster:** Prevents adding more than the available stock count.
* **Instant Feedbacks:** Adding items changes the button state with checked animations.
* **Recommendations:** Suggests related items in the same category.

### 4. Shopping Cart Page
* **Cart Lines Table:** Displays selected size, color, item price, and final line totals.
* **Interactive Modifiers:** Buttons to increase/decrease quantity or delete items from the cart.
* **Promo Code Box:** Apply code `AURA10` to receive an instant 10% discount on the cart subtotal.
* **Shipping Cost Calculator:** Free shipping is automatically unlocked on subtotals above 3,000 BDT (otherwise shows a progress alert bar showing how much more is needed).
* **Checkout Simulation:** Placing a mock order clears the cart, removes active coupon codes, and displays a success screen.

### 5. Wishlist Page
* **Favorites Saver:** Simple heart toggles on cards to add/remove items.
* **Wishlist Grid:** A dedicated page showing saved items with options to quickly add to cart or remove.

### 6. Theme Toggle (Dark & Light)
* **State provider:** Systems check preferences or browser media schemes.
* **Persistence:** Theme choices and cart/wishlist contents are persisted across page reloads using `localStorage`.

---

## 🗂️ Project Directory Structure

```
d:/Project Task/
├── index.html                  # Core HTML5 template, SEO meta descriptions, tab titles
├── package.json                # Dependencies and build script tasks
├── tsconfig.json               # TypeScript configuration parameters
├── vite.config.ts              # Vite bundle configurations
├── src/
│   ├── main.tsx                # Mounts React components inside DOM root
│   ├── App.tsx                 # Routing, ScrollToTop hook, Context hooks wrap
│   ├── index.css               # CSS Custom Properties, layout utilities, animations
│   ├── components/
│   │   ├── Header.tsx          # Sticky responsive header with drawer, badges, theme triggers
│   │   ├── Footer.tsx          # Brand values, contact details, email subscription
│   │   ├── ProductCard.tsx     # Card with hover zoom, quick-add, ratings, and active badges
│   │   └── SkeletonCard.tsx    # Card layout shimmer skeletons for loading state
│   ├── context/
│   │   ├── CartContext.tsx     # Shopping cart lines state and wishlist manager
│   │   └── ThemeContext.tsx    # Dark/Light theme class triggers and localStorage caching
│   ├── data/
│   │   └── products.ts         # JSON-like database of 12 detailed fashion items
│   └── pages/
│       ├── Home.tsx            # Hero banner and showcase views
│       ├── ProductListing.tsx  # Product listing catalog with search and filters sidebar
│       ├── ProductDetails.tsx  # Image zoom gallery, color/size chips, quantity adjusters
│       ├── Cart.tsx            # Order summaries, checkout flow, coupons, shipping indicators
│       └── Wishlist.tsx        # Saved items gallery page
```

---

## ⚙️ Tech Stack & Libraries
* **Framework:** React 19 + TypeScript + Vite
* **Routing:** `react-router-dom` (Version 7)
* **Icons:** `lucide-react`
* **Styling:** Vanilla CSS (no Tailwind, Bootstrap, or component libraries)

---

## 🛠️ How to Run Locally

Follow these commands in your terminal to set up and run the app locally:

1. **Clone and navigate to the project directory:**
   ```bash
   cd "d:/Project Task"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local Vite development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173/](http://localhost:5173/) in your web browser.

4. **Compile production build:**
   ```bash
   npm run build
   ```
   This will run TypeScript checks and output compiled static assets in `/dist`.

---

## ☁️ Deployment (Vercel)
This app is ready to deploy on **Vercel** with one click:
1. Connect your GitHub repository to Vercel.
2. Select **Vite** as the framework template.
3. Keep default settings (`Build Command: npm run build`, `Output Directory: dist`).
4. Click **Deploy**!
