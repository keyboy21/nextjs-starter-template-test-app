'use client';

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/DropDown';
import { LogOut, User } from 'lucide-react';
import { signOut } from "next-auth/react"

export const Profile = ({ firstName, lastName }: ProfileProps) => {

     return (
          <DropdownMenu>
               <DropdownMenuTrigger>
                    <User />
               </DropdownMenuTrigger>
               <DropdownMenuContent>
                    <DropdownMenuLabel>
                         Hello, {firstName} {lastName}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                         onClick={() => signOut()}
                         className='cursor-pointer'>
                         <LogOut className="w-5 h-5 mr-2" /> Logout
                    </DropdownMenuItem>
               </DropdownMenuContent>
          </DropdownMenu >
     );
}

interface ProfileProps {
     userName: string
     firstName: string
     lastName: string
}