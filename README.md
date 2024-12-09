# Harmony Headlines

Harmony Headlines is an app designed to present news stories about the Israel-Palestine conflict in a way that fosters understanding, empathy, and constructive dialogue. The app transforms raw, potentially overwhelming news into progressively friendlier formats, promoting critical engagement while reducing emotional strain. It also features sentiment analysis and customizable tone settings.

---

## 🚀 Features

- **Progressive News Simplification**:
  - **Original**: Full, unaltered news text.
  - **Harmonized**: A neutral, friendlier version that highlights shared humanity or constructive elements. Adjust based on kindness scale (0 = most friendly, 10 = most aggressive).
  
- **Sentiment Analysis**: 
  - Analyze the tone (positive, neutral, negative) of the article to help users understand its potential bias.
  
- **Interactive Sentiment Control**: 
  - Let users adjust the tone of the news displayed using a slider or toggle (0 = most friendly, 10 = most aggressive).
  
- **Mobile-First Design**: 
  - Optimized for mobile-first experience to ensure seamless access across devices.

---

## 💻 Tech Stack

- **Frontend Framework**: React (with React Router and Context API)
- **State Management**: React Context API
- **Routing**: React Router
- **Styling**: Tailwind CSS
- **API Integration**:
  - [**MediaStack API**](https://mediastack.com/): Fetch real-time news articles.
  - [**Gemini API**](https://cloud.google.com/generative-ai): Sentiment analysis and content harmonization.

---

## 🛠️ Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/wardkadan1/Harmony-Headlines.git
    ```
2. **Navigate to the project directory**:
    ```bash
    cd Harmony-Headlines
    ```
3. **Install dependencies**:
    ```bash
    npm install
    ```
4. **Start the development server**:
    ```bash
    npm start
    ```
    The app will be available at [http://localhost:3000](http://localhost:3000).

---

## 🔄 Development Phases

### Phase 1: Setup & UI
- Initialize the React project using Vite or Create React App, implement routing, and create the basic components: `Header`, `NewsFeed`, and `Footer`.

### Phase 2: API Integration
- Integrate with the MediaStack API to fetch news articles, and connect with the Gemini API for sentiment analysis and content harmonization.

### Phase 3: Advanced Features
- Implement the sentiment slider, tabs for article versions, multilingual support, and other advanced features.

### Phase 4: Testing & Deployment
- Test edge cases (e.g., empty API responses), move API calls to the server, store the keys securely, and deploy the application on platforms like Netlify or Vercel.

---

## 🔧 Extra Features

- Save news stories (using mockapi/Firestore)
- Authentication (user login & registration)
- Search and filter news based on keywords and mood
- Caching for faster loading times
- Add more API and AI integrations

---

## 🧠 UX Principles

- **Empathy-Driven Design**: Soft color palette (blue/green) to reduce emotional stress.
- **Accessibility**: High contrast text, large buttons, and multilingual options.
- **User Engagement**: Provide intuitive controls for tone and news simplification.
- **Mobile First**: Ensure the app is optimized for mobile use before focusing on desktop views.

---

## 🗺️ App Flow

### Home Page
- Displays a list of news articles in cards with the title, sentiment indicator, and a brief overview.

### Article Page
- Clicking a news card in the Home page navigates to the Article page, where the full news details are shown along with options for sentiment control.

---


## 🎉 Acknowledgments

- **MediaStack API**: For providing real-time news articles.
- **Gemini API**: For sentiment analysis and content harmonization.
- **React**: For providing the frontend framework.
- **Vercel/Netlify**: For deployment.
