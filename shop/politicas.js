        document.addEventListener("DOMContentLoaded", function() {
            if (!localStorage.getItem("aceptoTerminos")) {
                setTimeout(() => {
                    document.getElementById("ventanaLegal").style.transform = "translateY(0)";
                }, 10000);
            }
        });

        function leerTerminos() {
            window.open('https://www.moidg.online/p/terminos-y-condiciones.html', '_blank');
        }
        function leerPrivacidad() {
            window.open('https://www.moidg.online/p/politica-de-privacidad.html', '_blank');
        }
        function aceptarTodo() {
            localStorage.setItem("aceptoTerminos", "true");
            document.getElementById("ventanaLegal").style.transform = "translateY(100%)";
        }
        function rechazarTodo() {
            alert('No puedes realizar compras en MOIDG STORE hasta aceptar nuestros Terminos y Condiciones, y Politica de Privacidad');
        }