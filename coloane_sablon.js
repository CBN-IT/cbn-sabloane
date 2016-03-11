if(window.Cbn===undefined){
	window.Cbn = {};
}
if(window.Cbn.columns===undefined){
	Cbn.columns = {};
}
Cbn.columns.sablon={
	properties:{
		columnsSablon: {
			type: Array,
			value: [
				{
					type: 'index',
					caption: '',
					style: {
						color: 'gray'
					}
				},
				{
					name: 'numeSablon',
					renderAs: 'text',
					caption: 'Nume'
				},
				{
					name: 'entitate',
					renderAs: 'text',
					caption: 'Kind'
				},
				{
					name: 'tipGenerare',
					renderAs: 'text',
					caption: 'Tip'
				},
				{
					name: 'multiplicareProcese',
					renderAs: 'text',
					caption: 'Multiplicare'
				},
				{
					name: 'aplicare',
					renderAs: 'text',
					caption: 'Aplica'
				},
				{
					name: 'buttons',
					type: 'inert',
					renderAs: 'template',
					headStyle: "width: 100px",
					caption: 'Buttons',
					template: '.buttons'
				}
			]
		}
	}	
};
