import { useEffect } from 'react'
import { VStack, Icon } from "native-base"
import { Octicons } from '@expo/vector-icons'
import { useNavigation } from'@react-navigation/native'
import { api } from '../services/api'

import { Button } from '../components/Button'
import { Header } from '../components/Header'
import { Loading } from '../components/Loading'
import { PoolCard } from '../components/PoolCard'

export function Pools() {
const navigation = useNavigation()

async function fetchPools(){
  try {
    const response = await api.get('/pools')
    console.log(response.data.pools)

  } catch (error) {

  } finally {

  }
}
  useEffect(() => {
    fetchPools()
  },[])

  return (
    <VStack flex={1} bgColor="gray.900">
      <Header title="Meus bolões" />
      <VStack mt={6} mx={5} borderBottomWidth={1} borderBottomColor="gray.600" pb={4} mb={4}>
        <Button 
          title="Buscar bolão por código"
          leftIcon={<Icon as={Octicons} name="search" color="black" size="md" />}
          onPress={() => navigation.navigate('find')}
        />
      </VStack>
    </VStack>
  )
}