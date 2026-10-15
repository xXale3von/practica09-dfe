import './saludo.css'
function Saludo() {
  const autodeportivos = [
    "porshe","ferrari","lamborguini"
  ]

return (
  <>
  <h1 className='Saludocomponente'>Soy el saludo del componente</h1>
  <h2>Lista de autosdeportivos</h2>
   <ol>
    <li>1. nombre1</li>
    <li>2. nombre2</li>
    <li>3. nombre3</li>
   </ol>
  </>
 );
}
export default Saludo