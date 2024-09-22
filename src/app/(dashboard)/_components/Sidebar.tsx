'use client';

import { Router } from '@/configs/router.config';
import { cn } from '@/lib/utils';
import {
	BarChart4,
	Gauge,
	Layers,
	PieChart,
	ShoppingBasket,
	StickyNote,
	Users,
} from 'lucide-react';
import type { ComponentProps } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Sidebar = ({ className }: SidebarPrps) => {
	const pathName = usePathname();
	return (
		<aside className={cn('min-w-48 ml-7', className)}>
			<nav>
				<ul className="flex flex-col gap-y-2">
					<li>
						<Link
							href={Router.Home}
							className={cn(
								'flex gap-5 p-3 rounded-lg w-full items-center hover:bg-slate-300 transition-colors duration-300 cursor-pointer',
								{
									'bg-white shadow-sm  hover:bg-white':
										pathName === Router.Home,
								},
							)}
						>
							<Gauge size={20} />
							Home
						</Link>
					</li>
					<li>
						<Link
							className={cn(
								'flex gap-5 p-3 rounded-lg w-full items-center hover:bg-slate-300 transition-colors duration-300 cursor-pointer',
								{
									'bg-white shadow-sm  hover:bg-white':
										pathName === Router.Posts,
								},
							)}
							href={Router.Posts}
						>
							<StickyNote size={20} />
							Posts
						</Link>
					</li>
					<li>
						<Link
							className={cn(
								'flex gap-5 p-3 rounded-lg w-full items-center hover:bg-slate-300 transition-colors duration-300 cursor-pointer',
								{
									'bg-white shadow-sm  hover:bg-white':
										pathName === Router.Products,
								},
							)}
							href={Router.Products}
						>
							<ShoppingBasket size={20} />
							Products
						</Link>
					</li>
					<li>
						<Link
							className={cn(
								'flex gap-5 p-3 rounded-lg w-full items-center hover:bg-slate-300 transition-colors duration-300 cursor-pointer',
								{
									'bg-white shadow-sm  hover:bg-white':
										pathName === Router.Todos,
								},
							)}
							href={Router.Todos}
						>
							<BarChart4 size={20} />
							Todos
						</Link>
					</li>
					<li>
						<Link
							className={cn(
								'flex gap-5 p-3 rounded-lg w-full items-center hover:bg-slate-300 transition-colors duration-300 cursor-pointer',
								{
									'bg-white shadow-sm  hover:bg-white':
										pathName === Router.Users,
								},
							)}
							href={Router.Users}
						>
							<Users size={20} />
							Users
						</Link>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

interface SidebarPrps extends ComponentProps<'aside'> {}
