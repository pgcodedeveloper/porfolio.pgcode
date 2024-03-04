export const formatearFecha = fecha => {
    const f = new Date(fecha);
    f.setDate(f.getDate() + 1);
    const opciones = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    }
    return f.toLocaleDateString('es-ES', opciones)
}

export const Proyectos = [
    {
        id: 1,
        titulo: "CMS Clientes",
        descripcion: "Proyecto para un estudio de arquitectura que estaba necesitando un sistema que le permita administrar sus clientes y trámites a los que se especializan.",
        descripcionLarga: "En este proyecto el cliente buscaba una solición para organizar sus datos como empresa, desde los clientes (Propios y Particulares) y los trámites que realiza. \n Esta aplicación le permite al usuario acceso total a la información ingresada y manipularla con sea necesario.\n\nComo principales funcionalidades estan:\n- Crear una cuenta (Iniciar sesión)\n- Administrar clientes (CRUD)\n- Administrar trámites para esos clientes (CURD)\n- Obtener reportes en función a una serie de filtros ingresados\n- Y mucho más\n\nEn este proyecto puede perfeccionarme utilizando las útimas tecnologías.",
        tecnologias: [
            {
                id: 1,
                nombre: "React.js"
            },
            {
                id: 2,
                nombre: "Next.js"
            },
            {
                id: 3,
                nombre: "Tailwind CSS"
            },
            {
                id: 4,
                nombre: "Firebase"
            }
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1705693221/medium_Captura_c5afafe415.png",
        url: "cms-clientes",
        repo: "https://github.com/pgcodedeveloper/pgcms",
        demo: "https://pgcms.vercel.app/",
        fecha: "2023-12-26",
        tipo: "FullStack"
    },
    {
        id: 2,
        titulo: "Control de Gastos (Versión Web)",
        descripcion: "Proyecto para controlar los gastos personales, permitiendo crear, editar y eliminar los ingresos y egresos. Además te permite sacar un reporte mensual.",
        descripcionLarga:"Aplicación web para realizar un control mensual de tus gastos del hogar o negocio. En este proyecto tuve la oportunidad de afirmar conocimientos y de sumar otros nuevos como lo es la confexión de un documento PDF en base a ciertos parámetros y datos que genera la aplicación.\n\nDado a la utilidad que tuvo esta aplicación también realice una versión móvil para poder tenerla en todas partes desde tu télefono.\n\nSus principales funcionalidades son:\n- Asignar un presupuesto base; luego si es necesario se puede ser modificado.\n- Crear, modificar y eliminar gastos en diferentes categorías \n- Ver el estado de tus gastos en un grafico amigable.\n- Crear, modificar y eliminar nuevos ingresos, sumándose al presupuesto total. \n- Descargar un reporte una vez finalizado el mes, para poder evaluar tus gastos e ingresos.\n- Los datos son almacenados LocalStorage.\n",
        tecnologias: [
            {
                id: 1,
                nombre: "React.js"
            },
            {
                id: 2,
                nombre: "Vite.js"
            },
            {
                id: 3,
                nombre: "Styled Component"
            },
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1669488837/medium_gastos_4d46f646bc.png",
        url: "control-gastos",
        repo: "https://github.com/pgcodedeveloper/appgastos",
        demo: "https://appgastos2022.netlify.app/",
        fecha: "2022-11-26",
        tipo: "FrontEnd"
    },
    {
        id: 3,
        titulo: "Control de Gastos (Versión Mobile)",
        descripcion: "Proyecto para controlar los gastos personales, permitiendo crear, editar y eliminar los ingresos y egresos. Además te permite sacar un reporte mensual.",
        descripcionLarga:"Aplicación móvil para Android del proyecto de Control de Gastos.\nEsta es una versión mejorada de algunas características que tienía el otro proyecto junto con adaptarlas a este nuevo ambiente y tecnología.\n\nLas funcionalidades son las mismas al anterior proyecto:\n- Permitir administrar tus ingresos y egresos de dinero.\n- Visualizar en tiempo real el balance de cuenta: Presupuesto total, Disponible y Gastado.\n- Filtrar por categoria de gasto\n- Obtener un reporte (actualizad a al de la versión web), dónde se muestre todos los gastos del mes junto con los respectivos ingresos.\n- Reiniciar la aplicacion cuando se finalize el mes para comenzar un nuevo registro.\n- La persistencia de datos se realiza mediante AsyncStorage, permitiendo al usuario tener una mejor experiencia de uso.\n\n",
        tecnologias: [
            {
                id: 1,
                nombre: "React Native"
            },
            {
                id: 2,
                nombre: "AsyncStorage"
            },
            {
                id: 3,
                nombre: "React animated"
            }
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1706207124/medium_Imagen_de_Whats_App_2024_01_25_a_las_15_24_47_076f2b4f_9ad8ff3990.jpg",
        url: "control-gastos-movil",
        repo: "https://github.com/pgcodedeveloper/pggastos_native",
        demo: "https://expo.dev/artifacts/eas/r99GM68E9TKT2AXhGa41t2.apk",
        fecha: "2024-01-10",
        tipo: "Android"
    },
    {
        id: 4,
        titulo: "Agenda Virtual",
        descripcion: "Proyecto FrontEnd de una agenda virtual que permite al usuario administrar sus eventos y tareas.",
        descripcionLarga: "Este pryecto fue interesante de realizar dado que me permitió experimentar cómo hacer uso de los servicios Google, como lo son Google Calendar y Google Tasks. \n\nEn esta aplicaición podrás acceder a diferentes servicios como: \n- La administración de Eventos que estan asociados a su Google Calendar. \n- La administración de Tareas que estan asociadas a su Google Tasks. \n- Entre muchas otras.",
        tecnologias: [
            {
                id: 1,
                nombre: "React.js"
            },
            {
                id: 2,
                nombre: "Next.js"
            },
            {
                id: 3,
                nombre: "Tailwind CSS"
            },
            {
                id: 4,
                nombre: "Daisyui"
            },
            {
                id: 5,
                nombre: "Google API"
            },
            {
                id: 6,
                nombre: "Context API"
            }
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1705693221/medium_Captura_c5afafe415.png",
        url: "agenda-virtual-frontend",
        repo: "https://github.com/pgcodedeveloper/pg_agenda_frontend",
        demo: "",
        fecha: "2024-03-01",
        tipo: "FrontEnd",
    },
    {
        id: 5,
        titulo: "Agenda Virtual",
        descripcion: "Proyecto BackEnd de una agenda virtual que permite al usuario administrar sus eventos y tareas.",
        descripcionLarga: "Este pryecto integra los servicios Google, como lo son Google Calendar y Google Tasks, para la aplicación Agenda Virtual FrontEnd \n\nAdemás se encarga de crear los registros en la base de dato.\n Esto fue posible por el uso de Express para la creación de los routers, models y handlers que se encargan de la funcionalidad de cada endpint de la API.",
        tecnologias: [
            {
                id: 1,
                nombre: "Express"
            },
            {
                id: 2,
                nombre: "Node.js"
            },
            {
                id: 3,
                nombre: "Dotenv"
            },
            {
                id: 4,
                nombre: "MongoDB"
            },
            {
                id: 5,
                nombre: "Google API"
            }
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1709558077/jtelsq8k5fwlyoyckkm7.png",
        url: "agenda-virtual-backend",
        repo: "https://github.com/pgcodedeveloper/pg_agenda_backend",
        demo: "",
        fecha: "2024-03-01",
        tipo: "BackEnd",
    },
    {
        id: 6,
        titulo: "PGSend",
        descripcion: "Proyecto FrontEnd copia de FirefoxSend. Te permite compartir archivos con otros usuarios.",
        descripcionLarga: "Este proyecto es una copia de FirefoxSend el cual te permite de forma sencilla compartir archivos con otros usuarios. \nAdemás podrás asegurar tus archivos con un password y asignarles un número determinado de descargas. \n\nLas principales funcionalidades son: \n- Subir archivos con y sin tener una cuenta. \n- Asignar un password al archivo por subir (Requisito tener una cuenta). \n-Asignar un númer determinado de descargas permitidas (Requisito tener una cuenta). \n- Y muchas más",
        tecnologias: [
            {
                id: 1,
                nombre: "React.js"
            },
            {
                id: 2,
                nombre: "Next.js"
            },
            {
                id: 3,
                nombre: "Tailwind CSS"
            },
            {
                id: 4,
                nombre: "Daisyui"
            },
            {
                id: 5,
                nombre: "Dropzone"
            },
            {
                id: 6,
                nombre: "Context API"
            }
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1709390749/lkz6845snb2thiu4ntix.png",
        url: "pg-send-frontend",
        repo: "https://github.com/pgcodedeveloper/pgsend_front",
        demo: "",
        fecha: "2023-12-29",
        tipo: "FrontEnd"
    },
    {
        id: 7,
        titulo: "PGSend",
        descripcion: "Proyecto BackEnd copia de FirefoxSend. Compartir archivos con otros usuarios.",
        descripcionLarga: "Este proyecto es el encargado de darle lógica al PGSend FrontEnd. \nEn este proyecto tuve la oportinidad de afirmar conocimientos en: \n\n- El manejo de endpont complejos, \n- sanitizar los datos enviados desde el cliente, \n-manejo de archivos de diversos tipos en el servidor, \n- Hasheo de los datos sensibles \n- y mucho más.",
        tecnologias: [
            {
                id: 1,
                nombre: "Express"
            },
            {
                id: 2,
                nombre: "Node.js"
            },
            {
                id: 3,
                nombre: "Dotenv"
            },
            {
                id: 4,
                nombre: "Multer"
            },
            {
                id: 5,
                nombre: "MongoDB"
            },
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1709558200/b3wtbrr6qyy1c330mpnd.png",
        url: "pg-send-backend",
        repo: "https://github.com/pgcodedeveloper/pgsend_back",
        demo: "",
        fecha: "2023-12-29",
        tipo: "BackEnd"
    },
    {
        id: 8,
        titulo: "MiCarrito",
        descripcion: "Proyecto que permite al usuario administrarse sus listas de compras de manera sencilla.",
        descripcionLarga: "Este sencillo proyecto nace de la nececidad de tener una manera de hacer la lista de la compra sin gastar papel y poder acceder a ella en todo lugar. \n El usuario podrá crear, editar y eliminar las diferentes listas que posea en su panel, además de poder ir tachando aquellos items que ya se compraron.",
        tecnologias: [
            {
                id: 1,
                nombre: "React.js"
            },
            {
                id: 2,
                nombre: "Vite.js"
            },
            {
                id: 3,
                nombre: "Tailwind CSS"
            },
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1709391057/oreuvti0amvhtmjw3pdf.png",
        url: "mi-carrito",
        repo: "https://github.com/pgcodedeveloper/miCarrito",
        demo: "https://mi-carritocode.netlify.app/",
        fecha: "2023-12-22",
        tipo: "FrontEnd"
    },
    {
        id: 9,
        titulo: "PGTasks",
        descripcion: "Proyecto que permite al usuario administrar tareas y actividades de todo tipo.",
        descripcionLarga: "Si bien ya existen varias opciones diferentes para administrar tareas y actividades, este proyecto me permitió afirmar conocimientos en el uso de los servicios de Firebase y poder támbien darle otro enfoque diferente. \n\nEl usuario que acceda tendrá la posibilidad de: \n- Crear, editar, eliminar tareas. \n- Podrá ver las tareas que tienen una mayor prioridad. \n- Podrá ver las tareas que estan próximas a vencer en el plazo de entrega. \n- Podrá ver las tareas no iniciadas. \n- Podrá personalizar el color y el icnono de cada tarea. \n- Y mucho más.",
        tecnologias: [
            {
                id: 1,
                nombre: "React.js"
            },
            {
                id: 2,
                nombre: "Vite.js"
            },
            {
                id: 3,
                nombre: "Tailwind CSS"
            },
            {
                id: 4,
                nombre: "Firebase"
            }
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1709391369/f4noekvtfobaaqibhvz9.png",
        url: "pg-tasks",
        repo: "https://github.com/pgcodedeveloper/pgtasks",
        demo: "https://pgtasks.netlify.app/",
        fecha: "2023-08-21",
        tipo: "FullStack"
    },
    {
        id: 10,
        titulo: "App de Bebidas",
        descripcion: "Proyecto que permite al usuario buscar información sobre diferentes tipos de bebidas, pudiendo conocer sus ingredientes y preparación.",
        descripcionLarga: "Proyecto educativo para afirmar conocimientos; En esta oportinidad obtuve los datos de las diferentes bebidas de https://www.thecocktaildb.com/ que permite buscar bebidas de diferentes tipos junto con las respectivas recetas y modo de preparación de cada una. \n\nLas principales funcionalidades de la aplicación son:\n- Realizar búsquedas por el nombre de la bebida y su categoría.\n- Visualizar en una ventana tipo modal la información de cada bebida.\n- Guardar en favoritos las bebidas.\n- Visualizar todo el contenido de las bebidas favoritas.\n- Persistir los datos con LocalStorage.\n- Y mucho más.",
        tecnologias: [
            {
                id: 1,
                nombre: "React.js"
            },
            {
                id: 2,
                nombre: "Vite.js"
            },
            {
                id: 3,
                nombre: "Bootstrap"
            },
        ],
        imagen: "https://res.cloudinary.com/damn8kr5q/image/upload/v1672666988/medium_bebidas_e96beda5d9.png",
        url: "app-bebidas",
        repo: "https://github.com/pgcodedeveloper/bebidasApp",
        fecha: "2022-12-30",
        tipo: "FrontEnd"
    }
]