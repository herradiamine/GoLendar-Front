import PageHeaderComponent from "@/components/page-header-component.js";
import ProfileComponent from '@/components/profile-component';
import '@/styles/ProfilePage.css';

function ProfilePage() {
    return (
        <>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
                <PageHeaderComponent
                    title={"Profile"}
                    description={" Edit your profile details like name, photo, and personal preferences."}
                    buttons={[]}
                />
                <ProfileComponent/>
            </div>
        </>
    );
}

export default ProfilePage;