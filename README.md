# Walton Frontend Developer Assignment

## Project Overview

This is a frontend e-commerce application built as part of the Walton Plaza recruitment process.
The application allows users to browse products, view product details, and manage a shopping cart with real-time updates and persistence.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- REST API (Primary Data Source)
- GraphQL (Apollo Client - Demo Integration)

## Features

### Core Features

- Product Listing Page (PLP)
- Product Details Page (PDP)
- Dynamic Routing

### Cart System

- Add to Cart
- Increase Quantity
- Decrease Quantity
- Remove Item
- Clear Cart
- Cart Persistence using LocalStorage

### Data Handling

- Loading State Handling
- Error Handling

### Filtering & Sorting (Implemented)

- Category-based Filtering
- Availability Filtering (In Stock / Out of Stock)
- Price Sorting (Low to High / High to Low)
- Rating Sorting (Top Rated)

### GraphQL Integration (Demo)

- Separate GraphQL demo page implemented
- Used Apollo Client for data fetching
- Fetching data from a public GraphQL API
- Demonstrates query-based selective data fetching

## Architecture Decisions

- Used Next.js App Router for better scalability and performance
- Followed component-based architecture for reusability
- Zustand used for lightweight and efficient global state management
- API layer is separated (`lib/api.ts`) for easier future upgrades

## Trade-offs

- Used REST API for main e-commerce functionality for simplicity and faster implementation
- GraphQL was implemented as a separate demo to showcase understanding and flexibility
- Focused on core features, UI, and performance within limited time

## Performance Optimizations

- Leveraged Server Components where possible
- Used Client Components only where needed (e.g., filtering, cart)
- Optimized images using Next.js Image component
- Reduced unnecessary re-renders

## Future Improvements

- Full GraphQL integration replacing REST API
- Pagination / Infinite Scroll
- Advanced filtering (search, price range)
- Dedicated Cart Page
- Authentication system

## Getting Started

### 1. Install dependencies

```bash
npm install

## Repository
GitHub: https://github.com/shagotobhakat/walton-frontend.git

## Author
Shagoto Bhakat
