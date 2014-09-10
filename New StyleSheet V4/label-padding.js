var Lance = {
	uniformButton: function(qid) {
		var labels = $$('#'+ qid +' label');
		var tallest = 0;
		var label;
		var padding;
		for(label in labels) {
			if(labels.hasOwnProperty(label) && labels[label].offsetHeight > tallest )
			tallest = labels[label].offsetHeight;
		}
		for(label in labels) {
			if(labels.hasOwnProperty(label) && labels[label].offsetHeight <= tallest) {
				padding = parseInt($(labels[label]).getStyle('padding-top')) + parseInt($(labels[label]).getStyle('padding-bottom'));
				var newHeight = tallest - labels[label].offsetHeight;
				newHeight = parseInt(newHeight/2);
				var paddingtop = parseInt($(labels[label]).getStyle('padding-top'))+newHeight;
				var paddingbottom = parseInt($(labels[label]).getStyle('padding-bottom'))+newHeight;
					if(labels[label].hasClassName('q-radio') == false && labels[label].hasClassName('q-checkbox') == false){
					labels[label].style.paddingTop = paddingtop +'px';
					labels[label].style.paddingBottom = paddingbottom +'px';
					}
			}
		}

// Probably don't need the width part?
		// var width = 0;
		// for(label in labels) {
		// 	if(labels.hasOwnProperty(label) && labels[label].offsetWidth > width )
		// 		width = labels[label].offsetWidth;
		// }
		// for(label in labels) {
		// 	if(labels.hasOwnProperty(label)) {
		// 		if(labels[label].offsetWidth <= width ) {
		// 			padding = parseInt($(labels[label]).getStyle('padding-left')) + parseInt($(labels[label]).getStyle('padding-right'));
		// 			var newWidth = width - padding;
		// 			labels[label].style.width = newWidth +'px';					
		// 		}
		// 		labels[label].style.textAlign = 'center';
		// 	}
		// }

	}
}


window.onload = function(){
	
	$$('.QuestionOuter').each(function(el) {
		//if($(el).hasClassName('RO')) return;
		//if($(el).hasClassName('PGR')) return;
		//if($(el).hasClassName('TE')) return;
		//if($(el).down('.DL')) return;
		if($(el).hasClassName('MC')){
			Lance.uniformButton(el.id);

		}
	});
};