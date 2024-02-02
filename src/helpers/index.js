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