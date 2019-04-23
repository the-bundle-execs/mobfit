const BASE = 'http://localhost:3000'

let allEvents = function() {

	return fetch(BASE + '/events')
  .then((response) => {
           	// resp will be whatever you saw on the page localhost:3000/cats, it is the result of our fetch call
			if(response.status === 200){
        return response.json()
      } else {
        throw "Bad Response"
      }
    })

}

export  {
	allEvents
}
