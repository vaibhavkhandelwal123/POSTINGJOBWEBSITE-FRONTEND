import { Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import React from 'react'

const ResetPassword = (props:any) => {
    
  const [opened, { open, close }] = useDisclosure(false);
  return (
   <Modal opened={opened} onClose={close} title="Authentication">
        {/* Modal content */}
      </Modal>
  )
}

export default ResetPassword