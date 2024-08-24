import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState, FormEvent } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import {
	ArticleParamsForm,
	IFormState,
} from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [resetKey, setResetKey] = useState(false);
	const [appState, setAppState] = useState<IFormState>(defaultArticleState);

	function handleSubmit(event: FormEvent, state: typeof appState) {
		event.preventDefault();
		setAppState({ ...state });
	}

	function handleReset() {
		setAppState({ ...defaultArticleState });
		setResetKey(!resetKey);
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
			<ArticleParamsForm
				onSubmit={handleSubmit}
				onReset={handleReset}
				resetKey={resetKey}
			/>
			<Article />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
