# WealApp

## Overview
WealApp is a full-stack web application built using **Next.js**, **React**, **MongoDB**, and **Tailwind CSS**.  
It offers a modern, responsive, and user-friendly interface, supporting file uploads, dynamic routing, and interactive features.  

**Live Demo:** [https://weal-production.vercel.app/](https://weal-production.vercel.app/)

---

## Screenshots
Here are some screenshots of WealApp in action:

![WealApp Screenshot 1](https://res.cloudinary.com/dmb58pab9/image/upload/v1763529897/Screenshot_from_2025-11-19_11-22-07_k19npw.png)  


---

## Technology Stack
- **Frontend:** React 19, Next.js 15, Tailwind CSS 4, DaisyUI  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB, Mongoose  
- **Authentication:** bcryptjs, jose  
- **Cloud Services:** Cloudinary, next-cloudinary  
- **Utilities & Libraries:** framer-motion, react-icons, react-hot-toast, react-select, slugify, date-fns, ua-parser-js, multer, jspdf, @react-pdf/renderer  

---

## Features
- User authentication and authorization  
- File upload and cloud storage with Cloudinary  
- Dynamic routing and database operations  
- PDF generation and dynamic reporting  
- Beautiful UI/UX with responsive design  
- Real-time notifications and animations using Framer Motion  

---

## Dependencies
```json
{
  "dependencies": {
    "@auth/mongodb-adapter": "^3.9.1",
    "@react-pdf/renderer": "^4.3.0",
    "@uidotdev/usehooks": "^2.4.1",
    "bcryptjs": "^2.4.3",
    "cloudinary": "^2.6.0",
    "date-fns": "^4.1.0",
    "framer-motion": "^12.15.0",
    "jose": "^5.2.0",
    "jspdf": "^3.0.1",
    "lucide-react": "^0.501.0",
    "mongodb": "^6.17.0",
    "mongoose": "^8.16.2",
    "multer": "^1.4.5-lts.2",
    "next": "^15.3.5",
    "next-cloudinary": "^6.16.0",
    "node-fetch": "^2.7.0",
    "react": "^19.0.0",
    "react-confetti": "^6.4.0",
    "react-dom": "^19.0.0",
    "react-hot-toast": "^2.5.2",
    "react-icons": "^5.5.0",
    "react-select": "^5.10.1",
    "slugify": "^1.6.6",
    "ua-parser-js": "^1.0.37"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "daisyui": "^5.0.20",
    "eslint": "^8.57.0",
    "eslint-config-next": "15.3.0",
    "tailwindcss": "^4"
  }
}
```

---
## Run Locally

Follow these steps to run **WealApp** on your local machine:


### 1️⃣ Clone the repository
```bash
git clone <https://github.com/abubakersiddeak/WealProduction.git>
```

## 2️⃣ Navigate into the project folder
```bash
cd wealapp
```

## 3️⃣ Install dependencies
```bash
npm install
```
## 4️⃣ Create a .env file
```env
JWT_SECRET="your secret"
NEXT_PUBLIC_BASE_URL="your base url"
CLOUDINARY_URL="your cloudinary url"
CLOUDINARY_API_SECRET="your api secret"
CLOUDINARY_API_KEY="your api key"
CLOUDINARY_CLOUD_NAME="your cloud name"

MONGODB_URI="your mongodb uri"

```
## 5️⃣ Start the development server
```bash
npm run dev
```
## 6️⃣ Build for production 
```bash
npm run build
npm start
```

