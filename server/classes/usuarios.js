


export class Usuario {
    constructor() {
        this.personas = []
    }

    addUsuario(id,nombre){
        let persona = {id,nombre}
        this.personas.push(persona)

        return this.personas
    }

    getPersonaPorId(id) {
        let persona = this.personas.filter(element.id === id)[0]
        return persona
    }
    
    getPersona(){
        return this.personas
    }

    getPersonasPorSalas(sala) {
     return sala
    }
    deletepersona(id) {
        let personaBorrada = this.getPersonaPorId(id)

        this.personas = this.personas.filter(element => element.id != id)
        return personaBorrada

    }
}