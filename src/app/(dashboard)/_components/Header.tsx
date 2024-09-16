import { Router } from '@/configs/router.config';
import { cn } from '@/lib/utils';
import Logo from '@public/logo.webp';
import NextImage from 'next/image';
import type { ComponentProps } from 'react';
import Link from 'next/link';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { Profile } from './Profile';

export const Header = async ({ className }: HeaderProps) => {

	const session = await auth();

	if (!session?.user) {
		redirect('/auth/login');
	}

	return (
		<header className={cn('flex justify-between px-7 py-5', className)}>
			<Link href={Router.Home} className="flex gap-3 items-center">
				<NextImage src={Logo} className="size-12" alt="logo" />
			</Link>
			<Profile
				firstName={session?.user?.firstName}
				userName={session?.user?.userName}
				lastName={session?.user?.lastName}
			/>
		</header>
	);
};

interface HeaderProps extends ComponentProps<'aside'> { }
