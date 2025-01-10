import React,{useState} from 'react'
import WarningForm from './WarningForm';
import Modal from '../../modal/Modal';
const WarningPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenWarn = () => {
    setIsOpen(true);
  }

  const onClose = () => {
    setIsOpen(false);
  }

  return (
    <div>
      <h1>경고모달입니다.</h1>
      <button onClick={handleOpenWarn}>경고 모달 열기</button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <WarningForm/>
      </Modal>
    </div>
  )
}

export default WarningPage