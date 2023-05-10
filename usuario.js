class Usuario {
    /**
     * Constructor de la clase Usuario
     * @param {string} nif Nif del usuario
     * @param {string} email Email del usuario
     * @param {string} nombre Nombre del usuario
     * @param {string} apellidos Apellidos del usuario
     * @param {number} telefono Teléfono del usuario
     */
    constructor(nif, email, nombre, apellidos, telefono) {
        this.nif = nif;
        this.email = email;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
    }

    /**
     * Getter del nif
     * @returns Nif del usuario
     */
    getNif() {
        return this.nif;
    }

    /**
     * Setter del nif
     * @param {string} nif Nif del usuario
     */
    setNif(nif) {
        this.nif = nif;
    }

    /**
     * Getter del email
     * @returns Email del usuario
     */
    getEmail() {
        return this.email;
    }

    /**
     * Setter del email
     * @param {string} email Email del usuario
     */
    setEmail(email) {
        this.email = email;
    }

    /**
     * Getter del nombre
     * @returns Nombre del usuario
     */
    getNombre() {
        return this.nombre;
    }

    /**
     * Setter del nombre
     * @param {string} nombre Nombre del usuario
     */
    setNombre(nombre) {
        this.nombre = nombre;
    }

    /**
     * Getter de los apellidos
     * @returns Apellidos del usuario
     */
    getApellidos() {
        return this.apellidos;
    }

    /**
     * Setter de los apellidos
     * @param {string} apellidos Apellidos del usuario
     */
    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    /**
     * Getter del teléfono
     * @returns Teléfono del usuario
     */
    getTelefono() {
        return this.telefono;
    }

    /**
     * Setter del teléfono
     * @param {number} telefono Teléfono del usuario
     */
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}

/**
 * @todo Crear clase Alumno con sus parámetros, constructor, getters y setters. (Que otra información a parte de la de Usuario tiene un Alumno?)
 */
class Alumno extends Usuario {
    constructor() {

    }
}

/**
 * @todo Crear clase Profesor con sus parámetros, constructor, getters y setters. (Que otra información a parte de la de Usuario tiene un Profesor?)
 */
class Profesor extends Usuario {
    constructor() {

    }
}

/**
 * @todo Crear clase Director con sus parámetros, constructor, getters y setters. (Que otra información a parte de la de Usuario tiene un Director?)
 */
class Director extends Usuario {
    constructor() {

    }
}