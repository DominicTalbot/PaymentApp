# Payment Management App - Talbot Design Co.

Hey there! 👋 This is a simple payment management system I built while learning Angular. It's a full-stack app that lets you add, view, edit, and delete payment details. Think of it as a digital wallet for storing your credit card information securely.

## What I Built

A clean, modern web app with:

- **Add payments**: Form to enter new payment methods
- **View payments**: List of all your saved cards (with numbers masked for security)
- **Edit payments**: Update existing payment details
- **Delete payments**: Remove payments you no longer need

The UI is styled with Bootstrap and custom CSS to look professional and modern.

## Tech Stack

- **Frontend**: Angular 17+ with TypeScript
- **Styling**: Bootstrap 5 + custom CSS with gradients and animations
- **HTTP Client**: Angular's HttpClient for API calls
- **Forms**: Template-driven forms with validation
- **Backend**: ASP.NET Core Web API (not included in this repo)
- **Database**: SQL Server (connection details below)

## What I Learned

This was my first real Angular project, and I picked up a ton:

### Angular Basics

- **Components**: How to create reusable UI pieces
- **Services**: Sharing data and logic between components
- **Dependency Injection**: Angular's way of managing dependencies

### Forms & Validation

- Template-driven forms with `ngModel`
- Form validation with `required`, `minlength`, etc.
- Handling form submission and resetting

### CRUD Operations

- **Create**: POST requests to add new payments
- **Read**: GET requests to fetch payment lists
- **Update**: PUT requests to modify existing payments
- **Delete**: DELETE requests to remove payments

### HTTP & Observables

- Using Angular's HttpClient
- Working with RxJS Observables
- Handling API responses and errors

### UI/UX Design

- Modern CSS with gradients and shadows
- Hover effects and smooth animations
- Responsive design for mobile and desktop
- Font Awesome icons for better UX

## Getting Started

### Prerequisites

- Node.js (v18+)
- Angular CLI: `npm install -g @angular/cli`
- A running backend API (see database setup below)

### Installation

1. Clone this repo:

```bash
git clone https://github.com/yourusername/payment-app.git
cd payment-app
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
ng serve
```

4. Open your browser to `http://localhost:4200`

## Database Setup

This frontend needs a backend API to actually store the data. I built the API using ASP.NET Core, but here's how to connect it:

### Backend Requirements

You'll need:

- ASP.NET Core Web API project
- SQL Server database
- Entity Framework Core

### Database Connection

1. **Create your database** in SQL Server (I use Visual Studio's SQL Server Object Explorer for this)

2. **Update the connection string** in your backend's `appsettings.json`:

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=your-server;Database=PaymentDB;Trusted_Connection=True;TrustServerCertificate=True;"
  }
}
```

3. **Create the PaymentDetails table**:

```sql
CREATE TABLE PaymentDetails (
    PaymentDetailId INT PRIMARY KEY IDENTITY(1,1),
    CardHolderName NVARCHAR(100) NOT NULL,
    CardNumber NVARCHAR(16) NOT NULL,
    ExpirationDate NVARCHAR(5) NOT NULL,
    SecurityCode NVARCHAR(3) NOT NULL
);
```

4. **API Endpoints** your frontend expects:

- `GET /api/PaymentDetails` - Get all payments
- `POST /api/PaymentDetails` - Add new payment
- `PUT /api/PaymentDetails/{id}` - Update payment
- `DELETE /api/PaymentDetails/{id}` - Delete payment

5. **CORS setup** in your backend to allow requests from `http://localhost:4200`

6. **Update the API URL** in `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiBaseUrl: 'https://your-api-url.com/api',
};
```

## Project Structure

```
src/
├── app/
│   ├── payment-details/           # Main component
│   │   ├── payment-details.html   # List view
│   │   └── payment-detail-form/   # Form component
│   └── shared/                    # Services & models
│       ├── payment-details.ts     # API service
│       └── payment-detail.model.ts # Data model
├── environments/                  # API config
└── styles.css                     # Global styles
```

## Tips for Beginners

- **Start small**: Build one feature at a time
- **Use Angular CLI**: `ng generate component` saves time
- **Console.log everything**: Debug by logging API responses
- **Break down problems**: Complex features become simple when broken into steps
- **Learn RxJS gradually**: Observables are powerful but can be confusing at first

## Future Improvements

- Add payment method icons (Visa, Mastercard, etc.)
- Implement search and filtering
- Add user authentication
- Encrypt sensitive data
- Add payment validation (real card number checks)

## Acknowledgments

Built with ❤️ by someone learning Angular. Special thanks to:

- Angular documentation
- Bootstrap for the UI components
- Font Awesome for the icons
- The Angular community on Stack Overflow

---

_This project represents my journey from Angular newbie to building a complete CRUD application. Hope it helps someone else on their learning path!_ 🚀
