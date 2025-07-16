// Shared in-memory user store
// In a real application, this would be replaced with a database
export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
}

export const users: User[] = [];

export function findUserByEmail(email: string): User | undefined {
  return users.find((user) => user.email === email);
}

export function createUser(user: User): void {
  users.push(user);
}

export function getAllUsers(): User[] {
  return users;
}
