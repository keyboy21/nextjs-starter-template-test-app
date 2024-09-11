import type { PageType } from '@/types/component.types';
import { TableData } from './_components/TableData';
import { Suspense } from 'react';
import { Heading } from '@/components/ui/Heading';
import { TableLoading } from '@/components/ui/TableLoading';

const ProductsPage: PageType = async ({ searchParams }) => {
	const pageQuery = searchParams?.page || 1;

	return (
		<section>
			<header className="mb-5 flex justify-between px-6">
				<Heading as={'h2'} weight={'medium'}>
					List of Products
				</Heading>
				<div className="flex items-center gap-3">
					{/* <AddExpense /> */}
				</div>
			</header>

			<Suspense fallback={<TableLoading />}>
				<TableData page={Number(pageQuery)} />
			</Suspense>
		</section>
	);
};

export default ProductsPage;
