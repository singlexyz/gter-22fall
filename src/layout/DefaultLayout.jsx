import React from 'react'
import Banner from '../components/Banner'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Content = styled.div`
  position: relative;
  background-color: white;
  z-index: 10;
  border-radius: 1.875rem 1.875rem 0 0;
  margin-top: -1.875rem;
  padding: 1.875rem 1.5625rem 1.875rem;
`

const Page = styled(motion.div)`
  max-width: 480px; 
  min-height: 100vh; background-color: white;
  margin: 0 auto;
  font-size: ${() => 14 / 16}rem;
`

function DefaultLayout ({ image, children }) {
  return (
    <Page
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: [.4, 0, .2, 1], duration: .5 }}
      >
      <Banner image={image} />
      <Content>
        {children}
      </Content>
    </Page>
  )
}

export default DefaultLayout

