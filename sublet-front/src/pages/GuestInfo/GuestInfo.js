import { useState } from 'react';
import { useTitle } from '../components/hook/HookCollect.js';

import { RequestListComponent } from './components/UserProfile/RequsetListComponent';
import { UserPrivateComponent } from './components/UserProfile/UserPrivateComponent';
import { Horizon, Wrapper } from '@components/styles/Public.styles';
import { ReservationInfo } from './components/Info/ReservationInfo';
import { UserBaseComponent } from './components/UserImageProfile.js';
import { PostUploadDialog } from '@components/Popup.js';
import { PostListComponent } from './components/UserProfile/PostListComponent.js';

function GuestInfo() {
  const [userInfo, setUserInfo] = useState([]);
  FetchGetMyUser(setUserInfo);
  useTitle('프로필 | ItHome');
  return (
    <Wrapper>
      <div
        style={{ fontFamily: 'Pretendard' }}
        className="flex grid grid-cols-7">
        <div className="ml-3 mt-5">
          <UserBaseComponent user={userInfo} />
        </div>

        <div className="mb-2 ml-7 col-span-6 mt-5 w-5/6">
          <ReservationInfo />
          <Horizon className="my-y" />

          <UserPrivateComponent user={userInfo} />
          <Horizon className="mt-4 md-2" />

          <PostListComponent userId={userInfo.user_id} guestMode={false} />
          <PostUploadDialog />
          <Horizon className="my-2" />

          <RequestListComponent />
        </div>
      </div>
    </Wrapper>
  );
}

export default GuestInfo;