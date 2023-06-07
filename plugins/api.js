export default function({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'text/plain, */*'
            }
        }
    })

    // Set baseURL to something different
    //   api.setBaseURL('http://localhost/sro_23/public/api/')

    // Inject to context as $api
    //   inject('api', api)
    //}

    let url = 'http://localhost/sro_23/public/api/'
    api.url = url
    api.setBaseURL(url)

    // Inject to context as $api
    inject('api', api)
}