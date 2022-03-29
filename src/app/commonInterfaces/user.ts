export interface UserInterface {
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: any;
    username: string;
  };
}
