import { Heading, VStack, Text } from "native-base";
import { Header } from "../components/Header"
import { Input } from "../components/Input"
import { Button } from "../components/Button";
import Logo from "../assets/logo.svg"

export function New() {
  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Criar novo bolão" />
      <VStack flex={1} mt={8} mx={5} alignItems="center">
        <Logo />
        <Heading fontFamily="heading" fontSize="xl" color="white" my={8} textAlign="center">
          Crie seu próprio bolão da copa e compartilhe entre amigos!
        </Heading>
        <Input 
          mb={4}
          placeholder="Qual nome do seu bolão?"
        />
        <Button title="Criar meu bolão"/>
        <Text color="gray.200" fontSize="md" textAlign="center" mt={4} px={6}>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas.
        </Text>
      </VStack>
    </VStack>
  )
}