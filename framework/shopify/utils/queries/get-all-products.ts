export const gql = String.raw

const productConnect = gql`
  pageInfo {
    hasNextPage
    hasPreviousPage
  }
  edges {
    node {
      id
      title
      vendor
      handle
      description
      priceRange {
        minVariantPrice {
          amount
          currencyCode
        }
      }
      images(first: 1) {
        pageInfo {
          hasNextPage
          hasPreviousPage
        }
        edges {
          node {
            originalSrc
            altText
            width
            height
          }
        }
      }
    }
}
`

const getAllProductsQuery = gql`
  query getAllProducts($first: Int = 250) {
    products(first: $first) {
      ${productConnect}
    }
}
`
export default getAllProductsQuery
