export default class serviceBook {

	constructor() {
		this.URL = '/api'
	}

	async getBooks() {
		try {
			const respuesta = await fetch(this.URL);
			const resultado = await respuesta.json();
			return resultado;
		} catch (error) {
			console.log(`error en la solicitud ${error}`)
		}
	}

	async post_updatet_Books(_id ,method , data) {
		try {
			const respuesta = await fetch( `${this.URL}${_id}`, { method: method, body: data })
			const resultado = await respuesta.json();
			return resultado.message;
		} catch (error) {
			console.log(`error en la solicitud ${error}`)
		}
	}

	async deleteBooks(_id){
		try {
			const respuesta = await fetch(`${this.URL}${_id}`, { method: 'delete' })
			const resultado = await respuesta.json();
			return resultado.message;
		} catch (error) {
			console.log(`error en la solicitud ${error}`)
		}
	}
}