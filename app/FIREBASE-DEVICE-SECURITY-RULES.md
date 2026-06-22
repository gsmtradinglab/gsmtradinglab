Paste these additional rules inside service cloud.firestore match /databases/{database}/documents block:

match /activeSessions/{userId} {
  allow create, read, update: if request.auth != null && request.auth.uid == userId;
  allow read, update, delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ["admin", "superAdmin"];
}

match /securityLogs/{id} {
  allow create: if request.auth != null;
  allow read, update, delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ["admin", "superAdmin"];
}

match /blockedLoginAttempts/{id} {
  allow create: if request.auth != null;
  allow read, update, delete: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role in ["admin", "superAdmin"];
}
