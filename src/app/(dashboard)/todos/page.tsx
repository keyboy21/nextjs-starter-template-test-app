import { Heading } from '@/components/ui/Heading';
import type { PageType } from '@/types/component.types';

const TodoPage: PageType = async () => {
	return (
		<section>
			<header className="mb-5 flex justify-between px-6">
				<Heading as={'h2'} weight={'medium'}>
					List of Todos
				</Heading>
				<div className="flex items-center gap-3">{/* <AddExpense /> */}</div>
			</header>
		</section>
	);
};

export default TodoPage;
