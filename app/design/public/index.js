'use client'

import dynamic from 'next/dynamic'

/**
 * heroes
 * 
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
}