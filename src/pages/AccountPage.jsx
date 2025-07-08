import PageHeaderComponent from "@/components/page-header-component.js";
import AccountComponent from '@/components/account-component';
import '@/styles/AccountPage.css';

function AccountPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"Account"}
                description={"Manage your personal info, update your password, and configure account-specific settings."}
                buttons={[]}
            />
            <AccountComponent/>
        </div>
    );
}

export default AccountPage;