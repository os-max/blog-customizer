import { CSSProperties, FormEvent, useState } from 'react';
import {
	ArticleParamsForm,
	IFormState,
} from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';

import styles from './App.module.scss';
import { Article } from '../article';

type TArticleState = IFormState;

export const App = () => {
	const [articleState, setArticleState] =
		useState<TArticleState>(defaultArticleState);

	function handleSubmit(event: FormEvent, formState: typeof articleState) {
		event.preventDefault();
		setArticleState({ ...formState });
	}

	function handleReset() {
		setArticleState({ ...defaultArticleState });
	}

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': articleState.fontFamily.value,
					'--font-size': articleState.fontSize.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onSubmit={handleSubmit} onReset={handleReset} />
			<Article />
		</main>
	);
};
