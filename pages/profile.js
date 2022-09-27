import React from 'react';
import Head from 'next/head';
import AppLayout from "../componets/AppLayout";
import NicknameEditForm from '../componets/NicknameEditForm';
import FollowList from '../componets/FollowList';

const Profile = () => {
    const followersList = [{ nickname: '나고키' }, { nickname: '토리' }, { nickname: '종혁'}];
    const followingList = [{ nickname: '나고키' }, { nickname: '토리' }, { nickname: '종혁'}];

    return (
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={followingList} />
                <FollowList header="팔로워 목록" data={followersList} />
            </AppLayout>
        </>
    );
}

export default Profile;