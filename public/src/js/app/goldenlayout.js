define(['golden'], function(GoldenLayout) {
	var golden = new GoldenLayout({
		content: [{
			type: 'row',
			content: [{
				type: 'component',
				componentName: 'pair',
				title: 'Hello World!!',
				componentState: {
					title: 'First Item',
					label: 'A area'
				}
			}, {
				type: 'component',
				componentName: 'pair',
				title: 'Hello World 2',
				componentState: {
					title: 'Second Item',
					label: 'B area'
				}
			}]
		}]
	}, $('#layoutContainer'));
	
	golden.registerComponent('pair', function(container, componentState) {
		container.getElement().html('<h2 style="color:grey">' + componentState.label + "</h2>");
	});
	golden.init();
});
