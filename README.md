# 🛒 Grocery Compare App

A **Local Market vs Online Price Comparison** app built for Indian households.
Compare prices across 50+ common grocery items — Atta, Dal, Spices, Dairy, Vegetables, and more.

---

## Features

- 📋 **4 Tabs**: All Items | Local Market | Online Prices | Summary
- 🛍️ **50 pre-loaded Indian grocery items** across 10 categories
- ➕ **Add custom items** with your own category and unit
- 💰 **Auto-highlights** which source (Local / Online) gives the best rate
- 📊 **Summary tab** with category-wise savings breakdown
- 🔗 **Share with family** — generates a shareable URL with all data encoded
- 💾 **Auto-saves** to browser localStorage — no login needed
- 📱 **Mobile-friendly** design

---

## Deploy to Vercel (Recommended)

### Step 1 — Push to GitHub

1. Create a new GitHub repository
2. Upload all files from this zip (maintaining folder structure)
3. Commit and push

### Step 2 — Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"New Project"** → Import your GitHub repo
3. Vercel auto-detects React. Click **Deploy**
4. Your app is live in ~2 minutes! 🎉

---

## Run Locally

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000)

---

## How to Share with Family

1. Open the app → Click **"🔗 Share with Family"** (top right)
2. Click **Share / Copy Link**
3. Send the link via WhatsApp, SMS, etc.
4. Family members open the link → they get a copy of your prices
5. Each person's edits save to their own device

---

## Grocery Categories

| Category | Items |
|---|---|
| 🌾 Atta & Grains | Wheat Flour, Basmati Rice, Maida, Besan... |
| 🫘 Dal & Pulses | Toor, Moong, Chana, Masoor, Urad Dal... |
| 🫙 Oils & Ghee | Mustard Oil, Sunflower Oil, Desi Ghee... |
| 🌶️ Spices & Masala | Haldi, Chilli, Jeera, Garam Masala... |
| 🧂 Sugar & Salt | Sugar, Jaggery, Sendha Namak... |
| 🥛 Dairy | Milk, Paneer, Curd, Butter... |
| ☕ Tea & Coffee | Tea Leaves, Instant Coffee |
| 🍪 Snacks & Packaged | Parle-G, Maggi, Namkeen |
| 🧹 Household | Detergent, Dish Wash, Hand Wash, Soap |
| 🥬 Vegetables | Onion, Potato, Tomato, Garlic, Ginger |

---

## Tech Stack

- **React 18** (Create React App)
- **Pure CSS** — no external UI libraries
- **LocalStorage** for data persistence
- **URL encoding** for family sharing
- **Vercel** for deployment
