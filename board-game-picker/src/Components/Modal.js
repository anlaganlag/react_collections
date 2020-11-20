import React from 'react'
import { 
    Modal as CHModal, 
    ModalOverlay, 
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text,
    Link
} from '@chakra-ui/core'

export default function Modal({isOpen,onClose}) {

    return (
        <CHModal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay>
                <ModalContent>
                    <ModalHeader>和我联系</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            <b>作者</b>: Alfredo Medina <br/>
                            <b>联系</b>: info@amedpal.com <br/>
                            <Link href="https://github.com/alfremedpal/board-game-picker" isExternal color="teal.500"><b>GitHub 地址</b></Link> <br/>
                            <Link href="https://www.buymeacoffee.com/amedpal" isExternal color="teal.500"><b>支持作者</b></Link>
                        </Text>
                    </ModalBody>
                    <ModalFooter>
                        牛逼了
                    </ModalFooter>
                </ModalContent>
            </ModalOverlay>
        </CHModal>
    )
}