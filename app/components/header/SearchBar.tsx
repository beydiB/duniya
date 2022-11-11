import * as React from 'react';
import { SyntheticEvent, useState } from 'react';
import { Form } from '@remix-run/react';

export function SearchBar() {
    let initialQuery = '';
    if (typeof window === 'undefined') {
        // running in a server environment
    } else {
        // running in a browser environment
        initialQuery =
            new URL(window.location.href).searchParams.get('q') ?? '';
    }

    return (
        <Form className="flex" method="get" action="/search" key={initialQuery}>
            <input
                type="search"
                name="q"
                defaultValue={initialQuery}
                placeholder="Chercher un produit"
                className="shadow-lg focus:ring-primary-500 focus:border-primary-500 block w-full sm:text-sm border-black-300 rounded-md"
            />
             <input className='hidden lg:mx-2 text-white px-2 bg-orange-500 rounded-md' type="submit" value="Submit"></input>
        </Form>
    );
}
