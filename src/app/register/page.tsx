import {RegisterForm} from "@/components/register-form";
import Image from "next/image";
import React from "react";

export default function SignupPage() {
    return (
        <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
            <div className="flex w-full max-w-sm flex-col gap-6">
                <a href="#" className="flex flex-col items-center gap-2 self-center font-medium">
                    <div className="bg-primary text-primary-foreground items-center justify-center rounded-4xl">
                        <Image src={"/logo.svg"} alt={"GoLendar logo"} height={150} width={150} className={"rounded-4xl"}/>
                    </div>
                    GoLendar
                </a>
                <RegisterForm/>
            </div>
        </div>
    )
}
