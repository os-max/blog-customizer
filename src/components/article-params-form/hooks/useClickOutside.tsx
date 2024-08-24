import { useEffect } from 'react';

interface IUseClickOutside {
	isOpen: boolean;
	callBack: () => void;
	ref: React.RefObject<HTMLDivElement>;
}

// Вариация useOutsideClickClose для формы, потому что при выборе опции в select элементе event.target перестает существовать в форме rootRef.current?.contains возвращает false
export default function useClickOutside({
	isOpen,
	ref,
	callBack,
}: IUseClickOutside) {
	useEffect(() => {
		const stopClickInside = (event: MouseEvent) => {
			if (ref.current && !event.composedPath().includes(ref.current)) {
				callBack();
			}
		};

		document.addEventListener('click', stopClickInside);

		return () => {
			document.removeEventListener('click', stopClickInside);
		};
	}, [isOpen]);
}
