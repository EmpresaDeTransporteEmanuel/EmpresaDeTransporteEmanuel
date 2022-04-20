import Button from '../components/Button'
import { WithAuth } from '../HOCs/WithAuth'
import { handleSignOut} from '../firebase/utils'
import Image from 'next/image'
import style from '../styles/Auth.module.css'

function Admin() {
    function signOut (e) {
        e.preventDefault()
        handleSignOut()
    }
    return (

        <div className={style.container}>
            <main className={style.main}>
                <h1 className={style.title}>Empresa De Transporte Emanuel</h1>
                <Image src="/User.svg" width="100" height="100" alt="User" />
                <h4 className={style.subtitle}>Administrador</h4>
                <Button style='buttonPrimary' click={signOut}>Cerrar Sesión</Button>
            </main>
        </div>

    )
  }
  

  
  
  export default WithAuth(Admin) 