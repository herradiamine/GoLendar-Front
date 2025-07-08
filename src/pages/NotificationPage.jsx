import NotificationComponent from '@/components/notification-component';
import '@/styles/NotificationPage.css';
import PageHeaderComponent from "@/components/page-header-component.js";

function NotificationPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent title={"Notifications"} description={"Choose how you receive notifications"} buttons={[]}/>
            <NotificationComponent/>
        </div>
    );
}

export default NotificationPage;