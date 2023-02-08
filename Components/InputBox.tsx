import React, {useState} from 'react';
import {useRef} from "react";
import Image from "next/image";
import {useSession} from "next-auth/react";
import {FaceSmileIcon } from "@heroicons/react/24/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/20/solid";
// @ts-ignore
import {db} from '../firebase';
import firebase from "firebase/compat/app";

function InputBox( ) {
    const { data } = useSession(); // @ts-ignore
    const inputRef = useRef(null);
    const filePickerRef = useRef(null);
    const [imageToPost, setImageToPost] = useState(null);
    const sendPost = (e:any) => {
        e.preventDefault();
        if (!inputRef?.current?.value) return;
        db.collection('posts').add({
            message: inputRef.current.value,
            name: data?.user?.name,
            email: data?.user?.email,
            image: data?.user?.image,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(doc => {
            if(imageToPost) {
                const uploadTask = firebase.storage().ref(`posts/${doc.id}`).putString(imageToPost, 'data_url');
                removeImage();
                uploadTask.on('state_changed', null, (error) => console.error(error), () => {
                    firebase.storage().ref('posts').child(doc.id).getDownloadURL().then(url => {
                        db.collection('posts').doc(doc.id).set({
                            postImage: url
                        }, {merge: true})
                    })
                })
            }
            inputRef.current.value = '';


        }).catch(error => {
            alert(error.message)
        })
    }

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setImageToPost(readerEvent.target.result);
        }
    }

    const removeImage = () => {
        setImageToPost(null);
    }

    return (
        <div className={'bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'}>
            <div className={'flex space-x-4 p-4 items-center'}>
                <Image className="rounded-full" alt={''} src={data?.user?.image} width={40}  height={40} layout="fixed" />
                <form className={'flex flex-1'}>
                    <input ref={inputRef} className={'rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'} type="text" placeholder={`What's on your mind, ${data?.user?.name}?`}/>
                    <button hidden type="submit" onClick={sendPost}>Submit</button>

                </form>
                {imageToPost && (
                    <div onClick={removeImage} className={'flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'}>
                        <Image className={'h-10 object-contain'} src={imageToPost} alt={'imageToPost'} width={40}  height={40} />
                        <p className={'text-xs text-red-500 text-center'}>Remove</p>
                    </div>)}
            </div>
            <div className={'flex justify-evenly p-3 border-t'}>
                <div className={'inputIcon '}>
                    <VideoCameraIcon className={'h-7 text-red-500'}/>
                    <p className={'text-xs sm:text-sm xl:text-base'}>Live Video</p>
                </div>
                <div onClick={() => filePickerRef.current.click()} className={'inputIcon '}>
                    <CameraIcon className={'h-7 text-green-400'}/>
                    <p className={'text-xs sm:text-sm xl:text-base'}>Photo/Video</p>
                    <input ref={filePickerRef} onChange={addImageToPost} hidden type={'file'}/>
                </div>
                <div className={'inputIcon '}>
                    <FaceSmileIcon className={'h-7 text-yellow-300'}/>
                    <p className={'text-xs sm:text-sm xl:text-base'}>Feeling/Activity</p>
                </div>

            </div>
        </div>
    );
}

export default InputBox;