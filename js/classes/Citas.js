class Citas {
    constructor () {
        this.citas = []
    }

    AddTicket(cita){
        this.citas = [...this.citas, cita];
        console.log(this.citas);
    }

    deleteTicket(id) {
        this.citas = this.citas.filter(cita => cita.id !== id);

    }

    loadEdit(citaupdated) {
        this.citas = this.citas.map( cita => cita.id === citaupdated.id ? citaupdated : cita);

    }


}

export default Citas;