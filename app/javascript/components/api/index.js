const BASE = 'http://localhost:3000'

let allEvents = () => {
	return fetch(BASE + '/events')
  .then((response) => { //promise
		if(response.status === 200){
      return response.json()
    } else {
      throw "Bad Response"
    }
  })
	.catch(e=> alert(e))
}

let createEvent = (newevent) => {
	return fetch(BASE + '/events', {
		body: JSON.stringify(newevent),  //stringify the json for fetch
		headers: {  //sending JSON, expect JSON back; info about the content
			'Content-Type': 'application/json'
		},
		method: "POST"  //correct endpoint invoked on server
	})
		.then((resp) => { //promise
			if (resp.status === 200 ) {
				return resp.json()
			} else {
				throw 'No can do. Try again.'
			}
		})
		.catch(e=> alert(e))
}

export  {
	allEvents, createEvent
}
