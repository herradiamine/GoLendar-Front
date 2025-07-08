import CalendarsComponent from '@/components/calendars-component';
import PageHeaderComponent from "@/components/page-header-component.js";
import {Plus} from "lucide-react";
import '@/styles/CalendarsPage.css';

function CalendarsPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"My calendars"}
                description={"Browse all personal and team calendars. Quickly access or organize calendars by project or team."}
                buttons={[
                    {
                        link: "/calendars/new",
                        name: "New calendar",
                        icon: Plus
                    }
                ]}
            />
            <CalendarsComponent/>
        </div>
    );
}

export default CalendarsPage;