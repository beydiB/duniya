import React from 'react';
import { Link, useLoaderData } from '@remix-run/react';
import { getCollections } from '~/providers/collections/collections';
import { getAllProducts } from '~/providers/products/products';
import { CollectionCard } from '~/components/collections/CollectionCard';
import { BookOpenIcon } from '@heroicons/react/solid';
import { LoaderArgs } from '@remix-run/server-runtime';
import { SearchBar } from '~/components/header/SearchBar';


export async function loader({ request }: LoaderArgs) {
    const collections = await getCollections(request);
    return {
        collections,
    };
}


export default function Index() {
    const { collections } = useLoaderData<typeof loader>();
    const headerImage = 'https://thebusinessgigs.com/wp-content/uploads/2022/01/Shopping-online.jpg' || collections[0]?.featuredAsset?.preview;
    console.log(collections)
    return (
        <>


            

            <section
                aria-labelledby="category-heading"
                className="pt-2 sm:pt-2 xl:max-w-7xl xl:mx-auto xl:pt-10 p-4"
            >
                <div className='grid grid-cols-2 gap-2 xl:grid-cols-4 xl:gap-x-8 py-2'>
                    <Link to={"/collections/informatique"}><img className='scale-93 hover:scale-100 ease-in duration-500' src="pc.jpg" alt="" /></Link>
                    <Link to={"/collections/informatique"}><img className='scale-98 hover:scale-100 ease-in duration-500' src="laptop.jpg" alt="" /></Link>
                    <Link to={"/collections/informatique"}><img className='scale-98 hover:scale-100 ease-in duration-500' src="key.jpg" alt="" /></Link>
                    <Link to={"/collections/onduleur"}><img className='scale-98 hover:scale-100 ease-in duration-500' src="onduleur.jpg" alt="" /></Link>
                </div>
                <div className='grid gap-2 xl:grid-cols-2 xl:gap-x-8 py-4'>
                    <Link to={"/collections/imprimante-photocopieuse"}><img src="printer.jpg" alt="" /></Link>
                    <Link to={"/collections/imprimante-photocopieuse"}><img src="photocopier.jpg" alt="" /></Link>
                </div>
                <div className='py-2'>
                    <img className='w-full' src="frame 1.jpg" alt="" />
                </div>
                {/* <div className="lg:px-8 xl:px-0">
                    <h2
                        id="category-heading"
                        className="text-2xl text-center font-light tracking-tight text-gray-900 bg-orange-300 rounded-t-md py-2.5"
                    >
                        Shop by Category
                    </h2>
                </div>

                <div className="mt-4 flow-root">
                    <div className="-my-2">
                        <div className="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
                            <div className="grid justify-items-center grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
                                {collections.map((collection) => (
                                    <CollectionCard
                                        key={collection.id}
                                        collection={collection}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='grid grid-cols-2 gap-2 xl:grid-cols-4 xl:gap-x-8 py-2'>
                    <img src="electromenager.jpg" alt="" />
                    <Link to={"/collections/informatique"}><img className='scale-93 hover:scale-100 ease-in duration-500' src="informatique.jpg" alt="" /></Link>
                    <img src="mobilier.jpg" alt="" />
                    <img src="phone.jpg" alt="" />
                </div>
            </section>
        </>
    );
}


