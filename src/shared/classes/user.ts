import firebase from 'firebase/compat';

export class User {
  private readonly id: string | null;
  private readonly isAuthorized: boolean;

  constructor(user: firebase.User | null) {
    this.id = user?.uid || null;
    this.isAuthorized = !!user;
  }

  getId(): string | null {
    return this.id;
  }

  getIsAuthorized(): boolean {
    return this.isAuthorized;
  }
}
