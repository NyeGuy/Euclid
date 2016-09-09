const authenticatedRoutes = FlowRouter.group( { name: 'authenticated' } );

authenticatedRoutes.route( '/messages/:channel', {
  name: 'channel',
  action() {
    BlazeLayout.render( 'default', { yield: 'channel' } );
  }
});

authenticatedRoutes.route('/blockeditor', {
	name: "blockeditor",
	action() {
		BlazeLayout.render('default', { yield: "block-editor"});
	}
})

