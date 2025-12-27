import { Logo } from '../../components/Logo';
import { main } from '../../page.css';

export default function PrivacyPolicyPage() {
    return (
        <main className={main}>
            <Logo />
            <h1>Política de Privacidad</h1>

            <h1>Faro</h1>

            <p>Última actualización: 27 de Diciembre, 2025</p>

            <h2>Introducción</h2>
            <p>
                Faro es una aplicación diseñada para funcionar completamente sin
                conexión. Salvo que se indique lo contrario, toda información
                ingresada en la misma va a estar almacenada únicamente en el
                dispositivo de la persona usuaria.
            </p>
            <p>
                Esta política puede actualizarse ocasionalmente. Cualquier
                cambio será reflejado en esta página indicando la fecha de
                última actualización.
            </p>

            <h2>Glosario</h2>

            <h3>Aplicación</h3>
            <p>
                La app Faro obtenida mediante cualquiera de las tiendas
                oficiales (Google Play o Apple Store).
            </p>

            <h3>Bluetooth Low Energy (BLE)</h3>
            <p>Protocolo de comunicación Bluetooth de bajo consumo.</p>

            <h3>GPS</h3>
            <p>Sistema de posicionamiento global.</p>

            <h3>Visibilidad</h3>
            <p>
                En Faro, los usuarios pueden configurar su visibilidad para
                controlar cuándo el dispositivo está utilizando Bluetooth para
                transmitir su identificador.
            </p>
            <p>
                Actualmente se brindan dos opciones: visible y oculto. El estado
                visible transmite el identificador mientras que el oculto la
                detiene.
            </p>

            <h3>Identificador</h3>
            <p>
                Secuencia de bytes aleatoria utilizada para identificar al
                usuario.
            </p>

            <h3>Avatar</h3>
            <p>
                Identificador visual del usuario. El mismo es generado de forma
                aleatoria y es utilizado para distinguir un usuario de otro.
            </p>

            <h3>Nombre de usuario</h3>
            <p>
                Nombre corto utilizado para acompañar la identificación visual
                provista por el avatar. Este nombre no es único - varios
                usuarios pueden compartir el mismo nombre, la identidad queda
                determinada por el avatar.
            </p>

            <h2>Uso de Bluetooth y datos de proximidad</h2>

            <p>
                Faro utiliza la señal Bluetooth de los dispositivos cercanos
                para poder localizar a otros usuarios. Todo dispositivo visible
                podrá ser detectado por otros dispositivos cercanos. En tal
                caso, la información transmitida se encuentra limitada a:
                avatar, nombre de usuario e intensidad de señal.
            </p>

            <p>
                Estos datos son almacenados localmente y en ningún momento son
                compartidos y/o almacenados de ninguna forma en servicios
                externos. A su vez, esta transmisión ocurre de forma efímera;
                Faro no crea un perfil persistente ni rastreable fuera del rango
                inmediato del Bluetooth del dispositivo.
            </p>

            <h2>Permisos de ubicación</h2>

            <p>
                En Android la aplicación solicita el permiso de ubicación. Esto
                se debe únicamente a un requisito del sistema operativo por el
                hecho de que Bluetooth Low Energy puede utilizarse para detectar
                proximidad con otro dispositivo. Sin embargo, la aplicación
                jamás utilizará el GPS del dispositivo para compartir ubicación.
            </p>

            <p>
                Faro no accede, almacena ni transmite coordenadas de ubicación,
                ni en primer plano ni en segundo plano.
            </p>

            <h2>Almacenamiento local</h2>

            <p>
                La cuenta del usuario será almacenada únicamente en el
                dispositivo donde se encuentra instalada la aplicación. En caso
                de desinstalar la misma, esta información se eliminará por
                completo. Dado que Faro no utiliza servidores, por lo pronto no
                existe la posibilidad de recuperar cuentas o datos en un
                dispositivo nuevo o tras una reinstalación.
            </p>

            <p>
                Otros datos almacenados localmente son la configuración de
                visibilidad, respetando así las preferencias de la persona
                usuaria.
            </p>

            <p>
                El registro de proximidad de usuarios cercanos es efímero. El
                mismo se almacena mientras la aplicación se encuentra abierta o
                en segundo plano. En cuanto la misma es cerrada por el usuario o
                el sistema operativo, dicha información se pierde.
            </p>

            <h2>Privacidad de menores</h2>

            <p>
                Faro no está dirigida a menores de 13 años y no recopila
                información de menores.
            </p>

            <h2>Punto de contacto</h2>

            <p>
                Para cualquier consulta respecto a este documento o la
                aplicación, comunicarse mediante el siguiente correo:
                <a href="mailto:faroapp.contacto@gmail.com">
                    faroapp.contacto@gmail.com
                </a>
                .
            </p>
        </main>
    );
}
