import React, { useCallback } from 'react'
import { ListRenderItem, FlatList } from 'react-native'

import { Loader, Center, Text, Box } from '~components'
import { Spacer } from '~components/atoms'
import { useGetCity_EXAMPLE } from '~query-hooks'
import { TodoItem } from '~types/todos'
export const DataFromBeScreen_EXAMPLE = () => {
  const { dataList, isFetchedDataAfterMount } = useGetCity_EXAMPLE()

  const renderItem: ListRenderItem<TodoItem> = useCallback(({ item: { title, id } }) => {
    return (
      <Box mb="1" bg="gray.300">
        <Text>{'fact:' + title}</Text>
        <Text>{'length: ' + id}</Text>
      </Box>
    )
  }, [])

  return (
    <Box flex={1}>
      <Center>
        <Text fontSize="xl">THIS IS EXAMPLE SCREEN</Text>
        <Text fontSize="xl">which contains data from backend</Text>
        <Spacer y="1" />
        <FlatList
          ListEmptyComponent={
            !isFetchedDataAfterMount ? (
              <Center height={400} flex={1}>
                <Loader type="circle" />
              </Center>
            ) : (
              <Text>No data found</Text>
            )
          }
          data={dataList}
          renderItem={renderItem}
        />
      </Center>
    </Box>
  )
}
