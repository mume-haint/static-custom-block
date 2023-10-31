import {
	AlignmentToolbar,
	BlockControls,
	RichText,
	useBlockProps,
	InspectorControls
} from '@wordpress/block-editor';

import {__} from '@wordpress/i18n';

import {ColorPalette} from "@wordpress/components";

import './editor.scss';

export default function Edit({attributes, setAttributes}) {
	const onChangeAlignment = (newAlignment) => {
		setAttributes({
			alignment: newAlignment === undefined ? 'none' : newAlignment,
		});
	};

	const onChangeBGColor = (hexColor) => {
		setAttributes({bg_color: hexColor});
	};

	const onChangeTextColor = (hexColor) => {
		setAttributes({text_color: hexColor});
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={attributes.alignment}
					onChange={onChangeAlignment}
				/>
			</BlockControls>

			<InspectorControls>
				<div id="gutenpride-controls">
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Background color', 'gutenpride')}
						</legend>
						<ColorPalette
							onChange={onChangeBGColor}
						/>
					</fieldset>
					<fieldset>
						<legend className="blocks-base-control__label">
							{__('Text color', 'gutenpride')}
						</legend>
						<ColorPalette
							onChange={onChangeTextColor}
						/>
					</fieldset>
				</div>
			</InspectorControls>

			<RichText
				{...useBlockProps()}
				style={{
					textAlign: attributes.alignment,
					backgroundColor: attributes.bg_color,
					color: attributes.text_color,
				}}
				tagName="p"
				onChange={(content) => setAttributes({content})}
				value={attributes.content}
				placeholder='Edit custom paragraph...'
			/>
		</>
	);
}
