import styles from './Text.module.css'

export const Text = () => {
    return (
        <p className={styles.neoText}>
            {
                'Suscribite para más información y se de las primeras personas en '
            }
            <b>ondda</b>.
        </p>
    )
}
