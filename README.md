# 🖼️ Responsive Image Gallery

A modern and interactive image gallery web application built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**. The project focuses on a smooth user experience, highly responsive design, and a clean component architecture.

---

## ✨ Main Features

* **Adaptive Responsive Grid:** Dynamic layout optimized for different screen breakpoints (Mobile, Tablet, and Desktop).
* **Featured Image:** The first image in the gallery features special visual and structural prominence on large screens.
* **Interactive Drag & Drop:** Ability to dynamically reorder items by dragging them directly across the grid.
* **Selection & Deletion Management:** Support for individual or multiple image selection, with batch deletion and security confirmation.
* **Modular Componentization:** Clear separation between state/layout management (`Gallery`) and the visual presentation of individual items (`ImageItem`).

---

## 📱 Responsive Layout Rules

The grid adapts strictly according to the following structural rules:

| Device | Grid Columns | Featured Image Behavior (`index === 0`) |
| :--- | :--- | :--- |
| **Desktop (`>1024px` / `lg`)** | 5 columns (`lg:grid-cols-5`) | Occupies a $2 \times 2$ cell area (`lg:col-span-2 lg:row-span-2`) |
| **Tablet (`768px - 1024px` / `md`)** | 4 columns (`md:grid-cols-4`) | Standard uniform size ($1 \times 1$) |
| **Mobile (`<768px`)** | 2 columns (`grid-cols-2`) | Standard uniform size ($1 \times 1$) |

---

## 🛠️ Tech Stack

* **React** (Functional Components & Hooks)
* **TypeScript** (Static and secure typing)
* **Tailwind CSS** (Modern utility-first styling)
* **Vite** (High-performance development environment and build tool)

---

## 🚀 How to Run the Project Locally

Make sure you have **Node.js** installed on your computer.

1. Clone the repository:
   ```bash
   git clone <your-repository-url>