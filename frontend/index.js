import '@babel/polyfill';
import './css/index.css';
import './asset/logo.png';
import './js/statements.js';
import UI from './js/UI.js';
import ServiceBook from './js/serviceBooks.js';

window.onload = async () => {

	const ui = new UI();
	const serviceBook = new ServiceBook();
	let id;

	mostrar();

	form.addEventListener('submit' , async (e) => {
		e.preventDefault();
		const data = new FormData(form);
		const resultado = await serviceBook.post_updatet_Books(`` , 'POST' ,data);
		ui.AlertRequest(resultado);
		mostrar();
	});

	form2.addEventListener('submit' , async (e) => {
		e.preventDefault();
		const data2 = new FormData(form2);
		const resultado = await serviceBook.post_updatet_Books(`/${id}` , 'PUT' ,data2);
		$('#exampleModal').modal('hide');
		ui.AlertRequest(resultado);
		mostrar();
	});


	article2.addEventListener('click' , async (e) => {
		if(e.target.classList.contains('delete')) {
			if(window.confirm('Confirm request')){
				const resultado = await serviceBook.deleteBooks(`/${e.target.getAttribute('data-id')}`);
				ui.AlertRequest(resultado);
				mostrar();
			}
		}
	});

	article2.addEventListener('click' , async (e) => {
		if(e.target.classList.contains('edit')) {
			let datos = e.target.getAttribute('data-id').split('||');
			ui.updateBooks(datos[0] , datos[1] , datos[2], datos[3]);
			id = datos[4];
		}
	});

	async function mostrar () {
		ui.SpinnerLoading();
		const resultado = await serviceBook.getBooks();
		ui.showBooks(resultado , resultado.length);
		ui.SpinnerLoading();
	}
}
	
