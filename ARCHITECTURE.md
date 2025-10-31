# 📊 Project Visual Overview

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                     BROWSER                              │
│  ┌───────────────────────────────────────────────────┐  │
│  │              React Application                     │  │
│  │  ┌──────────────────────────────────────────────┐ │  │
│  │  │         App.tsx (Root Component)             │ │  │
│  │  │  ┌────────────┐  ┌────────────┐             │ │  │
│  │  │  │ AuthProvider│  │CartProvider│             │ │  │
│  │  │  └─────┬──────┘  └─────┬──────┘             │ │  │
│  │  │        │                │                     │ │  │
│  │  │  ┌─────▼────────────────▼──────┐             │ │  │
│  │  │  │    React Router (BrowserRouter)          │ │  │
│  │  │  │  ┌────────────────────────────┐          │ │  │
│  │  │  │  │        Header              │          │ │  │
│  │  │  │  └────────────────────────────┘          │ │  │
│  │  │  │  ┌────────────────────────────┐          │ │  │
│  │  │  │  │   Routes (Pages)           │          │ │  │
│  │  │  │  │   - Home                   │          │ │  │
│  │  │  │  │   - PartyWear              │          │ │  │
│  │  │  │  │   - Cart                   │          │ │  │
│  │  │  │  │   - SignIn                 │          │ │  │
│  │  │  │  └────────────────────────────┘          │ │  │
│  │  │  │  ┌────────────────────────────┐          │ │  │
│  │  │  │  │        Footer              │          │ │  │
│  │  │  │  └────────────────────────────┘          │ │  │
│  │  │  └─────────────────────────────────┘         │ │  │
│  │  └──────────────────────────────────────────────┘ │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Component Tree

```
App
├── AuthProvider (Context)
│   └── CartProvider (Context)
│       └── Router
│           ├── Header
│           │   ├── Logo
│           │   ├── Navigation
│           │   │   ├── Home Link
│           │   │   ├── Categories Links
│           │   │   └── About Link
│           │   └── Auth Section
│           │       ├── Sign In Button
│           │       └── Cart Button
│           │
│           ├── Routes
│           │   ├── Home (/)
│           │   │   ├── Hero Section
│           │   │   ├── Features
│           │   │   ├── Categories Grid
│           │   │   └── Virtual Styling
│           │   │
│           │   ├── PartyWear (/party-wear)
│           │   │   ├── Hero with Background
│           │   │   └── Product Grid
│           │   │       └── ProductCard (x6)
│           │   │
│           │   ├── Cart (/cart)
│           │   │   ├── Cart Items List
│           │   │   └── Checkout Section
│           │   │
│           │   └── SignIn (/signin)
│           │       └── Form
│           │           ├── Email Input
│           │           ├── Password Input
│           │           └── Submit Button
│           │
│           └── Footer
│               ├── About Section
│               └── Contact Section
```

## State Management Flow

```
┌────────────────────────────────────────┐
│          CartContext                   │
│  ┌──────────────────────────────────┐  │
│  │  State:                          │  │
│  │   - items: CartItem[]            │  │
│  │   - total: number                │  │
│  │                                  │  │
│  │  Actions:                        │  │
│  │   - addToCart(product)           │  │
│  │   - removeFromCart(id)           │  │
│  │   - updateQuantity(id, qty)     │  │
│  │   - clearCart()                  │  │
│  └──────────────────────────────────┘  │
└────────────────┬───────────────────────┘
                 │
                 ▼
    ┌────────────────────────┐
    │     Components         │
    │  - Header (cart count) │
    │  - Cart (items list)   │
    │  - ProductCard (add)   │
    └────────────────────────┘

┌────────────────────────────────────────┐
│          AuthContext                   │
│  ┌──────────────────────────────────┐  │
│  │  State:                          │  │
│  │   - user: User | null            │  │
│  │   - isAuthenticated: boolean     │  │
│  │   - loading: boolean             │  │
│  │                                  │  │
│  │  Actions:                        │  │
│  │   - login(email, password)       │  │
│  │   - signup(email, password)      │  │
│  │   - logout()                     │  │
│  └──────────────────────────────────┘  │
└────────────────┬───────────────────────┘
                 │
                 ▼
    ┌────────────────────────┐
    │     Components         │
    │  - Header (user info)  │
    │  - SignIn (forms)      │
    │  - Protected Routes    │
    └────────────────────────┘
```

## Data Flow Example: Adding to Cart

```
1. User clicks "Add to Cart" on ProductCard
   │
   ▼
2. ProductCard calls addToCart(product)
   │
   ▼
3. CartContext updates state via reducer
   │
   ├─► ADD_TO_CART action dispatched
   │
   ├─► Reducer checks if item exists
   │   ├─ Yes: Increment quantity
   │   └─ No: Add new item
   │
   ├─► Update total price
   │
   ▼
4. All subscribed components re-render
   │
   ├─► Header shows updated cart count
   │
   └─► Cart page shows new item
```

## Routing Flow

```
User navigates to URL
   │
   ▼
React Router matches route
   │
   ├─► / ──────────────────► Home Component
   │
   ├─► /party-wear ────────► PartyWear Component
   │
   ├─► /ethnic-wear ───────► EthnicWear Component
   │
   ├─► /professional ──────► Professional Component
   │
   ├─► /casual ────────────► Casual Component
   │
   ├─► /cart ──────────────► Cart Component
   │
   ├─► /signin ────────────► SignIn Component
   │
   └─► /product/:id ───────► ProductDetail Component
```

## Build & Deploy Pipeline

```
Development:
┌──────────┐     ┌──────────┐     ┌──────────┐
│   Edit   │────►│  Vite    │────►│ Browser  │
│  Source  │     │  HMR     │     │ (reload) │
└──────────┘     └──────────┘     └──────────┘

Production:
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│ npm run  │────►│   Vite   │────►│  dist/   │────►│  Deploy  │
│  build   │     │  Build   │     │  folder  │     │  Server  │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
                      │
                      ├─► TypeScript Compile
                      ├─► Bundle JS/CSS
                      ├─► Optimize Assets
                      ├─► Code Splitting
                      └─► Generate Manifest
```

## Responsive Breakpoints Visual

```
┌─────────────────────────────────────────────────────────┐
│                    Desktop (> 1024px)                    │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Header: Logo  |  Nav Links  |  Auth + Cart      │  │
│  ├───────────────────────────────────────────────────┤  │
│  │                                                    │  │
│  │  Products:  [Card] [Card] [Card]                 │  │
│  │             [Card] [Card] [Card]                 │  │
│  │                                                    │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────┐
│    Tablet (768px - 1024px)      │
│  ┌───────────────────────────┐  │
│  │ Header: Logo | Nav | Auth │  │
│  ├───────────────────────────┤  │
│  │                           │  │
│  │  Products:  [Card] [Card] │  │
│  │             [Card] [Card] │  │
│  │                           │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘

┌─────────────────┐
│ Mobile (< 768px)│
│  ┌───────────┐  │
│  │Logo  [≡]  │  │
│  ├───────────┤  │
│  │           │  │
│  │ [Product] │  │
│  │   Card    │  │
│  │           │  │
│  │ [Product] │  │
│  │   Card    │  │
│  │           │  │
│  └───────────┘  │
└─────────────────┘
```

## Technology Stack Layers

```
┌─────────────────────────────────────────┐
│          User Interface Layer            │
│    React Components + Tailwind CSS       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│       Application Logic Layer            │
│   React Hooks + Context API + Reducers   │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│         Routing Layer                    │
│         React Router v6                  │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│        State Management Layer            │
│   Context API + useReducer + localStorage│
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│           Data Layer                     │
│    API Calls (Fetch/Axios) + GraphQL    │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│          Build Layer                     │
│    Vite + TypeScript + ESLint           │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│         Deployment Layer                 │
│     PWA + Service Workers + Hosting      │
└─────────────────────────────────────────┘
```

## File Organization Visual

```
src/
│
├── 📱 components/         (Reusable UI pieces)
│   ├── Header.tsx        ─┐
│   ├── Footer.tsx         ├─ Layout components
│   ├── Loading.tsx        │
│   └── ProductCard.tsx   ─┘  Business components
│
├── 📄 pages/             (Route components)
│   ├── Home.tsx          ─┐
│   ├── PartyWear.tsx      │
│   ├── EthnicWear.tsx     ├─ Public pages
│   ├── Professional.tsx   │
│   ├── Casual.tsx        ─┤
│   ├── Cart.tsx           ├─ Feature pages
│   ├── SignIn.tsx        ─┤
│   └── ProductDetail.tsx ─┘
│
├── 🔄 context/           (Global state)
│   ├── AuthContext.tsx   ─── Authentication
│   └── CartContext.tsx   ─── Shopping cart
│
├── 📘 types/             (TypeScript definitions)
│   └── index.ts          ─── All interfaces
│
├── 🎨 App.tsx            (Root component)
├── 🚀 main.tsx           (Entry point)
└── 💅 index.css          (Global styles)
```

---

## Performance Metrics Targets

```
Lighthouse Score Goals:
┌────────────────────┬─────────┐
│ Performance        │   95+   │
│ Accessibility      │   100   │
│ Best Practices     │   95+   │
│ SEO                │   100   │
│ PWA                │   ✓     │
└────────────────────┴─────────┘

Load Time Goals:
┌────────────────────┬─────────┐
│ First Paint        │  < 1s   │
│ Interactive        │  < 2s   │
│ Full Load          │  < 3s   │
└────────────────────┴─────────┘
```

---

This visual guide helps understand the project structure at a glance! 👀
