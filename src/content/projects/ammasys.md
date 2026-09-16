---
title: "AMMASYS"
shortDescription: "Biometric attendance management system integrated with Fingerspot Revo machines, designed to give HR cleaner realtime attendance data for ERP integration."
tech: "Next.js / TypeScript / MySQL"
order: 2
featured: true
category: "Biometric & Enterprise System"
role: "Software Engineering Intern"
period: "Jan — Feb 2026"
clientOrContext: "PT Bahana Cipta Internusa"
repository: null
liveUrl: null
deliverables:
  - "Realtime ingestion pipeline from Fingerspot Revo hardware terminals"
  - "Automated shift rule calculation engine (overtime, late arrivals, half-days)"
  - "HR reconciliation workspace with audit trails for manual corrections"
  - "Clean normalized SQL export schemas formatted for enterprise ERP imports"
stack:
  - "Next.js"
  - "TypeScript"
  - "Node.js"
  - "MySQL"
  - "Prisma ORM"
  - "Tailwind CSS"
---

## Overview

AMMASYS is an enterprise attendance management system developed during an internship at PT Bahana Cipta Internusa. The core objective was bridging physical biometric clocking terminals (Fingerspot Revo series) directly into clean, structured records ready for HR review and enterprise ERP payroll processing.

Before AMMASYS, clock-in records had to be extracted manually via USB drives or proprietary desktop utilities, leading to missing punches, uncalculated shift splits, and days of manual correction every payroll cycle.

## Engineering Challenges

- **Raw Log Ingestion:** Biometric devices stream compact binary/text logs (`realtime_glog`) with variable packet sizes and occasional burst reconnects.
- **Complex Shift Rules:** Shift assignments fluctuate across rotating schedules, overnight shifts, break allowances, and dynamic weekend schedules.
- **Fault-Tolerant Reconciliation:** HR staff need an immutable record of what the machine recorded alongside an editable overlay for justified approvals (medical notes, fieldwork assignments, authorized late arrivals).

## Implementation & Results

The system implements a centralized Next.js application with TypeScript strict type checking. A dedicated ingestion service decodes incoming device events, resolves machine identifiers to employee roster profiles, and evaluates clock-in/clock-out pairings within sliding temporal windows.

The result reduced monthly HR reconciliation time from 3 full business days to under 45 minutes, while eliminating duplicate entry disputes.
