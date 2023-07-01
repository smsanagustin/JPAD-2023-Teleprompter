import React from "react";
import undraw_conference_speaker_re_1rna from '../assets/images/undraw_conference_speaker_re_1rna.svg'
import undraw_happy_music_g6wc from '../assets/images/undraw_happy_music_g6wc.svg'
import undraw_happy_news_re_tsbd from '../assets/images/undraw_happy_news_re_tsbd.svg'
import undraw_marketing_re_7f1g from '../assets/images/undraw_marketing_re_7f1g.svg'
import undraw_presentation_re_sxof from '../assets/images/undraw_presentation_re_sxof.svg'
import undraw_candidate_ubwv from '../assets/images/undraw_candidate_ubwv.svg'
import undraw_fall_thyk from '../assets/images/undraw_fall_thyk.svg'
import undraw_conversation_re_c26v from '../assets/images/undraw_conversation_re_c26v.svg'
import undraw_the_world_is_mine_re_j5cr from '../assets/images/undraw_the_world_is_mine_re_j5cr.svg'
import undraw_tutorial_video_re_wepc from '../assets/images/undraw_tutorial_video_re_wepc.svg'



const TAB_NAMES = {
    'write': 'Write',
    'teleprompter': 'Teleprompter',
    'defaultval': "Write"
}

const MODAL = {
    'writeWithAi': 'writeWithAi',
    'hidden': 'hidden',
}

const MODES = {
    'timed': "Timed",
    'manual': "Manual",
    'defaultval': 'Timed',
};

const FONT_SIZE_LIMITS = {
    min: 12,
    max: 1000,
    'defaultval': 80
};

const SCROLL_SPEED_LIMITS = {
    min: 1,
    max: 100,
    'defaultval': 10
};

const FONTS = {
    // insert font objects

    'defaultval': {name: '', src: ''}
};

const COLORS = {
    // insert color objects

    'BLACK': {name: '', src: ''}
};

const AI_PROMPT_GENERAL_INSTRUCTIONS = {
    'prefix': 'You will take a message from the user and convert that message into a writing style below. Implement the best practices in writing. Don\'t reply anything else just the converted writing style.\nWriting stile:\n\n',
    'postfix': '',
}

const AI_REWRITE_OPTIONS = {
    'poem': {
        title: 'Poem',
        image: <img src = {undraw_conference_speaker_re_1rna}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            'Poem.\n\n' + 
            'A poem is a form of creative writing that uses language in a rhythmic and aesthetic way, often with rhyme, imagery, metaphor and other literary devices. To write a poem, you should:\n' +
            '- Choose a theme or topic for your poem\n' +
            '- Decide on the tone and mood of your poem\n' +
            '- Pick a form or structure for your poem, such as free verse, sonnet, haiku, etc.\n' +
            '- Use words that convey your message and emotions\n' +
            '- Experiment with sound, rhythm and rhyme schemes\n' +
            '- Use figurative language, such as similes, metaphors, personification, etc.\n' +
            '- Revise and polish your poem\n' +
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'conversational': {
        title: 'Conversational',
        image: <img src = {undraw_conversation_re_c26v}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            'Conversational.\n\n' + 
            'A conversational way of delivery is a casual and informal style of writing that mimics a natural dialogue between two or more people. To write in a conversational way, you should:\n' + 
            '- Use personal pronouns, such as I, you, we, etc.\n' + 
            '- Use contractions, such as don’t, can’t, won’t, etc.\n' +
            '- Use colloquialisms, slang and idioms, such as awesome, cool, by the way, etc.\n' +
            '- Use questions and exclamations to engage the reader\n' +
            '- Use humor and emotion to show your personality\n' +
            '- Vary your sentence length and structure\n' +
            '- Avoid jargon, technical terms and complex words\n' +
    
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'newsAnchor': {
        title: 'News Anchor',
        image: <img src = {undraw_tutorial_video_re_wepc}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            'News Anchor.\n\n' + 
            'A news anchor way of delivery is a formal and objective style of writing that reports the facts and events of a story. To write like a news anchor, you should:\n' + 
            '- Use the third-person point of view and avoid personal opinions\n' +
            '- Use clear and concise language and avoid unnecessary details\n' +
            '- Use the inverted pyramid structure, which means starting with the most important information and then adding more details\n' +
            '- Use the five Ws and one H, which are who, what, when, where, why and how\n' +
            '- Use direct quotes from credible sources to support your claims\n' +
            '- Use transitions to connect your sentences and paragraphs\n' +
            
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'funny': {
        title: 'Funny',
        image: <img src = {undraw_happy_music_g6wc}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
            'Funny. \n\n' + 
            'A funny way of delivery is a humorous and entertaining style of writing that aims to make the reader laugh or smile. To write in a funny way, you should:\n' + 
            '- Use jokes, puns, irony, sarcasm and exaggeration\n' +
            '- Use unexpected twists and surprises\n' +
            '- Use references to pop culture, current events or personal experiences\n' +
            '- Use a playful and witty tone\n' +
            '- Use self-deprecation and mock your own flaws\n' +
            '- Use hyperbole and absurdity\n' +
            
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'promotional': {
        title: 'Promotional',
        image: <img src = {undraw_happy_news_re_tsbd}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
        'Promotional. \n\n' + 
        'A promotional way of delivery is a persuasive and appealing style of writing that aims to convince the reader to buy a product or service. To write in a promotional way, you should:\n' + 
        '- Use catchy and memorable headlines and slogans\n' +
        '- Use positive and emotional language\n' +
        '- Use testimonials, reviews and statistics to back up your claims\n' +
        '- Use a clear and compelling call to action\n' +
        '- Use urgency and scarcity to create a sense of FOMO (fear of missing out)\n' +
        '- Use discounts, offers and guarantees to entice the reader\n' +
        
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'storytelling': {
        title: 'Storytelling',
        image: <img src = {undraw_fall_thyk}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
        'Storytelling. \n\n' + 
        'A storytelling way of delivery is a narrative and engaging style of writing that aims to entertain and captivate the reader. To write in a storytelling way, you should:\n' + 
        '- Use the elements of a story, such as characters, setting, plot, conflict and resolution\n' +
        '- Use dialogue, description and action to show rather than tell\n' +
        '- Use a hook to grab the reader’s attention from the start\n' +
        '- Use suspense, mystery and surprise to keep the reader interested\n' +
        '- Use a climax and a resolution to end the story satisfyingly\n' +
        '- Use a consistent point of view and tense\n' +
        
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'informative': {
        title: 'Informative',
        image: <img src = {undraw_presentation_re_sxof}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
        'Informative. \n\n' + 
        'An informative way of delivery is an educational and factual style of writing that aims to inform and explain something to the reader. To write in an informative way, you should:\n' + 
        '- Use the five Ws and one H, which are who, what, when, where, why and how\n' +
        '- Use clear and concise language and avoid unnecessary details\n' +
        '- Use examples, illustrations and diagrams to clarify your points\n' +
        '- Use headings, subheadings and bullet points to organize your information\n' +
        '- Use a logical and coherent structure, such as introduction, body and conclusion\n' +
        '- Use citations and references to acknowledge your sources\n' +
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'inspirational': {
        title: 'Inspirational',
        image: <img src = {undraw_the_world_is_mine_re_j5cr}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
        'Inspirational. \n\n' + 
        'An inspirational way of delivery is a motivational and uplifting style of writing that aims to inspire and encourage the reader. To write in an inspirational way, you should:\n' + 
        '- Use positive and emotional language\n' +
        '- Use stories, anecdotes and quotes to illustrate your points\n' +
        '- Use rhetorical questions and challenges to engage the reader\n' +
        '- Use a clear and compelling call to action\n' +
        '- Use repetition and parallelism to emphasize your message\n' +
        '- Use a confident and passionate tone\n' +
        
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'analytical': {
        title: 'Analytical',
        image: <img src = {undraw_marketing_re_7f1g}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
        'Analytical. \n\n' + 
        'An analytical way of delivery is a logical and critical style of writing that aims to analyze and evaluate something to the reader. To write in an analytical way, you should:\n' + 
        '- Use the four Cs, which are claim, evidence, counterclaim and rebuttal\n' +
        '- Use clear and concise language and avoid unnecessary details\n' +
        '- Use a thesis statement to state your main argument or position\n' +
        '- Use supporting paragraphs to explain and justify your claims with evidence\n' +
        '- Use counterarguments to acknowledge and refute opposing views\n' +
        '- Use a conclusion to summarize your main points and restate your thesis\n' +
        
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
    'persuasive': {
        title: 'Persuasive',
        image: <img src = {undraw_candidate_ubwv}/>,
        description: '',
        prompt: AI_PROMPT_GENERAL_INSTRUCTIONS.prefix + 
        'Persuasive. \n\n' + 
        'A persuasive way of delivery is a convincing and influential style of writing that aims to persuade the reader to agree with a certain point of view or take a certain action. To write in a persuasive way, you should:\n' + 
        '- Use the four Ps, which are position, purpose, audience and tone\n' +
        '- Use clear and concise language and avoid unnecessary details\n' +
        '- Use a thesis statement to state your main argument or position\n' +
        '- Use supporting paragraphs to explain and justify your claims with evidence\n' +
        '- Use counterarguments to acknowledge and refute opposing views\n' +
        '- Use a conclusion to summarize your main points and restate your thesis\n' +
        
            AI_PROMPT_GENERAL_INSTRUCTIONS.postfix
    },
}

export {TAB_NAMES, MODAL, MODES, FONT_SIZE_LIMITS, SCROLL_SPEED_LIMITS, FONTS, COLORS, AI_REWRITE_OPTIONS}