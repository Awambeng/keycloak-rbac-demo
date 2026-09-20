/**
 * Authenticated user shape used across the application.
 * Derived from the Auth.js session. Roles come from the Keycloak JWT.
 */
export interface AuthUser {
  id: string;
  name: string;
  email: string;
  roles: string[];
}

export interface Donation {
  id: string;
  donor: string;
  amount: number;
  currency: string;
}
