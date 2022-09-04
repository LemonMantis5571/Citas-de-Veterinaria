import Citas from "./classes/Citas.js";
import UI from "./classes/UI.js";

import { petInput, 
    ownerInput, 
    phoneInput, 
    dateInput, 
    hourInput, 
    illnessInput,
    form
} from "./selectors.js";

const ui = new UI();
const TicketAdmin = new Citas ();


let edit;

const citaObj = {
    mascota : '',
    propietario : '',
    telefono : '',
    fecha : '',
    hora : '',
    sintomas : ''
}

export function ticketData(e){
    citaObj[e.target.name] = e.target.value;
}

export function newTicket(e){
    e.preventDefault();

    const { mascota, propietario, telefono, fecha, hora, sintomas} = citaObj;

    
    if(mascota === '' || propietario === '' || telefono === '' || fecha === '' || hora === '' || sintomas === ''){
        ui.PrintAlert('Todos los campos son requeridos', 'error');
        return;
    }

    if(edit){

        ui.PrintAlert('Editado Correctamente');

        TicketAdmin.loadEdit({...citaObj});

        form.querySelector('button[type="submit"]').textContent = 'Crear Cita';

        edit = false;

    }
    else {
        citaObj.id = Date.now();

        TicketAdmin.AddTicket({...citaObj});

        ui.PrintAlert('Se agrego correctamente');

    }

    

    form.reset();

    ResetObject();

    ui.printHTML(TicketAdmin);
}


export function ResetObject(){
    citaObj.fecha = '';
    citaObj.hora = '';
    citaObj.mascota = '';
    citaObj.propietario = '';
    citaObj.telefono = '';
    citaObj.sintomas = '';

}

export function deleteTicket(id) {
    TicketAdmin.deleteTicket(id);

    ui.PrintAlert('La cita se elimino correctamente');

    ui.printHTML(TicketAdmin);
    
}

export function loadEdit(cita){
    
    const { mascota, propietario, telefono, fecha, hora, sintomas, id} = cita;
    petInput.value = mascota;
    phoneInput.value = telefono;
    ownerInput.value = propietario;
    dateInput.value = fecha;
    hourInput.value = hora;
    illnessInput.value = sintomas;

    citaObj.mascota = mascota;
    citaObj.propietario = propietario;
    citaObj.telefono = telefono;
    citaObj.fecha = fecha;
    citaObj.hora = hora;
    citaObj.sintomas = sintomas
    citaObj.id = id;


    form.querySelector('button[type="submit"]').textContent = 'Guardar Cambios';

    edit = true;
}