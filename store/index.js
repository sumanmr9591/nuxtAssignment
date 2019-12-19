import axios from 'axios';


export const actions = {
    async nuxtServerInit ( { commit } ) {
        await axios.get( 'https://api.myjson.com/bins/15kg98' )
            .then( ( res ) => {
                console.log( "res", res.data )
                //  resData = res.data;
                commit( 'setContent', res.data )
            } )

    }
}


export const state = () => ( {
    content: []
} )

export const mutations = {
    setContent ( state, content ) {
        console.log( "mutation data", content )
        state.content = content
    }
}