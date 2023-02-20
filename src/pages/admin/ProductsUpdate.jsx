import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

// Eget hook med GET og PUT metoder
import { useGetData, usePutData } from '../../hooks/useRequestData'


const ProductsUpdate = () => {

  // parameter i url - produktets id (id navngives i App.jsx path til ret)
  const { id } = useParams()

  // hook-metoder til GET og PUT data til api
  const { error, loading, data: product, getData } = useGetData()
  const { error: errorPut, loading: loadingPut, data: dataPut, putData } = usePutData()


  const [ message, setMessage ] = useState()
  // state til tekst fra Quill
  const [ quillTxt, setQuillTxt ] = useState()


  useEffect( () => {

    // Hent data for det produkt som matcher param id
    getData( 'http://localhost:5111/api/products/' + id )

  }, [] )


  // Når der er klikket på submit
  useEffect( () => {

    setMessage(); // tøm/nulstil message

    if ( dataPut && dataPut.product ) {

      setMessage( "Produktet er rettet" )
    }

  }, [ dataPut ] )




  // Send formular-data til API med brug af hook
  const handleSubmit = e => {

    e.preventDefault() // VIGTIG: For at undgå reload af siden ved submit!

    let formdata = new FormData( e.target )
    // formdata.append("description", document.querySelector(".ql-editor").innerHTML )
    formdata.append( 'description', quillTxt )

    putData( "http://localhost:5111/api/products/" + id, formdata )

  }


  return (

    <div>

      <h1>Ret produkt</h1>

      {
        ( error || errorPut ) && <h2>Der er opstået en fejl</h2>
      }

      {
        ( loading || loadingPut ) && <h2>Der loades ...</h2>
      }

      {
        message && <h2>{ message }</h2>
      }

      {
        product && product.product &&


        <form onSubmit={ handleSubmit }>

          <div>
            <label>Produktets navn <br />
              <input type="text" name="productname" defaultValue={ product.product.productname } required placeholder="Produktet navn" />
            </label>
          </div>

          <div>
            <label>Pris <br />
              <input type="text" name="price" defaultValue={ product.product.price } required placeholder="" />
            </label>
          </div>

          <div>
            <label>Teaser  <br />
              <textarea name="teaser" defaultValue={ product.product.teaser } required placeholder="Kort produktbeskrivelse" />
            </label>
          </div>

          <div>
            <label>Beskrivelse <br />
              {/* <textarea name="description" required placeholder="Lang produktbeskrivelse (formateret)" /> */ }
              <ReactQuill theme="snow" onChange={ value => setQuillTxt( value ) } defaultValue={ product.product.description } name="description" placeholder="Lang produktbeskrivelse (formateret)" style={ { backgroundColor: 'white', color: 'black' } } />
            </label>
          </div>

          <div>

            <label>Nuværende billede - vælg evt. et andet (overskriver eksisterende) <br />
              <img src={ 'http://localhost:5111/images/' + product.product.productimage } width='150' />
              <input type="file" name="productimage" />
            </label>
          </div>

          <button type="submit">Ret produkt</button>


        </form>

      }



    </div>
  )
}


export default ProductsUpdate