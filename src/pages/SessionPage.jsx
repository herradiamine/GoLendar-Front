import PageHeaderComponent from "@/components/page-header-component.js";
import SessionComponent from '@/components/session-component';
import '@/styles/SessionPage.css';

function SessionPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"Sessions"}
                description={" View active sessions, check login history, and remotely sign out from devices."}
                buttons={[]}
            />
            <SessionComponent/>
        </div>
    );
}

export default SessionPage;