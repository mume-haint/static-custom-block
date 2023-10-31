import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

const Edit = () => {
	return (
		<div { ...useBlockProps() }>
			<InnerBlocks />
		</div>
	);
};

export default Edit;
