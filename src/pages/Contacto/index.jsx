export default function Contacto() {
    return (
      <div>
        <h2>Contacto</h2>
        <form>
          <label>Nombre:</label>
          <input type="text" placeholder="Tu nombre" />
          
          <label>Email:</label>
          <input type="email" placeholder="Tu correo" />
          
          <label>Mensaje:</label>
          <textarea placeholder="Tu mensaje"></textarea>
          
          <button type="submit">Enviar</button>
        </form>
      </div>
    );
  }
  