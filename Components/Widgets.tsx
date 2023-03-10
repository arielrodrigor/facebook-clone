import React from 'react';
import { MagnifyingGlassIcon } from  "@heroicons/react/24/outline";
import { EllipsisHorizontalIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
import Contact from "@/Components/Contact";

const contacts = [
    {src: "https://pbs.twimg.com/profile_images/1591558315254890500/ETIHb4Nl_400x400.jpg", name: "Jeff Bezos"},
    {src: "https://links.papareact.com/kxk", name: "Elon Musk"},
    {src: "https://links.papareact.com/zvy", name: "Bill Gates"},
    {src: "https://links.papareact.com/snf", name: "Mark Zuckerberg"},
    {src: "https://links.papareact.com/d0c", name: "Harry Potter"},
    {src: "https://links.papareact.com/6gg", name: "The Queen"},
    {src: "https://links.papareact.com/r57", name: "James Bond"},
]


function Widgets() {
    return (
        <div className={'hidden lg:flex flex-col w-60 p-2 m-5'}>
            <div className={'flex justify-between items-center text-gray-500 mb-5'}>
                <h2 className={'text-xl'}>Contacts</h2>
                <div className={'flex space-x-2'}>
                    <VideoCameraIcon className={'h-6'}/>
                    <MagnifyingGlassIcon className={'h-6'}/>
                    <EllipsisHorizontalIcon className={'h-6'}/>
                </div>
            </div>

            {contacts.map((contact) => (
                <Contact key={contact.src} src={contact.src} name={contact.name}/>
            ))}
        </div>
    );
}

export default Widgets;