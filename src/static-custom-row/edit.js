import {InnerBlocks, useBlockProps, InspectorControls} from '@wordpress/block-editor';
import {useState, useEffect} from '@wordpress/element';
import {PanelBody, SelectControl, ToggleControl} from '@wordpress/components';


const Edit = ({attributes, setAttributes}) => {
	const [direction, setDirection] = useState('static-row');
	const [rowAlign, setRowAlign] = useState('static-row-left')
	const [columnAlign, setColumnAlign] = useState('static-column-start')

	const [enableMobile, setEnableMobile] = useState(false);
	const [mobileDirection, setMobileDirection] = useState('mobile-static-row');
	const [mobileRowAlign, setMobileRowAlign] = useState('static-row-left')
	const [mobileColumnAlign, setMobileColumnAlign] = useState('static-column-start')


	useEffect(() => {
		console.log(attributes)
		if(attributes.direction) {
			setDirection(attributes.direction)
		}
		if(attributes.rowAlign) {
			setRowAlign(attributes.rowAlign)
		}
		if(attributes.columnAlign) {
			setColumnAlign(attributes.columnAlign)
		}
		if(attributes.enableMobile) {
			setEnableMobile(attributes.enableMobile)
		}
		if(attributes.mobileDirection) {
			setMobileDirection(attributes.mobileDirection)
		}
		if(attributes.mobileRowAlign) {
			setMobileRowAlign(attributes.mobileRowAlign)
		}
		if(attributes.mobileColumnAlign) {
			setMobileColumnAlign(attributes.mobileColumnAlign)
		}
	}, []);

	return (
		<>
			<InspectorControls>
				<PanelBody title="Items direction">
					<SelectControl
						label="Desktop Direction"
						value={direction}
						options={[
							{label: 'Row', value: 'static-row'},
							{label: 'Column', value: 'static-column'},
							{label: 'Row Reverse', value: 'static-row-reverse'},
							{label: 'Column Reverse', value: 'static-column-reverse'},
						]}
						onChange={(newVal) => {
							setDirection(newVal);
							setAttributes({direction: newVal});
						}}
					/>

					<SelectControl
						label="Row Align"
						value={rowAlign}
						options={[
							{label: 'None', value: ''},
							{label: 'Left', value: 'static-row-left'},
							{label: 'Right', value: 'static-row-right'},
							{label: 'Space Between', value: 'static-row-between'},
							{label: 'Space Evenly', value: 'static-row-evenly'},
						]}
						onChange={(newVal) => {
							setRowAlign(newVal);
							setAttributes({rowAlign: newVal});
						}}
					/>

					<SelectControl
						label="Column Align"
						value={columnAlign}
						options={[
							{label: 'None', value: ''},
							{label: 'Start', value: 'static-column-start'},
							{label: 'End', value: 'static-column-end'},
							{label: 'Center', value: 'static-column-center'},
							{label: 'Stretch', value: 'static-column-stretch'},
						]}
						onChange={(newVal) => {
							setColumnAlign(newVal);
							setAttributes({columnAlign: newVal});
						}}
					/>

					<ToggleControl
						label="Enable Mobile Setting"
						checked={enableMobile}
						onChange={(value) => {
							setEnableMobile(value);
							setAttributes({enableMobile: value});
						}}
					/>

					{enableMobile && (
						<>
							<SelectControl
								label="Mobile Direction"
								value={mobileDirection}
								options={[
									{label: 'None', value: ''},
									{label: 'Row', value: 'mobile-static-row'},
									{label: 'Column', value: 'mobile-static-column'},
									{label: 'Row Reverse', value: 'mobile-static-row-reverse'},
									{label: 'Column Reverse', value: 'mobile-static-column-reverse'},
								]}
								onChange={(newVal) => {
									setMobileDirection(newVal);
									setAttributes({mobileDirection: newVal});
								}}
							/>
							<SelectControl
								label="Mobile Row Align"
								value={mobileRowAlign}
								options={[
									{label: 'None', value: ''},
									{label: 'Left', value: 'mobile-static-row-left'},
									{label: 'Right', value: 'mobile-static-row-right'},
									{label: 'Space Between', value: 'mobile-static-row-between'},
									{label: 'Space Evenly', value: 'mobile-static-row-evenly'},
								]}
								onChange={(newVal) => {
									setMobileRowAlign(newVal);
									setAttributes({mobileRowAlign: newVal});
								}}
							/>

							<SelectControl
								label="Mobile Column Align"
								value={mobileColumnAlign}
								options={[
									{label: 'None', value: ''},
									{label: 'Start', value: 'mobile-static-column-start'},
									{label: 'End', value: 'mobile-static-column-end'},
									{label: 'Center', value: 'mobile-static-column-center'},
									{label: 'Stretch', value: 'mobile-static-column-stretch'},
								]}
								onChange={(newVal) => {
									setMobileColumnAlign(newVal);
									setAttributes({mobileColumnAlign: newVal});
								}}
							/>
						</>

					)}


				</PanelBody>
			</InspectorControls>
			<div {...useBlockProps({
				className: `${attributes.direction} ${attributes.rowAlign} ${attributes.columnAlign} ${attributes.enableMobile ? attributes.mobileDirection + ' ' + attributes.mobileRowAlign + ' ' + attributes.mobileColumnAlign : ''}`
			})}>
				<InnerBlocks/>
			</div>
		</>
	);
};

export default Edit;
