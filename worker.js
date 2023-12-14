addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { searchParams } = new URL(request.url);
  const fakelink = searchParams.get('fakelink');
  const reallink = searchParams.get('reallink');

  if (fakelink && reallink) {
    if (request.headers.get('User-Agent').includes('Twitterbot')) {
      // If the user agent is Twitterbot, redirect to fakelink
      return Response.redirect(fakelink, 301);
    } else {
      // Redirect to reallink for other user agents
      return Response.redirect(reallink, 301);
    }
  } else {
    // If no params are provided, redirect to specified page
    return Response.redirect('https://github.com/bestadamdagoat/twtfake', 301);
  }
}
// https://url.com/?fakelink=https://example.com/fake&reallink=https://example.com/real
// shows example.com/fake on twitter
// shows example.com/real after clicking
