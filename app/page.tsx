'use client'

import { Box, Button, useColorMode } from '@chakra-ui/react'

const Home = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Box>
      <Button onClick={toggleColorMode}>Toggle {colorMode === 'light' ? 'Dark' : 'Light'}</Button>
    </Box>
  )
}

export default Home
