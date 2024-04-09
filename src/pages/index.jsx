import * as React from 'react';
import Search from '../../components/Search';
import Calender from '../../components/Calender';
import BottomNav from '../../components/BottomNav';
import MainContents from '../../components/Main/MainContents';

export default function Home() {
    return (
        <div className='flex flex-col items-center justify-center'>
            <nav>
                <div>
                    <span className="flex items-center justify-center">
                        <img src="/photo/logo2.png" width="50%" />
                    </span>
                </div>
            </nav>
            <main>
                <div className='flex px-2'>
                    <span>
                        <img src="/photo/mainimg.png" />
                    </span>
                </div>
                <Search />
                <MainContents />
                <Calender />
            </main >
            <div>
                <BottomNav />
            </div>
        </div >

    );
};
