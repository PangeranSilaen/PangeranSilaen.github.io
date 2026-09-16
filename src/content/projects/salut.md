---
title: "SALUT"
shortDescription: "Internal university administration platform used across five UPBJJ Samarinda branches. Handles student status lifecycles, passive-status workflows, encrypted credentials, audit logs, bulk Excel operations, and RBAC."
tech: "Laravel 12 / Filament 3.3 / MySQL"
order: 1
featured: true
category: "Internal Enterprise Platform"
role: "Lead Developer / Full Stack Engineer"
period: "2024 — 2025"
clientOrContext: "Universitas Terbuka UPBJJ Samarinda"
repository: null
liveUrl: null
deliverables:
  - "Multi-branch student lifecycle tracking across 5 branch locations"
  - "Passive student reactivation pipeline with automatic notifications"
  - "Role-based access control (RBAC) with granular operator permissions"
  - "Bulk Excel import/export pipelines with validation and error reporting"
  - "Encrypted credential vaults and audit-trail logging for administrative actions"
stack:
  - "Laravel 12"
  - "Filament 3.3"
  - "PHP 8.3"
  - "MySQL"
  - "Alpine.js"
  - "Tailwind CSS (Admin Dashboard)"
---

## Overview

SALUT is an internal enterprise administration platform deployed across five branch offices of Universitas Terbuka UPBJJ Samarinda. The system was designed to solve operational bottlenecks in tracking thousands of active and passive distance-learning students across regional study centers.

Prior to SALUT, academic counselors and branch administrators relied on decentralized spreadsheets, manual email chains, and disconnected desktop records. This caused data divergence, unrecorded student dropouts, and delays in processing administrative transitions.

## Architecture & Constraints

- **Multi-Branch Data Isolation:** The platform models five distinct branch locations while maintaining centralized regional oversight for UPBJJ Samarinda directors.
- **Student Lifecycle Management:** Tracks students across key status states: Active, Passive (Cuti/Non-aktif), Re-enrolled, and Graduated. State transitions trigger automated follow-up workflows.
- **Bulk Data Operations:** High-throughput Excel spreadsheet import pipelines validate incoming enrollment matrices against existing student IDs, handling duplicates and anomalies gracefully.
- **Security & RBAC:** Fine-grained permissions distinguish branch operators, finance officers, academic counselors, and regional supervisors. Sensitive student records and credentials use at-rest encryption.

## Technical Execution

The backend was engineered on Laravel 12 using Filament 3.3 for high-density administrative panels. Custom repository patterns and database transactions were implemented to ensure zero data corruption during mass import operations involving up to 10,000 rows per batch.

Automated audit logging records every lifecycle status change and administrative override with timestamped operator IDs, establishing accountability across all five branches.
