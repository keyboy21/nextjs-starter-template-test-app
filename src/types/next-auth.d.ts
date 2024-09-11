import NextAuth from 'next-auth';

declare module 'next-auth' {
	interface User {
		id: string;
		username: string;
		email: string;
		firstName: string;
		lastName: string;
		gender: string;
		image: string;
		token: string;
		refreshToken: string;
	}
}

import { JWT } from 'next-auth/jwt';
declare module 'next-auth/jwt' {
	interface JWT {
		id: string;
		username: string;
		email: string;
		firstName: string;
		lastName: string;
		gender: string;
		image: string;
		token: string;
		refreshToken: string;
	}
}
