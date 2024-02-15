import style from './TextField.module.css'

export const TextField = () => {
    return (
        <input
            className={style.neoInput}
            type="email"
            placeholder="ingresar email"
        ></input>
    )
}
