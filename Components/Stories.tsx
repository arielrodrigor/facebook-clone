import React from 'react';
import StoryCard from "@/Components/StoryCard";

const stories = [
    {
        name: "Ariel Reyes",
        src: "https://user-images.githubusercontent.com/10542127/217410950-eabcb07c-baee-42f7-9bbb-7d0dfdd371a1.jpg",
        profile: "https://user-images.githubusercontent.com/10542127/217410746-c1227e5a-01dc-4b77-a437-1fa7e20459cb.jpeg",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://links.papareact.com/kxk",
    },
    {
        name: "Jeff Bezoz",
        src: "https://links.papareact.com/k2j",
        profile: "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg",

    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/xql",
        profile: "https://links.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://links.papareact.com/zvy",

    }
]

function Stories() {
    return (
        <div className={'flex justify-center space-x-3 mx-auto'}>
            {stories.map((story) => (
                <StoryCard key={story.src} name={story.name} src={story.src} profile={story.profile} />
                ))}
        </div>
    );
}

export default Stories;