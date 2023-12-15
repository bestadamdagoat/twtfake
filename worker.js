addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const { searchParams } = new URL(request.url);
  const fakelink = searchParams.get('fakelink');
  const reallink = searchParams.get('reallink');
  const useragent = searchParams.get('useragent');

  if (fakelink && reallink && useragent) {
    const userAgent = request.headers.get('User-Agent');
    if (userAgent.includes(useragent)) {
      // If the user-agent contains the specified string, redirect to fakelink
      return Response.redirect(fakelink, 301);
    } else {
      // If the user-agent does not contain the specified string, redirect to reallink
      return Response.redirect(reallink, 301);
    }
  } else {
    // If no params are provided, redirect to specified page
    return Response.redirect('https://bestadamdagoat.com/uatools', 301);
  }
}
// https://url.com/?fakelink=https://example.com/fake&reallink=https://example.com/real&useragent=Twitterbot
// shows example.com/fake on twitter
// shows example.com/real after clicking
