class Usuario {
    /**
     * Constructor de la clase Usuario
     * @param {string} nif Nif del usuario
     * @param {string} email Email del usuario
     * @param {string} contrasenya Contraseña del usuario
     * @param {string} usuario Nombre del usuario
     * @param {Usuarios} tipoUsuario Tipo de usuario
     */
    constructor(nif, email, contrasenya, usuario, tipoUsuario) {
        this.nif = nif;
        this.email = email;
        this.contrasenya = contrasenya;
        this.usuario = usuario;
        this.tipoUsuario = tipoUsuario;
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
     * Getter de la contraseña
     * @returns Contraseña del usuario
     */
    getContrasenya() {
        return this.contrasenya;
    }

    /**
     * Setter de la contraseña
     * @param {string} contrasenya Contraseña del usuario
     */
    setContrasenya(contrasenya) {
        this.contrasenya = contrasenya;
    }

    /**
     * Getter del usuario
     * @returns Nombre del usuario
     */
    getUsuario() {
        return this.usuario;
    }

    /**
     * Setter del usuario
     * @param {string} usuario Nombre del usuario
     */
    setUsuario(usuario) {
        this.usuario = usuario;
    }

    /**
     * Getter tipo de usuario
     * @returns Tipo de usuario
     */
    getTipoUsuario() {
        return this.tipoUsuario;
    }

    /**
     * Setter tipo de usuario
     * @param {tipoUsuario} tipoUsuario Tipo de usuario
     */
    setTipoUsuario(tipoUsuario) {
        this.tipoUsuario = tipoUsuario;
    }
}

const Usuarios = {
    ALUMNO: 0,
    PROFESOR: 1,
    DIRECTOR: 2
}