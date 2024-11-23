import React from 'react';
import UserProfile from "../Components/User/UserProfile";

function UserProfilePage() {
  const userId = '12345';
  return (
    <div>
       <UserProfile userId={userId} />
    </div>
  )
}

export default UserProfilePage
