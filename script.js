function agregarTarea() {
    const input = document.getElementById('tarea');
    const texto = input.value.trim();
    
    if (texto === '') {
        alert('Por favor, escribe una tarea');
        return;
    }
    
    const lista = document.getElementById('lista');
    const li = document.createElement('li');
    li.textContent = texto;
    li.onclick = function() {
        this.remove();
    };
    lista.appendChild(li);
    input.value = '';
    input.focus();
}

document.getElementById('tarea').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        agregarTarea();
    }
});