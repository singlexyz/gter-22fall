import React from 'react'
import styled from 'styled-components'

import defaultBanner from '../images/banner.png'

const Aspect = styled.div`
  padding-top: 50.66666666666667%;
  position: relative;
  background-color: #4a66fa;
  @supports (aspect-ratio: 1) {
    aspect-ratio: 750 / 380;
    padding-top: 0;
  }
`

const Image = styled.img`
  position: absolute;
  left: 0; top: 0;
  width: 100%;
  @supports (aspect-ratio: 1) {
    position: static;
  }
`

const Text = styled.div`
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
`

function Banner({ text, image = defaultBanner }) {
  return (
    <Aspect>
      <Image src={image} />
      {text && <Text>{text}</Text>}
    </Aspect>
  )
}

export default Banner
