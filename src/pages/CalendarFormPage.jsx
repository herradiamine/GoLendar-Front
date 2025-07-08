import CalendarFormComponent from "@/components/calendar-form-component.js";
import '@/styles/CalendarFormPage.css';
import FormHeaderComponent from "@/components/form-header-component.js";
import {ArrowLeft} from "lucide-react";
import * as React from "react";

function CalendarFormPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <FormHeaderComponent
                title={"New calendar"}
                description={"Create or edit a shared calendar with options for title, team members, availability, and color codes."}
                button={{name: "Back", link: "/calendars", icon: ArrowLeft}}
            />
            <CalendarFormComponent/>
        </div>
    );
}

export default CalendarFormPage;