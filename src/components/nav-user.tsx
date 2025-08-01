"use client"

import {useDispatch} from 'react-redux';
import {useRouter} from 'next/navigation';
import {clearProfile, logoutUser} from '@/store/userSlice';
import type {AppDispatch} from '@/store';
import {
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Settings,
    Shield,
    Sparkles,
    User,
} from "lucide-react"

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import {toast} from 'sonner';
import {ApiResponse} from '@/utils/apiResponse';

export function NavUser({user}: {
    user: {
        name: string
        email: string
        avatar: string
    }
}) {
    const {isMobile} = useSidebar()
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter();

    const handleLogout = async () => {
        dispatch(clearProfile());
        const response = await dispatch(logoutUser());
        const apiResponse = response.payload as ApiResponse;
        toast(apiResponse.message);
        router.push('/login');
    };

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user.avatar} alt={user.name}/>
                                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{user.name}</span>
                                <span className="truncate text-xs">{user.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src={user.avatar} alt={user.name}/>
                                    <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">{user.name}</span>
                                    <span className="truncate text-xs">{user.email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <a href='/profile/upgrade'><DropdownMenuItem><Sparkles/>Upgrade to Pro</DropdownMenuItem></a>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuGroup>
                            <a href='/profile/general'><DropdownMenuItem><User/>General</DropdownMenuItem></a>
                            <a href='/profile/security'><DropdownMenuItem><Shield/>Security</DropdownMenuItem></a>
                            <a href='/profile/preferences'><DropdownMenuItem><Settings/>Preferences</DropdownMenuItem></a>
                            <a href='/profile/billing'><DropdownMenuItem><CreditCard/>Billing</DropdownMenuItem></a>
                            <a href='/profile/notifications'><DropdownMenuItem><Bell/>Notifications</DropdownMenuItem></a>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator/>
                        <DropdownMenuItem onClick={handleLogout}><LogOut/>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
