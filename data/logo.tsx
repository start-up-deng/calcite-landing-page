import { chakra, HTMLChakraProps, useColorModeValue } from '@chakra-ui/react'

export const Logo: React.FC<HTMLChakraProps<'img'>> = (props) => {
  const logoSrc = useColorModeValue('/static/images/logo.png', '/static/images/logo.png')
  return (
    <chakra.img
    height={{ base: '140px', md: '150px' }}
      src={logoSrc}
      alt="Logo"
      {...props}
    />
  )
}