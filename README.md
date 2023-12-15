# uatools
Trick apps into showing a fake link.

NOTE: This is a known issue with many services, don't abuse this. (you may use this for pentesting tho)

This works by tricking web scrapers into being redirected to a specified site by putting in their useragent. You can find a scraper's ua by using a tool like grabify.

Usage:
`https://uatools.bestadamdagoat.com/?fakelink=https://example.com/fake&reallink=https://example.com/real&useragent=Twitterbot`

shows `example.com/fake` on twitter

shows `example.com/real` after clicking
