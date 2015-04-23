var Cloud = require('ti.cloud');
Cloud.debug = true;  // optional; if you add this line, set it to false for production


Cloud.Events.search(
	{name: 'Party'},
	function (e) {
    	if (e.success) {
            var listViewItems =[];
        	for (var i = 0; i < e.events.length; i++) {
        		var event = e.events[i];
					var eventItem = {id: event.id,
        	                 name: event.name,
        	                 details: event.details };
        	                 


			//given that cloud calls are asynchronous, we need to open the window on the
			//success of getting the cloud event.
			
			listViewItems.push({properties: {title: eventItem.name, }});
			
			$.eventList.sections[0].setItems(listViewItems);

			
			$.index.open();        	             
		}	
    	} else {
        alert('Error:\n' +
          ((e.error && e.message) || JSON.stringify(e)));
    }
});
