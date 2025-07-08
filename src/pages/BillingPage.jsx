import PageHeaderComponent from "@/components/page-header-component.js";
import BillingComponent from '@/components/billing-component';
import '@/styles/BillingPage.css';

function BillingPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"Billing"}
                description={"View invoices, update payment methods, and manage your subscription or billing history."}
                buttons={[]}
            />
            <BillingComponent/>
        </div>
    );
}

export default BillingPage;