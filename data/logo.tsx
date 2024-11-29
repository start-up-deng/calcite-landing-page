import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const logoSrc = useColorModeValue('/calcite-landing-page/static/images/logo.png', '/calcite-landing-page/static/images/logo.png')
  return (
    <chakra.img
    height={{ base: '140px', md: '150px' }}
      src={logoSrc}
      alt="Logo"
      {...props}
    />
  )
}