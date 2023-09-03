import React from 'react'
import Bo from '../component/views/Bo'
import SoporteTecnico from '../component/views/SoporteTecnico'
import RoboHurto from '../component/views/RoboHurto'
import PrimeraLinea from '../component/views/PrimeraLinea'
import OtrasAreas from '../component/views/OtrasAreas'

const Movil = () => { 
  return (
    <div>
      <p className='text-center mt-3 fs-3'>Escalamiento Móvil</p>
      <Bo />
      <SoporteTecnico />
      <RoboHurto />
      <PrimeraLinea />
      <OtrasAreas />
    </div>
  )
}

export default Movil