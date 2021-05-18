import {useEffect, useRef, useState} from 'react';
import Link from 'next/link';

import { useRouter } from 'next/router';

const Nav = () => {

    const [scrollspy, setScrollspy] = useState(false);
    const router = useRouter();
    console.log(router);
    useEffect(()=> {
        const scrollHandler = () => {
           let top = window.scrollY;
           if(top > 0){
            return   setScrollspy(true);
           }
           setScrollspy(false);
        };
        window.addEventListener("scroll", scrollHandler);
        return () => {
        window.removeEventListener("scroll", scrollHandler);
        };
        
    });
    console.log(scrollspy);
    
    return (
        <div  className={`z-10 sticky top-0 flex justify-between bg-white ${scrollspy ? 'border-b border-gray-400 py-2' : 'py-3'}`}>
            <div className="logo uppercase">SPARK</div>
            <ul className="menu flex">
                <li className="px-5 relative"><Link href="#header">home</Link><span className={`hover-effect absolute bottom-0 w-1/3 h-1 rounded-md bg-yellow-700 z-10 ${router.asPath === '/#header' ? 'block' : 'hidden'}`}></span></li>
                <li className="px-5 relative"><Link href="#services">services</Link><span className={`hover-effect absolute bottom-0 w-1/3 h-1 rounded-md bg-yellow-700 z-10 ${router.asPath === '/#services' ? 'block' : 'hidden'}`}></span></li>
                <li className="px-5 relative">misao<span className="hover-effect absolute bottom-0 w-1/3 h-1 rounded-md bg-yellow-700 z-10 hidden"></span></li>
                <li className="px-5 relative">projetos<span className="hover-effect absolute bottom-0 w-1/3 h-1 rounded-md bg-yellow-700 z-10 hidden"></span></li>
                <li className="px-5 relative">equipe<span className="hover-effect absolute bottom-0 w-1/3 h-1 rounded-md bg-yellow-700 z-10 hidden"></span></li>
                <li className="px-5 relative">contato<span className="hover-effect absolute bottom-0 w-1/3 h-1 rounded-md bg-yellow-700 z-10 hidden"></span></li>
            </ul>
            <style jsx>{`
                .hover-effect{
                    left: 50%;
                    transform: translate(-50%);
                }
            `}</style>
        </div>
    );
};

export default Nav;