## How to Run the Project Locally

1. **Clone the project**:

   ```bash
   git clone <repository-url>
   ```

2. **Install dependencies**:
   Run the following command to install all required dependencies:

   ```bash
   npm install
   ```

3. **Run the application**:
   Start the app in development mode by running:

   ```bash
   npm run dev
   ```

4. **Access the application**:
   Open the application in your browser at the specified port (usually `http://localhost:3000`).

---

## About the Project

- **Built with**: This project uses **Next.js** and **TypeScript** for better scalability and maintainability.
- **PWA (Progressive Web App)**: The application is a PWA, which allows it to work offline and be installed on devices.
- **React Suspense**: Used for handling asynchronous operations with better UX and loading states.
- **Optimal Performance**: Combines both **Server** and **Client components** to maximize performance.
- **Responsive Design**: The website is fully responsive and works seamlessly on both **desktop** and **mobile devices**.

---

## What's New in This Project

- **Highly Rated Games**: Added a section that displays games rated above **4.5 stars** for users to easily find popular games.
- **Light & Dark Mode Switcher**: The theme switcher is now located at the top-right, unlike the original website where it was in the bottom-right.
- **View More Games**: Users can now view all the games on the same page by clicking on the "View more" section, rather than being redirected. However, if they prefer, they can click on the navbar links to navigate to the respective pages.
- **Tooltip Details**: On hover, users can see detailed information about the game in a tooltip section for a better user experience.
- **Persistent Favourites**: Fixed the issue where the favourite icon would not persist its state (active/inactive) after page refresh, ensuring that users' favourites are saved correctly.
