import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, FormEvent } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [appState, setAppState] = useState({
		fontFamily: defaultArticleState.fontFamilyOption,
		fontSize: defaultArticleState.fontSizeOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		contentWidth: defaultArticleState.contentWidth,
	});

	function onSubmit(event: FormEvent, state: typeof appState) {
		event.preventDefault();
		setAppState({
			...state,
		});
	}

	return (
		<div
			className={clsx(styles.main)}
			style={
				{
					'--font-family': appState.fontFamily.value,
					'--font-size': appState.fontSize.value,
					'--font-color': appState.fontColor.value,
					'--container-width': appState.contentWidth.value,
					'--bg-color': appState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm appState={appState} onSubmit={onSubmit} />
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
