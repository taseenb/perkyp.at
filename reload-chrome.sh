#!/bin/sh
exec <"$0" || exit; read v; read v; exec /usr/bin/osascript - "$@"; exit
-- the above is some shell trickery that lets us write the rest of
-- the file in plain applescript

-- Usage:
-- For a simple reload and nothing else:
-- # sh reload_chrome.sh
-- For a reload with a delay of 0.5 seconds
-- # sh reload_chrome.sh 0.5
-- For a reload with a delay and activation of a different app after (iTerm in this case):
-- # sh reload_chrome.sh 0.5 iTerm


-- Enable reading argv for commandline arguments
on run argv
    -- If we have arguments, the first will be the delay
    if (count of argv) >= 1 then
        set delayInSeconds to item 1 of argv
    else
        set delayInSeconds to 1
    end if

    tell application "Google Chrome"
        activate
        tell application "System Events"
            tell process "Google Chrome"
                -- A little bit of delay since OS X takes some time to switch applications
                delay delayInSeconds
                keystroke "r" using {command down, shift down}
                delay delayInSeconds
            end tell
        end tell
    end tell
 
    -- If we have 1 or more arguments, the first will be the application to activate after reloading
    if (count of argv) > 1 then
        set targetApp to item 2 of argv
        tell application targetApp to activate
    end if
end run