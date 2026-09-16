---
title: "Fingerspot TCP"
shortDescription: "Realtime TCP middleware that parses the realtime_glog protocol, plus a simulator with Auto Scan Mode so device flows can be tested without physical hardware."
tech: "Node.js / TCP Socket / React"
order: 3
featured: true
category: "Systems & Middleware"
role: "Systems Developer"
period: "Jan 2026"
clientOrContext: "Biometric Hardware Protocol Integration"
repository: "https://github.com/PangeranSilaen/fingerspot-simulator"
liveUrl: null
deliverables:
  - "Low-level Node.js TCP server listening for raw hardware push sockets"
  - "Strict binary and string parser for the proprietary realtime_glog payload"
  - "Hardware simulator web UI with Auto Scan Mode and manual badge trigger"
  - "Socket health monitor, reconnect backoff handler, and packet inspection view"
stack:
  - "Node.js"
  - "TCP Sockets (net module)"
  - "TypeScript"
  - "React"
  - "Vite"
  - "WebSocket"
---

## Overview

Fingerspot TCP is a systems integration project consisting of a high-throughput TCP socket server and a standalone biometric hardware simulator. It was built to solve a critical testing bottleneck: developing enterprise attendance systems without having 24/7 physical access to multimillion-rupiah biometric terminals.

## The Protocol Problem

Fingerspot Revo series devices communicate using low-level TCP push sockets. When an employee scans their fingerprint, face, or badge, the machine connects to a configured host/port and emits a structured text protocol string (`realtime_glog`) containing device SN, pin, timestamp, verification mode, and verify status.

Testing software against these machines requires handling:
1. TCP packet fragmentation and framing without standard delimiters.
2. Device heartbeat acknowledgements (`ACK` responses expected within milliseconds).
3. Network jitter, connection drops, and reconnect bursts when connectivity restores.

## Solution & Simulator

The Node.js middleware implements a robust TCP socket server that validates incoming packets, sends back standard protocol acknowledgements, extracts employee logs, and dispatches normalized JSON events to downstream systems over HTTP/WebSocket.

To enable full-suite integration testing anywhere, a React-based simulator was built. It faithfully replicates device behavior, including configurable serial numbers, badge generation, random employee rosters, and an **Auto Scan Mode** that streams attendance bursts to stress-test ingest queues under high load.
