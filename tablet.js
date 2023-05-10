/**
 * @todo Añadir más parámetros a la clase (si es necesario) si se piensa en algún otro, actualizar el constructor, los getters y setters
 */
class Tablet {
    /**
     * Constructor de la clase Tablet
     * @param {number} id Id de la tablet
     * @param {string} marca Marca de la tablet
     * @param {string} nifAlumno Nif del alumno al que pertenece la tablet en el curso actual
     */
    constructor(id, marca, nifAlumno) {
        this.id = id;
        this.marca = marca;
        this.nifAlumno = nifAlumno;
    }

    /**
     * Getter del id
     * @returns Id de la tablet
     */
    getId() {
        return this.id;
    }

    /**
     * Setter del id
     * @param {number} id Id de la tablet
     */
    setId(id) {
        this.id = id;
    }

    /**
     * Getter de la marca
     * @returns Marca de la tablet
     */
    getMarca() {
        return this.marca;
    }

    /**
     * Setter de la marca
     * @param {string} marca Marca de la tablet
     */
    setMarca(marca) {
        this.marca = marca;
    }

    /**
     * Getter del nif del alumno
     * @returns Nif del alumno al que pertenece la tablet
     */
    getNifAlumno() {
        return this.nifAlumno;
    }

    /**
     * Setter del nif del alumno
     * @param {string} nifAlumno Nif del alumno al que pertenece la tablet
     */
    setNifAlumno(nifAlumno) {
        this.nifAlumno = nifAlumno;
    }
}