import { Center, NativeBaseProvider, Spinner } from 'native-base'
import { THEME } from '../../src/styles/theme'

export function Loading() {

  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bg="gray.900">
        <Spinner color="yellow" size="large" />
      </Center>
    </NativeBaseProvider>
  )
}