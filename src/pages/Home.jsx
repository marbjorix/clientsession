import { useEffect } from 'react'

import { useGetData } from '../hooks/useRequestData'

// for at "oversætte" html-tags i produkt-beskrivelsen, så de ikke bliver vist - men tolket
import parse from 'html-react-parser'


const Home = () => {

  const { error, loading, data: products, getData } = useGetData()

  useEffect( () => {
    // Kald hook som bruger axios til at hente data fra API'et
    getData( "http://localhost:5111/api/products" )
    // eslint-disable-next-line
  }, [] )


  return (

    <div className="products">

      <h1>Produkter</h1>

      { ( error ) && <h2>Der er sket en fejl</h2> }

      { ( loading ) && <h2>Der loades ...</h2> }

      <div className="row row-cols-1 row-cols-md-3 g-4">

        {
          products && products.products.map( ( p ) =>
            <div className="col" key={ p._id }>

              <div className="card  bg-dark p-5 my-2">
                <h2>{ p.productname }</h2>
                <p>{ p.teaser }</p>
                <div>{ parse( p.description ) }</div>

                { p.productimage ? <img src={ 'http://localhost:5111/images/' + p.productimage } width='150' /> : null }

              </div>

            </div>
          )
        }

      </div>
    </div>
  )
}


export default Home