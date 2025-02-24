'use client'
import Image from 'next/image'
import { CardComponent } from '../../components/card'
import { useState } from 'react'
import { CardProps } from '../../types/components'

export default function Projects() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [listProducts, setListProducts] = useState<CardProps[]>([
    { title: 'Product 1', description: 'Description of product 1', imageUrl: '/file.svg' },
    { title: 'Product 2', description: 'Description of product 2', imageUrl: '/file.svg' },
    { title: 'Product 3', description: 'Description of product 3', imageUrl: '/file.svg' },
    { title: 'Product 4', description: 'Description of product 4', imageUrl: '/file.svg' },
  ])

  // TODO: Add a useEffect to fetch the list of products from the server

  return (
    <div className="m-4 ml-11 h-auto">
      <h1 className="text-4xl text-blue-700">Projects</h1>
      <div className="mt-6 h-2/5 w-full">
        <ProjectInfo />
      </div>

      <h2 className="mt-8 text-2xl text-blue-700">Product in project</h2>
      <div className="mt-6 flex h-2/5">
        {listProducts.map((product, index) => (
          <div key={index} className="p-8">
            <CardComponent title={product.title} description={product.description} imageUrl={product.imageUrl} />
          </div>
        ))}
      </div>
    </div>
  )
}

const ProjectInfo = () => {
  const imageDim = 500

  return (
    <div className="flex items-center justify-start">
      <div className="mr-4 flex w-2/5 items-center justify-center rounded-md">
        <Image src={'/Head_Office.jpg'} alt={'Head office'} width={imageDim} height={imageDim} />
      </div>

      <div className="w-2/5 indent-10">
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  )
}
