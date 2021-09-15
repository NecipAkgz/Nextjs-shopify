import { Layout } from '@components/common'
import ProductCard from '@components/product/ProductCard/ProductCard'
import { Grid } from '@components/ui'
import { getConfig } from '@framework/api/config'
import getAllProducts from '@framework/product/get-all-products'
import { InferGetServerSidePropsType } from 'next'

function Home({
  products,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  return (
    <>
      <Grid>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Grid>
    </>
  )
}

export async function getStaticProps() {
  const config = getConfig()
  const products = await getAllProducts(config)

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  }
}

Home.Layout = Layout

export default Home
