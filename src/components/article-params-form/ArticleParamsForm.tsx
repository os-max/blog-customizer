import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';
import {
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontColors,
	fontFamilyOptions,
	fontSizeOptions,
	OptionType,
} from 'src/constants/articleProps';
import useClickOutside from './hooks/useClickOutside';

export interface IFormState {
	fontFamily: OptionType;
	fontSize: OptionType;
	fontColor: OptionType;
	backgroundColor: OptionType;
	contentWidth: OptionType;
}

interface FormProps {
	onSubmit: (event: FormEvent, appState: IFormState) => void;
	onReset: () => void;
	resetKey: boolean;
}

export const ArticleParamsForm = ({
	onSubmit,
	onReset,
	resetKey,
}: FormProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [formState, setFormState] = useState<IFormState>({
		...defaultArticleState,
	});

	useEffect(() => {
		setFormState({ ...defaultArticleState });
	}, [resetKey]);

	const formRef = useRef<HTMLDivElement>(null);
	useClickOutside({
		isOpen,
		ref: formRef,
		callBack: () => setIsOpen(false),
	});

	function handleArrowClick(): void {
		setIsOpen(!isOpen);
	}

	function handleFontFamilySelect(option: OptionType) {
		setFormState({
			...formState,
			fontFamily: option,
		});
	}

	function handleFontColorSelect(option: OptionType) {
		setFormState({
			...formState,
			fontColor: option,
		});
	}

	function handleBGColorSelect(option: OptionType) {
		setFormState({
			...formState,
			backgroundColor: option,
		});
	}

	function handleWidthSelect(option: OptionType) {
		setFormState({
			...formState,
			contentWidth: option,
		});
	}

	function handleFontSizeSelect(option: OptionType) {
		setFormState({
			...formState,
			fontSize: option,
		});
	}

	return (
		<div className='form-wrapper' ref={formRef}>
			<ArrowButton handleClick={handleArrowClick} isOpen={isOpen} />
			<aside
				className={
					isOpen
						? clsx(styles.container_open, styles.container)
						: styles.container
				}>
				<form
					className={styles.form}
					onSubmit={(event) => onSubmit(event, formState)}>
					<Text as='h2' size={31} weight={800} uppercase dynamicLite>
						Задайте параметры
					</Text>
					<div className={styles.fontSet}>
						<Select
							title='Шрифт'
							options={fontFamilyOptions}
							selected={formState.fontFamily}
							onChange={handleFontFamilySelect}
						/>
						<RadioGroup
							name='fontSize'
							title='Размер шрифта'
							options={fontSizeOptions}
							selected={formState.fontSize}
							onChange={handleFontSizeSelect}
						/>
						<Select
							title='Цвет шрифта'
							options={fontColors}
							selected={formState.fontColor}
							onChange={handleFontColorSelect}
						/>
					</div>
					<div className={styles.pageSet}>
						<Select
							title='Цвет фона'
							options={backgroundColors}
							selected={formState.backgroundColor}
							onChange={handleBGColorSelect}
						/>
						<Select
							title='Ширина контента'
							options={contentWidthArr}
							selected={formState.contentWidth}
							onChange={handleWidthSelect}
						/>
					</div>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={onReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</div>
	);
};
