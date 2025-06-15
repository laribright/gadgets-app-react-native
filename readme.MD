

# ProjectChain: Marketplace for Obsolete & Abandoned Projects

Welcome to ProjectChain! This app is a marketplace for buying, selling, or licensing abandoned and discontinued software projects. This React Native application, built with Expo, Zustand, and Supabase, facilitates the transfer of project ownership and rights. This README will guide you through setting up the mobile application, running it locally, and understanding its structure.

## About ProjectChain

ProjectChain is a marketplace dedicated to obsolete, abandoned, or discontinued software projects. It allows developers to:

- List their unused projects for sale
- Browse available projects from other developers
- Handle transactions securely via Stripe integration
- Manage project licenses and ownership transfers

### Key Features:
- **Project Listings**: Browse through a variety of abandoned projects across different categories
- **Secure Transactions**: Payment processing with Stripe
- **License Management**: Set terms for how your project can be used
- **User Authentication**: Secure user accounts and profiles

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v14 or later)
- npm (latest version)
- Expo CLI
- Git

## Getting Started

Follow these steps to set up and run the mobile application:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/jrobles98/projectchain-marketplace.git
   cd gadgets-app-react-native
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables:**

   - Rename the `.env.example` file to `.env.local` and fill in the required environment variables.

   ```bash
   mv .env.example .env.local
   ```

4. **Run the Development Server:**

   ```bash
   npm start (choose your preferred emulator)
   ```

   Your app should now be running on your emulator.

### Environment Variables

Make sure to properly configure your environment variables by referring to the `.env.example` file. This file contains example values and instructions on what needs to be filled in.

## Course Video

Watch the full course on YouTube: [Fullstack ProjectChain Marketplace: React Native Expo & NextJs Admin](https://youtu.be/26opRFPU0a8)

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

