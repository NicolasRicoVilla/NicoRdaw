const wesenInfo = [
    {
        id: 'alpe',
        nombre: 'Alpe',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/8/80/606-Beverly_Garwood_woged.png/revision/latest/scale-to-width-down/150?cb=20170212063836',
        tipo: 'Pesadilla',
        peligrosidad: 'Peligroso',
        descripcion: 'UN MISTERIOSO WESEN CONVIERTE LAS NOCHES DE INSOMNIO EN UNA LOCURA PURA - Nick (David Giuntoli), Hank (Russell Hornsby) y Wu (Reggie Lee) investigan un hotel local después de que un espeluznante asesinato lleva a uno de sus huéspedes que dice estar perseguido por una criatura aterradora en la noche. En la Tienda de Especias, Monroe (Silas Weir Mitchell), Rosalee (Bree Turner) y Eve (Bitsie Tulloch) continúan investigando los orígenes de los símbolos en la tela y pueden estar cada vez más cerca de descubrir su misterio. Mientras tanto, el capitán Renard (Sasha Roiz) continúa siendo perseguido por sus transgresiones pasadas.',
        notas: 'Es una criatura humanoide sin ropa'

    },
    {
        id: 'anubis',
        nombre: 'anubis',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/3/3f/510-Krisztian_Ajandok_woged.png/revision/latest/scale-to-width-down/150?cb=20160224224912',
        tipo: 'Chacal',
        peligrosidad: 'Peligroso',
        descripcion: 'UN ANTIGUO MISTERIO EGIPTIANO CAUSA CAOS EN PORTLAND - ANNE DUDEK Y RICHARD LEE JACKSON GUEST STAR - Nick ( David Giuntoli ) y Hank ( Russell Hornsby ) se encuentran arrojados en el medio de una batalla antigua y las cosas se calientan cuando el Consejo Wesen decide involucrarse. Monroe ( Silas Weir Mitchell ) y Rosalee ( Bree Turner ) llenan a todos en la historia temprana de Wesen. Mientras tanto, el sargento. Wu ( Reggie Lee ) todavía se está recuperando de los eventos que experimentó recientemente. A medida que las cosas se calientan en Europa, uno de los aliados más confiables de la Resistencia se ve comprometido mientras trata de proteger a Adalind ( Claire Coffee ). Bitsie Tulloch y Sasha Roiz también protagonizan.',
        notas: 'Es muy parecido al ser mitologico anubis'
    },
    {
        id: 'apgadnieks',
        nombre: 'apgadnieks',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/3/3d/503-Peter_woged.png/revision/latest/scale-to-width-down/150?cb=20151117183059',
        tipo: 'Husky',
        peligrosidad: 'Pacifico',
        descripcion: 'LA HISTORIA DE PETER PAN CONSIGUE UN GRIMM TWIST AND ROSALEE SE PONE EN PELIGRO - Rosalee (Bree Turner) desaparece después de que una banda de niños huérfanos la ataca como la figura materna que siempre han querido. Con un furioso Monroe (Silas Weir Mitchell) a su lado, Nick (David Giuntoli) y Hank (Russell Hornsby) corren contra el reloj para encontrar a Rosalee después de descubrir una conexión con un caso anterior de personas desaparecidas que no tuvo un final feliz. Mientras tanto, Adalind (Claire Coffee) reflexiona sobre un regreso a su carrera después de correr con un viejo colega. Sasha Roiz y Reggie Lee también protagonizan.',
        notas: 'Tiene forma canina '
    },
    {
        id: 'aswang',
        nombre: 'aswang',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/1/17/606-Monroe_woged.png/revision/latest/scale-to-width-down/150?cb=20170212063909',
        tipo: 'Ghoul',
        peligrosidad: 'Neutral',
        descripcion: 'WU SE ENCUENTRA CARA A CARA CON ALGO QUE ÉL PUEDE EXPLICAR - - Un nuevo depredador horrible se arrastra a Portland con su vista puesta en una joven pareja expectante que son amigos cercanos de Sgt. Wu (Reggie Lee). Nick (David Giuntoli) y Hank (Russell Hornsby) deben averiguar cómo tratar con Wu a medida que la investigación se intensifica. Mientras tanto, Adalind (Claire Coffee) se prepara para una entrega especial mientras sus enemigos siguen su rastro. Bitsie Tulloch, Silas Weir Mitchell, Sasha Roiz y Bree Turner también protagonizan.',
        notas: 'Tiene forma demoniaca'
    },
    {
        id: 'ataktosfuse',
        nombre: 'ataktosfuse',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/8/8b/605-Ataktos_Fuse2.jpg/revision/latest/scale-to-width-down/150?cb=20170205021008',
        tipo: 'Cigala',
        peligrosidad: 'Neutral',
        descripcion: 'DESPUÉS DE ESTAR DORMIDO DURANTE SIETE AÑOS, UN NUEVO WESEN ES DESENTERRADO CON UN HAMBRE MORTAL - Nick (David Giuntoli) y Hank (Russell Hornsby) se unen a Wu (Reggie Lee) para investigar un extraño asesinato en un parque local. En otros lugares, el capitán Renard (Sasha Roiz) continúa lidiando con un fantasma de su pasado. Mientras tanto, Monroe (Silas Weir Mitchell) y Rosalee (Bree Turner) visitan al médico para ver si Diana (estrella invitada Hannah R. Loyd) la premonición es cierta. De vuelta en el desván, Adalind (Claire Coffee) encuentra a una Eva muy débil (Bitsie Tulloch) en los túneles y misteriosos dibujos garabateados en las paredes.',
        notas: 'Tiene forma de insecto.'
    },
    {
        id: 'balam',
        nombre: 'balam',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/7/7a/Balam.png/revision/latest/scale-to-width-down/150?cb=20130422044923',
        tipo: 'Jaguar',
        peligrosidad: 'Peligroso',
        descripcion: ' ES HALLOWEEN EN PORTLAND Y UNA SERIE DE ABDUCCIONES PARA NIÑOS DE BIZARRE LLEVA A NICK A UNA HISTORIA FANTASMA QUE PUEDE SER REALIDAD KATE DEL CASTILLO ESTRELLAS DE INVITADOS - A pesar de la entusiasta anticipación de la ciudad residentes para Halloween, una serie de horribles secuestros de niños se dirigen a Portland, arruinando rápidamente el espíritu navideño. Nick ( David Giuntoli ) y Hank ( Russell Hornsby ) unen fuerzas con Valentina Espinosa ( la estrella invitada Kate del Castillo, "La Reina del Sur" de Telemundo ), un misterioso detective de Albuquerque, para ayudar a encontrar y capturar al escurridizo sospechoso. Juliette ( Bitsie Tulloch ) se une a su investigación, actuando como traductora de español de relleno del recinto. Cuanto más Nick profundiza en el caso, más se da cuenta del patrón del secuestro que coincide con los de la famosa historia de terror hispana "La Llorona,"Una historia con sus raíces entrelazadas con la historia de su propia familia. Mientras tanto, Monroe ( Silas Weir Mitchell ) celebra la fiesta con buen estilo mientras enseña una lección a los matones del vecindario. Sasha Roiz y Reggie Lee también protagonizan.',
        notas: 'Su forma es similar a la de un jaguar',

    },
    {
        id: 'bauerschwein',
        nombre: 'bauerschwein',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/5/5e/410-Acker_woged.jpg/revision/latest/scale-to-width-down/150?cb=20150124190828',
        tipo: 'Cerdo',
        peligrosidad: 'Pacifico',
        descripcion: 'UN FUEGO SUSPICIOSO REVELA UNA RIVALIDAD CON CONEXIONES AL MONROE Nick ( David Giuntoli ) es llamado a un caso de incendio premeditado sospechoso, que expone una larga disputa familiar que trae a Monroe ( Silas Weir Mitchell ) cara a cara con personajes de su pasado problemático. Mientras Monroe lucha con restringir su lado salvaje, depende de Nick evitar que todo se incendie. Russell Hornsby, Bitsie Tulloch, Sasha Roiz y Reggie Lee también protagonizan.',
        notas: 'Tiene forma porcina'


    },
    {
        id:'blutbad',
        nombre: 'blutbad',
        imagen: 'https://static.wikia.nocookie.net/grimm/images/1/17/606-Monroe_woged.png/revision/latest/scale-to-width-down/150?cb=20170212063909',
        tipo: 'Lobo',
        peligrosidad: 'Peligroso',
        descripcion:'INSPIRADO EN EL CLÁSICO GRIMM FAIRY TALES—NICK LA VIDA DE BURKHARDT SE PONE PATAS ARRIBA CUANDO SE REVELA EL LEGADO DE SU FAMILIA—KATE BURTON GUEST STARS—Después del misterioso ataque brutal de un co-ed de la universidad local, El detective de homicidios de Portland Nick Burkhardt (David Giuntoli) descubrió que es descendiente de una línea de perfiladores criminales de élite conocida como "Grimms," encargado de mantener el equilibrio entre la humanidad y las criaturas mitológicas del mundo. Mientras trata de ocultar los peligros de su nuevo llamado encontrado de su fiancé, Juliette Silverton (Bitsie Tulloch), y su compañero, Hank Griffin (Russell Hornsby), se afianza cada vez más en las antiguas rivalidades y alianzas del mundo Grimm. Con la ayuda de su reacio confidente, Monroe (Silas Weir Mitchell), una criatura reformada de Grimm,Nick debe navegar a través de las fuerzas de una mitología más grande que la vida. Reggie Lee y Sasha Roiz también protagonizan.',
        notas:'Su forma aparentemente es la de un lobo'
    },
    {
        id:'coyotl',
        nombre: 'coyotl',
        imagen:'https://static.wikia.nocookie.net/grimm/images/5/56/408-Belem_woged.jpg/revision/latest/scale-to-width-down/150?cb=20141215031248',
        tipo:'Coyote',
        peligrosidad:'Pacifico',
        descripcion:'NICK Y HANK SE ENCUENTRAN EN EL MEDIO DE UNA REUNIÓN DE FAMILIA PERTURBENTE CUANDO EL VIEJO AMIGO DE HANK BUSCA SU AYUDA A ENCONTRAR A SU HIJA DESAPARECIDA - MADDIE HASSON, JOHN PYPER-FERGUSON Y MARK PELLEGRINO GUEST-STAR – Mientras Hank ( Russell Hornsby ) continúa buscando ayuda para hacer frente a la inexplicable ubicación que tuvo, un viejo amigo, Jarold Kempfer ( estrella invitada Mark Pellegrino ), necesita su ayuda cuando su hija ( estrella invitada Maddie Hasson ) desaparece. La experiencia de Nick ( David Giuntoli ) como Grimm entra a jugar mientras investiga los motivos inquietantes relacionados con la desaparición. Silas Weir Mitchell, Bitsie Tulloch, Sasha Roiz, Reggie Lee y Bree Turner también protagonizan.',
        notas:'Tiene forma de coyote'

    },

    {
        id:'cracherMortel',
        nombre: 'cracherMortel',
        imagen:'https://static.wikia.nocookie.net/grimm/images/3/3f/222-Cracher-Mortel.png/revision/latest/scale-to-width-down/150?cb=20130522224027',
        tipo:'Pez',
        peligrosidad:'Peligroso',
        descripcion:'ZOMBIES DESCEND ON PORTLAND JAMES FRAIN AND SHOHREH AGHDASHLOO GUEST STAR --Nick (David Giuntoli) y Hank (Russell Hornsby) descubren un nuevo tipo de extraño cuando investigan a sospechosos encontrados muertos - por segunda vez. En Europa, Adalind (Claire Coffee) se encuentra en medio de una disputa entre Frau Pech y Stefania (estrella invitada Shohreh Aghdashloo) mientras trabaja en los detalles de su transacción pendiente. Mientras tanto, decidido a recordar hasta el último detalle para comenzar las cosas una vez más, Juliette (Bitsie Tulloch) insiste en que Monroe (Silas Weir Mitchell) comparta con su secreto más oscuro de Nick el mundo de Grimms y Wesen. Sasha Roiz, Reggie Lee y Bree Turner también protagonizan.',
        notas:'Tiene forma de pez'

    }

];





function mostrarInfo(id) {
    const wesen = wesenInfo.find((i) => i.id === id);

    if (wesen) {
        const inputs = {
            nombre: document.getElementById('nombre'),
            imagen: document.getElementById('imagen'),
            tipo: document.getElementById('tipo'),
            peligrosidad: document.getElementById('peligrosidad'),
            descripcion: document.getElementById('descripcion'),
            notas: document.getElementById('notas'),
        };

        for (const key in inputs) {
            inputs[key].value = wesen[key];
        }
    } else {
        alert('Wesen no encontrado');
    }
}

function agregarWesen() {
    const inputs = {
        nombre: document.getElementById('nombre').value,
        imagen: document.getElementById('imagen').value,
        tipo: document.getElementById('tipo').value,
        peligrosidad: document.getElementById('peligrosidad').value,
        descripcion: document.getElementById('descripcion').value,
        notas: document.getElementById('notas').value,
    };

    const agregarWesen = {
        id: inputs.nombre.toLowerCase(),
        ...inputs,
    };

    wesenInfo.push(agregarWesen);

    const newRow = document.createElement('tr');
    newRow.id = agregarWesen.id;

    const nameCell = document.createElement('td');
    nameCell.textContent = inputs.nombre;
    nameCell.onclick = function () {
        mostrarInfo(agregarWesen.id);
    };

    const imageCell = document.createElement('td');
    const wesenImage = document.createElement('img');
    wesenImage.style.width = '140px';
    wesenImage.style.height = '130px';
    wesenImage.src = inputs.imagen;
    wesenImage.alt = inputs.nombre;
    wesenImage.onclick = function () {
        mostrarInfo(agregarWesen.id);
    };
    imageCell.appendChild(wesenImage);

    newRow.appendChild(nameCell);
    newRow.appendChild(imageCell);

    const tableBody = document.querySelector('.tablaWesens tbody');
    tableBody.appendChild(newRow);

    for (const key in inputs) {
        document.getElementById(key).value = '';
    }

    mostrarInfo(agregarWesen.id);
    resetear();
    return false;
}

function resetear() {
    const inputs = ['nombre', 'imagen', 'tipo', 'peligrosidad', 'descripcion', 'notas'];

    inputs.forEach((input) => {
        document.getElementById(input).value = '';
    });
}

function eliminar() {
    const tableBody = document.querySelector('.tablaWesens tbody');
    tableBody.removeChild(tableBody.lastElementChild);
}

let editingId = null;

function editarWesen(id) {
    mostrarInfo(id);
    editingId = id;
    document.getElementById('guardar').style.display = 'block';
}

function guardar() {
    var id = document.getElementById('nombre').value;
    var nombre = document.getElementById('nombre').value;
    var imagen = document.getElementById('imagen').value;
    var tipo = document.getElementById('tipo').value;
    var peligrosidad = document.getElementById('peligrosidad').value;
    var descripcion = document.getElementById('descripcion').value;
    var notas = document.getElementById('notas').value;

    var wesen = wesenInfo.find(function (w) {
        return w.id === id;
    });

   
    if (wesen) {
       
        wesen.nombre = nombre;
        wesen.imagen = imagen;
        wesen.tipo = tipo;
        wesen.peligrosidad = peligrosidad;
        wesen.descripcion = descripcion;
        wesen.notas = notas;

        return true;
    } else {
        return false;
    }
}