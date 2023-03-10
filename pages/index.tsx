import Head from 'next/head'
import { Inter } from '@next/font/google'
import React from "react";
import Header from "@/Components/Header";
import {getSession} from "next-auth/react";
import Login from "@/Components/Login";
import Sidebar from "@/Components/Sidebar";
import Feed from "@/Components/Feed";
import Widgets from "@/Components/Widgets";
import {db} from "@/firebase";

const inter = Inter({ subsets: ['latin'] })

export default function Home({session, posts }: any) {
    if(!session) return <Login />;
  return (
    <div className={'h-screen bg-gray-100 overflow-hidden'}>
      <Head>
        <title>Facebook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
      <main className={'flex'}>
          {/*Sidebar*/}
          <Sidebar />
          {/*Feed*/}
          <Feed posts={posts}/>
          {/*Widget*/}
          <Widgets />



      </main>
    </div>
  )
}

export async function getServerSideProps(context:any) {
    const session = await getSession(context)
    const post = await db.collection('posts').orderBy('timestamp', 'desc').get();
    const docs = post.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
            timestamp: null
        }));
    
    return {
        props: {
            session,
            posts: docs
        }
    }
}