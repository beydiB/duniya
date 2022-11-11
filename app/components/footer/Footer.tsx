import { RootLoaderData } from '~/root';
import { Link } from '@remix-run/react';
import { PhoneIcon } from '@heroicons/react/outline';
import { MapIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const navigation = {
    support: [
        { name: 'Help', href: '#' },
        { name: 'Track order', href: '#' },
        { name: 'Shipping', href: '#' },
        { name: 'Returns', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        // { name: 'Blog', href: '#' },
        // { name: 'Corporate responsibility', href: '#' },
        // { name: 'Press', href: '#' },
    ],
};

export default function Footer({
    collections,
}: {
    collections: RootLoaderData['collections'];
}) {
    return (
        <footer
            className="mt-10 border-t bg-gray-50"
            aria-labelledby="footer-heading"
        >
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-10 lg:px-8 ">
                <div className="grid xl:grid-cols-3 xl:gap-8">
                    <div className='p-4'>
                        <Link to="/">
                        <img
                            src="/logo.png"
                            width={200}
                            // height={31}
                            alt="Duniya logo"
                        />
                         </Link>
                         <div className='flex mt-4'>
                            <PhoneIcon className="h-4 mr-2"></PhoneIcon>
                            <p><span className='font-bold'>Appelez nous: </span>71 56 65 50</p>
                        </div>
                        <div className='flex'>
                            <MapIcon className='h-4 mr-2'></MapIcon>
                            <p><span className='font-bold'>Adresse:  </span>Grand Marché</p>
                        </div>
                        <div className='flex mt-2'>
                            <Link to="#"><img className='h-5 mr-2' src="/build/assets/facebook.svg" alt="" /></Link>
                            <Link to="#"><img  className='h-5 mr-2'src="/build/assets/whatsapp.svg" alt="" /></Link>
                        </div>
                    </div>
                    <div className='p-4'>
                        <h3 className="text-sm font-bold tracking-wider uppercase">Catégories</h3>
                        <ul role="list" className="mt-4 space-y-4">
                                {collections.map((collection) => (
                                    <li key={collection.id}>
                                        <Link
                                            className="text-base text-gray-500 hover:text-gray-600"
                                            to={
                                            '/collections/' +
                                            collection.slug
                                                }
                                                prefetch="intent"
                                                key={collection.id}
                                            >
                                                {collection.name}
                                        </Link>
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <div className='p-4'>
                        <h3 className="text-sm font-bold tracking-wider uppercase">
                            Company
                        </h3>
                        <ul role="list" className="mt-4 space-y-4">
                            {navigation.company.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        className="text-base text-gray-500 hover:text-gray-600"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

                            // <div>
                            //     <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">
                            //         Catégories
                            //     </h3>
                            //     <ul role="list" className="mt-4 space-y-4">
                            //         {collections.map((collection) => (
                            //             <li key={collection.id}>
                            //                 <Link
                            //                     className="text-base text-gray-500 hover:text-gray-600"
                            //                     to={
                            //                         '/collections/' +
                            //                         collection.slug
                            //                     }
                            //                     prefetch="intent"
                            //                     key={collection.id}
                            //                 >
                            //                     {collection.name}
                            //                 </Link>
                            //             </li>
                            //         ))}
                            //     </ul>
                            // </div>

                            