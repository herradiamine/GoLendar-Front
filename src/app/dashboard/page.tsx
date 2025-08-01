import PageHeaderComponent from "@/components/page-header";
import { Plus } from "lucide-react";

export default function Page() {
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
            <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                <div className="bg-muted/50 aspect-video rounded-xl"></div>
                <div className="bg-muted/50 aspect-video rounded-xl"></div>
                <div className="bg-muted/50 aspect-video rounded-xl"></div>
            </div>
            <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min"></div>
        </div>
    )
}
