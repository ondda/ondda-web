import { Heading } from '@app/components/Heading';
import { Logo } from '../../components/Logo';
import { main } from '../../page.css';
import { Text } from '@app/components/Text';
import { SubHeading } from '@app/components/SubHeading';
import { Title } from '@app/components/Title';

export default function PrivacyPolicyPage() {
    return (
        <main className={main}>
            <Logo />
            <Title>Política de Privacidad</Title>

            <Title>Aplicación Faro</Title>

            <Text>Última actualización: 27 de Diciembre, 2025</Text>

            <Heading>Introducción</Heading>
            <Text alignment="left">
                Faro es una aplicación diseñada para funcionar completamente sin
                conexión. Salvo que se indique lo contrario, toda información
                ingresada en la misma va a estar almacenada únicamente en el
                dispositivo de la persona usuaria.
            </Text>
            <Text alignment="left">
                Esta política puede actualizarse ocasionalmente. Cualquier
                cambio será reflejado en esta página indicando la fecha de
                última actualización.
            </Text>

            <Heading>Glosario</Heading>

            <SubHeading>Aplicación</SubHeading>
            <Text alignment="left">
                La app Faro obtenida mediante cualquiera de las tiendas
                oficiales (Google Play o Apple Store).
            </Text>

            <SubHeading>Bluetooth Low Energy (BLE)</SubHeading>
            <Text alignment="left">
                Protocolo de comunicación Bluetooth de bajo consumo.
            </Text>

            <SubHeading>GPS</SubHeading>
            <Text alignment="left">Sistema de posicionamiento global.</Text>

            <SubHeading>Visibilidad</SubHeading>
            <Text alignment="left">
                En Faro, los usuarios pueden configurar su visibilidad para
                controlar cuándo el dispositivo está utilizando Bluetooth para
                transmitir su identificador.
            </Text>
            <Text alignment="left">
                Actualmente se brindan dos opciones: visible y oculto. El estado
                visible transmite el identificador mientras que el oculto la
                detiene.
            </Text>

            <SubHeading>Identificador</SubHeading>
            <Text alignment="left">
                Secuencia de bytes aleatoria utilizada para identificar al
                usuario.
            </Text>

            <SubHeading>Avatar</SubHeading>
            <Text alignment="left">
                Identificador visual del usuario. El mismo es generado de forma
                aleatoria y es utilizado para distinguir un usuario de otro.
            </Text>

            <SubHeading>Nombre de usuario</SubHeading>
            <Text alignment="left">
                Nombre corto utilizado para acompañar la identificación visual
                provista por el avatar. Este nombre no es único - varios
                usuarios pueden compartir el mismo nombre, la identidad queda
                determinada por el avatar.
            </Text>

            <Heading>Uso de Bluetooth y datos de proximidad</Heading>

            <Text alignment="left">
                Faro utiliza la señal Bluetooth de los dispositivos cercanos
                para poder localizar a otros usuarios. Todo dispositivo visible
                podrá ser detectado por otros dispositivos cercanos. En tal
                caso, la información transmitida se encuentra limitada a:
                avatar, nombre de usuario e intensidad de señal.
            </Text>

            <Text alignment="left">
                Estos datos son almacenados localmente y en ningún momento son
                compartidos y/o almacenados de ninguna forma en servicios
                externos. A su vez, esta transmisión ocurre de forma efímera;
                Faro no crea un perfil persistente ni rastreable fuera del rango
                inmediato del Bluetooth del dispositivo.
            </Text>

            <Heading>Permisos de ubicación</Heading>

            <Text alignment="left">
                En Android la aplicación solicita el permiso de ubicación. Esto
                se debe únicamente a un requisito del sistema operativo por el
                hecho de que Bluetooth Low Energy puede utilizarse para detectar
                proximidad con otro dispositivo. Sin embargo, la aplicación
                jamás utilizará el GPS del dispositivo para compartir ubicación.
            </Text>

            <Text alignment="left">
                Faro no accede, almacena ni transmite coordenadas de ubicación,
                ni en primer plano ni en segundo plano.
            </Text>

            <Heading>Almacenamiento local</Heading>

            <Text alignment="left">
                La cuenta del usuario será almacenada únicamente en el
                dispositivo donde se encuentra instalada la aplicación. En caso
                de desinstalar la misma, esta información se eliminará por
                completo. Dado que Faro no utiliza servidores, por lo pronto no
                existe la posibilidad de recuperar cuentas o datos en un
                dispositivo nuevo o tras una reinstalación.
            </Text>

            <Text alignment="left">
                Otros datos almacenados localmente son la configuración de
                visibilidad, respetando así las preferencias de la persona
                usuaria.
            </Text>

            <Text alignment="left">
                El registro de proximidad de usuarios cercanos es efímero. El
                mismo se almacena mientras la aplicación se encuentra abierta o
                en segundo plano. En cuanto la misma es cerrada por el usuario o
                el sistema operativo, dicha información se pierde.
            </Text>

            <Heading>Privacidad de menores</Heading>

            <Text alignment="left">
                Faro no está dirigida a menores de 13 años y no recopila
                información de menores.
            </Text>

            <Heading>Punto de contacto</Heading>

            <Text alignment="left">
                Para cualquier consulta respecto a este documento o la
                aplicación, comunicarse mediante el siguiente correo:{' '}
                <a href="mailto:faroapp.contacto@gmail.com">
                    faroapp.contacto@gmail.com
                </a>
                .
            </Text>
        </main>
    );
}
