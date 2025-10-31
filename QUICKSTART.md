# 🚀 Quick Start Guide - House of Ishvita React Project

## Step-by-Step Setup (For Beginners)

### 1. Open the Project Folder

1. Open **Visual Studio Code**
2. Go to **File → Open Folder**
3. Navigate to: `c:\Users\d3ctf\OneDrive\Desktop\Freshies\iisshhvviittaa\house-of-ishvita-react`
4. Click **Select Folder**

### 2. Open Terminal in VS Code

- Press `` Ctrl + ` `` (backtick key, usually below Esc)
- Or go to **Terminal → New Terminal**

### 3. Install Dependencies

In the terminal, type:

```powershell
npm install
```

**Wait for it to complete** (this will take 2-3 minutes the first time)

### 4. Start the Development Server

Once installation is done, type:

```powershell
npm run dev
```

### 5. View Your Website

- Your browser should automatically open to `http://localhost:3000`
- If not, manually open your browser and go to: **http://localhost:3000**

### 6. Making Changes

- Edit any file in the `src` folder
- Save the file (Ctrl + S)
- The browser will automatically reload with your changes! 🎉

---

## Common Commands

| Command | What it does |
|---------|-------------|
| `npm install` | Install all project dependencies (run once) |
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `Ctrl + C` | Stop the development server |

---

## Troubleshooting

### Problem: "npm is not recognized"

**Solution**: Install Node.js from https://nodejs.org

### Problem: Port 3000 is already in use

**Solution**: 
1. Stop the current server (Ctrl + C)
2. Or change port in `vite.config.ts`

### Problem: Dependencies failed to install

**Solution**:
```powershell
# Delete node_modules and try again
Remove-Item -Recurse -Force node_modules
npm install
```

---

## 📂 What's Inside?

- **`src/pages/`** - All the different pages (Home, Party Wear, etc.)
- **`src/components/`** - Reusable pieces (Header, Footer, etc.)
- **`src/context/`** - Global state (Cart, Authentication)
- **`src/types/`** - TypeScript type definitions

---

## 🎯 Key Features Implemented

✅ Responsive design (works on phone, tablet, desktop)
✅ Shopping cart functionality
✅ User authentication (Sign In/Sign Up)
✅ Product catalog with categories
✅ Smooth animations with GSAP
✅ Mobile menu
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ React Router for navigation
✅ PWA (Progressive Web App) ready

---

## Need Help?

Contact the team:
- Ishika: [@ishika_singla10](https://www.instagram.com/ishika_singla10)
- Vanshika: [@vnshka_17](https://www.instagram.com/vnshka_17)
- Harshita: [@harshitaa05](https://www.instagram.com/harshitaa05)

---

**Happy Coding! 💻✨**
