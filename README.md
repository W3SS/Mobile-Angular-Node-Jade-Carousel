Mobile-Angular-Node-Jade-Carousel
Nilesh Shah eshnil2000@gmail.com
=================================

A touch optiized, mobile first site using Responsive design, Angular MVC routing &amp; picture Carousel, a FullCalendar, Node/Express-Jade serving/adding Blog from remote mongodb

See a demo of this site hosted on Amazon AWS@:
http://codenovator.net. 

This site leverages several technologies:
1. It uses Angular as an MVC framework for a Single Page App. The page is responsive: The navigation bar will adapt depending on the device type (laptop, mobile, etc).

2. The basic navagation bar uses Bootstrap css, and Font Asewome libraries for the fonts. Some custom css is included.

2. It utilizes an Angular Carousel implementation from : 
http://blog.revolunet.com/angular-carousel/

3. It uses a Jquery calendar, from http://arshaw.com/fullcalendar/.

4. The contents of the calendar are dynamically generated from a Node.js server.

5. There is blog functionality, implemented using Node.js. The blog pages are served up dynamically usuing Express, views are generated using Jade.

6. The blogs are stored in a mongodb database. Note: in order to get the site functioning with blog, you need to set up a mongodb.

7. A very basic login functionality is implemented (most features disabled, only allowing admin login to edit the blogs).

8. The main page uses the presentation framework reveal.js to create a 3D effect for the pictures. This runs pretty slow on mobile devices, so add javascript code to route users away from this page if mobile device is detected. The site xpressionz.tk implements this capability.

9. Facebook, twitter Like features implemented using AddThis code.

10. Responsive Google maps API for location/ directions.

11. Disabled--Bitcoin payment button integration with Coinbase API.

Enjoy and feel free to fork this repo/ add/ improve it. Send me a note with your enhancements.

To Do:
1. Comment code.

2. Add detailed tutorial.

3. Add full login functionality.

4. Add full blog editing capability with ability to add pictures, comments etc.

5. Make calendar editable, responsive.

6. Add registration capability.

---

