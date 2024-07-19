const productos = [
    { nombre: 'iPhone 15 Pro', precio: 1300, imagen: 'iphone.jpg' },
    { nombre: 'iPhone 14 Pro', precio: 799, imagen: 'iphone 14pro.jpg' },
    { nombre: 'iPhone 13 Pro', precio: 1200, imagen: 'iphone 13 pro.jpeg' },
    { nombre: 'iPad 11 Pro', precio: 150, imagen: 'ipad11pro.jpg' },
    { nombre: 'Periférico', precio: 99, imagen: 'periferico.jpg' }
];
document.addEventListener('DOMContentLoaded', function() {
    const botonesAgregarCarrito = document.querySelectorAll('.agregar-carrito');
    botonesAgregarCarrito.forEach(boton => {
        boton.addEventListener('click', function() {
            const producto = JSON.parse(this.getAttribute('data-producto'));
            let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
            carrito.push(producto);
            localStorage.setItem('carrito', JSON.stringify(carrito));
            alert('Producto agregado al carrito');
        });
    });
});
