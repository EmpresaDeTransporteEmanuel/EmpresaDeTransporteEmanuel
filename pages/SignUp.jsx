import { useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useUser } from '../context/Context.js'
import { WithoutAuth } from '../HOCs/WithoutAuth'
import { onAuth, signUpWithEmail, withGoogle } from '../firebase/utils'
import Button from '../components/Button'
import style from '../styles/Login.module.css'

function Login() {
    const { user, setUserProfile } = useUser()
    const router = useRouter()

    function signUpWithGoogle (e) {
        e.preventDefault()
        withGoogle()
    }
    function signUpWithEmail (e) {
        e.preventDefault()
        const email = e.target.form[0].value
        const password = e.target.form[1].value
        signUpWithEmail(email, password)
    }
    
    useEffect(() => {
      onAuth(setUserProfile)
      if (user) router.replace('/')
    }, [user]);
    return (
        <div className={style.container}>
            <main className={style.main}>
                <h1 className={style.title}>Empresa De Transporte Emanuel</h1>
                <Image  src="/User.svg" width="100" height="100" />
                <h4 className={style.subtitle}>Administrador</h4>
                <form className={style.form}>
                    <h4 className={style.subtitle}>REGISTRATE</h4>
                    <label>
                        Email: 
                        <input className={style.input} type="text" placeholder="example@gmail.com" />
                    </label>
                    <label>
                        Contraseña: 
                        <input className={style.input} type="password" placeholder="contraseña" />
                    </label>
                    <div className={style.buttonsContainer}>
                        <Button style='buttonPrimary' click={signUpWithEmail}>Registrarme</Button>
                        <Button style='buttonPrimary' click={signUpWithGoogle}>Continuar con Google</Button>
                    </div>
                    <div className={style.linkForm}>Ya tienes una cuenta? <Link href="/Login" ><a className={style.link}>Iniciar Sesion</a></Link></div>
                </form>
            </main>
        </div>
    )
}


export default WithoutAuth(Login)