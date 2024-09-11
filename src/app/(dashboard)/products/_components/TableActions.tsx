'use client'
import { deleteProduct } from "@/api/products"
import {
     DropdownMenu,
     DropdownMenuContent,
     DropdownMenuItem,
     DropdownMenuTrigger,
} from "@/components/ui/DropDown"
import { notify } from "@/lib/notify.util"
import { EllipsisVertical } from "lucide-react"
import Link from "next/link"

export const TableActions = ({ producId }: TableActionsProps) => {

     const handleDelete = async () => {
          const res = await deleteProduct(producId);

          if (res) {
               notify('Product deleted successfully', { type: 'success' });
          } else {
               notify('Failed to delete product', { type: 'error' });
          }
     }

     return (
          <DropdownMenu>
               <DropdownMenuTrigger>
                    <EllipsisVertical size={20} />
               </DropdownMenuTrigger>

               <DropdownMenuContent>
                    <DropdownMenuItem>
                         <Link href={`/products/${producId}`}>
                              View Product
                         </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                         Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleDelete}>
                         Delete
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu>
     )
}

interface TableActionsProps {
     producId: number
}