# 🛠️ Feedback Collector - Backend (Express.js)

This is the **backend API** for the Feedback Collector app. It provides RESTful endpoints for collecting user feedback and retrieving all submitted feedbacks.

Built using **Express.js** and deployed on **Render**.

---

## 🌐 Live API URL

🔗 https://feendbackbackend-2.onrender.com


---

## 📦 API Endpoints

### ✅ `POST /feedback`

Submit new feedback.

#### Request Body (JSON):

```json
{
  "message": "Your feedback message"
}
