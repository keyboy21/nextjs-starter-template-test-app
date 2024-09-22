'use client';
import { logIn } from '@/actions/LogIn';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/form/Form';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Inputs/Input';
import { loginSchema } from '@/schemas/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

export function LoginForm() {
	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			userName: 'emilys',
			password: 'emilyspass',
		},
	});

	async function onSubmit(values: z.infer<typeof loginSchema>) {
		await logIn(values.userName, values.password);
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 bg-white p-16 rounded-md"
			>
				<FormField
					control={form.control}
					name="userName"
					render={({ field }) => (
						<FormItem>
							<FormLabel>User Name</FormLabel>
							<FormControl>
								<Input placeholder="user" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="password"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<Input placeholder="fgjkl3434" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button className="w-full" type="submit">
					Submit
				</Button>
			</form>
		</Form>
	);
}
