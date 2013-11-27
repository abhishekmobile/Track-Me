/**
 * @author Abhishek
 */
if(config.osname == 'android')
{
	var service = Titanium.Android.currentService;
	var intent = service.intent;
	var message = intent.getStringExtra("message_to_echo");
	Titanium.API.info("Hello World!  I am a Service.  I have this to say: " + message);
	Ti.Geolocation.getCurrentPosition(function(e)
	{
		if (e.error)
		{
			//log error
		}
		else
		{
			//Latitude: e.coords.latitude;
			//Longitude: e.coords.longitude;
		}
	});
}
else
{
	Ti.API.info('bg-service1: service has been invoked once, and will now be stopped to release it from memory.');
	Ti.App.currentService.stop();
	var listener = Ti.App.currentService.addEventListener('stop',function()
	{
		Ti.API.info('bg-service1: Although the service has been stopped, it is still registered and will be executed '
		+'again on next pause');
		Ti.API.info('bg-service1: As all background services are automatically stopped on resume, it is not always '
		+'necessary to explicitly stop a service');
	});
}