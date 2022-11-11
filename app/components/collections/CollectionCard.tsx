import { Link } from "@remix-run/react"
import * as React from "react"
import { CollectionsQuery } from '~/generated/graphql';

export function CollectionCard({ collection }: { collection: CollectionsQuery['collections']['items'][number] }) {
  return (
    <Link
      to={"/collections/" + collection.slug}
      prefetch='intent'
      key={collection.id}
      className="max-w-[150px] relative rounded-lg overflow-hidden hover:opacity-75 xl:w-auto"
    >
      <span aria-hidden="true" className="">
        <div className="w-full h-full object-center object-cover">
            <img src={collection.featuredAsset?.preview + "?w=150&h=150"} />
        </div>
      </span>
      <span
        aria-hidden="true"
        className="absolute w-full bottom-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
      />
      <span className="absolute w-full bottom-2 mt-auto text-center text-xl font-bold text-white">
        {collection.name}
      </span>
    </Link>
  )
}
