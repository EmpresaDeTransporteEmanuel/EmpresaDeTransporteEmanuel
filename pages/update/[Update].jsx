import { writeUserData, getSpecificData } from '../../firebase/utils'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useUser } from '../../context/Context'
import { WithAuth } from '../../HOCs/WithAuth'
import Button from '../../components/Button'
import Error from '../../components/Error'
import Success from '../../components/Success'
import style from '../../styles/AddUser.module.css'

function AddUser() {

    const { userDB, setUserSuccess, success } = useUser()
    const { specificData, setUserSpecificData } = useUser(null)
    const router = useRouter()

    function save(e) {
        e.preventDefault()
        const object = {
            preimpreso: e.target.form[0].value.length > 0 ? e.target.form[0].value : specificData.preimpreso,
            tramite: e.target.form[1].value.length > 0 ? e.target.form[1].value : specificData.tramite,
            estado: e.target.form[2].value.length > 0 ? e.target.form[2].value : specificData.estado,
            vigencia: e.target.form[3].value.length > 0 ? e.target.form[3].value : specificData.vigencia,
            traspaso: e.target.form[4].value.length > 0 ? e.target.form[4].value : specificData.traspaso,
            placa: e.target.form[5].value.length > 0 ? e.target.form[5].value : specificData.placa,
            porteador: e.target.form[6].value.length > 0 ? e.target.form[6].value : specificData.porteador,
            fecha: e.target.form[7].value.length > 0 ? e.target.form[7].value : specificData.fecha,
            autoriza: e.target.form[8].value.length > 0 ? e.target.form[8].value : specificData.autoriza,
            solicitado: e.target.form[9].value.length > 0 ? e.target.form[9].value : specificData.solicitado,
            proveedor: e.target.form[10].value.length > 0 ? e.target.form[10].value : specificData.proveedor,
            uso: e.target.form[11].value.length > 0 ? e.target.form[11].value : specificData.uso,
            origen: e.target.form[12].value.length > 0 ? e.target.form[12].value : specificData.origen,
            destino: e.target.form[13].value.length > 0 ? e.target.form[13].value : specificData.destino,
            ruta: e.target.form[14].value.length > 0 ? e.target.form[14].value : specificData.ruta,
            sustancia: e.target.form[15].value.length > 0 ? e.target.form[15].value : specificData.sustancia,
            id: e.target.form[16].value.length > 0 ? e.target.form[16].value : specificData.id,
            autorizadoPor: e.target.form[17].value.length > 0 ? e.target.form[17].value : specificData.autorizadoPor,
        }
        writeUserData(object, setUserSuccess)
    }


    function handleOnchange (e, item) {
        switch (item) {
            case 'preimpreso':
                const preimpreso = {...specificData, ...{preimpreso: e.target.value}}
                writeUserData(preimpreso, null)
                break;
            case 'tramite':
                const tramite = {...specificData, ...{tramite: e.target.value}}
                writeUserData(tramite, null)
                break;
            case 'estado':
                const estado = {...specificData, ...{estado: e.target.value}}
                writeUserData(estado, null)
                break;
            case 'vigencia':
                const vigencia = { ...specificData, ...{ vigencia: e.target.value } }
                writeUserData(vigencia, null)
                break;
            case 'traspaso':
                const traspaso = { ...specificData, ...{ traspaso: e.target.value } }
                writeUserData(traspaso, null)
                break;
            case 'placa':
                const placa = { ...specificData, ...{ placa: e.target.value } }
                writeUserData(placa, null)
                break;
            case 'porteador':
                const porteador = { ...specificData, ...{ porteador: e.target.value } }
                writeUserData(porteador, null)
                break;
            case 'fecha':
                const fecha = { ...specificData, ...{ fecha: e.target.value } }
                writeUserData(fecha, null)
                break;
            case 'autoriza':
                const autoriza = { ...specificData, ...{ autoriza: e.target.value } }
                writeUserData(autoriza, null)
                break;
            case 'solicitado':
                const solicitado = { ...specificData, ...{ solicitado: e.target.value } }
                writeUserData(solicitado, null)
                break;
            case 'proveedor':
                const proveedor = {...specificData, ...{proveedor: e.target.value}}
                writeUserData(proveedor, null)
                break;
            case 'uso':
                const uso = {...specificData, ...{uso: e.target.value}}
                writeUserData(uso, null)
                break;
            case 'origen':
                const origen = { ...specificData, ...{ origen: e.target.value } }
                writeUserData(origen, null)
                break;
            case 'destino':
                const destino = { ...specificData, ...{ destino: e.target.value } }
                writeUserData(destino, null)
                break;
            case 'ruta':
                const ruta = { ...specificData, ...{ ruta: e.target.value } }
                writeUserData(ruta, null)
                break;
            case 'sustancia':
                const sustancia = { ...specificData, ...{ sustancia: e.target.value } }
                writeUserData(sustancia, null)
                break;
            case 'id':
                const id = { ...specificData, ...{ id: e.target.value } }
                writeUserData(id, null)
                break;
            case 'autorizadoPor':
                const autorizadoPor = { ...specificData, ...{ autorizadoPor: e.target.value } }
                writeUserData(autorizadoPor, null)
                break;
            default:
                break;
        }
            
    }

    useEffect(() => {
        const query = router.query.Update
        console.log(query)
        getSpecificData(query, setUserSpecificData)
    }, [specificData]);

    return (

        <div className={style.container}>
            {specificData && <main className={style.main}>
                <h1 className={style.title}>Empresa De Transporte Emanuel</h1>
                <Image src="/User.svg" width="100" height="100" alt="User" />
                <h4 className={style.subtitle}>Administrador</h4>

                <form className={style.form}>
                    <h4 className={style.subtitle}>AÑADIR NUEVO USUARIO</h4>
                    <label>
                        N° de preimpreso:
                        <input className={style.input} type="text" placeholder={`${specificData.preimpreso}`} onChange={(e)=>handleOnchange(e, 'preimpreso')} value={`${specificData.preimpreso}`} />
                    </label>
                    <label>
                        N° de trámite:
                        <input className={style.input} type="text" placeholder={`${specificData.tramite}`} onChange={(e)=>handleOnchange(e, 'tramite')} value={`${specificData.tramite}`}/>
                    </label>
                    <label>
                        Estado:
                        <input className={style.input} type="text" placeholder={`${specificData.estado}`} onChange={(e)=>handleOnchange(e, 'estado')} value={`${specificData.estado}`}/>
                    </label>
                    <label>
                        Vigencia:
                        <input className={style.input} type="text" placeholder={`${specificData.vigencia}`} onChange={(e)=>handleOnchange(e, 'vigencia')} value={`${specificData.vigencia}`}/>
                    </label>
                    <label>
                        Traspaso ó N° RA/ACL:
                        <input className={style.input} type="text" placeholder={`${specificData.traspaso}`} onChange={(e)=>handleOnchange(e, 'traspaso')} value={`${specificData.traspaso}`}/>
                    </label>
                    <label>
                        Movilidad Placa:
                        <input className={style.input} type="text" placeholder={`${specificData.placa}`} onChange={(e)=>handleOnchange(e, 'placa')} value={`${specificData.placa}`}/>
                    </label>
                    <label>
                        Porteador:
                        <input className={style.input} type="text" placeholder={`${specificData.porteador}`} onChange={(e)=>handleOnchange(e, 'porteador')} value={`${specificData.porteador}`}/>
                    </label>
                    <label>
                        Fecha de registro en sistema:
                        <input className={style.input} type="text" placeholder={`${specificData.fecha}`} onChange={(e)=>handleOnchange(e, 'fecha')} value={`${specificData.fecha}`}/>
                    </label>
                    <label>
                        Autoriza al registro:
                        <input className={style.input} type="text" placeholder={`${specificData.autoriza}`} onChange={(e)=>handleOnchange(e, 'autoriza')} value={`${specificData.autoriza}`}/>
                    </label>
                    <label>
                        Solicitado por:
                        <input className={style.input} type="text" placeholder={`${specificData.solicitado}`} onChange={(e)=>handleOnchange(e, 'solicitado')} value={`${specificData.solicitado}`}/>
                    </label>
                    <label>
                        Comprar a su proveedor:
                        <input className={style.input} type="text" placeholder={`${specificData.proveedor}`} onChange={(e)=>handleOnchange(e, 'proveedor')} value={`${specificData.proveedor}`}/>
                    </label>
                    <label>
                        Para ser utilizada en:
                        <input className={style.input} type="text" placeholder={`${specificData.uso}`} onChange={(e)=>handleOnchange(e, 'uso')} value={`${specificData.uso}`}/>
                    </label>
                    <label>
                        Origen del transporte:
                        <input className={style.input} type="text" placeholder={`${specificData.origen}`} onChange={(e)=>handleOnchange(e, 'origen')} value={`${specificData.origen}`}/>
                    </label>
                    <label>
                        Destino del transporte:
                        <input className={style.input} type="text" placeholder={`${specificData.destino}`} onChange={(e)=>handleOnchange(e, 'destino')} value={`${specificData.destino}`}/>
                    </label>
                    <label>
                        Ruta del transporte:
                        <input className={style.input} type="text" placeholder={`${specificData.ruta}`} onChange={(e)=>handleOnchange(e, 'ruta')} value={`${specificData.ruta}`}/>
                    </label>
                    <label>
                        Sustancia:
                        <input className={style.input} type="text" placeholder={`${specificData.sustancia}`} onChange={(e)=>handleOnchange(e, 'sustancia')} value={`${specificData.sustancia}`}/>
                    </label>
                    <label>
                        ID:
                        <input className={style.input} type="text" placeholder={`${specificData.id}`} onChange={(e)=>handleOnchange(e, 'id')} value={`${specificData.id}`}/>
                    </label>
                    <label>
                        Autorizado por:
                        <input className={style.input} type="text" placeholder={`${specificData.autorizadoPor}`} onChange={(e)=>handleOnchange(e, 'autorizadoPor')} value={`${specificData.autorizadoPor}`}/>
                    </label>
                    <div className={style.buttonsContainer}>
                        <Button style='buttonPrimary' click={save}>Guardar</Button>
                    </div>

                </form>
            </main>}
            {success == 'save' && <Success>Correcto</Success>}
            {success == 'repeat' && <Error>Verifica e intenta de nuevo</Error>}

        </div>
    )
}

export default WithAuth(AddUser) 