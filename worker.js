addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { searchParams } = new URL(request.url);
  const fakelink = searchParams.get('fakelink');
  const reallink = searchParams.get('reallink');
  const useragent = searchParams.get('useragent');

  if (fakelink && reallink) {
    if (useragent) {
      // Check if the specified user-agent matches the request's user-agent
      if (request.headers.get('User-Agent') === useragent) {
        return Response.redirect(fakelink, 301);
      }
    }

    // If user-agent is not specified or doesn't match, redirect to reallink
    return Response.redirect(reallink, 301);
  } else {
    // If no params are provided, redirect to specified page
    return Response.redirect('https://github.com/bestadamdagoat/uatools', 301);
  }
}
// https://url.com/?fakelink=https://example.com/fake&reallink=https://example.com/real&useragent=Twitterbot
// shows example.com/fake on twitter
// shows example.com/real after clicking
