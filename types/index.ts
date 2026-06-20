export type UserRole = "user" | "admin" | "superAdmin";
export type UserProfile = {
  uid: string;
  fullName: string;
  email: string;
  phone?: string;
  country?: string;
  city?: string;
  role: UserRole;
  status: "active" | "inactive";
  courseAccess: "none" | "online" | "physical" | "premium";
  paymentStatus: "none" | "pending" | "verified" | "rejected";
  selectedCourse?: string;
  learningMode?: string;
  createdAt: string;
  updatedAt: string;
};
