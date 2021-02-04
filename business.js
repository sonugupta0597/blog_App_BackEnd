const { model } = require("mongoose")

const business = [
    {
    "source": {
    "id": null,
    "name": "inside digital"
    },
    "author": null,
    "title": "O2: Bis zu 5 GB LTE Datenvolumen kostenlos dazu - inside digital",
    "description": "O2 spendiert dir mehr Datenvolumen: Bis zu 5 GB LTE-Volumen gibt es dazu, ohne dass du dafür etwas zahlen musst.",
    "url": "https://www.inside-digital.de/news/o2-bis-zu-5-gb-lte-datenvolumen-kostenlos-dazu",
    "urlToImage": "https://www.inside-digital.de/img/half-sim-o2.jpg",
    "publishedAt": "2021-01-29T10:58:00Z",
    "content": "Ab 2. Februar also ab Dienstag ändert O2 seine Tarife für Prepaid-Nutzer. Für viele Nutzer gibt es zu diesem Stichtag mehr Datenvolumen kostenlos dazu. Dabei spielt es keine Rolle, ob du erst ab Dien… [+2086 chars]"
    },
    {
    "source": {
    "id": "spiegel-online",
    "name": "Spiegel Online"
    },
    "author": "DER SPIEGEL",
    "title": "Börsenhype von Kleinanlegern: Trade Republic lässt Handel mit GameStop-Aktien wieder zu - DER SPIEGEL",
    "description": "Hedgefonds wetten auf fallende Kurse, Kleinanleger halten mit Massenkäufen dagegen: Wegen heftiger Schwankungen setzte der Berliner Broker Trade Republic den Handel aus – gibt jetzt aber nach. Ärger droht auch Facebook.",
    "url": "https://www.spiegel.de/wirtschaft/unternehmen/gamestop-hype-trade-republic-laesst-handel-wieder-zu-a-83e73ace-2c17-41de-b90f-687851c9df0f",
    "urlToImage": "https://cdn.prod.www.spiegel.de/images/9c8d4973-ec9c-40a1-936a-f4325a3e25d1_w1280_r1.77_fpx33.32_fpy49.96.jpg",
    "publishedAt": "2021-01-29T10:55:18Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "DIE WELT"
    },
    "author": "Holger Zschäpitz",
    "title": "Aktien: Dieser Machtkampf bringt das gesamte Finanzsystem in Gefahr - DIE WELT",
    "description": "Der Wirbel um die GameStop-Aktie hat zu einem Machtkampf zwischen Kleinanlegern und Fonds geführt. Der Streit eskalierte, einige Broker nahmen zeitweise keine Kaufaufträge mehr an. Dieser Fall könnte eine Zeitenwende bedeuten.",
    "url": "https://www.welt.de/finanzen/plus225243921/Aktien-Dieser-Machtkampf-bringt-das-gesamte-Finanzsystem-in-Gefahr.html",
    "urlToImage": "https://img.welt.de/img/finanzen/mobile225243919/0591352867-ci16x9-w1200-fnov-fpotl-fpi157750653/GameStop-2.jpg",
    "publishedAt": "2021-01-29T10:36:00Z",
    "content": "Wann hat die Spekulation ihren Scheitelpunkt erreicht? Diese Frage stellen sich Anleger und Banker, aber ebenso Regulierer und Ökonomen. Der Hype um die GameStop-Aktie ist in einen hitzigen Kampf um … [+425 chars]"
    },
    {
    "source": {
    "id": "spiegel-online",
    "name": "Spiegel Online"
    },
    "author": "DER SPIEGEL",
    "title": "Ehrgeiziges Klimaziel: General Motors will ab 2035 nur noch abgasfreie Pkw verkaufen - DER SPIEGEL",
    "description": "Zeitenwende in den USA: Autogigant General Motors will schon in 14 Jahren keine Autos mehr anbieten, die mit Benzin fahren. Eine Entscheidung, die auch wegen politischen Drucks fällt.",
    "url": "https://www.spiegel.de/auto/general-motors-will-ab-2035-nur-noch-abgasfreie-pkw-verkaufen-a-292bfc89-1d69-4ac5-a2e4-d7c7d20cad6a",
    "urlToImage": "https://cdn.prod.www.spiegel.de/images/a400fe6b-5cc5-4d3c-8e0c-ed9b898cd087_w1280_r1.77_fpx62.06_fpy50.jpg",
    "publishedAt": "2021-01-29T10:01:01Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Finanzen.net"
    },
    "author": "finanzen.net Redaktion",
    "title": "Bitcoin nähert sich nach Musk-Erwähnung 38.000-Dollar-Marke - finanzen.net",
    "description": "Die Kursschwankungen beim Bitcoin bleiben weiterhin hoch. Nach einem Kursrückschlag in dieser Woche geht es am Freitag für die beliebte Kryptowährung wieder aufwärts.",
    "url": "https://www.finanzen.net/nachricht/devisen/nach-kursrueckschlag-bitcoin-naehert-sich-nach-musk-erwaehnung-38-000-dollar-marke-9750312",
    "urlToImage": "https://images.finanzen.net/mediacenter/unsortiert/bitcoin-useacoin-shutterstock-660-05394.jpg",
    "publishedAt": "2021-01-29T09:54:00Z",
    "content": " Bitcoin legt vor dem Wochenende zu Kursschwankungen bleiben weiterhin hoch Zusammenhang mit Twitter-Erwähnungen\r\nAm Freitag nähert sich der Kurs der ältesten und nach Marktwert größten Kryptowähr… [+1953 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Www.rnd.de"
    },
    "author": "RND RedaktionsNetzwerk Deutschland",
    "title": "Biontech-Impfstoff: Nach Todesfällen - laut EMA-Sicherheitsbericht \"Keine Sicherheitsbedenken\" - RND",
    "description": "",
    "url": "https://www.rnd.de/gesundheit/biontech-impfstoff-nach-todesfallen-laut-ema-sicherheitsbericht-keine-sicherheitsbedenken-G27ZMSFVC5A4TOOEWYOUARJ4JA.html",
    "urlToImage": "https://www.rnd.de/resizer/KjrZ38nw-am5nIX33wxTdWHB4vk=/1080x607/cloudfront-eu-central-1.images.arcpublishing.com/madsack/GX6LRM7M4BBDVFJGQGQSZVWXD4.jpg",
    "publishedAt": "2021-01-29T09:48:59Z",
    "content": "Die Europäische Arzneimittelagentur (EMA) hat ein erstes Update ihres Sicherheitsberichts zum Impfstoff von Biontech/Pfizer veröffentlicht. Der seit Ende Dezember in der EU verabreichte Corona-Impfst… [+2138 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Onvista.de"
    },
    "author": null,
    "title": "Dax: Volatilität beherrscht derzeit die Märkte – „Die Börse ist zum Schauplatz der Auseinandersetzung zwischen Leerverkäufern und Privatanlegern gewor - onvista",
    "description": "Nachdem der Dax gestern seinen Rutsch nach unten abfangen konnte, steht der deutsche Leitindex auch heute wieder im Bann der Volatilität und musste zwischenzeitlich ein Minus von 1,3 Prozent verkraften. Nach den ersten Handelsstunden konnte er d... Informatio…",
    "url": "https://www.onvista.de/news/dax-volatilitaet-beherrscht-derzeit-die-maerkte-die-boerse-ist-zum-schauplatz-der-auseinandersetzung-zwischen-leerverkaeufern-und-privatanlegern-geworden-430705135",
    "urlToImage": "https://www.onvista.de/news/boxes/news-image/?newsId=430705135&width=720&height=540",
    "publishedAt": "2021-01-29T09:44:00Z",
    "content": "Nachdem der Dax gestern seinen Rutsch nach unten abfangen konnte, steht der deutsche Leitindex auch heute wieder im Bann der Volatilität und musste zwischenzeitlich ein Minus von 1,3 Prozent verkraft… [+1746 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "tagesschau.de"
    },
    "author": "tagesschau",
    "title": "Australien gegen Google: Machtkampf mit Internetgiganten | tagesschau.de - tagesschau.de",
    "description": "Australien plant ein Gesetz, wonach Internetriesen künftig zahlen müssen, wenn sie Inhalte lokaler Medienunternehmen verbreiten. Google demonstriert seine Marktmacht und droht mit Abschaltung. <em>Von Holger Senzel.</em>",
    "url": "https://www.tagesschau.de/wirtschaft/australiens-kampf-mit-google-101.html",
    "urlToImage": "https://www.tagesschau.de/multimedia/bilder/google-in-australien-101~_v-videowebm.jpg",
    "publishedAt": "2021-01-29T09:26:15Z",
    "content": "Stand: 29.01.2021 10:26 Uhr\r\nAustralien plant ein Gesetz, wonach Internetriesen künftig zahlen müssen, wenn sie Inhalte lokaler Medienunternehmen verbreiten. Google demonstriert seine Marktmacht und … [+4388 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Ecomento.de"
    },
    "author": "http://www.facebook.com/ecomento.de",
    "title": "Seat Mii electric als „Edition Power Charge“ wieder bestellbar - ecomento.de",
    "description": "Der Seat Mii Electric war schnell vergriffen, nun bringt der Hersteller den Elektroauto-Kleinstwagen als \"Edition Power Charge\" zurück.",
    "url": "https://ecomento.de/2021/01/28/seat-mii-electric-als-edition-power-charge-wieder-bestellbar/",
    "urlToImage": "https://ecomento.de/wp-content/uploads/2021/01/SEAT-Mii-electric_21.jpg",
    "publishedAt": "2021-01-29T09:22:30Z",
    "content": "Der Ende 2019 zu Preisen ab 20.650 Euro eingeführte Seat Mii Electric war bereits Anfang 2020 ausverkauft, nun bringt die Volkswagen-Tochter das Elektroauto in der Ausführung „Edition Power Charge“ z… [+2395 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Digitalfernsehen.de"
    },
    "author": null,
    "title": "Comcast-Bericht: Sky verzeichnet wieder Zuwachs an Abonnenten - DIGITAL FERNSEHEN - Digitalfernsehen.de",
    "description": "Comcast hat gestern seinen Bericht für das vierte Quartal und das Jahr 2020 veröffentlicht. Sky hat im vierten Quartal 2020 wieder Kunden gewonnen.",
    "url": "https://www.digitalfernsehen.de/news/medien-news/maerkte/sky-verzeichnet-wieder-zuwachs-an-abonnenten-565633/",
    "urlToImage": "https://www.digitalfernsehen.de/wp-content/uploads/2020/08/Comcast.jpg",
    "publishedAt": "2021-01-29T09:18:52Z",
    "content": "Comcast hat gestern seinen Bericht für das vierte Quartal und das Jahr 2020 veröffentlicht. Daraus geht hervor, dass Sky zum Jahresende wieder wachsende Nutzerzahlen, aber auch finanzielle Einbrüche … [+2656 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Süddeutsche Zeitung"
    },
    "author": "Helmut Martin-Jung",
    "title": "Facebook greift Apple an - Süddeutsche Zeitung",
    "description": "Und Apple keilt zurück.",
    "url": "https://www.sueddeutsche.de/digital/apple-facebook-whatsapp-zuckerberg-verschluesselung-cook-datenschutz-1.5189679",
    "urlToImage": "https://www.sueddeutsche.de/image/sz.1.5189680/1200x675?v=1611913776",
    "publishedAt": "2021-01-29T09:18:38Z",
    "content": "Apple macht zunehmend ein Kaufargument daraus, die Privatsphäre der Kunden zu schützen. Facebook-Chef Mark Zuckerberg gefällt das nicht - Apple-Chef Tim Cook keilt zurück.Eigentlich hätte Mark Zucker… [+4095 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Golem.de"
    },
    "author": null,
    "title": "Laserpecker 2: Mini-Laserschneider graviert iPads, Holz, Leder und Stoffe - Golem.de - Golem.de",
    "description": null,
    "url": "https://www.golem.de/sonstiges/zustimmung/auswahl.html?from=https:%2F%2Fwww.golem.de%2Fnews%2Flaserpecker-2-mini-laserschneider-graviert-ipads-holz-leder-und-stoffe-2101-153769.html",
    "urlToImage": null,
    "publishedAt": "2021-01-29T09:00:02Z",
    "content": "Besuchen Sie Golem.de wie gewohnt mit Werbung und Tracking, indem Sie der Nutzung aller Cookies zustimmen.\r\n Details zum Tracking finden Sie\r\nim Privacy Center.\r\nSkript wurde nicht geladen. Informati… [+576 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "ComputerBase"
    },
    "author": "Sven Bauduin",
    "title": "Tesla MCU: AMD Navi 23 soll fahrende Spielkonsolen ermöglichen - ComputerBase",
    "description": "Mit dem neuen Model S und Model X will Tesla Spielkonsolen auf Rädern anbieten, die voraussichtlich auf AMD Navi 23 basieren.",
    "url": "https://www.computerbase.de/2021-01/tesla-amd-radeon-navi-23-infotainmentsystem/",
    "urlToImage": "https://pics.computerbase.de/9/7/0/7/8-72824e1707f6fcc6/article-1280x720.ecdca048.jpg",
    "publishedAt": "2021-01-29T08:57:00Z",
    "content": "Mit dem neuen Model S und Model X will Tesla Spielkonsolen auf Rädern mit einer Rechenleistung von bis zu 10 TFLOPS anbieten, die voraussichtlich auf AMD Navi 23 und der RDNA-2-Architektur basieren. … [+1920 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "N-tv.de"
    },
    "author": "n-tv NACHRICHTEN",
    "title": "Tiefe Eingriffe ins Layout:KTM lässt 1290 Super Adventure S aufrücken - n-tv NACHRICHTEN",
    "description": "Mit einer Runderneuerung schickt KTM die 1290 Super Adventure S in die neue Saison. Wendiger, mit besserer Technik, weniger Gewicht und verbesserter Konnektivität soll sie sich gegen die Mitbewerber behaupten.",
    "url": "https://www.n-tv.de/auto/KTM-laesst-1290-Super-Adventure-S-aufruecken-article22322398.html",
    "urlToImage": "https://bilder2.n-tv.de/img/incoming/crop22322433/2901321678-cImg_16_9-w1200/371571-MY21-KTM-1290-SUPER-ADVENTURE-S-Action.jpg",
    "publishedAt": "2021-01-29T08:48:44Z",
    "content": "Mit einer Runderneuerung schickt KTM die 1290 Super Adventure S in die neue Saison. Wendiger, mit besserer Technik, weniger Gewicht und verbesserter Konnektivität soll sie sich gegen die Mitbewerber … [+3021 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Faz.net"
    },
    "author": "Reuters",
    "title": "Gamestop-Turbulenzen und Corona belasten die Börse - FAZ - Frankfurter Allgemeine Zeitung",
    "description": "Die Aktienmärkte starten mit Verlusten. Der Kampf zwischen Privatanlegern und Hedgefonds an der Wall Street lässt Investoren zittern. Doch gibt es auch Lichtblicke.",
    "url": "https://www.faz.net/aktuell/finanzen/dax-im-minus-gamestop-turbulenzen-und-corona-belasten-die-boerse-17170959.html",
    "urlToImage": "https://media1.faz.net/ppmedia/aktuell/finanzen/3972367889/1.7170971/facebook_teaser/blick-in-den-recht-leeren.jpg",
    "publishedAt": "2021-01-29T08:35:00Z",
    "content": "Aus Furcht vor den langfristigen Folgen der Kursturbulenzen rund um den amerikanischen Videospielehändler Gamestop ziehen sich Anleger aus dem deutschen Aktienmarkt zurück. Die Gefahren für das Finan… [+1729 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "t-online.de"
    },
    "author": "Nele Behrens, t-online",
    "title": "Klage gegen Subway: Kein Thunfisch im Tuna-Sandwich? - t-online.de",
    "description": "Der Fast-Food-Konzern sieht sich schweren Vorwürfen ausgesetzt: Sein Tuna-Sandwich soll angeblich gar keinen Thunfisch enthalten. Werden die Kunden betrogen? Subway streitet alles ab.",
    "url": "https://www.t-online.de/finanzen/news/unternehmen-verbraucher/id_89371810/klage-gegen-subway-kein-thunfisch-im-tuna-sandwich-.html",
    "urlToImage": "https://bilder.t-online.de/b/89/37/19/34/id_89371934/tid_da/subway-sandwich-symbolbild-was-steckt-drin-eine-klage-gegen-subway-laesst-zweifel-an-der-deklarierung-ihrer-sandwichs-aufkommen-.jpg",
    "publishedAt": "2021-01-29T07:53:06Z",
    "content": "Der Fast-Food-Konzern sieht sich schweren Vorwürfen ausgesetzt: Sein Tuna-Sandwich soll angeblich gar keinen Thunfisch enthalten. Werden die Kunden betrogen? Subway streitet alles ab.\r\nEs sieht aus w… [+2304 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "N-tv.de"
    },
    "author": "n-tv NACHRICHTEN",
    "title": "Erfolgreicher Börsengang :US-Tochter spült SAP Milliarden in die Kasse - n-tv NACHRICHTEN",
    "description": "Mit dem Anteilsverkauf an der US-Marktforschungsfirma Qualtrics schlägt der Mutterkonzern SAP zwei Fliegen mit einer Klappe: Schulden sollen abgebaut werden, gleichzeitig steigt die Dividende. SAP erhofft sich davon ein wieder wachsendes Vertrauen der Investo…",
    "url": "https://www.n-tv.de/wirtschaft/US-Tochter-spuelt-SAP-Milliarden-in-die-Kasse-article22324609.html",
    "urlToImage": "https://bilder4.n-tv.de/img/incoming/crop22324615/0561324843-cImg_16_9-w1200/45567d8c3bcf0819a33a68fa7bb63200.jpg",
    "publishedAt": "2021-01-29T07:35:35Z",
    "content": "Mit dem Anteilsverkauf an der US-Marktforschungsfirma Qualtrics schlägt der Mutterkonzern SAP zwei Fliegen mit einer Klappe: Schulden sollen abgebaut werden, gleichzeitig steigt die Dividende. SAP er… [+2037 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Godmode-trader.de"
    },
    "author": "Rocco Gräfe",
    "title": "08:20 - DAX-Tagesausblick: 140 Punkte Gap down! Vorbörse 13526 - GodmodeTrader.de Finanznachrichten",
    "description": "Hängen und Würgen, hartes Ringen um jeden Zentimeter bei DAX 13600/13460! Die Frage die ich stelle: Ist das gestern ein DAX Mittelspiel oder das Ende eines DAX Zyklus? Hier ist die heutige DAX Prognose...",
    "url": "https://www.godmode-trader.de/analyse/dax-tagesausblick-140-punkte-gap-down-vorboerse-13526,9160812",
    "urlToImage": "https://www.godmode-trader.de/articleimage/9160812.image",
    "publishedAt": "2021-01-29T07:20:14Z",
    "content": "Haben Sie es schon bemerkt? Ihre Kurse scheinen den Atem anzuhalten: Sie aktualisieren sich nicht von allein und auch die Charts pushen nicht mehr. Woran das liegt? An Ihrem AdBlocker!\r\nSchalten Sie … [+475 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "tagesschau.de"
    },
    "author": "tagesschau",
    "title": "Rückschlag erwartet: Nervöser DAX vor Kursverlusten | tagesschau.de - tagesschau.de",
    "description": "Der DAX hat den Handel mit deutlichen Kursverlusten begonnen. Gesprächsthema Nummer eins ist nicht die Pandemie, sondern die auch für altgediente Börsianer schwer zu glaubenden Kursschwankungen bei der Gamestop-Aktie.",
    "url": "https://www.tagesschau.de/wirtschaft/finanzen/marktberichte/marktbericht-dax-dow-gamestop-101.html",
    "urlToImage": "https://www.tagesschau.de/multimedia/bilder/gamestop-101~_v-videowebm.jpg",
    "publishedAt": "2021-01-29T07:08:49Z",
    "content": "Stand: 29.01.2021 09:43 Uhr\r\nDer DAX hat den Handel mit deutlichen Kursverlusten begonnen. Gesprächsthema Nummer eins ist nicht die Pandemie, sondern die auch für altgediente Börsianer schwer zu fass… [+5479 chars]"
    }
    ]

    module.exports = business