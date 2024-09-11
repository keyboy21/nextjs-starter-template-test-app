'use client';

import { Router } from '@/configs/router.config';
import { cn } from '@/lib/utils';
import { Link } from '@/navigation';
import Logo from '@public/logo.webp';
import NextImage from 'next/image';
import type { ComponentProps, HTMLAttributes } from 'react';
import { LangSwitch } from './LangSwitch';

export const Header = ({ className }: HeaderProps) => {
	return (
		<header className={cn('flex justify-between px-7 py-5', className)}>
			<Link href={Router.Home} className="flex gap-3 items-center">
				<NextImage src={Logo} className="size-12" alt="logo" />
			</Link>
			<LangSwitch />
			<div>Profile</div>
		</header>
	);
};

interface HeaderProps extends ComponentProps<'aside'> {}
