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
		.then((response) => { //promise
			if(response.status === 200){
	      return response.json()
	    } else {
	      throw "Bad Response"
	    }
		})
		.catch(e=> alert(e))
}

let showEvent = function(id) {

	return fetch(BASE + `/events/${id}`, {// this would be equivalent to going to localhost:3000/cats in your browser. Do that - - what do you see?

		method: "GET"
	})
	.then((response) => { //promise
		if(response.status === 200){
			return response.json()
		} else {
			throw "Bad Response"
		}
	})
	.catch(e=> alert(e))
}

let createAttLog = (newloginfo) => {
	return fetch(BASE + '/attendance_logs', {
		body: JSON.stringify(newloginfo),  //stringify the json for fetch
		headers: {  //sending JSON, expect JSON back; info about the content
			'Content-Type': 'application/json'
		},
		method: "POST"  //correct endpoint invoked on server
	})
		.then((response) => { //promise
			if(response.status === 200){
	      return response.json()
	    } else {
	      throw "Bad Response"
	    }
		})
		.catch(e=> alert(e))
}


export  {
	allEvents, createEvent, showEvent, createAttLog
}
