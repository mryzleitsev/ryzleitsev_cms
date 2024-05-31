# Simple CMS

## Overview

This project is a simple CMS that manages products and users, including their addition, deletion, and editing. It is created as a coursework project by Ryzleitsev Myron from the 535a group.

## Features

- **Authentication**: Utilizes NextAuth for secure user authentication.
- **CRUD Operations**: Supports Create, Read, Update, and Delete operations with MongoDB.
- **Built with Next.js**: Leverages the powerful features of the Next.js framework.
- **Version Control**: Managed with GitHub for effective version control and collaboration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/mryzleitsev/ryzleitsev_cms.git
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Set up your environment variables. Create a `.env.local` file in the root of your project and add the following:

    ```bash
    AUTH_SECRET=secretkey
    AUTH_URL=http://localhost:3000/api/auth
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Authentication**: Log in to the CMS using NextAuth.
- **Manage Products**: Add, edit, and delete products from the admin interface.
- **Manage Users**: Add, edit, and delete users from the admin interface.
- **Default Admin Login**: Use the following credentials to log in as the admin:
  - **Username**: `admin`
  - **Password**: `admin`

## Technologies

- **Next.js**: A React framework for server-side rendering and static site generation.
- **NextAuth**: Authentication for Next.js applications.
- **MongoDB**: A NoSQL database for storing application data.
- **GitHub**: For version control and project management.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to contact me:

- **Name**: Ryzleitsev Myron
- **Group**: 535a
- **Email**: m.r.ryzleytsev@student.csn.khai.edu
