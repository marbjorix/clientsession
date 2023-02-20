import { useState } from 'react'
import axios from 'axios';

// VIGTIG ved authentication med session-cookie er withCredentials: true
axios.defaults.withCredentials = true



// eller sættes i hver fx ( url, { headers: headers, params: params, withCredentials = true } )
// const axiosBase = axios.create( { baseURL: "http://localhost:5111/api/" } )
// let response = axiosBase.get( "tours/teaser" );


// --- AXIOS GET DATA
export const useGetData = () => {


    // States til håndtering af data, loading, error
    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    const getData = ( url, headers = null, params = null ) => {


        setLoading( true )              // api'et "ringes op om lidt" så sæt loading til true
        //setData() // her kan du tømme state med data, hvis de bør nulstilles/fjernes inden hentning af nye data


        axios.get( url, { headers: headers, params: params } )
            .then( res => {
                console.log( res.data )
                setData( res.data )     // success - der er data - put dem i state
                setError( false )       // ... så ingen fejl
            } )
            .catch( err => {
                setError( true )        // ups fejl
                setData()               // ... så tøm data der KAN være fejlagtige
            } )
            .finally( () => {
                setLoading( false )     // uanset om der er data eller fejl så - finally - stop loading
            } )
    }


    return { getData, error, loading, data }

}


// --- AXIOS POST DATA
export const usePostData = () => {

    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )


    // payload er de data der skal postes/oprettes
    const postData = ( url, payload = null, headers = null, params = null ) => {

        setLoading( true )              // api'et "ringes op om lidt" så sæt loading til true

        axios.post( url, payload, { headers: headers, params: params } )
            .then( res => {
                console.log( res.data )
                setData( res.data )     // success - der er data - put dem i state
                setError( false )       // ... så ingen fejl
            } )
            .catch( err => {
                setError( true )        // ups fejl
                setData()               // ... så tøm data der KAN være fejlagtige
            } )
            .finally( () => {
                setLoading( false )     // uanset om der er data eller fejl så - finally - stop loading
            } )
    }

    return { postData, error, loading, data }
}


// --- AXIOS PUT DATA
export const usePutData = () => {


    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )


    // payload er de data der skal put/rettes
    const putData = ( url, payload = null, headers = null, params = null ) => {

        setLoading( true )              // api'et "ringes op om lidt" så sæt loading til true

        axios.put( url, payload, { headers: headers, params: params } )
            .then( res => {
                console.log( res.data )
                setData( res.data )     // success - der er data - put dem i state
                setError( false )       // ... så ingen fejl
            } )
            .catch( err => {
                setError( true )        // ups fejl
                setData()               // ... så tøm data der KAN være fejlagtige
            } )
            .finally( () => {
                setLoading( false )     // uanset om der er data eller fejl så - finally - stop loading
            } )
    }


    // det der "udbydes" fra hooket her
    return { putData, error, loading, data }
}


// --- AXIOS PATCH DATA
export const usePatchData = () => {

    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    // payload er de data der skal patches/rettes
    const patchData = ( url, payload = null, headers = null, params = null ) => {

        setLoading( true )              // api'et "ringes op om lidt" så sæt loading til true

        axios.patch( url, payload, { headers: headers, params: params } )
            .then( res => {
                console.log( res.data )
                setData( res.data )     // success - der er data - put dem i state
                setError( false )       // ... så ingen fejl
            } )
            .catch( err => {
                setError( true )        // ups fejl
                setData()               // ... så tøm data der KAN være fejlagtige
            } )
            .finally( () => {
                setLoading( false )     // uanset om der er data eller fejl så - finally - stop loading
            } )
    }

    // det der "udbydes" fra hooket her
    return { patchData, error, loading, data }
}


// --- AXIOS DELETE DATA
export const useDeleteData = () => {

    // States til håndtering af data, loading, error
    const [ data, setData ] = useState()
    const [ error, setError ] = useState( false )
    const [ loading, setLoading ] = useState( false )

    // headers og params af hensyn til fx RapidAPI
    const deleteData = ( url, headers = null, params = null ) => {

        setLoading( true )              // api'et "ringes op om lidt" så sæt loading til true

        //setData()                     // her kan du tømme state med data, hvis de bør nulstilles/fjernes inden hentning af nye data

        axios.delete( url, { headers: headers, params: params } )
            .then( res => {
                console.log( res.data )
                setData( res.data )     // success - der er data - put dem i state
                setError( false )       // ... så ingen fejl
            } )
            .catch( err => {
                setError( true )        // ups fejl
                setData()               // ... så tøm data der KAN være fejlagtige
            } )
            .finally( () => {
                setLoading( false )     // uanset om der er data eller fejl så - finally - stop loading
            } )
    }

    // det der "udbydes" fra hooket her
    return { deleteData, error, loading, data }
}