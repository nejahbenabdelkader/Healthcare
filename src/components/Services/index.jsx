import React from 'react'
import Icon1 from '../../images/fulldiagnostic.svg'
import Icon2 from '../../images/makeconsulting.svg'
import Icon3 from '../../images/help.svg'
import {ServicesContainer, ServicesH1, ServicesH0, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP, ServicesIcon3} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Why choose </ServicesH1>
      <ServicesH0> MyDoctor?</ServicesH0>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Full Diagnostic</ServicesH2>
          <ServicesP>Get a full diagnostic with just one click!</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Make Consulting</ServicesH2>
          <ServicesP>Make an appoitment online at any time.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon3 src={Icon3}/>
          <ServicesH2>Help and Assist</ServicesH2>
          <ServicesP>24/7 Assistant with your docotr.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services