import style from './TextField.module.css'
import utils from './css/utils.module.css'

export const TextField = () => {
    return (
        <input
            className={`${style.textField} ${utils.roundedBorder} ${utils.boxShadow} ${utils.formFontFamily} ${utils.formFontSize}`}
            type="email"
            placeholder="ingresar email"
        ></input>
    )
}
