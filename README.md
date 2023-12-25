# Business Finding App

Welcome to the BizFinder App! This web application is built using the latest technologies, including Next.js, React, Tailwind CSS, Google Places API, and TypeScript. This README file will guide you through the setup and usage of the app.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The BizFinder is a powerful tool that allows users to discover businesses in their vicinity. Leveraging the Google Places API, the app provides accurate and up-to-date information about various businesses, including their name, address, contact details, and user reviews.

## Features

- **Search for Businesses:** Easily find businesses by entering keywords, categories, or specific locations.
- **Detailed Information:** Get comprehensive details about businesses, including their name, address, phone number, and user ratings.
- **Map Integration:** View the location of businesses on an interactive map.
- **Responsive Design:** The app is built with a responsive design, ensuring a seamless experience across devices.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)
- [Git](https://git-scm.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Sayakdutt/BizFinder.git
```

2. Change into the project directory:

```bash
cd BizFinder
```

3. Install dependencies:

```bash
npm install
```

## Configuration

To use the Google Places API, you'll need to obtain an API key. Follow these steps:

1. Visit the [Google Cloud Console](https://console.cloud.google.com/).
2. Create a new project or select an existing one.
3. Enable the "Places API" for your project.
4. Create API credentials and copy the API key.

Create a `.env.local` file in the root of your project and add your API key:

```env
GOOGLE_PLACE_KEY=your-api-key-goes-here
NEXT_PUBLIC_GOOGLE_PLACE_KEY=your-api-key-goes-here
```

Replace `your-api-key-goes-here` with your actual API key.

## Usage

1. Start the development server:

```bash
npm run dev
```

2. Open your browser and visit [http://localhost:3000](http://localhost:3000).

3. Use the app to search for businesses and explore their details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.
