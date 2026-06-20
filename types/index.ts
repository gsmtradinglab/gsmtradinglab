export type UserRole = "user" | "admin" | "superAdmin";
export type CourseAccess = "none" | "online" | "physical" | "premium";
export type PaymentStatus = "none" | "pending" | "verified" | "rejected";

export type UserProfile = {
  uid: string;
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  role: UserRole;
  status: "active" | "inactive";
  courseAccess: CourseAccess;
  paymentStatus: PaymentStatus;
  selectedCourse?: string;
  learningMode?: string;
  createdAt: string;
  updatedAt: string;
};

export type Registration = {
  id?: string;
  userId: string;
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  experienceLevel: string;
  preferredCourse: string;
  learningMode: string;
  learningStyle: string;
  preferredTimeSlot?: string;
  paymentMethod: string;
  paymentReference?: string;
  message?: string;
  status: "New" | "Contacted" | "Payment Pending" | "Payment Verified" | "Access Granted" | "Rejected";
  createdAt: string;
  updatedAt: string;
};

export type Payment = {
  id?: string;
  userId: string;
  courseType: string;
  amount: number;
  currency: "USD" | "PKR" | "USDT";
  paymentMethod: string;
  transactionId?: string;
  paymentProofUrl?: string;
  status: PaymentStatus;
  adminNotes?: string;
  createdAt: string;
  verifiedAt?: string;
};

export type SignalVisibility = "public" | "members" | "premium" | "selected";
export type SignalStatus = "Active" | "TP1 Hit" | "TP2 Hit" | "TP3 Hit" | "Stop Loss Hit" | "Break Even" | "Cancelled" | "Closed Manually" | "Educational Setup";

export type Signal = {
  id?: string;
  title: string;
  marketType: string;
  pair: string;
  direction: "Long / Buy" | "Short / Sell" | "Watchlist";
  entryPrice?: string;
  entryZone?: string;
  stopLoss?: string;
  takeProfit1?: string;
  takeProfit2?: string;
  takeProfit3?: string;
  leverage?: string;
  riskLevel: "Low" | "Medium" | "High";
  timeframe: string;
  visibility: SignalVisibility;
  selectedUserIds?: string[];
  status: SignalStatus;
  chartImageUrl?: string;
  tradingViewLink?: string;
  analysisText?: string;
  riskNote?: string;
  adminNotes?: string;
  createdBy: string;
  createdAt: string;
  updatedAt: string;
};
