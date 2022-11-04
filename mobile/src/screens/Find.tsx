import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Button } from "../components/Button";
import Logo from "../assets/logo.svg"

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton={true} />
      <VStack flex={1} mx={5} alignItems="center">
        <Heading fontFamily="heading" fontSize="xl" color="white" my={8} px={6} textAlign="center">
          Encontre um bolão através de seu código único
        </Heading>
        <Input 
          mb={4}
          placeholder="Qual o código do bolão?"
        />
        <Button title="Buscar bolão"/>
      </VStack>
    </VStack>
  )
}