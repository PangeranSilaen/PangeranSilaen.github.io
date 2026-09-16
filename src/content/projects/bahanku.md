---
title: "BahanKu"
shortDescription: "Mobile commerce app for cooking ingredients with persistent cart state, checkout, order history, catalogue browsing, and recipe features."
tech: "React Native / Expo / Supabase"
order: 4
featured: true
category: "Mobile Commerce"
role: "Mobile Engineer"
period: "2024 — 2025"
clientOrContext: "Mobile Application Product & Prototype"
repository: null
liveUrl: null
deliverables:
  - "Cross-platform mobile application compiled for Android and iOS via Expo"
  - "Persistent local cart state with offline-first caching via MMKV/AsyncStorage"
  - "Recipe-to-cart integration allowing one-click ingredient bundling"
  - "Supabase authentication, PostgreSQL row-level security, and real-time order tracking"
stack:
  - "React Native"
  - "Expo"
  - "TypeScript"
  - "Supabase"
  - "PostgreSQL"
  - "Zustand"
---

## Overview

BahanKu is a mobile commerce platform engineered to simplify grocery and cooking ingredient shopping for home cooks and small food vendors. The application blends interactive culinary recipes with direct ingredient purchasing, allowing customers to add all recipe portions to their shopping cart with a single tap.

## Product Architecture

- **Recipe & Ingredient Graph:** Ingredients are mapped to standardized SKU items with dynamic unit conversions (grams, bundles, packs, kilograms) to prevent order ambiguity.
- **Cart & State Management:** Zustand with persistent offline storage handles cart mutations, stock checks, and regional courier shipping calculations.
- **Security & Database:** Supabase handles email and OAuth authentication, backed by PostgreSQL tables protected by Row Level Security (RLS) policies ensuring users only query their own orders and addresses.

## Technical Execution

The mobile frontend was built with React Native and Expo managed workflow for predictable cross-platform compilation. Smooth 60fps list scrolling was achieved by optimizing item re-renders and lazy-loading product imagery with blurred placeholders.
