import PageHeaderComponent from "@/components/page-header";

export default function Page() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"Sessions"}
                description={" View active sessions, check login history, and remotely sign out from devices."}
                buttons={[]}
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
