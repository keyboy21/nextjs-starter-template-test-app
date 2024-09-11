'use server';

import { signIn } from '@/auth';

export async function logIn(username: string, password: string) {
	await signIn('credentials', { username, password, redirectTo: '/' });
}
