'use client'
import { Box, TableContainer, Table, TableHead, TableBody, TableCell, TableRow } from '@mui/material'
import { ProductWithImages } from './page'
import { Fragment } from 'react'
import Image from 'next/image'

export default function ProductEditor({ products }: { products: ProductWithImages[] }) {
  return (
    <Box display={'flex'} flexGrow={1}>
      <TableContainer>
        <Table sx={{ maxWidth: '100%' }}>
          <TableHead>
            <TableRow>
              <TableCell align="center">Id</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="center">Category Id</TableCell>
              <TableCell>Description</TableCell>
              <TableCell align="center">Image</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {products.map((product, index) => (
              <Fragment key={`${index}-product-${product.id}`}>
                <TableRow>
                  <TableCell align="center">{product.id}</TableCell>
                  <TableCell align="left" width={'200px'}>
                    {product.name}
                  </TableCell>
                  <TableCell align="center">{product.productCategoryId}</TableCell>
                  <TableCell>
                    {product.description.length >= 200
                      ? product.description.slice(0, 200) + '...'
                      : product.description}
                  </TableCell>
                  <TableCell>
                    <Image
                      src={product.images[0]?.url}
                      alt={`${index}-product-${product.id}-image`}
                      height={100}
                      width={100}
                    />
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}
