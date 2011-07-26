=== Sticky Comments ===
Contributors: preda.vlad
Donate link: http://wpideas.net/
Tags: comments, sticky
Requires at least: 3.0
Tested up to: 3.2.1
Stable tag: trunk

This plugin is used to have sticky comments on your blog.

== Description ==

This plugin allows you to do the following:

* Allow you to set comments as Sticky from the comment edit page
* Re-does the order in which the comments are shown, putting the sticky comments at the top. You can also change the order of comments ( newest first / oldest first )
* You can put either a text or an image on the left / right of the sticky post’s author 

== Installation ==

1. Upload `sticky-comments` to the `/wp-content/plugins/` directory
2. Activate the plugin through the 'Plugins' menu in WordPress
3. Find `<?php comments_template() ?>` line from single.php OR loop-single.php 
4. <?php if ( function_exists('sc_comments_template') ) { sc_comments_template(); } else { comments_template(); } ?>


== Frequently Asked Questions ==

= How can I add my own sticky image ? =

You will need to add it in the /wp-content/plugins/sticky-images/images/ folder, and you will see it in the plugins options page


== Changelog ==

= 1.0 =
* Plugin released

== Screenshots ==
1. Sicky comments activated on twenty ten theme
2. Plugin settings page
3. Comment edit page