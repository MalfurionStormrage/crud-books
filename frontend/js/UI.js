export default class UI {

	showBooks(resultado, num) {
	    while (article2.firstChild) {
	        article2.removeChild(article2.firstChild);
	    }
	    if (num > 0) {
	        article2.classList.remove('article2');
	        resultado.forEach(({ Title, Author, Description, pinture = 'https://enlamira.org/enlm/uploads/2018/08/vacio.jpg', _id }) => {
	            article2.innerHTML +=
	                `
	          <div class="card border-dark mb-4 shadow">
	            <div class="menuCard">
	              <button class="btn bg-One text-white" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	              <i class="bi bi-three-dots"></i>
	              </button>
	              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
	                <a class="dropdown-item edit" data-toggle="modal" data-target="#exampleModal" data-id="${Title}||${Author}||${Description}||${pinture}||${_id}"><i class="bi bi-box-arrow-up"></i> Update</a>
	                <a class="dropdown-item delete" data-id="${_id}"><i class="bi bi-trash"></i> Delete </a>
	              </div>
	            </div>
	            <img src="${pinture}" class="card-img-top" height="200px" alt="...">
	              <div class="card-body">
	                <h5 class="card-title">${Title}</h5>
	                <p class="card-text">${Description}</p>
	              </div>
	            <div class="card-footer text-muted">
	              ${Author}
	            </div>
	          </div>
	        `;

	        });
	    } else {
	        article2.classList.add('article2');
	        article2.innerHTML = '<h3 class="mensaje-vacio"> without results </h3>';
	    }
	}

	updateBooks(Title, Author, Description, pinture, _id) { // cargar datos en modal
		document.getElementById('Title2').value = Title;
		document.getElementById('Author2').value = Author;
		document.getElementById('Description2').value = Description;
	}

	SpinnerLoading() { // show spinner
	    spinner.classList.toggle('d-none');
	    article1.classList.toggle('d-none');
	    article2.classList.toggle('d-none');
	}

	AlertRequest(message) { //alert request
	    if (message === 'ok') {
	        Swal.fire({
	            title: 'Estado de la solicitud',
	            text: 'solicitud realizada correctamente.',
	            icon: 'success'
	        })
	        form.reset();
	        
	    } else if (message === 'Unique field already exists') {
	        Swal.fire({
	            title: 'Estado de la solicitud',
	            text: 'Ya existe un registro con esos datos.',
	            icon: 'warning'
	        })
	    } else {
	        Swal.fire({
	            title: 'Estado de la solicitud',
	            text: 'No se pudo realizar la solicitud.',
	            icon: 'error'
	        })
	    }
	}

}