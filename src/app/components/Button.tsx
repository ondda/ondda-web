import style from './Button.module.css'
import utils from './css/utils.module.css'

export const Button = () => {
    return (
        <button
            className={`${style.button} ${utils.roundedBorder} ${utils.boxShadow} ${utils.formFontFamily} ${utils.formFontSize}`}
        >
            unirme
        </button>
    )
}
