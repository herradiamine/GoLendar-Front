import {Button} from "@/components/ui/button";
import {ArrowLeft, LucideProps} from "lucide-react";
import * as React from "react";
import {ForwardRefExoticComponent} from "react";


interface BackButton {
    name: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
    link: string;
}

interface HeaderData {
    title: string,
    description: string,
    button: BackButton
}

export default function FormHeaderComponent(data: HeaderData) {
    return (
        <div className="flex items-center justify-start">
            <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                <Button variant="ghost" asChild>
                    <a href={data.button.link}><data.button.icon className="h-4 w-4 mr-1"/>{data.button.name}</a>
                </Button>
            </div>
            <div className="ml-3">
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <p className="text-muted-foreground">{data.description}</p>
            </div>
        </div>
    )
}