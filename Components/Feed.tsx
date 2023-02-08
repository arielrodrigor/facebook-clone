import React from 'react';
import Stories from "@/Components/Stories";
import InputBox from "@/Components/InputBox";
import Posts from "@/Components/Posts";

function Feed({posts}: any) {

    return (
        <div className={'flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto scrollbar-hide'}>
            <div className={'mx-auto max-w-md md:max-w-lg lg:max-w-2xl'}>
                {/*Stories*/}
                <Stories />
                {/*InputBox*/}
                <InputBox />
                {/*Posts*/}
                <Posts posts={posts}/>

            </div>
        </div>
    );
}

export default Feed;