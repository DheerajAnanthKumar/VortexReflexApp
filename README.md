# 🌀 VORTEX REFLEX — Master the Cosmic Grid

**A high-octane, space-themed reaction engine designed to push cognitive speed and motor reflexes to the edge.**

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Lucide](https://img.shields.io/badge/Lucide-Icons-pink?style=for-the-badge&logo=lucide)

-----

## 🌌 Overview

**Vortex Reflex** is a high-performance web application engineered to test the limits of human reaction time. In a visually immersive "deep space" environment, users must navigate a shifting grid of cosmic energy.

Developed with **React** and **Tailwind CSS**, the game utilizes an exponential decay algorithm to scale difficulty, forcing players to maintain extreme precision while under intense time pressure. One wrong move—hitting a **Red Trap**—results in an immediate system failure.

## ✨ Key Features

  * **⚡ Hyper-Speed UI:** A zero-latency interface built on Vite for instantaneous feedback during high-speed play.
  * **🛰️ Adaptive Difficulty:** Game speed increases dynamically based on your score, scaling from "Entry Level" to "Master."
  * **🔴 The Red Protocol:** Integrated risk-management mechanics—color-coded targets where "Red" signals an immediate Game Over.
  * **📱 Responsive Cockpit:** Fully optimized for mobile-touch accuracy and desktop-click precision.
  * **✨ Cosmic Aesthetics:** Deep-space backgrounds featuring a custom-built, shimmering starfield and HUD-style typography.

## 🛠️ Tech Stack

Vortex Reflex is built using modern web standards for maximum performance and fluid animations:

  * **Framework:** [React.js](https://react.dev/) — Leveraging functional components and Hooks for efficient state management.
  * **Styling:** [Tailwind CSS](https://tailwindcss.com/) — Utilizing utility-first classes for a sleek, dark-mode aesthetic.
  * **Animations:** [Framer Motion](https://www.framer.com/motion/) & Custom CSS — Powering the Starfield and UI transitions.
  * **Icons:** [Lucide-React](https://lucide.dev/) — Clean, geometric iconography for the HUD.
  * **Logic:** Custom JavaScript interval hooks with exponential speed scaling.

-----

## 🎮 Mission Walkthrough



We’ve structured this walkthrough to guide you from the initial setup through to the final performance analysis.

#### Phase 1: Pre-Flight Checklist

This is your mission control center. Before you can engage the dynamic grid, you must configure your parameters.

| **1. Navigation Deck (Idle)** | **2. Difficulty Lock** |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/fecdce54-f816-42c0-afbf-f888cf2c6697" width="450" alt="Vortex Menu - Idle State"> | <img src="https://github.com/user-attachments/assets/6f8c0ef8-f8e9-4548-8c86-369684feb02c" width="450" alt="Vortex Menu - Difficulty Locked"> |
| **System Check:** When you first enter the station, all difficulty settings (3, 6, 9, or 12 targets) are offline, and the primary 'START' ignition is disabled. | **Target Acquisition:** To go online, select a difficulty. The chosen value highlights, and the 'START' sequence initiates. Higher numbers increase the complexity of the reaction field. |

-----

#### Phase 2: Active Engagement

Once the system is live, the simulation begins. Your task is speed and precision.

| **3. Reaction Grid** | **4. Forbidden Target** |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/07f426b0-1f1d-400f-bc82-ebd9c78d3892" width="450" alt="Active Gameplay - Scoring Target"> | <img src="https://github.com/user-attachments/assets/aa24731b-e13c-485e-b554-41dbe8b39ed5" width="450" alt="Active Gameplay - Red Trap"> |
| **Active Targets:** Hit the colored circles (like this Blue one) as they blink into existence. The timer in the HUD counts down from 30 seconds. Speed is life. | **AVOID THE RED:** The Red Circle is a trap. It signals a critical threat. The logic dictates that you must ignore this target or face catastrophic system failure. |

-----

#### Phase 3: Post-Mission Analysis

The mission concludes when you either make a fatal error or the operational countdown finishes.

| **5. Vortexed Protocol** | **6. Mission Accomplished** |
|:---:|:---:|
| <img src="https://github.com/user-attachments/assets/cf91e8b5-8a69-4316-a8d4-0417dd086d71" width="450" alt="Game Over Modal - Red Clicked"> | <img src="https://github.com/user-attachments/assets/bb7ee1f7-c2ce-4361-a91b-4c2bb31304a1" width="350" alt="Win Modal - Time Up"> |
| **Critical Failure:** If your reflex hits a Red Target, the system immediately shifts to the 'Vortexed' protocol, ending the game. A Red Warning icon confirms the error. | **Time's Up:** If you successfully avoid all traps and navigate the grid until the timer hits 00:00, the Green Trophy state activates. You receive a success validation and your performance metric (Final Score). |

-----

## 🚀 Deployment & Installation

### Prerequisites

  * **Node.js** (v18 or higher)
  * **npm** or **yarn**

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/DheerajAnanthKumar/vortex-reflex-app.git
    ```
2.  **Initialize Dependencies:**
    ```bash
    cd vortex-reflex-app
    npm install
    ```
3.  **Launch Development Environment:**
    ```bash
    npm run dev
    ```

## 📡 Game Logic Reference

This application uses a custom `useEffect` hook to manage the game loop. The interval frequency is calculated as:
$$Speed = \max(400ms, 2000ms - (Score \times 100ms))$$
*This ensures the game remains challenging without becoming mathematically impossible.*

-----

## ✍️ About the Author

Created by **Dheeraj Ananth Kumar** — Software Engineer • AI Solutions.
Check out more of my work on [GitHub](https://github.com/DheerajAnanthKumar) or connect with me on [LinkedIn](https://www.google.com/search?q=https://www.linkedin.com/in/dheerajananthkumar/).
