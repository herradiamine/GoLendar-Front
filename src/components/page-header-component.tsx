import * as React from "react";
import {Button} from "@/components/ui/button";
import {LucideProps} from "lucide-react";
import {ForwardRefExoticComponent} from "react";

interface Button {
    name: string;
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref">>;
    link: string;
}

interface HeaderData {
    title: string,
    description: string,
    buttons: Button[]
}

export default function PageHeaderComponent(data: HeaderData) {
    return (
        <div className="flex items-center justify-between">
            <div>
                <h1 className="text-3xl font-bold">{data.title}</h1>
                <p className="text-muted-foreground">{data.description}</p>
            </div>
            <div className="flex grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                {data.buttons && data.buttons.map((button, index) => (
                    <Button key={index} asChild>
                        <a href={button.link}>
                            <button.icon className="h-4 w-4 mr-2 flex"/>
                            {button.name}
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    );
}