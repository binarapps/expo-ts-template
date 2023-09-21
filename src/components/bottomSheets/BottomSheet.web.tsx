import { forwardRef, useCallback, useImperativeHandle } from 'react'
import { ScrollView, Modal } from 'react-native'

import { Box } from '~components'
import { useState } from '~hooks'

type Props = {
  children: JSX.Element | JSX.Element[]
}
export const BottomSheetScrollView = ScrollView
export const BottomSheet = forwardRef(({ children }: Props, ref) => {
  const [isOpen, setIsOpen] = useState(false)

  useImperativeHandle(ref, () => ({
    snapToPosition: (index: number) => {
      if (index === -1) {
        setIsOpen(false)
      }
    },
    present: () => {
      // show modal
      setIsOpen(true)
    },
  }))
  const closeModalHandler = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <Modal transparent visible={isOpen} onRequestClose={closeModalHandler}>
      <Box bg="white" py={2}>
        {children}
      </Box>
    </Modal>
  )
})
