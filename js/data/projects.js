export const projects = [
  {
    type: "Full-stack (Capstone)",
    title: "QR Code Inventory Management and Item Tracking System",
    date: "MAR 2024 - JUN 2025",
    thumbnail: 'assets/images/dashboard.png',
    description: "A full-stack inventory system with modules for item tracking, issuance, and reporting.",
    features:
    {
      shared: [
        { authentication: "Secure login with email and admin verification (for mobile only) before accessing the app." },
        { notification: "App notification when request is registered, issued, cancelled, and received." },
      ],
      desktop: [
        { dashboard: "View inventory and requests summary." },
        { inventory_management: "Register and manage both supply items and inventory assets, generate QR codes, update details, and view records." },
        { purchase_requests: "Track officer requests, validate issuances, and simplify report generation via extraction of information from purchase requests." },
        { item_issuance: "Manage issuances and generate reports in either Excel or PDF format such as Inventory Custodian Slip (ICS), Property Acknowledgement Receipt (PAR), Requisition and Issue Slip (RIS), stickers, and physical count reports: Report on the Physical Count of Inventories, Report on the Physical Count of Semi-Expendable, and Report on the Physical Count of Property, Plant, and Equipment." },
        { officer_management: "Manage officer records linked to requests and issuances." },
        { user_management: "Admin-specific tab for viewing, approving, or revoking user access." },
        { archive_management: "Admin-specific tab for storing and managing archived records." },
      ],
      mobile: [
        { home: "View user requests summary, including ongoing ones." },
        { purchase_request_overview: "View detailed information with timeline about user request and send follow-up notifications to the supply custodian." },
        { qr_code_scanning: "Scan QR codes attached from either the issuance documents or item stickers to see details and confirm receipt." },
        { profile: "View user information such as name, position, and department." },
      ],
    },
    tech: ["Flutter (Dart)", "Bloc", "Dart Frog", "PostgreSQL"],
    source_code: {
      desktop: "https://github.com/kal-i/qrims_desktop.git",
      mobile: "https://github.com/kal-i/qrims_mobile.git",
    },
  },
  {
    type: "Back-end (Exploration)",
    title: "Fi.nance Tracking API",
    date: "MAR - APR 2025",
    thumbnail: "assets/images/authMiddleware.ts.png",
    description: "A RESTful finance tracking API built with Node.js, implementing JWT-based authentication, account and transaction management, and follows a layered architecture for simplicity and scalability.",
    features: [
      { authentication: "Secure login with JWT authentication and session trakcing." },
      { account: "Accounts for managing and holding user funds." },
      { transaction: "Transactions supporting expenses, income, and transfers." },
    ],
    tech: ["Node.js", "Express", "TS", "Prisma", "PostgreSQL"],
    source_code: "https://github.com/kal-i/Node-Practices.git",
  },
  {
    type: "Full-stack (Academic)",
    title: "Loan Management System",
    date: "MAY - JUL 2023",
    thumbnail: "assets/images/lms.png",
    description: "A desktop loan management system using C# and MS SQL Server.",
    features: [
      { authentication: "Secure login with database validation." },
      { dashboard: "View loan summary information." },
      { client: "Form for registering, updating, viewing, and deleting client records." },
      { guarantor: "Form for registering, updating, viewing, and deleting guarantor records." },
      { loan_officer: "Form for registerng, updating, viewing, and delete loan officer records." },
      { loan_process: "Form for handling loan application processes: applicatioon, pending, approved, and denied." },
      { payment_process: "Form for managing active and settled loans." }
    ],
    tech: ["C#", "MS SQL Server"],
    source_code: "https://github.com/kal-i/loan-management-system.git",
  },
];
