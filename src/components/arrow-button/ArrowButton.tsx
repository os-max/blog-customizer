import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export type OnClick = () => void;

interface IArrowButtonProps {
	handleClick: OnClick;
	isOpen: boolean;
}

export const ArrowButton = ({ handleClick, isOpen }: IArrowButtonProps) => {
	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
			className={
				isOpen
					? clsx(styles.container, styles.container_open)
					: styles.container
			}
			onClick={handleClick}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={
					isOpen ? clsx(styles.arrow, styles.arrow_open) : styles.arrow
				}
			/>
		</div>
	);
};
