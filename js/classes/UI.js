import {loadEdit, deleteTicket} from '../functions.js';

import {container} from '../selectors.js';

class UI {

    PrintAlert(message, type){
        const divmessage = document.createElement('div');
        divmessage.classList.add('text-center', 'alert', 'd-block', 'col-12');

        if(type === 'error') {
            divmessage.classList.add('alert-danger');
        }

        else {
            divmessage.classList.add('alert-success');
        }


        divmessage.textContent = message;


        document.querySelector('#contenido').insertBefore(divmessage, document.querySelector('.agregar-cita'));

        setTimeout(() => {
             divmessage.remove();
        }, 3000);
    }

    printHTML({citas}) {

        this.CleanHTML();   
        
        citas.forEach(cita => {
            const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;

            const divCita = document.createElement('div');
            divCita.classList.add('cita', 'p-3');
            divCita.dataset.id = id;


            const petP = document.createElement('h2');
            petP.classList.add('card-title', 'font-weight-bolder');
            petP.textContent = mascota;


            const ownerP = document.createElement('p');
            ownerP.innerHTML = `<span class="font-weight-bolder">Propietario: </span> ${propietario}
            `;

            const phoneP = document.createElement('p');
            phoneP.innerHTML = `<span class="font-weight-bolder">Telefono: </span> ${telefono}
            `;

            const dateP = document.createElement('p');
            dateP.innerHTML = `<span class="font-weight-bolder">Fecha: </span> ${fecha}
            `;

            const hourP = document.createElement('p');
            hourP.innerHTML = `<span class="font-weight-bolder">Hora: </span> ${hora}
            `;

            const sintomasP = document.createElement('p');
            sintomasP.innerHTML = `<span class="font-weight-bolder">Sintomas: </span> ${sintomas}
            `;

            const btnDelete = document.createElement('button');
            btnDelete.classList.add('btn', 'btn-danger', 'mr-2');
            btnDelete.innerHTML = 'Eliminar ';
            btnDelete.onclick = () => deleteTicket(id);


            const btnEdit = document.createElement('button');
            btnEdit.classList.add('btn', 'btn-info');
            btnEdit.innerHTML = 'Editar <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" /></svg>'
            btnEdit.onclick = () => loadEdit(cita);


            divCita.appendChild(petP);
            divCita.appendChild(ownerP);
            divCita.appendChild(phoneP);
            divCita.appendChild(dateP);
            divCita.appendChild(hourP);
            divCita.appendChild(sintomasP);
            divCita.appendChild(btnDelete);
            divCita.appendChild(btnEdit);


            
            

            container.appendChild(divCita);

        })

      

    }

    CleanHTML() {
        while(container.firstChild){
            container.removeChild(container.firstChild);
        }
    }
}

export default UI;