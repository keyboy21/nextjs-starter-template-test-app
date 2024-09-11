import NextAuth from 'next-auth';

declare module 'next-auth' {
	interface User {
		userId: number;
		userName: string;
		accessToken: string;
		// exp: number;
		// iat: number;
		// email: string;
		// image: string;
		// userType: string;
	}
}

import { JWT } from 'next-auth/jwt';
declare module 'next-auth/jwt' {
	interface JWT {
		userId: number;
		userName: string;
		accessToken: string;
		// exp: number;
		// iat: number;
		// email: string;
		// image: string;
		// userType: string;
	}
}
