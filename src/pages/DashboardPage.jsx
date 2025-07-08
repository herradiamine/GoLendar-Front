import DashboardComponent from '@/components/dashboard-component';
import PageHeaderComponent from "@/components/page-header-component.js";
import {Plus} from "lucide-react";
import '@/styles/DashboardPage.css';

function DashboardPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"Dashboard"}
                description={"Welcome on GoLendar"}
                buttons={[
                    {
                        link: "/events/new",
                        name: "New event",
                        icon: Plus
                    },
                    {
                        link: "/calendars/new",
                        name: "New calendar",
                        icon: Plus
                    }
                ]}
            />
            <DashboardComponent/>
        </div>
    );
}

export default DashboardPage;