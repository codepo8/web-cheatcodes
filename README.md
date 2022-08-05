# Cheat codes for the web - browser developer tools for non-developers

Every browser these days comes with built-in developer tools that help people create, test and fix products for the web. You can right-click any website and select `Inspect` to get to them, press `F12` or `CMD + Shift + I on Mac` or `Ctrl + Shift + I` on Windows/Linux. I work on these tools as a product manager and daily I get about 20 - 30 feedback messages that people opened them accidentally and are sure they "have been hacked".

I get it - to non developers these tools look daunting and complex and all the errors they display can be intimidating and worrying. And that annoys me. Tooling for the web to me shouldn't be only a thing for experts. On the contrary - the more you use these tools, the more you should become an expert of the web. 

This is why I put together this article with demonstrations for you to see what developer tools can be: your cheat codes for the web.

When I look at the web as a whole and especially, let's call them "fringe content" web sites, I am disappointed at how we use this medium. Instead of giving people content they came for, we smother intrusive ads all over, we prevent people from using the context menu which is full of accessibility enhancing tools and we make people jump through hoops just to get to some content they found in a search engine.

Now I will show you how you can use the browser developer tools to work around some of these annoyances. As the browser of choice I use Microsoft Edge, because it comes for free on any Windows machine, is available for all other platforms, and I work on it. You're free to use whatever you want, and most of the functionality should also be available in other browsers. 

Here are the things we will cover that you should be able to do once you're done here:

* See the document in a mobile view
* Remove annoying overlays
* Inspect the uninspectable
* Get back the context menu
* Avoid unwanted redirects
* Take screenshots of web content
* Get a simpler video player
* Check the document in different modes
* Grab all images on the page

## Simulating mobile devices

Often the mobile version of a web site is much simpler and has fewer annoying popups, redirects and advertising. Some web sites also only allow content uploads from mobile apps. That's why you can use the browser device emulation to trick the site into thinking that you are using a mobile device.

1. Open Developer Tools by hitting F12
1. Click the device emulation button
1. Select from a different emulated device

On many sites you can now right-click videos and select "save video as". Other sites may have turned off controls, so you can right-click the videos there, and select "show controls" to go to a different part of the video.

Another interesting feature of this mode is that you can spoof a different geographical location in the Sensors tool.

You can read up more on [device mode in the official documentation](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/device-mode/).

## Remove annoying overlays

Overlays are messages that cover the whole content when you get to a web site. Some are legally necessary (like cookie consent messages) but most are there to tell you that things aren't free and you should subscribe to get to the content. Some overlays are especially annoying as they show up with a few seconds delay or when you started to interact with the document.

Here's how to get rid of overlays using the browser developer tools.

![Screencast showing how to remove the overlay](screencasts/overlays.gif)

1. [Open Developer Tools](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/overview#open-devtools)
1. Use the [the Inspect Tool](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect) to pick an element of the page
1. Move your mouse around until the colour overlay shows that the element covers the whole page
1. Click your mouse and the element will get highlighted in the Elements tool.
1. Press `Delete` to remove it

Try it out yourself at this [example page with overlay](https://codepo8.github.io/web-cheatcodes/overlay.html).

## Inspect the uninspectable

Web site maintainers are aware of the power of developer tools and try to block functionality. That's why some web sites will redirect you when you try to right-click and inspect them.

You can try this in the [example page to block inspection](https://codepo8.github.io/web-cheatcodes/inspect.html). When you right-click this one, it redirects you to example.com.

![Always open Developer tools and use the inspect tool to avoid annoying redirects](screencasts/inspecting-instead-of-context.gif)

That's why it is always a safer bet to first [open the Developer tools](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/overview#open-devtools) and pick what you want to change using [the Inspect Tool](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect) instead.

## Changing the display mode - print, dark and light

Operating systems have ways to allow users to customise the experience to their needs. You can choose a dark or a light mode, some users even need a high contrast mode to find their way around and others need to have animations turned off. While it is great that you cn do that on a computer level, sometimes you find that the experience offered by a web product in a certain mode isn't what you want. Instead of having to change your operating system settings, you can simulate these environmental changes using developers tools. Another mode that most web sites should have is a print mode. This one is often much simpler than the full design and thus might be easier to consume.

You can use the Rendering tool of browser developer tools to simulate these different modes. If - for example - the dark mode of a web site is too dark to your liking, you can switch it to light.

You can also see the print version of any web site without printing it.

And you can switch to reduced motion for sites that have too much animation going on.

## Removing annoying overlays and content

## Removing redirections and turning on context menus

Some of the - let's say fringe content - sites on the web annoy users by adding redirections when you click on them before you can click any of the real content. Others disallow right-clicking any of the elements and access the context menu. You can avoid these annoying redirects by checking the Elements tool and remove so called "Event Handlers".







## Taking screenshots

## Downloading images and videos

The Network tool shows you all the network traffic on the site. You can filter the network traffic by type, for example images and media, and click any of the entries to see a preview. You can either right-click the name to open it in a new tab, or right-click the preview to save or copy images. 

This is especially useful with videos that are loaded in annoying players. You can right-click the video name (normally ending in "mp4") and open it in a new tab. This will then feature a full video player that allows you to control and save the video.


## Writing your own scripts to access content

This is a bit more involved, but you can use the Console tool to access the current document on a programmatic level. This doesn't mean you need to be a real developer, but you can use some small commands to access content and get information. Here's a quick walktrough how to do that on a blog post.