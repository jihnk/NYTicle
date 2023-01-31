import { useCallback, useEffect, useState } from "react";
type UseModalType = [boolean, () => void];

const useModal = (initialValue: boolean): UseModalType => {
	const [isOpenModal, setIsOpenModal] = useState(initialValue);
	useEffect(() => {
		if (isOpenModal) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}, [isOpenModal]);

	const handleModal = useCallback(
		() => setIsOpenModal(!isOpenModal),
		[isOpenModal]
	);

	return [isOpenModal, handleModal];
};

export default useModal;
