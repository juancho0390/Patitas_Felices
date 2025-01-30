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


        

    