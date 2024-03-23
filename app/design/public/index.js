'use client'

import dynamic from 'next/dynamic'

/**
 * heroes
 * header
 * banner
 * footer
 * faq
 * logo
 * content
 * team
*/

export const Content = {
    none: dynamic(() => import('./none')),
    simple_centered: dynamic(() => import('./components/marketing/sections/heroes/simple_centered')),
    split_with_screenshot_on_dark: dynamic(() => import('./components/marketing/sections/heroes/split_with_screenshot_on_dark')),
    split_with_screenshot: dynamic(() => import('./components/marketing/sections/heroes/split_with_screenshot')),
    split_with_code_example: dynamic(() => import('./components/marketing/sections/heroes/split_with_code_example')),
    simple_centered_with_background_image: dynamic(() => import('./components/marketing/sections/heroes/simple_centered_with_background_image')),
    with_app_screenshot: dynamic(() => import('./components/marketing/sections/heroes/with_app_screenshot')),
    with_app_screenshot_on_dark: dynamic(() => import('./components/marketing/sections/heroes/with_app_screenshot_on_dark')),
    with_phone_mockup: dynamic(() => import('./components/marketing/sections/heroes/with_phone_mockup')),
    split_with_image: dynamic(() => import('./components/marketing/sections/heroes/split_with_image')),
    with_angled_image_on_right: dynamic(() => import('./components/marketing/sections/heroes/with_angled_image_on_right')),
    with_image_tiles: dynamic(() => import('./components/marketing/sections/heroes/with_image_tiles')),
    with_offset_image: dynamic(() => import('./components/marketing/sections/heroes/with_offset_image')),

    with_centered_logo: dynamic(() => import('./components/marketing/elements/headers/with_centered_logo')),
    with_right_aligned_nav: dynamic(() => import('./components/marketing/elements/headers/with_right_aligned_nav')),
    with_left_aligned_nav: dynamic(() => import('./components/marketing/elements/headers/with_left_aligned_nav')),
    with_icons_in_mobile_menu: dynamic(() => import('./components/marketing/elements/headers/with_icons_in_mobile_menu')),
    with_multiple_flyout_menus: dynamic(() => import('./components/marketing/elements/headers/with_multiple_flyout_menus')),
    with_call_to_action: dynamic(() => import('./components/marketing/elements/headers/with_call_to_action')),
    full_width: dynamic(() => import('./components/marketing/elements/headers/full_width')),
    on_dark_background: dynamic(() => import('./components/marketing/elements/headers/on_dark_background')),
    with_full_width_flyout_menu: dynamic(() => import('./components/marketing/elements/headers/with_full_width_flyout_menu')),
    constrained: dynamic(() => import('./components/marketing/elements/headers/constrained')),
    with_stacked_flyout_menu: dynamic(() => import('./components/marketing/elements/headers/with_stacked_flyout_menu')),

    with_button: dynamic(() => import('./components/marketing/elements/banners/with_button')),
    with_button_on_dark: dynamic(() => import('./components/marketing/elements/banners/on_dark')),
    with_background_glow: dynamic(() => import('./components/marketing/elements/banners/with_background_glow')),
    left_aligned: dynamic(() => import('./components/marketing/elements/banners/left_aligned')),
    floating_at_bottom: dynamic(() => import('./components/marketing/elements/banners/floating_at_bottom')),
    floating_at_bottom_centered: dynamic(() => import('./components/marketing/elements/banners/floating_at_bottom_centered')),
    privacy_notice_right_aligned: dynamic(() => import('./components/marketing/elements/banners/privacy_notice_right_aligned')),
    privacy_notice_centered: dynamic(() => import('./components/marketing/elements/banners/privacy_notice_centered')),
    privacy_notice_left_aligned: dynamic(() => import('./components/marketing/elements/banners/privacy_notice_left_aligned')),
    privacy_notice_full_width: dynamic(() => import('./components/marketing/elements/banners/privacy_notice_full_width')),
    bottom_aligned: dynamic(() => import('./components/marketing/elements/banners/bottom_aligned')),
    
    '4_column_simple': dynamic(() => import('./components/marketing/sections/footers/4_column_simple')),
    '4_column_simple_dark': dynamic(() => import('./components/marketing/sections/footers/4_column_simple_dark')),
    '4_column_with_company_mission_on_dark': dynamic(() => import('./components/marketing/sections/footers/4_column_with_company_mission_on_dark')),
    '4_column_with_company_mission': dynamic(() => import('./components/marketing/sections/footers/4_column_with_company_mission')),
    '4_column_with_newsletter_below_dark': dynamic(() => import('./components/marketing/sections/footers/4_column_with_newsletter_below_dark')),
    '4_column_with_newsletter_below': dynamic(() => import('./components/marketing/sections/footers/4_column_with_newsletter_below')),
    '4_column_with_newsletter_dark': dynamic(() => import('./components/marketing/sections/footers/4_column_with_newsletter_dark')),
    '4_column_with_newsletter': dynamic(() => import('./components/marketing/sections/footers/4_column_with_newsletter')),
    fsimple_centered: dynamic(() => import('./components/marketing/sections/footers/simple_centered')),
    social_links_only: dynamic(() => import('./components/marketing/sections/footers/social_links_only')),

    offset_with_supporting_text: dynamic(() => import('./components/marketing/sections/faq-sections/offset_with_supporting_text')),
    centered_accordion: dynamic(() => import('./components/marketing/sections/faq-sections/centered_accordion')),
    centered_accordion_on_dark: dynamic(() => import('./components/marketing/sections/faq-sections/centered_accordion_on_dark')),
    side_by_side: dynamic(() => import('./components/marketing/sections/faq-sections/side_by_side')),
    three_columns: dynamic(() => import('./components/marketing/sections/faq-sections/three_columns')),
    two_columns_on_dark: dynamic(() => import('./components/marketing/sections/faq-sections/two_columns_on_dark')),
    three_columns_with_centered_introduction: dynamic(() => import('./components/marketing/sections/faq-sections/three_columns_with_centered_introduction')),
    faq_two_columns_on_dark: dynamic(() => import('./components/marketing/sections/faq-sections/two_columns_on_dark')),
    faq_two_columns_with_centered_introduction: dynamic(() => import('./components/marketing/sections/faq-sections/two_columns_with_centered_introduction')),
    faq_two_columns: dynamic(() => import('./components/marketing/sections/faq-sections/two_columns')),

    simple_with_heading: dynamic(() => import('./components/marketing/sections/logo-clouds/simple_with_heading')),
    simple_with_heading_on_dark: dynamic(() => import('./components/marketing/sections/logo-clouds/simple_with_heading_on_dark')),
    simple_with_call_to_action: dynamic(() => import('./components/marketing/sections/logo-clouds/simple_with_call_to_action')),
    simple_with_call_to_action_on_dark: dynamic(() => import('./components/marketing/sections/logo-clouds/simple_with_call_to_action_on_dark')),
    simple_left_aligned: dynamic(() => import('./components/marketing/sections/logo-clouds/simple_left_aligned')),
    simple_left_aligned_on_dark: dynamic(() => import('./components/marketing/sections/logo-clouds/simple_left_aligned_on_dark')),
    split_with_logos_on_right: dynamic(() => import('./components/marketing/sections/logo-clouds/split_with_logos_on_right')),
    split_with_logos_on_right_on_dark: dynamic(() => import('./components/marketing/sections/logo-clouds/split_with_logos_on_right_on_dark')),
    simple: dynamic(() => import('./components/marketing/sections/logo-clouds/simple')),
    simple_on_dark: dynamic(() => import('./components/marketing/sections/logo-clouds/simple_on_dark')),
    grid: dynamic(() => import('./components/marketing/sections/logo-clouds/grid')),
    grid_on_dark: dynamic(() => import('./components/marketing/sections/logo-clouds/grid_on_dark')),

    with_testimonial: dynamic(() => import('./components/marketing/sections/contact-sections/with_testimonial')),
    content_split_with_image: dynamic(() => import('./components/marketing/sections/contact-sections/split_with_image')),
    centered: dynamic(() => import('./components/marketing/sections/contact-sections/centered')),
    side_by_side_grid: dynamic(() => import('./components/marketing/sections/contact-sections/side_by_side_grid')),
    split_with_pattern_on_dark: dynamic(() => import('./components/marketing/sections/contact-sections/split_with_pattern_on_dark')),
    split_with_pattern: dynamic(() => import('./components/marketing/sections/contact-sections/split_with_pattern')),
    simple_four_column: dynamic(() => import('./components/marketing/sections/contact-sections/simple_four_column')),
    content_simple_centered: dynamic(() => import('./components/marketing/sections/contact-sections/simple_centered')),
   
    with_small_images: dynamic(() => import('./components/marketing/sections/team-sections/with_small_images')),

    
}