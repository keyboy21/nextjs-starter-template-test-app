import { getProducts } from '@/api/products';
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/Table';
import { TablePagination } from './TablePagination';
import { PaginationConfig } from '@/configs/pagination.config';
import { TableActions } from './TableActions';

export const TableData = async ({ page }: TableDataProps) => {
	const products = await getProducts(page);

	const totalPages = Math.round(products.total / PaginationConfig.showPerPage);

	return (
		<div className="py-5">
			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>#</TableHead>
						<TableHead>Product Name</TableHead>
						<TableHead>Price</TableHead>
						<TableHead>Rating</TableHead>
						<TableHead>Category</TableHead>
						<TableHead>Brand</TableHead>
						<TableHead className="text-center">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{products.products.map((product) => (
						<TableRow key={product.id}>
							<TableCell>{product.id}</TableCell>
							<TableCell>{product.title}</TableCell>
							<TableCell>{product.price} $</TableCell>
							<TableCell>{product.rating}</TableCell>
							<TableCell>{product.category}</TableCell>
							<TableCell>{product.brand ?? 'Not Provided'}</TableCell>
							<TableCell className="text-center">
								<TableActions producId={product.id} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
			<TablePagination
				currentPage={page === 0 ? 1 : page}
				totalPages={totalPages}
			/>
		</div>
	);
};

interface TableDataProps {
	page: number;
}
