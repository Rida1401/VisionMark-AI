# VisionMark AI

**VisionMark AI** is an advanced, AI-powered attendance system that uses facial recognition to automate attendance marking and reduce manual intervention. It combines a modern, responsive frontend with a robust Python-based computer vision backend to provide a seamless experience for students and teachers.

![VisionMark AI Banner](https://via.placeholder.com/1200x400?text=VisionMark+AI)

## 🚀 Features

- **Real-time Face Recognition:** Instantly identifies registered users via webcam using DeepFace and MTCNN.
- **Automated Attendance:** Marks attendance automatically upon successful face verification.
- **Role-Based Access:** Dedicated dashboards for **Students** and **Teachers**.
- **Secure Authentication:** robust user registration and login system using encrypted passwords.
- **Modern UI/UX:** Built with Next.js and Tailwind CSS, featuring glassmorphism effects and smooth animations.
- **Liveness Detection:** Prevents spoofing by ensuring the subject is a real person (integrated via face detection logic).

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Language:** TypeScript

### Backend
- **Framework:** Flask (Python)
- **Computer Vision:** OpenCV, MTCNN
- **Face Recognition:** DeepFace (FaceNet512 model)
- **ML Engine:** TensorFlow / Keras

### Database
- **Primary DB:** MongoDB (Atlas)

## 📂 Project Structure

```bash
VisionMark-AI/
├── backend/                 # Flask API & Python Scripts
│   ├── auth/               # Authentication routes
│   ├── student/            # Student-related logic
│   ├── teacher/            # Teacher-related logic
│   ├── app.py              # Main Flask server entry point
│   ├── recognition.py      # Standalone recognition script
│   └── requirements.txt    # Python dependencies
│
└── frontend/               # Next.js Application
    ├── app/                # App Router pages (Dashboard, Signin, etc.)
    ├── components/         # Reusable UI components (Navbar, Hero, etc.)
    └── public/             # Static assets
```

## 👤 Owner

Created & Owned by **Rida**.

---
*VisionMark AI © 2024. All Rights Reserved.*