import { Heading, VStack } from "native-base";
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Button } from "../components/Button";

export function Find() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Buscar por código" showBackButton />
      <VStack flex={1} mt={8} mx={5} alignItems="center">
        <Heading fontFamily="heading" fontSize="xl" color="white" mb={8} textAlign="center">
          Encontre um bolão através de {'\n'} seu código único
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