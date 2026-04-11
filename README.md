# Walton Frontend Developer Assignment

## Project Overview

This is a frontend e-commerce application built as part of the Walton Plaza recruitment process.
The application allows users to browse products, view product details, and manage a shopping cart with real-time updates and persistence.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Zustand (State Management)

## Features

- Product Listing Page (PLP)
- Product Details Page (PDP)
- Dynamic Routing
- Cart System:
  - Add to Cart
  - Increase Quantity
  - Decrease Quantity
  - Remove Item
  - Clear Cart
- Cart Persistence using LocalStorage
- Loading State Handling
- Error Handling

## Architecture Decisions

- Used Next.js App Router for better scalability and performance
- Followed component-based architecture for reusability
- Zustand used for lightweight and efficient global state management
- API layer is separated (`lib/api.ts`) for easier future upgrades (e.g., GraphQL integration)

## Trade-offs

- Used REST API instead of GraphQL due to lack of a GraphQL backend
- Focused on core functionality and clean implementation within limited time constraints

## Performance Optimizations

- Leveraged Server Components where possible
- Optimized images using Next.js Image component
- Reduced unnecessary client-side rendering

## Future Improvements

- GraphQL integration (Apollo Client)
- Pagination / Infinite Scroll
- Product filtering & sorting
- Dedicated Cart Page
- Authentication system

## Getting Started

### 1. Install dependencies

```bash
npm install

## Repository
GitHub: https://github.com/your-username/your-repo-name

## Author
Shagoto Bhakat
