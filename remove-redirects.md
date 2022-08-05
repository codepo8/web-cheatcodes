# Avoid unwanted redirects

Some of the - let's say fringe content - sites on the web annoy users by adding redirections when you click on them before you can click any of the real content. Basically clicking anywhere will create a new page to pop up. Some use a transparent overlay for that [which you can remove using the Elements tool](overlays.md) but others are sneakier.

If you check the [unwanted redirect demo page](redirect.html) using the Inspect tool you won't find an overlay. 

What developers do to achieve this is to define something called an [Event Handler](https://developer.mozilla.org/docs/Learn/JavaScript/Building_blocks/Events) on the document make it react to any click on it.

To remove event handlers and not have annoying redirects you need to:

1. Go to the [Elements](https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/elements-tool/elements-tool) tool and select a high level element (HTML)
1. Pick `Event Listeners` in the lower panel and look for `click` 
![](screencasts/event-listener-click.png)
1. Click the triangle to expand the information
1. Hit the remove button

![Screencast of removing the contextmenu event listener](screencasts/click-redirect.gif)

Some of the more annoying web products also have `touch`, `keydown`, `keypress` and other events that react to user interaction you might have to remove.

* [Back to list of all cheat codes](README.md)