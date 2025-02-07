const imagenes = ["assets/1.jpg", "assets/2.jpg", "assets/3.jpg", "assets/4.jpg"];
        let indice = 0;
        const imgElement = document.getElementById("imagen");
        const elementos = document.querySelectorAll(".texto")

        function cambiarImagen() {
            imgElement.style.opacity = 0; // Reducimos opacidad para efecto de desvanecimiento
            
            

            setTimeout(() => {
                indice = (indice + 1) % imagenes.length; // Cambiamos la imagen
                imgElement.src = imagenes[indice];
                imgElement.style.opacity = 1; // Restauramos opacidad

                switch (indice) {
                    case 0:
                        for (i = 0; i < 4; i++) {
                            elementos[i].style.display = "none"
                        }

                        elementos[indice].style.display = "block"
                        

                        break;

                    case 1:
                        for (i = 0; i < 4; i++) {
                            elementos[i].style.display = "none"
                        }

                        elementos[indice].style.display = "block"
                        

                        break;

                    case 2:
                        for (i = 0; i < 4; i++) {
                            elementos[i].style.display = "none"
                        }

                        elementos[indice].style.display = "block"
                        

                        break;

                    case 3:
                        for (i = 0; i < 4; i++) {
                            elementos[i].style.display = "none"
                        }

                        elementos[indice].style.display = "block"
                        

                        break;
                
                    
                }


            }, 250); // Esperamos que la opacidad baje antes de cambiar la imagen
        }

        setInterval(cambiarImagen, 10000);


        

        function mostrar_mapa(n) {
            switch (n) {
              case 1:
                document.getElementById("map").src =
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.401511539481!2d-75.57320178820675!3d6.210657293751321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e44282ba41a1223%3A0x441b86841cf659a!2sCl%2010%20%2343a-15%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1736996008870!5m2!1ses!2sco";
                break;
          
              case 2:
                document.getElementById("map").src =
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.0716173914411!2d-75.59451612791106!3d6.244847493717387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429189ed12fa5%3A0x25ee111d3749161a!2sHotel%20Asturias%20Medellin!5e0!3m2!1ses!2sco!4v1736996130981!5m2!1ses!2sco";
                break;
          
              case 3:
                document.getElementById("map").src =
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.6252131219381!2d-75.55886709776365!3d6.197456693764355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e46829a191ffd75%3A0xd1ba421be16030e3!2sCra.%2025a%20%231a%20Sur%2045%20Local%203027%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20El%20Poblado%2C%20Medell%C3%ADn%2C%20Antioquia!5e0!3m2!1ses!2sco!4v1736996265417!5m2!1ses!2sco";
                break;
          
              case 4:
                document.getElementById("map").src =
                  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.502670739083!2d-75.59306430457097!3d6.176792081125159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4683d4c79a57ad%3A0x2e13211df72b9f79!2sEl%20Rancherito%20Viva%20Envigado!5e0!3m2!1ses!2sco!4v1736994641154!5m2!1ses!2sco";
                break;
            }
          }


const iconos = ["url(assets/perro.png)",
                "url(assets/estetoscopio.png)",
                "url(assets/salud.png)",
                "url(assets/pets.png)",
                "url(assets/ambulancia.png)",
                "url(assets/ducha.png)",
                "url(assets/casa.png)",
                "url(assets/arcoiris.png)",
                ]

function icons() {
    for (let n = 1; n < 9; n++) {
        const elemento = document.getElementById(n)
        elemento.style.backgroundImage = iconos[n - 1];
    }
}


const galeria = [
                "url(assets/galeria1.png)",
                "url(assets/galeria2.png)",
                "url(assets/galeria3.png)",
                "url(assets/galeria4.png)",
                "url(assets/galeria5.png)"

]

function imgGaleria() {
  for (let index = 1; index < 6; index++) {
    const element = document.getElementById("galeria"+index)
    element.style.backgroundImage =  galeria[index-1]
    
  }
  
}

const imagenPerfil = [
  "assets/perfil1.png",
  "assets/perfil2.png",
  "assets/perfil3.png",
  "assets/perfil4.png",
  "assets/perfil5.png"
]


function fotoPerfil() {
  const foto = document.querySelectorAll(".foto-perfil")

  for (let index = 0; index < 5; index++) {
    foto[index].src = imagenPerfil[index]
  } 
}


function vistas(n) {
  const vistas = document.querySelectorAll(".vista")

  switch (n) {
    case 0:
      for (let index = 0; index < vistas.length; index++) {
        vistas[index].style.display = "none";
      }

      vistas[n].style.display = "block";

      break;

    case 1:
      for (let index = 0; index < vistas.length; index++) {
        vistas[index].style.display = "none";
      }

      vistas[n].style.display = "block";

      break;

    case 2:
      for (let index = 0; index < vistas.length; index++) {
        vistas[index].style.display = "none";
      }

      vistas[n].style.display = "block";

      break;

    case 3:
      for (let index = 0; index < vistas.length; index++) {
        vistas[index].style.display = "none";
      }

      vistas[n].style.display = "block";

      break;

    case 4:
      for (let index = 0; index < vistas.length; index++) {
        vistas[index].style.display = "none";
      }

      vistas[n].style.display = "block";

      break;

    default:
      vistas[0].style.display = "block";
      break;
  }
  
}


//codigo para desplazamiento entre pagina con botones 207-240

document.getElementById("boton-sedes").addEventListener("click", function() {
  document.getElementById("seccion-sedes").scrollIntoView({ 
      behavior: "smooth", 
      block: "center"
  });
});

document.getElementById("boton-inicio").addEventListener("click", function() {
  document.getElementById("seccion-inicio").scrollIntoView({ 
      behavior: "smooth", 
      block: "center"
  });
});

document.getElementById("boton-servicios").addEventListener("click", function() {
  document.getElementById("seccion-servicios").scrollIntoView({ 
      behavior: "smooth", 
      block: "center"
  });
});

document.getElementById("boton-nosotros").addEventListener("click", function() {
  document.getElementById("seccion-nosotros").scrollIntoView({ 
      behavior: "smooth", 
      block: "center"
  });
});

document.getElementById("boton-contacto").addEventListener("click", function() {
  document.getElementById("seccion-contacto").scrollIntoView({ 
      behavior: "smooth", 
      block: "center"
  });
});






function desplazamientoBtn(n) {
  switch (n) {
    case 1:
      document.getElementById("seccion-nosotros").scrollIntoView({ 
        behavior: "smooth", 
        block: "center"
    });
      break;

      case 2:
      document.getElementById("seccion-servicios").scrollIntoView({ 
        behavior: "smooth", 
        block: "center"
    });
      break;

      case 3:
      document.getElementById("seccion-sedes").scrollIntoView({ 
        behavior: "smooth", 
        block: "center"
    });
      break;

      case 4:
      document.getElementById("seccion-contacto").scrollIntoView({ 
        behavior: "smooth", 
        block: "center"
    });
      break;
  
    
  }
  
}






document.addEventListener('DOMContentLoaded', icons());
document.addEventListener('DOMContentLoaded', imgGaleria());
document.addEventListener('DOMContentLoaded', fotoPerfil());
document.addEventListener('DOMContentLoaded', vistas());