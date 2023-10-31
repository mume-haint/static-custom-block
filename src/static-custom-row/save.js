import {InnerBlocks, useBlockProps} from '@wordpress/block-editor';

const Save = ({attributes}) => {
	return (
		<div {...useBlockProps.save({
			className: `${attributes.direction} ${attributes.rowAlign} ${attributes.columnAlign} ${attributes.enableMobile ? attributes.mobileDirection + ' ' + attributes.mobileRowAlign + ' ' + attributes.mobileColumnAlign : ''}`
		})} >
			<InnerBlocks.Content/>
		</div>
	);
};

export default Save;
