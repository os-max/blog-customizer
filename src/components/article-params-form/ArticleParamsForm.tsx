import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import * as options from '../../constants/articleProps';

import styles from './ArticleParamsForm.module.scss';
import { FormEvent, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import { RadioGroup } from '../radio-group';

interface IFormState {
	fontFamily: options.OptionType;
	fontSize: options.OptionType;
	fontColor: options.OptionType;
	backgroundColor: options.OptionType;
	contentWidth: options.OptionType;
}

interface FormProps {
	onSubmit: (event: FormEvent, appState: IFormState) => void;
	appState: IFormState;
}

export const ArticleParamsForm = ({ onSubmit, appState }: FormProps) => {
	const [isOpen, setIsOpen] = useState(true);

	const baseState = { ...appState };

	const [formState, setFormState] = useState(baseState);

	function handleArrowClick(): void {
		setIsOpen(!isOpen);
	}

	function handleFontFamilySelect(option: options.OptionType) {
		console.log(option);
		setFormState({
			...formState,
			fontFamily: option,
		});
	}

	function handleFontColorSelect(option: options.OptionType) {
		console.log(option);
		setFormState({
			...formState,
			fontColor: option,
		});
	}

	function handleBGColorSelect(option: options.OptionType) {
		console.log(option);
		setFormState({
			...formState,
			backgroundColor: option,
		});
	}

	function handleWidthSelect(option: options.OptionType) {
		console.log(option);
		setFormState({
			...formState,
			contentWidth: option,
		});
	}

	function handleFontSizeSelect(option: options.OptionType) {
		console.log(option);
		setFormState({
			...formState,
			fontSize: option,
		});
	}

	function formReset() {
		setFormState(baseState);
	}

	return (
		<>
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
					<Select
						title='Шрифт'
						options={options.fontFamilyOptions}
						selected={formState.fontFamily}
						onChange={handleFontFamilySelect}
					/>
					<RadioGroup
						name='fontSize'
						title='Размер шрифта:'
						options={options.fontSizeOptions}
						selected={formState.fontSize}
						onChange={handleFontSizeSelect}
					/>
					<Select
						title='Цвет шрифта'
						options={options.fontColors}
						selected={formState.fontColor}
						onChange={handleFontColorSelect}
					/>
					<Select
						title='Цвет фона'
						options={options.backgroundColors}
						selected={formState.backgroundColor}
						onChange={handleBGColorSelect}
					/>
					<Select
						title='Ширина контента'
						options={options.contentWidthArr}
						selected={formState.contentWidth}
						onChange={handleWidthSelect}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' onClick={formReset} />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
