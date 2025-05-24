# Blog-GraphQL: A React Blog Frontend with Hygraph

This project is a **React-based frontend** for a blog, utilizing **GraphQL** to interact with **Hygraph** (formerly GraphCMS) as its headless content management system. It demonstrates how to build a modern, dynamic blog interface by fetching and displaying posts, categories, author information, and more from a GraphQL API.

## ✨ Features

* **Dynamic Content:** Fetches and displays blog posts, authors, categories, etc., from Hygraph.
* **GraphQL Integration:** Uses GraphQL queries to efficiently retrieve only necessary data.
* **Responsive Design:**  UI adapts to different screen sizes.
* **Routing:** React Router Dom.
* **Component-Based Architecture:** Built with reusable MUI components.

## 🛠️ Technologies Used

* **Frontend:**
    * React (version X.X)
    * (React Router for routing, if used)
    * (GraphQL Client: e.g., Apollo Client, urql, if used)
    * (Styling: e.g., Materail UI)
    * (Testing: e.g., Jest, React Testing Library, if used)
* **Backend/CMS:**
    * Hygraph (GraphQL Headless CMS)
* **Build Tools:**
    * (e.g., Vite, Create React App/Webpack)

## 🚀 Getting Started

### Prerequisites

* Node.js (version X.X) and npm/yarn
* A Hygraph account and a project set up with your blog schema (posts, authors, etc.).
* Your Hygraph GraphQL API endpoint and a Permanent Auth Token (or Public API access configured).

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/amirali-98/blog-graphql.git](https://github.com/amirali-98/blog-graphql.git)
    cd blog-graphql
    ```
2.  **Install dependencies:**
    ```bash
    # Using npm
    npm install
    # Or using yarn
    yarn install
    ```
    
### Running the Application

```bash
# Using npm
npm run dev
