import $ from 'jquery';
import 'jquery-ui/ui/widgets/tabs';
import 'jquery-ui/ui/widgets/tooltip';

$(window).on('load', () => {
  $('#tabs').tabs({ active: 0 });
  $( document ).tooltip({
		position: { my: "left+15 center", at: "right center" }
	});

  $('.js-experience-button').on('click', () => {
    $('.js-experience-button').toggle();
    $('.js-experience-hidden').slideToggle('slow');
  });

  $('.js-skills-button').on('click', () => {
    $('.js-skills-button').toggle();
    $('.js-skills-hidden').slideToggle('slow');
  });

  $('.js-my-contacts').on('click', () => {
    $('#footer__contacts').get(0).scrollIntoView({ behavior: 'smooth' });
  });

  window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 165) {
      $('body').addClass('header-sticky');
    } else {
      $('body').removeClass('header-sticky');
    }
  });
});
