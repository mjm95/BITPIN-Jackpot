


const scriptsInEvents = {

	async Gbokseventsheet_Event6_Act1(runtime, localVars)
	{
		runtime.globalVars.ajaxHeader=window.parent.csrfToken;
		window.parent.gboks.emit('ready');
		
		window.parent.gboks.emitter.addListener('fake-start', (e) => {
			runtime.globalVars.fakesStart=true;
		});
		window.parent.gboks.emitter.addListener('real-start', (e) => {
			runtime.globalVars.realStart=true;
		});
	},

	async Gbokseventsheet_Event9_Act1(runtime, localVars)
	{
		// fake rotate done event bullshit
		
		window.parent.gboks.emit('fake-spin-done');
		
	},

	async Gbokseventsheet_Event10_Act1(runtime, localVars)
	{
		window.parent.gboks.emit('real-spin-done',runtime.globalVars.giftIndex);
		
		
		
	},

	async Gbokseventsheet_Event11_Act2(runtime, localVars)
	{
		runtime.globalVars.giftIndex=JSON.parse(runtime.globalVars.ajaxRes).gift;
	}

};

self.C3.ScriptsInEvents = scriptsInEvents;

