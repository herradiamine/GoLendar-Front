import * as React from 'react';
import { useBreadcrumb } from '../hooks/useBreadcrumb';
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Separator } from "@/components/ui/separator";
  import {
    SidebarTrigger,
  } from "@/components/ui/sidebar";

export default function BreadcrumbComponent() {
    const { breadcrumbItems, navigateToBreadcrumb, currentPath } = useBreadcrumb();
    return (
        <>
            <header className="flex h-16 shrink-0 items-center gap-2">
                <div className="flex items-center gap-2 px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator
                        orientation="vertical"
                        className="mr-2 data-[orientation=vertical]:h-4"
                    />
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbItems && breadcrumbItems.map((item, index) => (
                                <React.Fragment key={item.path}>
                                    <BreadcrumbItem className="hidden md:block">
                                        <BreadcrumbLink href={item.path}>{item.label}</BreadcrumbLink>
                                    </BreadcrumbItem>
                                    {index < breadcrumbItems.length - 1 && (
                                        <BreadcrumbSeparator className="hidden md:block" />
                                    )}
                                </React.Fragment>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </header>
        </>
    );
}