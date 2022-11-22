import { Link, useLoaderData } from '@remix-run/react';
import { PhoneIcon, ShoppingBagIcon, MenuIcon, HeartIcon } from '@heroicons/react/outline';
import { SearchBar } from '~/components/header/SearchBar';
import { useRootLoader } from '~/utils/use-root-loader';
import { UserIcon } from '@heroicons/react/solid';
import { useScrollingUp } from '~/utils/use-scrolling-up';
// import { classNames } from '~/utils/class-names';import hero from './public/hero.jpg'
// import {phone} from '@heroicons/react/outline';

import styles from '~/styles/header.css';


export function links() {
    return [{ rel: 'stylesheet', href: styles }];
}

export function Header({
    onCartIconClick,
    cartQuantity,
}: {
    onCartIconClick: () => void;
    cartQuantity: number;
}) {
    const data = useRootLoader();
    const isSignedIn = !!data.activeCustomer.activeCustomer?.id;
    const isScrollingUp = useScrollingUp();
    return (
        <header className='xl:container xl:mx-auto'
        // className={classNames(
        //     isScrollingUp ? 'sticky top-0 z-10 animate-dropIn' : '',
        //     'bg-white from-zinc-700 to-gray-900 shadow-lg transform shadow-xl',
        // )}
        >
            {/* <div className="bg-zinc-100 text-gray-600 shadow-inner text-center text-sm py-2 px-2 xl:px-0">
                <div className="max-w-6xl mx-2 md:mx-auto flex items-center justify-between">
                    <div>
                        <p className="hidden sm:block">
                            Call: 71 56 65 50
                        </p>
                    </div>
                    <div>
                        <Link
                            to={isSignedIn ? '/account' : '/sign-in'}
                            className="flex space-x-1"
                        >
                            <UserIcon className="w-4 h-4"></UserIcon>
                            <span>{isSignedIn ? 'My Account' : 'Sign In'}</span>
                        </Link>
                    </div>
                </div>
            </div> */}
            <div className="max-w-7xl mx-auto p-4 flex items-center space-x-4 shadow-sm justify-between">

                <Link to="/">
                    <img
                        src="/logo.png"
                        width={200}
                        // height={31}
                        alt="Duniya logo"
                    />
                </Link>


                <div className="hidden w-1/2 md:pr-4 lg:block">
                    <SearchBar></SearchBar>
                </div>
                <div className='flex items-center'>
                    <PhoneIcon className="w-4 h-4 mr-2"></PhoneIcon>
                    <p className='text-black'>71 56 65 50</p>
                </div>

                {/*<div className="">
                     <button
                        className="relative w-9 h-9 bg-white bg-opacity-20 rounded p-1"
                        onClick={onCartIconClick}
                        aria-label="Open cart tray"
                    >
                        <ShoppingBagIcon></ShoppingBagIcon>
                        {cartQuantity ? (
                            <div className="absolute rounded-full -top-2 -right-2 bg-primary-600 w-6 h-6">
                                {cartQuantity}
                            </div>
                        ) : (
                            ''
                        )}
                    </button> */}
                {/* <button
                        className="relative w-9 h-9 bg-white bg-opacity-20 rounded p-1"
                        onClick={onCartIconClick}
                        aria-label="Open cart tray"
                    >
                        <MenuIcon></MenuIcon>
                        {cartQuantity ? (
                            <div className="absolute rounded-full -top-2 -right-2 bg-primary-600 w-6 h-6">
                                {cartQuantity}
                            </div>
                        ) : (
                            ''
                        )}
                    </button> 
                </div>*/}
            </div>
            <div className="p-4 lg:hidden">
                <SearchBar></SearchBar>
            </div>
            <section className="flex flex-wrap gap-2 max-w-7xl mx-auto p-4 bg-gray-100">
                <nav className="hidden lg:block px-2 w-44 rounded-sm bg-white">
                    <ul>
                        {data.collections.map((collection) => (
                            <li><Link
                                className="text-sm md:text-base text-black-200 hover:text-grey"
                                to={'/collections/' + collection.slug}
                                prefetch="intent"
                                key={collection.id}
                            >
                                {collection.name}
                            </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <section className=" w-10  bg-sky-500 flex-auto rounded-sm">
                    <img src='/hero.jpg' alt="" />
                </section>
            </section>
        </header>
    );
}
