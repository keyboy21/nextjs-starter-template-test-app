import type { Metadata, ResolvingMetadata } from 'next';
import type { FC, ReactNode } from 'react';

type searchParams = { [key: string]: string | string[] | undefined };
type Params = { [key: string]: string };

export type PageType<SearchParams = searchParams> = FC<{
	params: Params;
	searchParams?: SearchParams;
}>;

export type LayoutType = FC<{
	params: Params;
	children: ReactNode;
}>;

export type ErrorRouteComponent = FC<{
	error: Error;
	reset: () => void;
}>;

export type RenderBehavior =
	| 'auto'
	| 'force-dynamic'
	| 'error'
	| 'force-static';

export type DynamicMetadata<SearchParams extends object = object> = (
	params: {
		params: Params;
		searchParams: SearchParams;
	},
	parent: ResolvingMetadata,
) => Promise<Metadata> | Metadata;
