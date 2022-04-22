import Modal from '../components/Modal'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { WithAuth } from '../HOCs/WithAuth'
import Link from 'next/link'
import { handleSignOut, getData, removeData} from '../firebase/utils'
import Image from 'next/image'
import { useUser } from '../context/Context.js'
import style from '../styles/Admin.module.css'

function Admin() {
    const { userDB, setUserData } = useUser()
    const [mode, setMode] = useState(false)
    const [itemSelect, setItemSelect] = useState('')
    const router = useRouter()



    function push (e) {
        e.preventDefault()
        router.push('/AddUser')
    }
    function remove (item) {
        setMode(!mode) 
        setItemSelect(item)
    }
    function removeConfirm () {
        removeData(`${itemSelect}`, setUserData)
        getData(setUserData)
    }
    function x () {
        setMode(!mode)
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
                    <div className={style.items} key={i}>
                        <Link href="validator/[User]" as ={`validator/${item}`} >
                            <a className={style.link}>{item}</a>
                        </Link> 
                        <Image src="/Delete.svg" width="25" height="25" alt="User" onClick={()=>remove(item)} /></div> 
                )}   

                
                </ul>}
            
                    <button className={style.logout} onClick={signOut}>Cerrar Sesión</button>
                    <button className={style.add} onClick={push}>+</button>
           
                
            </main>
            <Modal mode={mode} click={x} confirm={removeConfirm} text={`Confirma que deseas eliminar a este usuario`}>
                
            </Modal>
        </div>

    )
  }
  

  
  
  export default WithAuth(Admin) 