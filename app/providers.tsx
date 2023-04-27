'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, ColorModeScript, cookieStorageManagerSSR } from '@chakra-ui/react'

export const Providers = ({ children, cookies }: { children: React.ReactNode; cookies: string }) => {
  return (
    <CacheProvider>
      <ChakraProvider colorModeManager={cookieStorageManagerSSR(cookies)}>
        <ColorModeScript type="cookie" />
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
