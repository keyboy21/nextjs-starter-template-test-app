import { auth } from '@/auth';
import { Heading } from '@/components/ui/Heading';
import type { PageType } from '@/types/component.types';

const DashboardPage: PageType = async () => {
	const session = await auth();

	return (
		<section>
			<header className="mb-5 flex justify-between px-6">
				<Heading as={'h2'} weight={'medium'}>
					Welcome {session?.user?.firstName} {session?.user?.lastName}
				</Heading>
			</header>
		</section>
	);
};

export default DashboardPage;
