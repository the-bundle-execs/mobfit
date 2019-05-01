const BASE = 'http://localhost:3000'

let allEvents = () => {
	return fetch(BASE + '/events')
  .then((response) => {
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
	      throw "All starred input fields required."
	    }
		})
		.catch(e=> alert(e))
}

let showEvent = id => {
	return fetch(BASE + `/events/${id}`, {
		method: "GET"
	})
	.then((response) => {
		if(response.status === 200){
			return response.json()
		} else {
			throw "Bad Response"
		}
	})
	.catch(e=> alert(e))
}

let updateEvent = (id, update) => {
	return fetch(BASE + `/events/${id}`, {
		body: JSON.stringify(update),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "PATCH"
	})
	.then((response) => {
		if(response.status === 200){
			return response.json()
		} else {
			throw "All starred input fields required."
		}
	})
	.catch(e=> alert(e))
}

let deleteEvent = id => {
	return fetch(BASE + `/events/${id}`, {
		method: "DELETE"
	})
	.catch(e=> alert(e))
}

let createAttLog = (newloginfo) => {
	return fetch(BASE + '/attendance_logs', {
		body: JSON.stringify(newloginfo),
		headers: {
			'Content-Type': 'application/json'
		},
		method: "POST"
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

let getAttLogs = () => {
	return fetch(BASE + '/attendance_logs')
  .then((response) => { //promise
		if(response.status === 200){
      return response.json()
    } else {
      throw "Bad Response"
    }
  })
	.catch(e=> alert(e))
}

let deleteAttLog = id => {
	console.log(id);
	return fetch(BASE + `/events/${id}/unsubscribe`, {
		method: "DELETE"
	})
	.then((response) => { //promise
		if(response.status === 200){
      return response.json()
    } else {
      throw "Bad Response"
    }
  })
	.then(response =>{
		console.log(response);
	})
	.catch(e=> alert(e))
}

export  {
	allEvents, createEvent, showEvent, createAttLog, getAttLogs, updateEvent, deleteEvent, deleteAttLog
}
