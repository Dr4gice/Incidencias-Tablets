let usuarioDatos = [];

try {
    let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
    if (listaRecuperada !== null) {
        usuarioDatos = listaRecuperada;
    }
} catch (error) {
    let usuarioDatos = [];
}

const listaDni = ["74444420K", "74396012M", "74445347M", "74446531Q", "20085333P"];
let encontrado = false;

usuarioDatos.forEach(usuario => {
    listaDni.forEach(dni => {
        if (dni === usuario.nif) {
            encontrado = true;
        }
    });
});

if (!encontrado) {
    let usuarioDatos = [];
    let indiceTablet = 1;
    listaDni.forEach(async dni => {

        try {
            let listaRecuperada = JSON.parse(localStorage.getItem("listaUsuarios"));
            if (listaRecuperada !== null) {
                usuarioDatos = listaRecuperada;
            }
        } catch (error) {
            let usuarioDatos = [];
        }
    
        try {
            let indiceRecuperado = localStorage.getItem("indiceTablet");
            if (indiceRecuperado !== null) {
                indiceTablet = parseInt(indiceRecuperado);
            }
        } catch (error) {
            let indiceTablet = 1;
        }
    
        const nombreUsuario = generarNombre();
        let contrasenyaEncriptada = await encriptar("123");
        const idTablet = generarId(indiceTablet);
        const marcaTablet = generarMarca();
        const usuarioJson = {
            nif: dni,
            email: "alumnito@gmail.com",
            contrasenya: contrasenyaEncriptada,
            usuario: nombreUsuario,
            tipoCliente: "Admin",
            tablet: {
                id: idTablet,
                marca: marcaTablet,
                accesorios: {
                    cargador: randomBoolean(),
                    funda: randomBoolean(),
                    protectorDePantalla: randomBoolean()
                }
            }
        }
    
        indiceTablet += 1;
        usuarioDatos.push(usuarioJson);
        localStorage.setItem("listaUsuarios", JSON.stringify(usuarioDatos));
        localStorage.setItem("indiceTablet", indiceTablet);
    });
}