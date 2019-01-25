<?php
/* Template Name: Video */

get_header(); ?>

<div class="wrap">
	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">



			<?php
			while ( have_posts() ) : the_post();

				echo '<iframe width="560" height="315" src="https://www.youtube.com/embed/70W2aFr5-Xk" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

				the_content();

				echo '<a href="https://www.spidersweb.pl/2019/01/xbox-sledzenie-promieni.html">Nowy Xbox ma rzekomo obsługiwać śledzenie promieni</a>';

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
	</div><!-- #primary -->
</div><!-- .wrap -->

<?php get_footer();
