# Youtube-ad-skip-block
<b>To skip and block the ADs from youtube page.</b>

<B>What is skip5.js doing ?</B><br>
---> Document Object Model (DOM) is a programming interface for HTML.Documents are modeled using objects, and the model includes not only the structure of a document but also the behavior of a document and the objects of which it is composed of like tag elements with attributes in HTML.<br>
---> Elements responsible for show ads and closing ad in dom tree of youtube are  
    'videoAdUiSkipButton', // Old
    'ytp-ad-skip-button ytp-button', // New
    'ytp-ad-overlay-close-button',// closing button   
---> SO, closing button is triggered by passing button name and event type('click') to firevent funtion.

<B>How to find this objects ?</B><br>
->Selenium is a portable framework for testing web applications. So you can make a test for youtube in selenium IDE and can see which botton is responsible for what actions.<br>

<B>How to install ?</B><br>
---> Download or clone the repo.<br>
---> unzip.<br>
---> open chrome go to extensions.<br>
---> click load unpacked.<br>
---> locate unzip folder.<br>
---> enable extension from extention panel.<br>
---> done enjoy.<br>

This repo is for educational purpose only..

