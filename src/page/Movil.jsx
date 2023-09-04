import React from 'react'
import Bo from '../component/views/movil/Bo'
import SoporteTecnico from '../component/views/movil/SoporteTecnico'
import RoboHurto from '../component/views/movil/RoboHurto'
import PrimeraLinea from '../component/views/movil/PrimeraLinea'
import OtrasAreas from '../component/views/movil/OtrasAreas'
import Contencion from '../component/views/movil/Contencion'

const Movil = () => { 
  return (
    <div>
      <p className='text-center mt-3 fs-3'>Escalamiento Móvil</p>
      <Bo />
      <SoporteTecnico />
      <RoboHurto />
      <PrimeraLinea />
      <OtrasAreas />
      <p className='text-center mt-3 fs-3'>Contención</p>
      <Contencion />
    </div>
  )
}

export default Movil