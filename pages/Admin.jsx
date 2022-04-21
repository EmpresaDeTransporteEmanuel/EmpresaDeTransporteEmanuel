import Button from '../components/Button'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { WithAuth } from '../HOCs/WithAuth'
import Link from 'next/link'
import { handleSignOut, getData} from '../firebase/utils'
import Image from 'next/image'
import { useUser } from '../context/Context.js'
import style from '../styles/Admin.module.css'

function Admin() {
    const { userDB } = useUser()

    const router = useRouter()



    function push (e) {
        e.preventDefault()
        router.push('/AddUser')
    }
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
                {userDB && <ul className={style.list}>
                {Object.keys(userDB).map((item, i)=>
                    <Link href="validator/[User]" as ={`validator/${item}`} key={i}><a className={style.link}>{item}</a></Link>
                )}   

                
                </ul>}
            
                    <button className={style.logout} onClick={signOut}>Cerrar Sesión</button>
                    <button className={style.add} onClick={push}>+</button>
           
                
            </main>
        </div>

    )
  }
  

  
  
  export default WithAuth(Admin) 