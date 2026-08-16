/*==================================================
    MOI AGENCY
    COTIZADOR DE GRADUACIONES
==================================================*/


/*==================================================
    LOCAL STORAGE (6 HORAS)
==================================================*/

function saveData(key, data){

    localStorage.setItem(key, JSON.stringify({

        time: Date.now(),

        data: data

    }));

}


function loadData(key){

    const item = localStorage.getItem(key);

    if(!item) return null;

    const parsed = JSON.parse(item);

    const maxAge = 6 * 60 * 60 * 1000;

    if(Date.now() - parsed.time > maxAge){

        localStorage.removeItem(key);

        return null;

    }

    return parsed.data;

}



/*==================================================
    INICIO
==================================================*/

document.addEventListener("DOMContentLoaded",()=>{


    const quoteBoxes = document.querySelectorAll(".quote-box");


    quoteBoxes.forEach(box=>{


        /*==========================================
            ELEMENTOS
        ==========================================*/

        const card = box.closest(".package-card");

        const packageName = card.querySelector("h3").innerText;

        const storageKey = "cotizador_" + packageName;


        const input = box.querySelector(".students");

        const plus = box.querySelector(".plus");

        const minus = box.querySelector(".minus");


        const subtotalTxt = box.querySelector(".subtotal");

        const discountTxt = box.querySelector(".discount");

        const totalTxt = box.querySelector(".total");

        const saveTxt = box.querySelector(".quote-save");

        const button = box.querySelector(".quote-btn");


        const price = parseFloat(input.dataset.price);



        /*==========================================
            FORMATO MONEDA
        ==========================================*/

        function money(number){

            return number.toLocaleString("es-GT",{

                minimumFractionDigits:0,

                maximumFractionDigits:0

            });

        }


        function format(number){

            return "Q" + money(number);

        }



        /*==========================================
            DESCUENTOS
        ==========================================*/

        function getDiscount(students){

            if(students >= 70){

                return 12;

            }

            if(students >= 50){

                return 10;

            }

            if(students >= 35){

                return 7;

            }

            if(students >= 20){

                return 5;

            }

            return 0;

        }



        /*==========================================
            RECUPERAR COTIZACIÓN
        ==========================================*/

        const saved = loadData(storageKey);

        if(saved){

            input.value = saved.students;

        }



        /*==========================================
            ACTUALIZAR COTIZACIÓN
        ==========================================*/

        function update(){

            let students = parseInt(input.value);

            if(isNaN(students)){

                students = 1;

            }

            if(students < 1){

                students = 1;

            }

            if(students > 300){

                students = 300;

            }

            input.value = students;


            const subtotal = students * price;

            const percent = getDiscount(students);

            const discount = subtotal * (percent / 100);

            const total = subtotal - discount;


            saveData(storageKey,{

                students,

                subtotal,

                discount,

                total,

                percent,

                price

            });

                        /*==========================================
                ACTUALIZAR INTERFAZ
            ==========================================*/

            subtotalTxt.innerText = format(subtotal);

            if(percent > 0){

                discountTxt.innerText =
                    format(discount) + " (" + percent + "%)";

                if(saveTxt){

                    saveTxt.innerText =
                        "🎉 Ahorras " +
                        format(discount) +
                        " gracias al descuento por grupo.";

                }

            }else{

                discountTxt.innerText = "Sin descuento";

                if(saveTxt){

                    saveTxt.innerText = "";

                }

            }

            totalTxt.innerText = format(total);



            /*==========================================
                MENSAJE DE WHATSAPP
            ==========================================*/

            const message =
`Hola MOI Agency 👋

Quiero solicitar una cotización.

🎓 Cobertura:
${packageName}

👨‍🎓 Cantidad de estudiantes:
${students}

💵 Precio por estudiante:
Q${price}

📋 Subtotal:
${format(subtotal)}

🏷️ Descuento:
${percent}% (${format(discount)})

✅ Total estimado:
${format(total)}

🏫 Nombre del establecimiento:

📅 Fecha de graduación:

👶 Nivel educativo:
(Párvulos / Primaria / Básicos)

Gracias.`;

            button.href =
                "https://api.whatsapp.com/send?phone=50256952056&text=" +
                encodeURIComponent(message);

        }



        /*==========================================
            BOTÓN +
        ==========================================*/

        plus.addEventListener("click",()=>{

            input.stepUp();

            update();

        });



        /*==========================================
            BOTÓN -
        ==========================================*/

        minus.addEventListener("click",()=>{

            input.stepDown();

            update();

        });



        /*==========================================
            CAMBIO MANUAL
        ==========================================*/

        input.addEventListener("input",()=>{

            update();

        });



        /*==========================================
            INICIALIZAR
        ==========================================*/

        update();



    });


});