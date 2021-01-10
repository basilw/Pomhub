bad_urls = "43things.com 4chan.org 82apps.com 8ch.net 8chan.co 9gag.com 9to5mac.com abcnews.go.com addictinggames.com addthis.com agar.io airbnb.com albinoblacksheep.com allmyfaves.com allthingsd.com allvid.ch alternativeto.net amazon.com andkon.com angel.co aniwey.net aol.com appsandoranges.com ardmediathek.de arstechnica.com artsy.net ask.fm auroravid.to betali.st bidvoy.net biqle.ru bitvid.sx blogspot.com blowcomics.com bo.lt boingboing.net bored.com branch.com break.com briskfile.com bud.ge bufferapp.com buildandshoot.com businessinsider.com buy.com buzzfeed.com cad-comic.com camelcamelcamel.com canada.com candybox2.net candystand.com cheapassgamer.com cheezburger.com chime.in circleme.com cloudtime.to cloudy.ec collegehumor.com coolrom.com cracked.com craigslist.org crunchbase.com crystalmathlabs.com cubers.net cull.tv cultofmac.com daclips.in dailydot.com dailymotion.com dashnet.org deadspin.com delicious.com desura.com deviantart.com devour.com digg.com divxme.com divxstage.to dpadd.com draynor.net dropvideo.com dzone.com ebaumsworld.com ebay.com edition.cnn.com eeemo.net elderscrollsonline.com engadget.com entervideo.net espn.go.com estream.to evernote.com explosm.net extensions facebook.com fark.com feedly.com filenuke.com flashx.tv flixster.com fluther.com forbes.com foundation.bz freakshare.com funnyjunk.com funnyordie.com game-oldies.com gamepedia.com gamovideo.com gawker.com getglue.com getprismatic.com gigaom.com gizmodo.com gocomics.com goodvideohost.com gorillavid.in greevid.com hivereader.com homestarrunner.com huffingtonpost.com hulu.com hunch.com idowatch.net ifttt.com imgur.com indieflix.com indiegogo.com instagram.com invisionfree.com io9.com itunes.apple.com jalopnik.com jezebel.com jukejuice.com justin.tv kag2d.com kickstarter.com kinja.com knowyourmeme.com koalabeast.com kongregate.com kotaku.com kurzweilai.net launch.co leetscape.com letwatch.us lifehacker.com livejournal.com liveleak.com loadingartist.com lofog.com longform.org makeuseof.com mashable.com medium.com metacafe.com metafilter.com minecraft.net minecraftforum.net miniclip.com minus.com movdivx.com movpod.in movshare.net mp4upload.com mspaintadventures.com myspace.com myvideo.de nayavideo.com neatorama.com neodrive.co newegg.com newgrounds.com news.google.com news.ycombinator.com newsblur.com newsle.com noowit.com noslocker.com nosvideo.com novamov.com nowvideo.ch nowvideo.co nowvideo.sx nowvideo.to ok.ru oload.tv openload.co openload.io overstock.com pandodaily.com path.com pbfcomics.com penny-arcade.com pheed.com pinboard.in pinterest.com play.google.com playedto.me playreplay.net plus.google.com polygon.com popurls.com pornhub.com potluck.it powvideo.net primeshare.tv promptfile.com purefreetoplay.com quora.com qz.com rapidvideo.com rapidvideo.ws raptr.com raptu.com realmofthemadgod.com reddit.com rottentomatoes.com rsbandb.com runeclan.com runehead.com runehints.com runehq.com runemonkey.net runescape.com runetrack.com runetracker.org runeweb.net runewise.net salmoneus.net scape-xp.com sendvid.com shared.sx sharesix.com sharethis.com slashdot.com slashdot.org slate.com slatestarcodex.com slither.io smbc-comics.com snapzu.com snopes.com sortable.com southparkstudios.com speedvid.net speedvideo.net spring.me stagevu.com steampowered.com stellar.io store.maxdome.de strawpoll.me streamcloud.eu streamin.to streamplay.to stumbleupon.com stylee32.net swiftirc.net teamcoco.com teamfortress.com techcrunch.com techmeme.com techvibes.com theneeds.com thenextweb.com theoatmeal.com theoldreader.com theonion.com theverge.com thevideo.me thevideobee.to thevideos.tv tip.it titanfall.com tmz.com transformice.com tumblr.com tweettabs.com twitch.tv twitter.com uptostream.com userscloud.com userscripts.org usersfiles.com userstyles.org ustream.tv valvesoftware.com veehd.com venturebeat.com veoh.com versus.com vgcats.com vice.com vid.gg vid.me vidabc.com video.tt videosift.com videoweed.es videowood.tv vidgg.to vidlox.tv vidto.me vidtodo.com vidup.me vidzi.tv vimeo.com vimple.ru virtualnes.com vivo.sx vk.com voat.co vodlock.co vshare.eu vshare.io wallbase.cc wanelo.com watchers.to wholecloud.net wikia.com wimp.com wired.com wizards.com xkcd.com xvideo.com  xvidstage.com yoleoreader.com youporn.com yourvideohost.com yourworldoftext.com youtube.com youwatch.org ytmnd.com zdf.de zetaboards.com zifboards.com zybez.net zynga.com"

url_lst = bad_urls.split()
website_lst = list()

for url in url_lst:
    idx = url.rfind(".")
    website = url[:idx]
    website_lst.append(website)

# for website in website_lst: 
#     print(website)

def checkURL(url): 
    idx1 = url.find(".")
    website = url[idx1+1:len(url)]
    idx2 = website.find(".")
    website = website[:idx2]

    if website in website_lst: 
        return True
    else:
        return False

if __name__ == "__main__":
    ## Test Case
    print ("Expected: True; Actual: ", checkURL("wwww.4chan.com"))
    print ("Expected: False; Actual: ", checkURL("https://github.com/basilw/Pomhub?fbclid=IwAR1j__ahxRNGAK9zbt9nDLSSn3Rn0ZM8Hi-_WZ9wEgcnb4sGKy1SFgFcsko"))
    print ("Expected: True; Actual: ", checkURL("https://www.facebook.com/varun.kukunoor"))
