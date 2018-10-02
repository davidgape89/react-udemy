import React from 'react';
import Modal from 'react-modal';

export const RemoveExpenseModal = ({onModalClose, isModalOpen, removeExpense}) => (
    <Modal
        isOpen={isModalOpen}
        onRequestClose={onModalClose}
        className="modal">
        <h3 className="modal__text">Are you sure you want to remove this expense?</h3>
        <div className="modal__actions">
            <button className="button" onClick={removeExpense}>Remove</button>   
            <button className="button" onClick={onModalClose}>Cancel</button>  
        </div>
    </Modal>
);