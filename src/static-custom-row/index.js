import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import Save from './save';
import metadata from './block.json'

import './editor.scss'
import './style.scss'

const blockAttributes = {
	direction: {
		type: 'string',
		default: 'static-row',
	},
	rowAlign: {
		type: 'string',
		default: 'static-row-left',
	},
	columnAlign: {
		type: 'string',
		default: 'static-column-start',
	},
	enableMobile: {
		type: 'boolean',
		default: false,
	},
	mobileDirection: {
		type: 'string',
		default: 'mobile-static-row',
	},
	mobileRowAlign: {
		type: 'string',
		default: 'static-row-left',
	},
	mobileColumnAlign: {
		type: 'string',
		default: 'static-column-start',
	},
};

registerBlockType(metadata.name, {

	attributes: blockAttributes,

	edit: Edit,

	save: Save
});
