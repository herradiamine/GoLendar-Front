import PageHeaderComponent from "@/components/page-header-component.js";
import GeneralComponent from '@/components/general-component';
import '@/styles/GeneralPage.css';

function GeneralPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            <PageHeaderComponent
                title={"General"}
                description={"Configure global settings for the workspace, including default time zone, language, and display options."}
                buttons={[]}
            />
            <GeneralComponent/>
        </div>
    );
}

export default GeneralPage;