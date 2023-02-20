import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'


import { usePostData } from '../../hooks/useRequestData'


const ProductsCreate = () => {

  // hook til post data til api
  const { error, loading, data, postData } = usePostData()
  const [ message, setMessage ] = useState()
  const [ quillTxt, setQuillTxt ] = useState()

  useEffect( () => {

    setMessage();

    if ( data && data.product ) {

      // Tøm formularfelter (og Quill-felt) når produkt er post'et til API'et
      document.forms[ 0 ].reset()
      setQuillTxt()
      setMessage( "Nyt produkt er oprettet" )
    }

  }, [ data ] )




  // Send formular-data til API med brug af hook
  const handleSubmit = e => {

    e.preventDefault() // VIGTIG: For at undgå reload af siden ved submit!

    let formdata = new FormData( e.target )
    // formdata.append("description", document.querySelector(".ql-editor").innerHTML )
    formdata.append( 'description', quillTxt )

    postData( "http://localhost:5111/api/products", formdata )

  }


  return (

    <div>

      <h1>Opret produkt</h1>

      {
        error && <h2>Der er opstået en fejl</h2>
      }

      {
        loading && <h2>Der loades ...</h2>
      }

      {
        message && <h2>{ message }</h2>
      }


      <form onSubmit={ handleSubmit } onFocus={ () => setMessage() }>

        <div>
          <label>Produktets navn <br />
            <input type="text" name="productname" required placeholder="Produktet navn" />
          </label>
        </div>

        <div>
          <label>Pris <br />
            <input type="text" name="price" required placeholder="" />
          </label>
        </div>

        <div>
          <label>Teaser  <br />
            <textarea name="teaser" required placeholder="Kort produktbeskrivelse" />
          </label>
        </div>

        <div>
          <label>Beskrivelse <br />
            {/* <textarea name="description" required placeholder="Lang produktbeskrivelse (formateret)" /> */ }
            <ReactQuill theme="snow" onChange={ setQuillTxt } value={ quillTxt } name="description" placeholder="Lang produktbeskrivelse (formateret)" style={ { backgroundColor: 'white', color: 'black' } } />
          </label>
        </div>

        <div>
          <label>Billede <br />
            <input type="file" name="productimage" />
          </label>
        </div>

        <button type="submit">Opret produkt</button>


      </form>





    </div>
  )
}

export default ProductsCreate