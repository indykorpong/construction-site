'use client'
import { Box, TableContainer, Table, TableHead, TableBody, TableCell, TableRow, Drawer } from '@mui/material'
import { Fragment, useState } from 'react'

import { ProductWithImages } from './page'
import { ProductEditor } from './products-editor'

export const ProductTable = ({ products }: { products: ProductWithImages[] }) => {
  const [openDrawer, setOpenDrawer] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState<ProductWithImages | undefined>()

  const handleEdit = (product: ProductWithImages) => () => {
    setSelectedProduct(product)
    setOpenDrawer(true)
  }

  const handleSubmit = () => {
    setOpenDrawer(false)
  }

  return (
    <>
      <Drawer open={openDrawer} onSubmit={handleSubmit} anchor={'right'} onClose={() => setOpenDrawer(false)}>
        <ProductEditor product={selectedProduct} setOpenDrawer={setOpenDrawer} />
      </Drawer>

      <Box>
        <TableContainer sx={{ maxHeight: 'calc(100vh - 6rem)' }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="center">Image</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {products.map((product, index) => (
                <Fragment key={`${index}-product-${product.id}`}>
                  <TableRow onClick={handleEdit(product)} hover sx={{ cursor: 'pointer' }}>
                    <TableCell align="center">{product.id}</TableCell>
                    <TableCell align="left" width={'200px'}>
                      {product.name}
                    </TableCell>
                    <TableCell>
                      {product.description && (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                          style={{
                            display: '-webkit-box',
                            WebkitBoxOrient: 'vertical',
                            WebkitLineClamp: 3,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            lineClamp: 3,
                          }}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Box
                        component={'img'}
                        src={product.images[0]?.url}
                        alt={product.name}
                        width={150}
                        height={150}
                        sx={{ objectFit: 'cover' }}
                      />
                    </TableCell>
                  </TableRow>
                </Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  )
}
