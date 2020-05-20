- Recibir peticiones y devolver respuestas

* Petición desde el cliente - Ruta o recurso al que desea acceder - Método o verbo que utiliza (POST) - Datos (body, query params ?dato1=1&dato2=1adsdas)

* 1. Recibe petición y verifica en al app.js que esté funcionando
* 2. Verifica ruta base app.use('productos') app.use('categorias')
* 3. Se envía la petición a router - router.get - router.post - Middleware usuario logueado - Si el usuario está logueado, puede continuar al controller
* 4. Se envía la petición al controlador
* 5. Controlador (req, res) termina devolviendo una respuesta. - La respuesta va a ser una vista
