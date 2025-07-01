import '../estilos/Header.css'

export default function Header() {
  return (
    <header className='header'>
      <h1 className='title'>Web de Cursos 🧠</h1>
      <div className='btns-div'>
        <button>Iniciar sesion</button>
        <button>Cerrar sesion</button>
      </div>
    </header>
  )
}
