function showView(viewId) {
    // Ocultar todas las vistas
    const views = document.querySelectorAll('.view');
    views.forEach(view => view.style.display = 'none');

    // Mostrar la vista seleccionada
    document.getElementById(viewId).style.display = 'block';
}

// Mostrar la vista inicial (Inicio) al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    showView('home');
});
