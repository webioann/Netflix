import React from 'react'
import { useAppSelector, useAppDispatch } from '../redux/store'
import { closeModal } from '../redux/reduxSlice';
import { IoClose } from 'react-icons/io5'

import { IChildrenProps } from '../types/global.types'
import '../style/modal.scss'

const Modal = () => {

    const dispatch = useAppDispatch()
    const modalIsOpen = useAppSelector(state => state.redux.modalIsOpen)

    return (
        <div className={modalIsOpen ? 'modal-layout' : 'hidden-modal'}>
            <div className="modal-content">
                <IoClose onClick={() => {dispatch(closeModal())}}
                    color='red'
                    size={24}/>
                <h1 className='modal-title'>HELLO</h1>
            </div>
        </div>
    )
}
export default Modal;