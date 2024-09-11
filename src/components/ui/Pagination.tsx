import { cn } from '@/lib/utils';
import { forwardRef } from 'react';
import { Pagination as HeadlessPagination } from 'react-headless-pagination';

export const Pagination = forwardRef<PaginationRef, PaginationProps>(
     ({ page, total, disabled = false, onPaginate, position = 'center' }, ref) => {
          if (total <= 1) {
               return null;
          }

          function onPageChange(libPage: number) {
               if (disabled) {
                    return null;
               }

               const pressedPage = libPage + 1;
               if (pressedPage === page) {
                    return null;
               }

               onPaginate(pressedPage);
          }

          const paginationStyles = {
               container: 'flex items-center list-none gap-x-2',
               containerCenter: 'justify-center',
               containerLeft: 'justify-start',
               containerRight: 'justify-end',
               page: 'group-first:bg-red-300  inline-block px-4 py-2 text-base text-stone-900 border-solid bg-white border border-alebaster-100 rounded-lg hover:bg-gray-200 hover:border-gray-200',
               inactivePage: 'cursor-pointer text-stone-900',
               activePage:
                    'cursor-default !bg-primary text-white hover:!bg-blue-400',
               truncated:
                    'px-3 bg-transparent border-none hover:bg-transparent cursor-default',
          };

          return (
               <div ref={ref}>
                    <HeadlessPagination
                         className={cn(paginationStyles.container, {
                              [paginationStyles.containerCenter]: position === 'center',
                              [paginationStyles.containerLeft]: position === 'left',
                              [paginationStyles.containerRight]: position === 'right',
                         })}
                         currentPage={page - 1}
                         edgePageCount={2}
                         middlePagesSiblingCount={2}
                         totalPages={total}
                         setCurrentPage={onPageChange}
                         truncableClassName={cn(
                              paginationStyles.page,
                              paginationStyles.truncated,
                         )}
                    >
                         <HeadlessPagination.PageButton
                              as={<button type="button" role="link" />}
                              activeClassName={paginationStyles.activePage}
                              inactiveClassName={paginationStyles.inactivePage}
                              className={paginationStyles.page}
                         />
                    </HeadlessPagination>
               </div>
          );
     },
);

type PaginationRef = HTMLDivElement;
interface PaginationProps {
     page: number;
     total: number;
     onPaginate: (page: number) => void;
     disabled?: boolean;
     position?: 'left' | 'center' | 'right';
}

Pagination.displayName = 'Pagination';