"use client"

import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar"
import {Badge} from "@/components/ui/badge"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip"
import {Users} from "lucide-react"

interface Member {
    user_id: number
    firstname: string
    lastname: string
    email: string
    permission: "read_only" | "read_write" | "admin"
    avatar_url?: string
}

interface MemberAvatarsProps {
    members: Member[] | null
    maxVisible?: number
    size?: "sm" | "md" | "lg"
    showPermissions?: boolean
}

export function MemberAvatars({members, maxVisible = 3, size = "sm", showPermissions = false}: MemberAvatarsProps) {
    const visibleMembers = members?.slice(0, maxVisible)
    const remainingCount = Math.max(0, (members?.length ?? 0) - maxVisible)

    const getAvatarSize = () => {
        switch (size) {
            case "sm":
                return "h-6 w-6"
            case "md":
                return "h-8 w-8"
            case "lg":
                return "h-10 w-10"
            default:
                return "h-6 w-6"
        }
    }

    const getInitials = (firstname: string | null, lastname: string | null) => {
        return `${firstname?.charAt(0)}${lastname?.charAt(0)}`.toUpperCase()
    }

    const getPermissionColor = (permission: string) => {
        switch (permission) {
            case "admin":
                return "text-red-600 bg-red-100"
            case "read_write":
                return "text-blue-600 bg-blue-100"
            case "read_only":
                return "text-gray-600 bg-gray-100"
            default:
                return "text-gray-600 bg-gray-100"
        }
    }

    const getPermissionLabel = (permission: string) => {
        switch (permission) {
            case "admin":
                return "Admin"
            case "read_write":
                return "Écriture"
            case "read_only":
                return "Lecture"
            default:
                return permission
        }
    }

    if (members?.length === 0) {
        return (
            <div className="flex items-center text-muted-foreground">
                <Users className="h-4 w-4 mr-1"/>
                <span className="text-sm">Aucun membre</span>
            </div>
        )
    }

    return (
        <TooltipProvider>
            <div className="flex items-center space-x-1">
                <div className="flex -space-x-1">
                    {visibleMembers && visibleMembers.map((member, index) => (
                        <Tooltip key={index}>
                            <TooltipTrigger asChild>
                                <div className="relative">
                                    <Avatar
                                        className={`${getAvatarSize()} border-2 border-white shadow-sm hover:z-10 transition-transform hover:scale-110`}
                                    >
                                        <AvatarImage
                                            src={member.avatar_url || "/placeholder.svg"}
                                            alt={`${member.firstname} ${member.lastname}`}
                                        />
                                        <AvatarFallback className="text-xs font-medium">
                                            {getInitials(member.firstname, member.lastname)}
                                        </AvatarFallback>
                                    </Avatar>
                                    {showPermissions && (
                                        <div
                                            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border border-white ${getPermissionColor(member.permission)}`}
                                        ></div>
                                    )}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent side="top" className="max-w-xs">
                                <div className="text-center">
                                    <div className="font-medium">
                                        {member.firstname} {member.lastname}
                                    </div>
                                    <div className="text-xs text-muted-foreground">{member.email}</div>
                                    {showPermissions && (
                                        <Badge variant="outline"
                                               className={`mt-1 text-xs ${getPermissionColor(member.permission)}`}>
                                            {getPermissionLabel(member.permission)}
                                        </Badge>
                                    )}
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    ))}

                    {remainingCount > 0 && (
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar
                                    className={`${getAvatarSize()} border-2 border-white shadow-sm bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer`}
                                >
                                    <AvatarFallback
                                        className="text-xs font-medium text-gray-600">+{remainingCount}</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent side="top">
                                <div className="max-w-xs">
                                    <div className="font-medium mb-2">{remainingCount} autres membres :</div>
                                    <div className="space-y-1">
                                        {members?.slice(maxVisible).map((member, index) => (
                                            <div key={index} className="text-xs">
                                                {member.firstname} {member.lastname}
                                                {showPermissions && (
                                                    <span
                                                        className={`ml-2 px-1 py-0.5 rounded text-xs ${getPermissionColor(member.permission)}`}>
                            {getPermissionLabel(member.permission)}
                          </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    )}
                </div>

                <div className="flex items-center text-xs text-muted-foreground ml-2">
                    <Users className="h-3 w-3 mr-1"/>
                    {members?.length}
                </div>
            </div>
        </TooltipProvider>
    )
}
