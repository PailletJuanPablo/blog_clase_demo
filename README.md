Función principal del servidor es **recibir peticiones y devolver respuestas**

### Flujo de datos en Express

1. Petición (**request**) desde el cliente. Contendrá
   - **Ruta o recurso** al que desea acceder
   - **Método o verbo** que utiliza
   - **Datos** (body, parámetros de query)
   - **Encabezados**
2. Servidor recibe petición y verifica si existe path base de ruta o recurso en _app.use(Router)_, en el caso de que exista, envía petición al **router**

3. **Router** recibe **request** y verifica si existe la ruta (path) completa con el método. En el caso de que sí enviará petición al **controller**. Si existen **middlewares**, estos serán invocados antes de enviarla.
4. **Controller** recibe la **request**, centraliza la lógica de negocio correspondiente y termina devolviendo respuesta (**res**) , como una vista, archivo, text, etc.
