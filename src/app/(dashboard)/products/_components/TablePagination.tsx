'use client';

import { Pagination } from '@/components/ui/Pagination';
import { useRouter } from 'next/navigation';

export const TablePagination = ({
	totalPages,
	currentPage,
}: PaginationProps) => {
	const { push } = useRouter();

	const onPageChange = (page: number) => {
		push(`/products?page=${page}`, { scroll: false });
	};

	return (
		<div className="mt-5">
			<Pagination
				total={totalPages}
				page={currentPage}
				onPaginate={onPageChange}
			/>
		</div>
	);
};

interface PaginationProps {
	totalPages: number;
	currentPage: number;
}
