import {ticketData, newTicket} from '../functions.js';

import { petInput, 
    ownerInput, 
    phoneInput, 
    dateInput, 
    hourInput, 
    illnessInput,
    form
} from "../selectors.js";

class App {
    constructor(){
      this.initApp();
    }

    initApp() {
        petInput.addEventListener('input', ticketData);
        ownerInput.addEventListener('input', ticketData);
        phoneInput.addEventListener('input', ticketData);
        dateInput.addEventListener('input', ticketData);
        hourInput.addEventListener('input', ticketData);
        illnessInput.addEventListener('input', ticketData);

        form.addEventListener('submit', newTicket);
    }


}

export default App;