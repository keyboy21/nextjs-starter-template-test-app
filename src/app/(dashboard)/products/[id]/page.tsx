import { getProduct } from '@/api/products';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import type { PageType } from '@/types/component.types';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const ProductPage: PageType = async ({ params }) => {
	if (!params.id) {
		notFound();
	}

	const product = await getProduct(params.id);

	return (
		<section>
			<Heading as={'h1'} weight={'medium'}>
				Name: {product.title}
			</Heading>
			<Image
				src={product.thumbnail}
				alt={product.title}
				width={200}
				height={200}
			/>
			<div className="flex mt-5 flex-col">
				<Paragraph size={'lg'} weight="medium">
					Category: {product.category}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Description: {product.description}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Price: {product.price} $
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Rating: {product.rating}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Stock: {product.stock}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Brand: {product.brand}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					SKU: {product.sku}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Weight: {product.weight} kg
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Dimensions: {product.dimensions.width} x {product.dimensions.height} x{' '}
					{product.dimensions.depth}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Warranty Information: {product.warrantyInformation}
				</Paragraph>
				<Paragraph size={'lg'} weight="medium">
					Shipping Information: {product.shippingInformation}
				</Paragraph>
			</div>
		</section>
	);
};

export default ProductPage;
