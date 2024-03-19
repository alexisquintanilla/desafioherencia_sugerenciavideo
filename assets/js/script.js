
//IIFE
const multimediaDom = (() => {
    const multimediaAtributo = (id, atributo, url) => {
        id[atributo] = url
    }
    return {
        // clausula
        insertarUrl(id, url) {
            multimediaAtributo(id, "src", url)
        }
    }
})();
// VARIABLES PARA MODIFICAR DOM

const musica = document.querySelector("#musica")
const peliculas = document.querySelector("#peliculas")
const series = document.querySelector("#series")

// CREACION DE PLANTILLAS
class Multimedia {
    #url
    constructor(url) {
        this.#url = url
    }
    get getUrl() {
        return this.#url
    }
    setInicio() {
        return "Este método es para realizar un cambio en la URL del video"
    }
}

class Reproductor extends Multimedia {
    #id
    constructor(id, url) {
        super(url)
        this.#id = id
    }
    playMultimedia() {
        multimediaDom.insertarUrl(this.#id, this.getUrl)
    }
    setInicio(tiempo) {
        const modificarTiempo = `${this.getUrl}?start=${tiempo}`
        multimediaDom.insertarUrl(this.#id, modificarTiempo)
        console.log(modificarTiempo)
    }

}


// CREACION DE INSTANCIAS Y EJECUCION DE FUNCIONES.

const reproMusica = new Reproductor(musica, "https://www.youtube.com/embed/CD-E-LDc384")
reproMusica.playMultimedia()
reproMusica.setInicio(30)

const reproPelicula = new Reproductor(peliculas, "https://www.youtube.com/embed/1roy4o4tqQM?si=Psyd5qnWDMGCvwpd")
reproPelicula.playMultimedia()
reproPelicula.setInicio(33)

const reproSerie = new Reproductor(series, "https://www.youtube.com/embed/a1zmhHLVrq0?si=iuky9OuRIVGZ-BCA")

reproSerie.playMultimedia()
reproSerie.setInicio(35)

