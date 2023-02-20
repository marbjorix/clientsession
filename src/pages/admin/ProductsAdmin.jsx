import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { useGetData, useDeleteData } from '../../hooks/useRequestData'

// for at "oversætte" html-tags i produkt-beskrivelsen, så de ikke bliver vist - men tolket
import parse from 'html-react-parser'


const ProductsAdmin = () => {

  const { error, loading, data: products, getData } = useGetData()
  const { error: errorDelete, loading: loadingDelete, data, deleteData } = useDeleteData()

  useEffect( () => {
    // Kald hook som bruger axios til at hente data fra API'et
    getData( "http://localhost:5111/api/products" )
    // eslint-disable-next-line
  }, [ data ] )


  // Håndter sletning af produkt ud fra dets id
  const handleDelete = ( id, product ) => {

    if ( window.confirm( "Er du sikker på at du vil slette: " + product ) ) {

      deleteData( "http://localhost:5111/api/products/" + id )

    }
  }

  
  return (
    <div className="products-admin">

      <h1>ADMIN Produkter</h1>

      { ( error || errorDelete ) && <h2>Der er sket en fejl</h2> }
      { ( loading || loadingDelete ) && <h2>Der loades ...</h2> }

      <div className="row row-cols-1 row-cols-md-3 g-4">

        {
          products && products.products.map( ( p ) =>
            <div className="col" key={ p._id }>

              <div className="card  bg-dark p-5 my-2">
                <h2>{ p.productname }</h2>
                <p>{ p.teaser }</p>
                <div>{ parse( p.description ) }</div>
                <button onClick={ () => handleDelete( p._id, p.productname ) }>Slet</button>
                {/* Link til ret-component -- send ID med */ }
                <Link to={ "/admin/productsupdate/" + p._id }>Ret produkt</Link>
              </div>

            </div>
          )
        }

      </div>
    </div>
  )
}

export default ProductsAdmin