import { Button } from './Button'
import { Heading } from './Heading'
import { Text } from './Text'
import { TextField } from './TextField'
import {
    onDesktopFirstColumn,
    onDesktopSecondColumn,
    onDesktopSpanTwoRows,
    flexDirectionColumn,
    gridOnDesktopTwoColumns,
    onDesktopRotate45Deg,
    alignSelfEnd,
} from './Waitlist.css'
import Image from 'next/image'

export const Waitlist = () => {
    return (
        <div className={gridOnDesktopTwoColumns}>
            <div className={[onDesktopFirstColumn, alignSelfEnd].join(' ')}>
                <Heading>conexión fuera de línea</Heading>
            </div>
            <Image
                className={[onDesktopSecondColumn, onDesktopSpanTwoRows].join(
                    ' '
                )}
                src={'graph.svg'}
                alt={'network of circles connected by edges'}
                width={212}
                height={125}
            />
            <div className={onDesktopFirstColumn}>
                <Text>
                    Con <b>ondda</b> vas a poder comunicarte con gente a tu
                    alrededor sin necesidad de estar conectado a internet.
                </Text>
            </div>
            <Image
                className={[onDesktopFirstColumn, onDesktopRotate45Deg].join(
                    ' '
                )}
                src={'star.svg'}
                alt={'star drawing'}
                width={212}
                height={125}
            />
            <div
                className={[onDesktopSecondColumn, flexDirectionColumn].join(
                    ' '
                )}
            >
                <Heading>lista de espera</Heading>
                <Text>
                    Suscribite para más información y se de las primeras
                    personas en <b>ondda</b>.
                </Text>
                <TextField />
                <Button />
            </div>
        </div>
    )
}
