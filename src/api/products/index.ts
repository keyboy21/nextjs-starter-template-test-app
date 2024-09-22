import ky from 'ky';
import { BASE_URL } from '@/configs/env.config';
import type { Product, Products } from '@/types/products.type';
import { PaginationConfig } from '@/configs/pagination.config';

export const getProducts = async (
	page = 1,
	limit = PaginationConfig.showPerPage,
) => {
	const skip = limit * (page - 1);

	const res = await ky
		.get(`${BASE_URL}/products?limit=${limit}&skip=${skip}`)
		.json<Products>();

	return res;
};

export const getProduct = async (id: string) => {
	const res = await ky.get(`${BASE_URL}/products/${id}`).json<Product>();

	return res;
};

export const deleteProduct = async (id: number) => {
	const res = await ky.delete(`${BASE_URL}/products/${id}`).json<Product>();

	return res;
};
