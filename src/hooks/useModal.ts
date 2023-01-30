import { useCallback, useState } from "react";
type UseModalType = [boolean, () => void];

const useModal = (initialValue: boolean): UseModalType => {
	const [isOpenModal, setIsOpenModal] = useState(initialValue);

	const handleModal = useCallback(
		() => setIsOpenModal(!isOpenModal),
		[isOpenModal]
	);

	return [isOpenModal, handleModal];
};

export default useModal;
