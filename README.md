# 🎧 FOSSify

**FOSSify** is a free, open‑source, Spotify‑style music streaming SaaS that dynamically ingests, stores, and streams audio content without any cost to users. Leveraging web scrapers and crawlers, FOSSify automatically discovers and adds new tracks to its library daily, while a built‑in recommendation engine curates personalized playlists in real time.

---

## 🚀 Project Overview

**FOSSify** empowers users to:

- 🔍 Discover and play any song for free—no subscriptions or payment gateways required.
- ⚡ Enjoy seamless, chunked audio streaming (HLS/DASH) for near‑instant playback.
- 🧠 Benefit from intelligent, music‑based recommendations that learn user preferences.
- 📈 Experience a continuously growing library via automated scraping jobs.

This README outlines the core MVP features, differentiators, high‑level architecture, tech stack, and contributing guidelines.

---

## 🎯 MVP & Differentiator Features

| **Category**              | **Feature**                                                                               |
| ------------------------- | ----------------------------------------------------------------------------------------- |
| **Core Streaming**        | — Chunked HLS/DASH playback for smooth, partial loading (like Netflix).                   |
| **Dynamic Ingestion**     | — Daily cron jobs scrape the web for new tracks and metadata.                             |
| **Recommendation Engine** | — Content‑based and collaborative filtering using audio features (tempo, MFCC, spectral). |
| **Open & Free**           | — No paywalls or subscriptions; fully open source under an MIT license.                   |
| **Modular Architecture**  | — Separate microservices for scraping, recommendation, and streaming for easy scaling.    |

> **Why FOSSify?**  
> Unlike commercial platforms, FOSSify is built for transparency, customization, and community collaboration. You can self‑host, inspect the code, or contribute enhancements.

---

## 🔄 Overall System Flow

1. 🔐 **User Authentication**: Users sign up or log in via OAuth (Better‑Auth).
2. 🌐 **Frontend Request**: Next.js UI fetches playlists and search queries.
3. 🎯 **Track Search & Import**: User searches for a song → Express API forwards request to Scraper Service → Python scrapers locate, download, and upload audio to R2 → metadata saved in Postgres.
4. 🎵 **Streaming**: User selects a track → client fetches HLS playlist (.m3u8) from Express → audio served in segments from Cloudflare R2.
5. 🤖 **Recommendations**: On playback, Recommendation Service (FastAPI) analyzes user history + audio features → returns personalized queue.
6. 🛠️ **Cron Automation**: Cloud Scheduler triggers daily jobs to update library and retrain recommendation models.

---

## 🛠️ Tech Stack

**Framework & UI**
- ⚡ **TurboRepo** – Monorepo for unified build & deployment.
- 💻 **Next.js + Tailwind + shadcn/ui** – Fast, responsive frontend with modern UI.

**Backend & APIs**
- 🚀 **Express.js (TypeScript)** – API gateway for auth, search, and streaming.
- 🔐 **Better‑Auth (OAuth)** – Secure user auth & session management.

**Database & Storage**
- 🐘 **PostgreSQL + Prisma** – Stores users, tracks, metadata, and playlists.
- ☁️ **Cloudflare R2** – S3-compatible object storage for audio + HLS.

**Automation & Scraping**
- 🕷️ **Python (Scrapy / Playwright)** – Scrapes and ingests tracks daily.
- ⏰ **Redis + BullMQ / Celery + Cloud Scheduler** – Handles queues & cron jobs.

**AI/ML & Recommendations**
- 🤖 **FastAPI + librosa + scikit-learn** – Powers real-time music recommendations.

**DevOps**
- 🐳 **Docker** – Containerized microservices for consistent deployment.

---

## 📝 Author’s Notes

FOSSify is my passion project aimed at democratizing music streaming. By combining open‑source principles with cutting‑edge web and audio technologies, the goal is to create a self‑service platform that anyone can deploy, customize, and extend.

I intentionally chose a microservices approach to ensure each part (scraping, streaming, recommendations) can evolve independently and scale as usage grows.

---

## 🤝 Contributing

Contributions—big or small—are welcome and appreciated! Whether it’s fixing bugs, improving docs, enhancing the UI, or optimizing performance, your help makes FOSSify better for everyone.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) to get started.

Thank you for checking out **FOSSify**.  
Let's build a truly free and open music ecosystem together! 🎶
