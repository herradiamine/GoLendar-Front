import DashboardComponent from '@/components/dashboard-component';
import PageHeaderComponent from "@/components/page-header-component.js";
import {Plus} from "lucide-react";
import '@/styles/DashboardPage.css';

function DashboardPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"Dashboard"}
                description={"Get a quick overview of your upcoming events, team availability, and recent calendar activity."}
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