import Button from '../components/Button'
import { WithAuth } from '../HOCs/WithAuth'
import Link from 'next/link'
import { writeUserData} from '../firebase/utils'
import Image from 'next/image'
import { useUser } from '../context/Context.js'
import style from '../styles/AddUser.module.css'

function AddUser() {
    const { userDB } = useUser()

    function save(e) {
        e.preventDefault()
        const object = {
            preimpreso: e.target.form[0].value,
            tramite: e.target.form[1].value,
            estado: e.target.form[2].value,
            vigencia: e.target.form[3].value,
            traspaso: e.target.form[4].value,
            placa: e.target.form[5].value,
            porteador: e.target.form[6].value,
            fecha: e.target.form[7].value,
            autoriza: e.target.form[8].value,
            solicitado: e.target.form[9].value,
            proveedor: e.target.form[10].value,
            uso: e.target.form[11].value,
            origen: e.target.form[12].value,
            destino: e.target.form[13].value,
            ruta: e.target.form[14].value,
            sustancia: e.target.form[15].value,
            id: e.target.form[16].value,
        }
        writeUserData(object)
    }

    console.log(userDB)
    return (

        <div className={style.container}>
            <main className={style.main}>
                <h1 className={style.title}>Empresa De Transporte Emanuel</h1>
                <Image src="/User.svg" width="100" height="100" alt="User" />
                <h4 className={style.subtitle}>Administrador</h4>
                
                <form className={style.form}>
                    <h4 className={style.subtitle}>AÑADIR NUEVO USUARIO</h4>
                    <label>
                        N° de preimpreso: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        N° de trámite: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Estado: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Vigencia: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Traspaso ó N° RA/ACL: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Movilidad Placa: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Porteador: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Fecha de registro en sistema: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Autoriza al registro: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Solicitado por: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Comprar a su proveedor: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Para ser utilizada en: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Origen del transporte: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Destino del transporte: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Ruta del transporte: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        Sustancia: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <label>
                        ID: 
                        <input className={style.input} type="text" placeholder="" />
                    </label>
                    <div className={style.buttonsContainer}>
                        <Button style='buttonPrimary' click={save}>Guardar</Button>
                    </div>
                        
                </form>
            </main>
        </div>

    )
  }
  

  
  
  export default WithAuth(AddUser) 